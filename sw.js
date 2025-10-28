const CACHE_NAME = 'portfolio-v1';
const urlsToCache = [
  '/',
  '/style.css',
  '/script.js',
  '/profile.jpg',
  '/app.jpg',
  '/resume.pdf',
  '/resume.docx',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdn.emailjs.com/sdk/3.2.0/email.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      })
  );
});