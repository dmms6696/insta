const SHEET_CONFIG = {
  spreadsheetId: "1OZGTdNwoN3S73hebXC-pjJ7QU5Tn4emTkEY7pQLvvJc",
  spreadsheetUrl: "https://docs.google.com/spreadsheets/d/1OZGTdNwoN3S73hebXC-pjJ7QU5Tn4emTkEY7pQLvvJc/edit",
  appsScriptUrl: "https://script.google.com/macros/s/AKfycbz3mYxuTn24E3dqFqYO_xqUWmmF7Y3LR6QZjkVHOM0PDFvSsD8lHPc6jakPIW_xOVQ/exec",
};

const seedData = {
  users: [
    { userId: "t001", role: "teacher", displayName: "김하늘 선생님", loginCode: "teacher123", className: "3-2", avatarColor: "#2563EB" },
    { userId: "s001", role: "student", displayName: "민서", loginCode: "1111", className: "3-2", avatarColor: "#EF4444" },
    { userId: "s002", role: "student", displayName: "도윤", loginCode: "2222", className: "3-2", avatarColor: "#F59E0B" },
    { userId: "s003", role: "student", displayName: "서연", loginCode: "3333", className: "3-2", avatarColor: "#10B981" },
    { userId: "s004", role: "student", displayName: "지호", loginCode: "4444", className: "3-2", avatarColor: "#8B5CF6" },
    { userId: "s005", role: "student", displayName: "하린", loginCode: "5555", className: "3-2", avatarColor: "#0EA5E9" },
  ],
  posts: [
    { postId: "p001", title: "우리 반 아침 루틴", category: "학급 생활", authorName: "김하늘 선생님", thumbnailLabel: "아침", coverColor: "#F97316", createdAt: "2026-07-01T09:00:00+09:00", visibility: "class", sortOrder: 1 },
    { postId: "p002", title: "과학 실험 안전 약속", category: "과학", authorName: "김하늘 선생님", thumbnailLabel: "실험", coverColor: "#14B8A6", createdAt: "2026-07-02T10:30:00+09:00", visibility: "class", sortOrder: 2 },
    { postId: "p003", title: "친구에게 댓글 달기 예절", category: "디지털 시민성", authorName: "김하늘 선생님", thumbnailLabel: "댓글", coverColor: "#6366F1", createdAt: "2026-07-03T08:40:00+09:00", visibility: "class", sortOrder: 3 },
    { postId: "p004", title: "이번 주 독서 미션", category: "독서", authorName: "김하늘 선생님", thumbnailLabel: "독서", coverColor: "#EC4899", createdAt: "2026-07-04T11:15:00+09:00", visibility: "class", sortOrder: 4 },
    { postId: "p005", title: "모둠 활동 역할 카드", category: "협력", authorName: "김하늘 선생님", thumbnailLabel: "모둠", coverColor: "#84CC16", createdAt: "2026-07-05T13:20:00+09:00", visibility: "class", sortOrder: 5 },
    { postId: "p006", title: "수학 풀이 공유 방법", category: "수학", authorName: "김하늘 선생님", thumbnailLabel: "수학", coverColor: "#06B6D4", createdAt: "2026-07-06T09:20:00+09:00", visibility: "class", sortOrder: 6 },
  ],
  cards: [
    {"cardId":"c001","postId":"p001","slideOrder":1,"imageUrl":"cards/p001-01.png","imageAlt":"Morning Check test card news image"},
    {"cardId":"c002","postId":"p001","slideOrder":2,"imageUrl":"cards/p001-02.png","imageAlt":"Desk Ready test card news image"},
    {"cardId":"c003","postId":"p001","slideOrder":3,"imageUrl":"cards/p001-03.png","imageAlt":"Question Time test card news image"},
    {"cardId":"c004","postId":"p001","slideOrder":4,"imageUrl":"cards/p001-04.png","imageAlt":"Fourth test card news image"},
    {"cardId":"c005","postId":"p001","slideOrder":5,"imageUrl":"cards/p001-05.png","imageAlt":"Fifth test card news image"},
    {"cardId":"c006","postId":"p002","slideOrder":1,"imageUrl":"cards/p002-01.png","imageAlt":"Safety First test card news image"},
    {"cardId":"c007","postId":"p002","slideOrder":2,"imageUrl":"cards/p002-02.png","imageAlt":"Observe test card news image"},
    {"cardId":"c008","postId":"p002","slideOrder":3,"imageUrl":"cards/p002-03.png","imageAlt":"Record test card news image"},
  ],

  likes: [
    { likeId: "l001", postId: "p001", userId: "s001", likedAt: "2026-07-06T09:10:00+09:00", status: "active", cancelledAt: "" },
    { likeId: "l002", postId: "p001", userId: "s002", likedAt: "2026-07-06T09:12:00+09:00", status: "active", cancelledAt: "" },
    { likeId: "l003", postId: "p002", userId: "s003", likedAt: "2026-07-06T09:16:00+09:00", status: "active", cancelledAt: "" },
    { likeId: "l004", postId: "p003", userId: "s001", likedAt: "2026-07-06T09:21:00+09:00", status: "cancelled", cancelledAt: "2026-07-06T09:25:00+09:00" },
    { likeId: "l005", postId: "p003", userId: "s004", likedAt: "2026-07-06T09:30:00+09:00", status: "active", cancelledAt: "" },
    { likeId: "l006", postId: "p004", userId: "s005", likedAt: "2026-07-06T09:34:00+09:00", status: "active", cancelledAt: "" },
    { likeId: "l007", postId: "p005", userId: "s002", likedAt: "2026-07-06T09:37:00+09:00", status: "active", cancelledAt: "" },
    { likeId: "l008", postId: "p006", userId: "s003", likedAt: "2026-07-06T09:42:00+09:00", status: "active", cancelledAt: "" },
  ],
  comments: [
    { commentId: "cm001", postId: "p001", userId: "s001", commentText: "아침 질문 쓰는 시간이 좋아요.", createdAt: "2026-07-06T09:20:00+09:00" },
    { commentId: "cm002", postId: "p002", userId: "s003", commentText: "실험 전에 장갑부터 확인할게요.", createdAt: "2026-07-06T09:27:00+09:00" },
    { commentId: "cm003", postId: "p003", userId: "s004", commentText: "댓글은 칭찬부터 쓰는 걸 기억할게요.", createdAt: "2026-07-06T09:33:00+09:00" },
    { commentId: "cm004", postId: "p004", userId: "s005", commentText: "이번 주 책 추천도 보고 싶어요.", createdAt: "2026-07-06T09:39:00+09:00" },
    { commentId: "cm005", postId: "p006", userId: "s002", commentText: "풀이 과정을 사진처럼 차근차근 쓰면 좋겠어요.", createdAt: "2026-07-06T09:44:00+09:00" },
  ],
};

