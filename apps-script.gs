const SPREADSHEET_ID = "1OZGTdNwoN3S73hebXC-pjJ7QU5Tn4emTkEY7pQLvvJc";
const SESSION_TTL_SECONDS = 21600;

function doGet() {
  return jsonResponse({ ok: true, service: "Class Explore Cards" });
}

function doPost(event) {
  const body = JSON.parse((event.postData && event.postData.contents) || "{}");

  if (body.type === "login") {
    return handleLogin_(body.payload || {});
  }

  const user = getUserByToken_(body.token);
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
  const displayName = String(payload.displayName || "").trim();
  const loginCode = String(payload.loginCode || "").trim();
  const user = rowsToObjects_("Users").find((item) => (
    String(item.displayName).trim() === displayName &&
    String(item.loginCode).trim() === loginCode
  ));

  if (!user) {
    return jsonResponse({ ok: false, error: "INVALID_LOGIN" });
  }

  const token = Utilities.getUuid();
  CacheService.getScriptCache().put(
    `session:${token}`,
    JSON.stringify({ userId: user.userId }),
    SESSION_TTL_SECONDS
  );

  return jsonResponse({
    ok: true,
    token,
    user: sanitizeUser_(user),
    data: buildClientData_(user),
  });
}

function getUserByToken_(token) {
  if (!token) return null;
  const cached = CacheService.getScriptCache().get(`session:${token}`);
  if (!cached) return null;
  const session = JSON.parse(cached);
  return rowsToObjects_("Users").find((user) => user.userId === session.userId) || null;
}

function buildClientData_(viewer) {
  const users = rowsToObjects_("Users");
  const posts = rowsToObjects_("Posts");
  const cards = rowsToObjects_("Cards");
  const likes = rowsToObjects_("Likes");
  const comments = rowsToObjects_("Comments");

  const publicLikes = [];
  likes.forEach((like, index) => {
    if (like.status === "active") {
      publicLikes.push({
        likeId: like.userId === viewer.userId ? like.likeId : `active-${index}`,
        postId: like.postId,
        userId: like.userId === viewer.userId ? viewer.userId : "",
        likedAt: like.likedAt,
        status: "active",
        cancelledAt: "",
      });
    } else if (like.userId === viewer.userId) {
      publicLikes.push({
        likeId: like.likeId,
        postId: like.postId,
        userId: viewer.userId,
        likedAt: like.likedAt,
        status: "cancelled",
        cancelledAt: like.cancelledAt,
      });
    }
  });

  return {
    user: sanitizeUser_(viewer),
    users: users.map(sanitizeUser_),
    posts,
    cards,
    likes: publicLikes,
    comments,
    teacherLikeAudit: viewer.role === "teacher" ? buildTeacherLikeAudit_(likes, posts, users) : [],
  };
}

function buildTeacherLikeAudit_(likes, posts, users) {
  return likes.map((like) => {
    const post = posts.find((item) => item.postId === like.postId) || {};
    const user = users.find((item) => item.userId === like.userId) || {};
    return {
      likeId: like.likeId,
      postId: like.postId,
      postTitle: post.title || like.postId,
      userId: like.userId,
      displayName: user.displayName || like.userId,
      role: user.role || "",
      status: like.status,
      likedAt: like.likedAt,
      cancelledAt: like.cancelledAt,
    };
  });
}

function upsertLike_(like, user) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Likes");
  const lastRow = Math.max(sheet.getLastRow(), 1);
  const values = lastRow > 1 ? sheet.getRange(2, 1, lastRow - 1, 6).getValues() : [];
  const rowIndex = values.findIndex((row) => row[1] === like.postId && row[2] === user.userId);
  const row = [
    like.likeId || `l${Date.now()}`,
    like.postId,
    user.userId,
    toDateOrBlank_(like.likedAt),
    like.status,
    toDateOrBlank_(like.cancelledAt),
  ];

  if (rowIndex >= 0) {
    sheet.getRange(rowIndex + 2, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
}

function appendComment_(comment, user) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName("Comments");
  sheet.appendRow([
    comment.commentId || `cm${Date.now()}`,
    comment.postId,
    user.userId,
    comment.commentText,
    toDateOrBlank_(comment.createdAt),
  ]);
}

function rowsToObjects_(sheetName) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);
  const values = sheet.getDataRange().getValues();
  const headers = values.shift();
  return values
    .filter((row) => row.some((cell) => cell !== ""))
    .map((row) => {
      const item = {};
      headers.forEach((header, index) => {
        const value = row[index];
        item[header] = value instanceof Date ? value.toISOString() : value;
      });
      return item;
    });
}

function sanitizeUser_(user) {
  return {
    userId: user.userId,
    role: user.role,
    displayName: user.displayName,
    className: user.className,
    avatarColor: user.avatarColor,
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
