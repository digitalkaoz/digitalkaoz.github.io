self.addEventListener('install', event => {
    // Activate immediately
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    // Remove all caches and take control of clients, then do nothing else.
    event.waitUntil(
        caches.keys().then(keys => Promise.all(keys.map(key => caches.delete(key))))
            .then(() => self.clients.claim())
    );
});

// Intentionally no fetch handlers — this service worker does nothing after clearing caches.