const storageKey = "class-explore-cards-state-v1";

let state = loadState();
let currentUser = null;
let remoteSession = null;
let selectedPostId = null;
let slideIndex = 0;
let remoteHydrated = false;
let pendingAction = null;
let swipeState = null;

const app = document.querySelector("#app");

function cloneSeed() {
  return JSON.parse(JSON.stringify(seedData));
}

function mergeRowsById(seedRows, savedRows, idKey) {
  if (!Array.isArray(savedRows)) return seedRows;
  const savedById = new Map(savedRows.map((row) => [row[idKey], row]));
  const mergedRows = seedRows.map((seedRow) => {
    const savedRow = savedById.get(seedRow[idKey]);
    if (!savedRow) return seedRow;
    const merged = { ...seedRow };
    Object.entries(savedRow).forEach(([key, value]) => {
      if (value !== undefined && value !== "") {
        merged[key] = value;
      }
    });
    return merged;
  });

  savedRows.forEach((savedRow) => {
    if (!seedRows.some((seedRow) => seedRow[idKey] === savedRow[idKey])) {
      mergedRows.push(savedRow);
    }
  });

  return mergedRows;
}

function loadState() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return cloneSeed();
  try {
    const parsed = JSON.parse(saved);
    const seed = cloneSeed();
    return {
      ...seed,
      ...parsed,
      users: mergeRowsById(seed.users, parsed.users, "userId"),
      posts: mergeRowsById(seed.posts, parsed.posts, "postId"),
      cards: mergeRowsById(seed.cards, parsed.cards, "cardId"),
    };
  } catch {
    return cloneSeed();
  }
}

