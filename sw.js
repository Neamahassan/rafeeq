const C='rafeeq-v4',F=['./','./index.html','./manifest.json','./icon-192.png','./logo.svg','./adhan.js'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(F)))});
self.addEventListener('fetch',e=>{if(new URL(e.request.url).origin!==location.origin||e.request.url.includes('/audio/'))return;
e.respondWith(fetch(e.request).then(r=>{const k=r.clone();caches.open(C).then(c=>c.put(e.request,k));return r}).catch(()=>caches.match(e.request)))});
