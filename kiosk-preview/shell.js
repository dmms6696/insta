const tabs = [...document.querySelectorAll('[data-screen]')];
function selectScreen(name) {
  tabs.forEach((tab) => {
    const active = tab.dataset.screen === name;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = !active;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectScreen(tab.dataset.screen));
  tab.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 1 : 1 - index;
    selectScreen(tabs[next].dataset.screen);
    tabs[next].focus();
  });
});
let lastActivity = Date.now();
function activity() { lastActivity = Date.now(); }
function bindActivity(doc) {
  ['pointerdown', 'keydown', 'input', 'touchstart'].forEach((type) => doc.addEventListener(type, activity, { passive: true }));
  doc.addEventListener('click', (event) => {
    const link = event.target.closest?.('a');
    if (link && new URL(link.href).origin !== location.origin) event.preventDefault();
  }, true);
}
bindActivity(document);
document.querySelectorAll('iframe').forEach((frame) => frame.addEventListener('load', () => bindActivity(frame.contentDocument)));
setInterval(() => {
  if (Date.now() - lastActivity < 180000) return;
  const doc = document.getElementById('posts').contentDocument;
  const logout = doc?.querySelector('#logoutButton');
  if (logout?.disabled || doc?.querySelector('[aria-busy="true"]')) return;
  if (logout) logout.click();
  selectScreen('library');
  lastActivity = Date.now();
}, 10000);
function connection() { document.getElementById('connection').hidden = navigator.onLine; }
window.addEventListener('online', connection);
window.addEventListener('offline', connection);
connection();
selectScreen('library');
if ('serviceWorker' in navigator) navigator.serviceWorker.register(new URL('./sw.js', document.currentScript.src)).catch(console.warn);
