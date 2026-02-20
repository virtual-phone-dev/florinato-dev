const CACHE = "florinato-cache-v7";


// INSTALL → rien forcer
self.addEventListener("install", () => {

  self.skipWaiting();

});



// ACTIVATE → supprimer anciens caches
self.addEventListener("activate", event => {

  event.waitUntil(

    caches.keys().then(keys =>

      Promise.all(

        keys.map(key => {

          if (key !== CACHE)
            return caches.delete(key);

        })

      )

    )

  );

  self.clients.claim();

});




self.addEventListener("fetch", event => {

  const url = new URL(event.request.url);


  // ❌ API → jamais cache
  if (url.hostname.includes("onrender.com"))
    return;



  // ✅ HTML → Network First
  if (event.request.mode === "navigate") {

    event.respondWith(

      fetch(event.request)

        .then(response => {

          const copy = response.clone();

          caches.open(CACHE)
            .then(cache => cache.put("/index.html", copy));

          return response;

        })

        .catch(() => caches.match("/index.html"))

    );

    return;

  }



  // ✅ JS CSS images → Network First + fallback cache

  event.respondWith(

    fetch(event.request)

      .then(response => {

        const copy = response.clone();

        caches.open(CACHE)
          .then(cache => cache.put(event.request, copy));

        return response;

      })

      .catch(() => caches.match(event.request))

  );


});