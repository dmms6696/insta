const CACHE = 'dm-library-preview-v1';
const SHELL = ['./', './index.html', './shell.css', './shell.js', './bookstagram.html', './posts-layout.css', './library.html', './library-layout.css', './library-api.js', './manifest.webmanifest', './icon-192.png', './icon-512.png'];
self.addEventListener('install', (event) => event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener('activate', (event) => event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith('dm-library-preview-') && key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);
  if (event.request.method !== 'GET' || url.origin !== location.origin || !url.pathname.startsWith(new URL('./', self.location).pathname)) return;
  event.respondWith(fetch(event.request).then((response) => {
    if (response.ok) { const copy = response.clone(); event.waitUntil(caches.open(CACHE).then((cache) => cache.put(event.request, copy))); }
    return response;
  }).catch(() => caches.match(event.request).then((response) => response || new Response('인터넷 연결을 확인해 주세요.', { status: 503, headers: { 'Content-Type': 'text/plain;charset=utf-8' } }))));
});
