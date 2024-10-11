self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('my-cache').then(cache => {
            return cache.addAll([
                '/index.html',       
                '/offline.html',     
                '/css/styles.css',  
                '/js/main.js'       
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => {
                return caches.match('/offline.html');
            });
        })
    );
});