function saveState() {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

async function sendSheetEvent(type, payload) {
  if (!SHEET_CONFIG.appsScriptUrl) return;
  try {
    const response = await fetch(SHEET_CONFIG.appsScriptUrl, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        type,
        token: remoteSession?.token || "",
        payload,
        spreadsheetId: SHEET_CONFIG.spreadsheetId,
      }),
    });
    const result = await response.json().catch(() => null);
    if (result?.data) {
      applyRemoteData(result.data);
    }
    return result;
  } catch (error) {
    console.warn("Sheet sync skipped:", error);
    return null;
  }
}

async function hydrateFromSheet() {
  if (!SHEET_CONFIG.appsScriptUrl || !remoteSession || remoteHydrated) return;
  remoteHydrated = true;
  await sendSheetEvent("getData", {});
  renderApp();
}

function applyRemoteData(data) {
  state = {
    ...state,
    users: data.users || state.users,
    posts: data.posts || state.posts,
    cards: data.cards || state.cards,
    likes: data.likes || state.likes,
    comments: data.comments || state.comments,
    teacherLikeAudit: data.teacherLikeAudit || [],
  };
  if (data.user && currentUser) {
    currentUser = { ...currentUser, ...data.user };
  }
  saveState();
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function iconSearch() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <circle cx="11" cy="11" r="7"></circle>
      <path d="m20 20-3.5-3.5"></path>
    </svg>
  `;
}

function iconHeart(filled = false) {
  return `
    <svg viewBox="0 0 24 24" fill="${filled ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"></path>
    </svg>
  `;
}

function iconChevron(direction) {
  const path = direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6";
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="${path}"></path>
    </svg>
  `;
}

function iconClose() {
  return `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>
  `;
}

function userById(userId) {
  return state.users.find((user) => user.userId === userId);
}

function cardsForPost(postId) {
  return state.cards
    .filter((card) => card.postId === postId)
    .sort((a, b) => a.slideOrder - b.slideOrder);
}

function firstCardImageForPost(postId) {
  const card = cardsForPost(postId).find((item) => imageUrlForCard(item));
  return card ? imageUrlForCard(card) : "";
}

function imageUrlForPost(post) {
  return post.thumbnailImageUrl || post.thumbnailUrl || post.imageUrl || firstCardImageForPost(post.postId);
}

function imageUrlForCard(card) {
  if (!card) return "";
  return card.imageUrl || card.imagePath || card.imageFile || card.image || "";
}

function imageAltForCard(card, post) {
  return card.imageAlt || card.altText || post.title || "card news image";
}

function commentsForPost(postId) {
  return state.comments.filter((comment) => comment.postId === postId);
}

function activeLikesForPost(postId) {
  return state.likes.filter((like) => like.postId === postId && like.status === "active");
}

function likeForCurrentUser(postId) {
  if (!currentUser) return null;
  return state.likes.find((like) => like.postId === postId && like.userId === currentUser.userId);
}

function isLikedByCurrentUser(postId) {
  const like = likeForCurrentUser(postId);
  return Boolean(like && like.status === "active");
}

