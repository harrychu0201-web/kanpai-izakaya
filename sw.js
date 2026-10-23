const CACHE='izakaya-v152';
const FILES=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./bgm.mp3'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));self.clients.claim()});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  const url=e.request.url, same=url.startsWith(self.location.origin);
  // same-origin (the game itself, ~3.7MB): serve from cache first so a slow/flaky connection
  // never leaves the player stuck on a blank screen, then refresh the cache in the background.
  // Players are told about a newer version by the in-page update banner (verCheck in index.html),
  // not by forcing a network round-trip on every load.
  if(same){
    e.respondWith(caches.match(e.request).then(hit=>{
      const refresh=fetch(e.request,{cache:'no-cache'}).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return res}).catch(()=>null);
      if(hit)return hit;
      return refresh.then(res=>res||caches.match('./index.html'));
    }));
    return;
  }
  e.respondWith(caches.match(e.request).then(hit=>hit||fetch(e.request).then(res=>{if(res.ok&&url.includes('fonts.g')){const c=res.clone();caches.open(CACHE).then(x=>x.put(e.request,c))}return res})));
});
