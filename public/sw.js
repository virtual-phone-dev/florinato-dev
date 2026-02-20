const CACHE = "florinato-cache-v4";

self.addEventListener("install", e => {

  self.skipWaiting();

  e.waitUntil(
    caches.open(CACHE).then(cache => {

      return cache.addAll([
        "/",
        "/index.html",
        "/manifest.json",
        "/favicon.ico",
      ]);

    })
  );

});


self.addEventListener("activate", e => {

  self.clients.claim();

});


self.addEventListener("fetch", e => {

  // ✅ IMPORTANT : React pages → toujours NETWORK FIRST
  if (e.request.mode === "navigate") {

    e.respondWith(

      fetch(e.request)

        .then(res => {

          const copy = res.clone();

          caches.open(CACHE)
            .then(cache => cache.put(e.request, copy)); // ✅ CORRIGÉ ICI

          return res;

        })

        .catch(() => caches.match(e.request))

    );

    return;

  }


  // static files
  e.respondWith(

    caches.match(e.request)

      .then(res => {

        if (res) return res;

        return fetch(e.request)

          .then(response => {

            const copy = response.clone();

            caches.open(CACHE)
              .then(cache => cache.put(e.request, copy));

            return response;

          });

      })

  );

});