function nowIso() {
  return new Date().toISOString();
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("ko-KR", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function renderLogin() {
  app.innerHTML = `
    <main class="login-screen">
      <section class="login-panel">
        <div class="login-art">
          <div class="brand-mark">D</div>
          <div>
            <h1>DMSTAGRAM</h1>
            <p>동명스타그램</p>
          </div>
        </div>
        <form class="login-form" id="loginForm">
          <div>
            <h2 class="form-title">로그인</h2>
          </div>
          <label class="field">
            <span>이름</span>
            <input name="displayName" autocomplete="username" placeholder="예: 민서" />
          </label>
          <label class="field">
            <span>코드</span>
            <input name="loginCode" autocomplete="current-password" placeholder="예: 1111" />
          </label>
          <button class="primary-btn" type="submit">들어가기</button>
          <p class="login-error" id="loginError"></p>
          <div class="account-grid">
            ${SHEET_CONFIG.appsScriptUrl ? "" : state.users.map((user) => `
              <button class="account-chip" type="button" data-user="${user.userId}" style="--dot:${user.avatarColor}">
                <span class="avatar-dot"></span>
                <span>${escapeHtml(user.displayName)}</span>
              </button>
            `).join("")}
          </div>
        </form>
      </section>
    </main>
  `;

  document.querySelector("#loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    login(String(form.get("displayName") || ""), String(form.get("loginCode") || ""));
  });

  document.querySelectorAll("[data-user]").forEach((button) => {
    button.addEventListener("click", () => {
      const user = state.users.find((item) => item.userId === button.dataset.user);
      if (!user) return;
      currentUser = user;
      renderApp();
    });
  });
}

async function login(name, code) {
  const cleanedName = name.trim();
  const cleanedCode = code.trim();
  const error = document.querySelector("#loginError");

  if (SHEET_CONFIG.appsScriptUrl) {
    error.textContent = "확인 중입니다...";
    const result = await sendSheetEvent("login", {
      displayName: cleanedName,
      loginCode: cleanedCode,
    });
    if (!result?.ok) {
      error.textContent = "이름과 코드를 다시 확인해 주세요.";
      return;
    }
    remoteSession = { token: result.token };
    currentUser = result.user;
    if (result.data) {
      applyRemoteData(result.data);
    }
    remoteHydrated = false;
    renderApp();
    return;
  }

  const user = state.users.find((item) => item.displayName === cleanedName && item.loginCode === cleanedCode);
  if (!user) {
    document.querySelector("#loginError").textContent = "이름과 코드를 다시 확인해 주세요.";
    return;
  }
  currentUser = user;
  renderApp();
}

function renderApp() {
  const posts = [...state.posts]
    .filter((post) => imageUrlForPost(post))
    .sort((a, b) => a.sortOrder - b.sortOrder);
  app.innerHTML = `
    <div class="app-shell">
      <header class="topbar">
        <div class="topbar-title">
          <div class="search-icon">${iconSearch()}</div>
          <div>
            <h1>탐색</h1>
            <p>${escapeHtml(currentUser.className)} · ${escapeHtml(currentUser.displayName)}</p>
          </div>
        </div>
        <div class="topbar-actions">
          <span class="role-pill">
            <span class="avatar-dot" style="--dot:${currentUser.avatarColor}"></span>
            ${currentUser.role === "teacher" ? "교사" : "학생"}
          </span>
          <button class="ghost-btn" id="logoutButton" type="button" ${pendingAction ? "disabled" : ""}>로그아웃</button>
        </div>
      </header>
      <main class="main-area">
        <div class="toolbar">
          <div>
            <h2>오늘의 게시물</h2>
            <small>${posts.length}개 게시물</small>
          </div>
          ${currentUser.role === "teacher" ? `<a class="ghost-btn" href="${SHEET_CONFIG.spreadsheetUrl}" target="_blank" rel="noreferrer">Google Sheet</a>` : ""}
        </div>
        <section class="explore-grid">
          ${posts.map(renderPostTile).join("")}
        </section>
        ${currentUser.role === "teacher" ? renderTeacherPanel() : ""}
      </main>
      ${selectedPostId ? renderDetail() : ""}
    </div>
  `;

  document.querySelector("#logoutButton").addEventListener("click", () => {
    currentUser = null;
    remoteSession = null;
    remoteHydrated = false;
    selectedPostId = null;
    slideIndex = 0;
    renderLogin();
  });

  document.querySelectorAll("[data-open-post]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedPostId = button.dataset.openPost;
      slideIndex = 0;
      renderApp();
    });
  });

  bindDetailEvents();
}

