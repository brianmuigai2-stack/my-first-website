const CACHE_NAME = 'portfolio-v6';
const urlsToCache = [
  './',
  'index.html',
  'style.css',
  'script.js',
  'manifest.json',
  'Yobi.jpg',
  'App.png',
  'Home.jpg',
  'profile.jpg',
  'audio/music.mp3',
  'assets/font-awesome/css/all.min.css',
  'assets/font-awesome/webfonts/fa-solid-900.woff2',
  'assets/font-awesome/webfonts/fa-brands-400.woff2',
  'assets/js/email.min.js',
  'assets/images/og-image.jpg'
];

// Install event - cache all resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Caching app resources');
        return cache.addAll(urlsToCache).catch((err) => {
          console.log('Cache addAll error:', err);
        });
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Check for updates
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'content-sync') {
    event.waitUntil(updateCache());
  }
});

function updateCache() {
  return caches.open(CACHE_NAME).then((cache) => {
    return cache.addAll(urlsToCache);
  });
}

// Fetch event - network first, fall back to cache, then offline page
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Handle cross-origin requests differently
  if (url.origin !== location.origin) {
    // For external resources, try network first
    event.respondWith(
      fetch(request)
        .then((response) => {
          // Clone and cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          // Return offline fallback for HTML requests
          if (request.headers.get('accept').includes('text/html')) {
            return caches.match('index.html');
          }
          // Return a placeholder for other resources
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        })
    );
    return;
  }

  // For local resources, use cache-first strategy
  event.respondWith(
    caches.match(request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response;
        }

        // Otherwise fetch from network
        return fetch(request).then((networkResponse) => {
          // Cache the new response for future use
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // If both cache and network fail, return index.html for navigation
          if (request.mode === 'navigate') {
            return caches.match('index.html');
          }
          return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
        });
      })
  );
});
