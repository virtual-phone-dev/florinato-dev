const CACHE = "florinato-cache-v4";

console.log("SERVICE WORKER V4 ACTIF");

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

  const url = new URL(e.request.url);


  // ❌ IMPORTANT : IGNORER API
  if (url.hostname.includes("onrender.com")) {
    return; // laisse le navigateur fetch normalement
  }


  // pages React
  if (e.request.mode === "navigate") {

    e.respondWith(
      fetch(e.request)
        .catch(() => caches.match("/index.html"))
    );

    return;
  }



  // static files seulement
  e.respondWith(

    caches.match(e.request)

      .then(res => {

        return res || fetch(e.request)

          .then(response => {

            const copy = response.clone();

            caches.open(CACHE)
              .then(cache => cache.put(e.request, copy));

            return response;

          });

      })

  );

});