function renderPostTile(post) {
  const likes = activeLikesForPost(post.postId).length;
  const comments = commentsForPost(post.postId).length;
  const thumbnailImage = imageUrlForPost(post);
  return `
    <button class="post-tile ${thumbnailImage ? "has-image" : ""}" type="button" data-open-post="${post.postId}" style="--cover:${post.coverColor}">
      ${thumbnailImage ? `<img class="tile-image" src="${escapeHtml(thumbnailImage)}" alt="" loading="lazy" />` : ""}
      <span class="tile-badge">♥ ${likes} · 댓글 ${comments}</span>
    </button>
  `;
}

function renderDetail() {
  const post = state.posts.find((item) => item.postId === selectedPostId);
  if (!post) return "";
  const slides = cardsForPost(post.postId).filter((card) => imageUrlForCard(card));
  const slideCount = Math.max(slides.length, 1);
  const activeSlide = slides[slideIndex] || { cardId: "missing-image", postId: post.postId, slideOrder: 1 };
  const liked = isLikedByCurrentUser(post.postId);
  const likesCount = activeLikesForPost(post.postId).length;
  const comments = commentsForPost(post.postId);
  const dots = Array.from({ length: slideCount }, (_, index) => `<span class="dot ${index === slideIndex ? "active" : ""}"></span>`).join("");
  const isLiking = pendingAction === "like";
  const isCommenting = pendingAction === "comment";
  const activeImage = imageUrlForCard(activeSlide);
  const slideBody = `
            <div class="image-card" data-swipe-area>
              ${activeImage
                ? `<img class="card-image" data-card-image src="${escapeHtml(activeImage)}" alt="${escapeHtml(imageAltForCard(activeSlide, post))}" draggable="false" />`
                : ""}
              <div class="image-fallback" ${activeImage ? "hidden" : ""}>이미지를 찾을 수 없습니다. Cards 탭의 imageUrl 경로를 확인해 주세요.</div>
            </div>
      `;

  return `
    <section class="detail-overlay" role="dialog" aria-modal="true">
      <article class="detail-panel">
        <div class="carousel-stage">
          <div class="card-slide image-slide">
            <span class="slide-index">${Math.min(slideIndex + 1, slideCount)} / ${slideCount}</span>
            ${slideBody}
          </div>
          <div class="carousel-controls">
            <button class="pager-btn" id="prevSlide" type="button" aria-label="이전 카드" ${slideIndex === 0 ? "disabled" : ""}>${iconChevron("left")}</button>
            <div class="dots" aria-hidden="true">${dots}</div>
            <button class="pager-btn" id="nextSlide" type="button" aria-label="다음 카드" ${slideIndex >= slideCount - 1 ? "disabled" : ""}>${iconChevron("right")}</button>
          </div>
        </div>
        <aside class="detail-side">
          <header class="detail-header">
            <div>
              <h2>${escapeHtml(post.title)}</h2>
              <p>${escapeHtml(post.category)} · ${formatDate(post.createdAt)}</p>
            </div>
            <button class="icon-btn close-btn" id="closeDetail" type="button" aria-label="닫기">${iconClose()}</button>
          </header>
          <div class="reaction-row">
            <button class="heart-btn ${liked ? "active" : ""} ${isLiking ? "loading" : ""}" id="heartButton" type="button" aria-label="좋아요" aria-busy="${isLiking}" ${isLiking || isCommenting ? "disabled" : ""}>
              ${isLiking ? `<span class="loading-spinner" aria-hidden="true"></span>` : iconHeart(liked)}
            </button>
            <div class="reaction-counts">
              <strong>${likesCount}명이 좋아합니다</strong>
              <span>댓글 ${comments.length}개</span>
            </div>
          </div>
          <div class="comments">
            ${comments.length ? comments.map(renderComment).join("") : `<div class="empty-state">아직 댓글이 없습니다.</div>`}
          </div>
          <form class="comment-form" id="commentForm">
            <label class="field">
              <span>댓글</span>
              <textarea name="commentText" maxlength="240" placeholder="생각을 남겨 주세요." ${isCommenting || isLiking ? "disabled" : ""}></textarea>
            </label>
            <button class="primary-btn" type="submit" aria-busy="${isCommenting}" ${isCommenting || isLiking ? "disabled" : ""}>
              ${isCommenting ? `<span class="loading-spinner light" aria-hidden="true"></span> 반영 중...` : "댓글 남기기"}
            </button>
            ${pendingAction ? `<p class="action-status" role="status">활동을 반영하는 중입니다...</p>` : ""}
          </form>
        </aside>
      </article>
    </section>
  `;
}

