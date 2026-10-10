const CACHE_NAME = "my-app-v1";

const urlsToCache = [
    "/",
    "/index.html"
    "/てらさわホーク_ちん毛.mp3"
    "/宇多丸_コノヤロー1.mp3"
    "/宇多丸_コノヤロー2.mp3"
    "/高橋ヨシキ_断捨離.mp3"
    "/Blackhole.png"
];

self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});
