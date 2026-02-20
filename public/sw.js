const CACHE = "florinato-cache-v6";

self.addEventListener("install", e => {

  self.skipWaiting();

  e.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.add("/index.html"))
  );

});


self.addEventListener("activate", e => {

  e.waitUntil(

    caches.keys().then(keys => {

      return Promise.all(
        keys.map(key => {

          if (key !== CACHE)
            return caches.delete(key);

        })

      );

    })

  );

  self.clients.claim();

});


self.addEventListener("fetch", e => {

  const url = new URL(e.request.url);

  if (url.hostname.includes("onrender.com"))
    return;


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

  }

});