function renderComment(comment) {
  const user = userById(comment.userId) || { displayName: "알 수 없음", avatarColor: "#6B7280" };
  return `
    <article class="comment">
      <div class="comment-avatar" style="--dot:${user.avatarColor}">${escapeHtml(user.displayName.slice(0, 1))}</div>
      <div class="comment-body">
        <strong>${escapeHtml(user.displayName)} · ${formatDate(comment.createdAt)}</strong>
        <p>${escapeHtml(comment.commentText)}</p>
      </div>
    </article>
  `;
}

function bindDetailEvents() {
  if (!selectedPostId) return;
  const close = document.querySelector("#closeDetail");
  const previous = document.querySelector("#prevSlide");
  const next = document.querySelector("#nextSlide");
  const heart = document.querySelector("#heartButton");
  const form = document.querySelector("#commentForm");
  const overlay = document.querySelector(".detail-overlay");
  const swipeArea = document.querySelector("[data-swipe-area]");

  document.querySelectorAll("[data-card-image]").forEach((image) => {
    image.addEventListener("error", () => {
      image.hidden = true;
      if (image.nextElementSibling) {
        image.nextElementSibling.hidden = false;
      }
    });
  });

  close?.addEventListener("click", closeDetail);
  previous?.addEventListener("click", () => moveSlide(-1));
  next?.addEventListener("click", () => moveSlide(1));
  swipeArea?.addEventListener("pointerdown", startSwipe);
  swipeArea?.addEventListener("pointermove", updateSwipe);
  swipeArea?.addEventListener("pointerup", endSwipe);
  swipeArea?.addEventListener("pointercancel", cancelSwipe);
  swipeArea?.addEventListener("lostpointercapture", cancelSwipe);
  heart?.addEventListener("click", toggleLike);
  form?.addEventListener("submit", addComment);
  overlay?.addEventListener("click", (event) => {
    if (event.target === overlay) closeDetail();
  });
}

function closeDetail() {
  selectedPostId = null;
  slideIndex = 0;
  renderApp();
}

function moveSlide(delta) {
  const slides = cardsForPost(selectedPostId).filter((card) => imageUrlForCard(card));
  const slideCount = Math.max(slides.length, 1);
  slideIndex = Math.max(0, Math.min(slideCount - 1, slideIndex + delta));
  renderApp();
}

function startSwipe(event) {
  if (pendingAction || event.button > 0) return;
  const slideCount = Math.max(cardsForPost(selectedPostId).filter((card) => imageUrlForCard(card)).length, 1);
  if (slideCount < 2) return;

  swipeState = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    deltaX: 0,
    active: false,
  };
  event.currentTarget.setPointerCapture?.(event.pointerId);
}

function updateSwipe(event) {
  if (!swipeState || swipeState.pointerId !== event.pointerId) return;
  const deltaX = event.clientX - swipeState.startX;
  const deltaY = event.clientY - swipeState.startY;

  if (!swipeState.active && Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY) * 1.25) {
    swipeState.active = true;
    event.currentTarget.classList.add("is-dragging");
  }

  if (!swipeState.active) return;
  event.preventDefault();
  swipeState.deltaX = deltaX;
  const limitedDelta = Math.max(-90, Math.min(90, deltaX));
  event.currentTarget.style.setProperty("--drag-offset", `${limitedDelta}px`);
}

