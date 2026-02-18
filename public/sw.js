const CACHE_NAME = "florinato-cache-v1";

// fichiers essentiels
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.ico"
];

// INSTALL
self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// ACTIVATE
self.addEventListener("activate", event => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then(names =>
      Promise.all(
        names.map(name => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      )
    )
  );
});

// FETCH
self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
      .then(response => {

        // retourne cache si existe
        if (response) {
          return response;
        }

        // sinon fetch internet
        return fetch(event.request)
          .then(networkResponse => {

            // cache automatiquement les fichiers React
            return caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });

          })

          .catch(() => {

            // offline fallback
            if (event.request.mode === "navigate") {
              return caches.match("/index.html");
            }

          });

      })

  );

});
