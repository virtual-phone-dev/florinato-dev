const CACHE = "florinato-cache-v8";


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
	return;
  const url = new URL(event.request.url);

  // ✅ IMPORTANT
  if (url.protocol !== "http:" && url.protocol !== "https:") return;

  // ❌ ignorer API
  if (url.hostname.includes("api2florinato.onrender.com")) return;

  // ❌ ignorer non-GET
  if (event.request.method !== "GET") return;

  // ✅ HTML
  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => {
            cache.put("/index.html", copy);
          });
          return response;
        })
        .catch(() => caches.match("/index.html"))
    );
    return;
  }

  // ✅ assets
  event.respondWith(
    caches.match(event.request).then(cached => {
      return (
        cached ||
        fetch(event.request).then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => {
            cache.put(event.request, copy);
          });
          return response;
        })
      );
    })
  );
});


