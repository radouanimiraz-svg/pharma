const CACHE_NAME = 'pharma-khen-v1';
const ASSETS = [
  'index.html',
  'https://cdn-icons-png.flaticon.com/512/822/822143.png',
  'https://cdn-icons-png.flaticon.com/512/1673/1673221.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
