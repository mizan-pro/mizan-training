// ميزان: عامل خدمة بسيط. شرط من Chrome لعرض «تثبيت التطبيق».
// لا يخزّن شيئاً في الذاكرة، فكل فتح يجلب آخر نسخة من الشبكة، وتحديث الملف يصل للجميع فوراً.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