function endSwipe(event) {
  if (!swipeState || swipeState.pointerId !== event.pointerId) return;
  const area = event.currentTarget;
  const threshold = Math.max(48, area.clientWidth * 0.16);
  const deltaX = swipeState.deltaX;
  resetSwipe(area);

  if (Math.abs(deltaX) < threshold) return;
  moveSlide(deltaX < 0 ? 1 : -1);
}

function cancelSwipe(event) {
  if (!swipeState || swipeState.pointerId !== event.pointerId) return;
  resetSwipe(event.currentTarget);
}

function resetSwipe(area) {
  area.classList.remove("is-dragging");
  area.style.removeProperty("--drag-offset");
  swipeState = null;
}

async function toggleLike() {
  if (pendingAction) return;
  pendingAction = "like";
  renderApp();

  const existing = likeForCurrentUser(selectedPostId);
  const timestamp = nowIso();
  let payload;
  if (existing && existing.status === "active") {
    existing.status = "cancelled";
    existing.cancelledAt = timestamp;
    payload = existing;
  } else if (existing) {
    existing.status = "active";
    existing.likedAt = timestamp;
    existing.cancelledAt = "";
    payload = existing;
  } else {
    payload = {
      likeId: `l${String(Date.now()).slice(-8)}`,
      postId: selectedPostId,
      userId: currentUser.userId,
      likedAt: timestamp,
      status: "active",
      cancelledAt: "",
    };
    state.likes.push(payload);
  }
  saveState();
  try {
    await sendSheetEvent("likeChanged", payload);
  } finally {
    pendingAction = null;
    renderApp();
  }
}

async function addComment(event) {
  event.preventDefault();
  if (pendingAction) return;
  const form = new FormData(event.currentTarget);
  const text = String(form.get("commentText") || "").trim();
  if (!text) return;

  pendingAction = "comment";
  renderApp();

  const comment = {
    commentId: `cm${String(Date.now()).slice(-8)}`,
    postId: selectedPostId,
    userId: currentUser.userId,
    commentText: text,
    createdAt: nowIso(),
  };
  state.comments.push(comment);
  saveState();
  try {
    await sendSheetEvent("commentAdded", comment);
  } finally {
    pendingAction = null;
    renderApp();
  }
}

function renderTeacherPanel() {
  const rows = (state.teacherLikeAudit?.length
    ? state.teacherLikeAudit.map((audit) => ({
      like: audit,
      user: { displayName: audit.displayName, role: audit.role },
      post: { title: audit.postTitle },
    }))
    : state.likes.map((like) => {
      const user = userById(like.userId);
      const post = state.posts.find((item) => item.postId === like.postId);
      return { like, user, post };
    }))
    .sort((a, b) => new Date(b.like.likedAt) - new Date(a.like.likedAt));

  return `
    <section class="teacher-panel">
      <header>
        <h2>교사용 좋아요 조회</h2>
        <a href="${SHEET_CONFIG.spreadsheetUrl}" target="_blank" rel="noreferrer">시트 열기</a>
      </header>
      <div class="audit-table-wrap">
        <table class="audit-table">
          <thead>
            <tr>
              <th>게시물</th>
              <th>이름</th>
              <th>역할</th>
              <th>상태</th>
              <th>좋아요 시간</th>
              <th>취소 시간</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map(({ like, user, post }) => `
              <tr>
                <td>${escapeHtml(post?.title || like.postId)}</td>
                <td>${escapeHtml(user?.displayName || like.userId)}</td>
                <td>${escapeHtml(user?.role === "teacher" ? "교사" : "학생")}</td>
                <td><span class="status ${like.status === "cancelled" ? "cancelled" : ""}">${like.status}</span></td>
                <td>${formatDate(like.likedAt)}</td>
                <td>${formatDate(like.cancelledAt)}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

renderLogin();
hydrateFromSheet();
