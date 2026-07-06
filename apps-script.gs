var SPREADSHEET_ID = "1OZGTdNwoN3S73hebXC-pjJ7QU5Tn4emTkEY7pQLvvJc";
var SESSION_TTL_SECONDS = 21600;

function doGet() {
  return jsonResponse({ ok: true, service: "DONGMYUNGSTAGRAM" });
}

function doPost(event) {
  var body = JSON.parse((event.postData && event.postData.contents) || "{}");

  if (body.type === "login") {
    return handleLogin_(body.payload || {});
  }

  var user = getUserByToken_(body.token);
  if (!user) {
    return jsonResponse({ ok: false, error: "AUTH_REQUIRED" });
  }

  if (body.type === "getData") {
    return jsonResponse({ ok: true, data: buildClientData_(user) });
  }

  if (body.type === "likeChanged") {
    upsertLike_(body.payload || {}, user);
    return jsonResponse({ ok: true, data: buildClientData_(user) });
  }

  if (body.type === "commentAdded") {
    appendComment_(body.payload || {}, user);
    return jsonResponse({ ok: true, data: buildClientData_(user) });
  }

  return jsonResponse({ ok: false, error: "UNKNOWN_EVENT" });
}

function handleLogin_(payload) {
  var displayName = String(payload.displayName || "").trim();
  var loginCode = String(payload.loginCode || "").trim();
  var users = rowsToObjects_("Users");
  var user = null;

  for (var i = 0; i < users.length; i += 1) {
    if (
      String(users[i].displayName).trim() === displayName &&
      String(users[i].loginCode).trim() === loginCode
    ) {
      user = users[i];
      break;
    }
  }

  if (!user) {
    return jsonResponse({ ok: false, error: "INVALID_LOGIN" });
  }

  var token = Utilities.getUuid();
  CacheService.getScriptCache().put(
    "session:" + token,
    JSON.stringify({ userId: user.userId }),
    SESSION_TTL_SECONDS
  );

  return jsonResponse({
    ok: true,
    token: token,
    user: sanitizeUser_(user),
    data: buildClientData_(user)
  });
}

function getUserByToken_(token) {
  if (!token) return null;

  var cached = CacheService.getScriptCache().get("session:" + token);
  if (!cached) return null;

  var session = JSON.parse(cached);
  var users = rowsToObjects_("Users");
  for (var i = 0; i < users.length; i += 1) {
    if (users[i].userId === session.userId) {
      return users[i];
    }
  }
  return null;
}

function buildClientData_(viewer) {
  var users = rowsToObjects_("Users");
  var posts = rowsToObjects_("Posts");
  var cards = rowsToObjects_("Cards");
  var likes = rowsToObjects_("Likes");
  var comments = rowsToObjects_("Comments");
  var publicLikes = [];

  for (var i = 0; i < likes.length; i += 1) {
    var like = likes[i];
    if (like.status === "active") {
      publicLikes.push({
        likeId: like.userId === viewer.userId ? like.likeId : "active-" + i,
        postId: like.postId,
        userId: like.userId === viewer.userId ? viewer.userId : "",
        likedAt: like.likedAt,
        status: "active",
        cancelledAt: ""
      });
    } else if (like.userId === viewer.userId) {
      publicLikes.push({
        likeId: like.likeId,
        postId: like.postId,
        userId: viewer.userId,
        likedAt: like.likedAt,
        status: "cancelled",
        cancelledAt: like.cancelledAt
      });
    }
  }

  return {
    user: sanitizeUser_(viewer),
    users: sanitizeUsers_(users),
    posts: posts,
    cards: cards,
    likes: publicLikes,
    comments: comments,
    teacherLikeAudit: viewer.role === "teacher" ? buildTeacherLikeAudit_(likes, posts, users) : []
  };
}

function sanitizeUsers_(users) {
  var result = [];
  for (var i = 0; i < users.length; i += 1) {
    result.push(sanitizeUser_(users[i]));
  }
  return result;
}

function buildTeacherLikeAudit_(likes, posts, users) {
  var result = [];
  for (var i = 0; i < likes.length; i += 1) {
    var like = likes[i];
    var post = findById_(posts, "postId", like.postId) || {};
    var user = findById_(users, "userId", like.userId) || {};
    result.push({
      likeId: like.likeId,
      postId: like.postId,
      postTitle: post.title || like.postId,
      userId: like.userId,
      displayName: user.displayName || like.userId,
      role: user.role || "",
      status: like.status,
      likedAt: like.likedAt,
      cancelledAt: like.cancelledAt
    });
  }
  return result;
}

function findById_(items, key, value) {
  for (var i = 0; i < items.length; i += 1) {
    if (items[i][key] === value) {
      return items[i];
    }
  }
  return null;
}

function upsertLike_(like, user) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Likes");
  var lastRow = Math.max(sheet.getLastRow(), 1);
  var values = lastRow > 1 ? sheet.getRange(2, 1, lastRow - 1, 6).getValues() : [];
  var rowIndex = -1;

  for (var i = 0; i < values.length; i += 1) {
    if (values[i][1] === like.postId && values[i][2] === user.userId) {
      rowIndex = i;
      break;
    }
  }

  var row = [
    like.likeId || "l" + Date.now(),
    like.postId,
    user.userId,
    toDateOrBlank_(like.likedAt),
    like.status,
    toDateOrBlank_(like.cancelledAt)
  ];

  if (rowIndex >= 0) {
    sheet.getRange(rowIndex + 2, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
}

function appendComment_(comment, user) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Comments");
  sheet.appendRow([
    comment.commentId || "cm" + Date.now(),
    comment.postId,
    user.userId,
    comment.commentText,
    toDateOrBlank_(comment.createdAt)
  ]);
}

function rowsToObjects_(sheetName) {
  var sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);
  var values = sheet.getDataRange().getValues();
  var headers = values.shift();
  var result = [];

  for (var rowIndex = 0; rowIndex < values.length; rowIndex += 1) {
    var row = values[rowIndex];
    var hasValue = false;
    for (var cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
      if (row[cellIndex] !== "") {
        hasValue = true;
        break;
      }
    }
    if (!hasValue) continue;

    var item = {};
    for (var headerIndex = 0; headerIndex < headers.length; headerIndex += 1) {
      var value = row[headerIndex];
      item[headers[headerIndex]] = value instanceof Date ? value.toISOString() : value;
    }
    result.push(item);
  }

  return result;
}

function sanitizeUser_(user) {
  return {
    userId: user.userId,
    role: user.role,
    displayName: user.displayName,
    className: user.className,
    avatarColor: user.avatarColor
  };
}

function toDateOrBlank_(value) {
  return value ? new Date(value) : "";
}

function jsonResponse(value) {
  return ContentService
    .createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
