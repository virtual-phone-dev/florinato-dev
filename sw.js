const BASE = location.protocol + "//" + location.host;
const PREFIX = "V1";
const CACHED_FILES = [
  `${BASE}`,
  `${BASE}/sw.js`,
  `${BASE}/manifest.json`,
  `${BASE}/favicon.ico`,
];

// 1ere partie - installer
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const cache = await caches.open(PREFIX);
      await cache.addAll([...CACHED_FILES, "/index.html"]);
    })()
  );
  // console.log(`${PREFIX} Install`);
});

// 2e partie - activer
self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((key) => {
          if (!key.includes(PREFIX)) {
            return caches.delete(key);
          }
        })
      );
    })()
  );
  // console.log(`${PREFIX} Active`);
});

//
self.addEventListener("fetch", (event) => {
  /* console.log(
    `${PREFIX} Fetching : ${event.request.url}, Mode : ${event.request.mode}`
  ); */

  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          //
          const preloadResponse = await event.preloadResponse;
          if (preloadResponse) {
            return preloadResponse;
          }

          // else try the network
          return await fetch(event.request);
        } catch (error) {
          // if offline mode
          const cache = await caches.open(PREFIX);
          return await cache.match("/index.html");
        }
      })()
    );
  } else if (CACHED_FILES.includes(event.request.url)) {
    event.respondWith(caches.match(event.request));
  }
});
