// Preserve the existing client callbacks while moving the UI off Apps Script.
const LIBRARY_API = 'https://script.google.com/macros/s/AKfycbzz7fCawSHjwM_7Nm7HaBFb_TVohe0RBESDjMzQfgOz0pVdqkY9Io6x4GIFot7nrYz4kw/exec';
function runner(success, failure) {
  const chain = {
    withSuccessHandler(callback) { return runner(callback, failure); },
    withFailureHandler(callback) { return runner(success, callback); },
  };
  for (const action of ['getPublicConfig', 'getFacets', 'searchBooks', 'aiRecommendBooks', 'getSimilarBooks']) {
    chain[action] = async (params) => {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), action === 'aiRecommendBooks' ? 90000 : 45000);
      try {
        if (!navigator.onLine) throw new Error('인터넷 연결을 확인해 주세요.');
        const response = await fetch(LIBRARY_API, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: JSON.stringify({ action, params }), signal: controller.signal, credentials: 'omit' });
        if (!response.ok) throw new Error('검색 서버에 연결하지 못했습니다.');
        const result = await response.json();
        if (!result.ok) throw new Error(result.error || '검색을 완료하지 못했습니다.');
        success?.(result.data);
      } catch (error) {
        failure?.(error.name === 'AbortError' ? new Error('응답 시간이 길어지고 있습니다. 잠시 후 다시 시도해 주세요.') : error);
      } finally { clearTimeout(timer); }
    };
  }
  return chain;
}
window.google = { script: { get run() { return runner(); } } };
