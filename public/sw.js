const CACHE = "florinato-cache-v2";

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

  // pages React
  if (e.request.mode === "navigate") {

    e.respondWith(

      fetch(e.request)

        .then(res => {

          const copy = res.clone();

          caches.open(CACHE)
            .then(cache => cache.put("/index.html", copy));

          return res;

        })

        .catch(() => caches.match("/index.html"))

    );

    return;

  }


  // static files
  e.respondWith(

    caches.match(e.request)

      .then(res => {

        return res || fetch(e.request)
          .then(response => {

            const copy = response.clone();

            caches.open(CACHE)
              .then(cache => cache.put(e.request, copy));

            return response;

          })

          .catch(() => res);

      })

  );

});
