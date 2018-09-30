self.addEventListener('install', function(event) {

  event.waitUntil(
    caches.open('castle-cache').then(function(cache) {
      return cache.addAll([
          '/favicon.ico',
          '/index.html'
      ]);
    })
  );
});


// Thanks to the Google Developers Tutorials for helping me understand cache.put!
// https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
// Code modified to use the recommended cache.add, as well as to return
// offline.html if no cached asset found.

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('castle-cache').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.add(event.request);
          return response
        });
      });
    })
  );
});