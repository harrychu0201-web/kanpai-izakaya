const CACHE='izakaya-v386';
// character art lives in img/ with the content hash in each file name, so a file never changes once published:
// keep it in its own cache that survives version bumps (an update then only re-downloads the small page, not 2.4MB of art)
const IMGCACHE='izakaya-img';
// './' is not listed: every page load is answered with the cached './index.html', so caching './' too only downloaded
// the page twice on every update. cache:'reload' skips the browser's HTTP cache so a fresh install never stores
// a stale page (GitHub Pages lets browsers keep it for 10 minutes).
const FILES=['./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))));self.skipWaiting()});
self.addEventListener('message',e=>{if(e.data&&e.data.type==='skip')self.skipWaiting()});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==IMGCACHE).map(k=>caches.delete(k)))));self.clients.claim()});
const tag=r=>r&&(r.headers.get('etag')||r.headers.get('last-modified'))||'';
self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url), same=url.origin===self.location.origin;
  if(same){
    // never answer these from cache:
    //  - sw.js: the page's "new version?" check (verCheck) reads it and must always see the live file
    //  - bgm.mp3 / any Range request: audio asks for byte ranges; a cached full response makes iPhone audio fail
    if(url.pathname.endsWith('/sw.js')||url.pathname.endsWith('.mp3')||req.headers.has('range'))return;
    if(url.pathname.includes('/img/')){
      e.respondWith(caches.open(IMGCACHE).then(x=>x.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok&&res.status===200)x.put(req,res.clone());return res}))));
      return;
    }
    // the game page: serve from cache first so a slow connection never leaves the player on a blank
    // screen, refresh the cache in the background, and tell the open page when a newer version has arrived
    const key=req.mode==='navigate'?'./index.html':req;
    e.respondWith(caches.match(key,{ignoreSearch:req.mode==='navigate'}).then(hit=>{
      const refresh=fetch(req.url,{cache:'no-cache',credentials:'same-origin'}).then(res=>{
        if(res.ok&&res.status===200&&!res.redirected){
          const c=res.clone();
          const done=caches.open(CACHE).then(x=>x.put(key,c));
          if(hit&&tag(hit)&&tag(res)&&tag(hit)!==tag(res)&&req.mode==='navigate')
            done.then(()=>self.clients.matchAll({type:'window'})).then(cs=>cs.forEach(cl=>cl.postMessage({type:'newver'})));
        }
        return res}).catch(()=>null);
      if(hit){e.waitUntil(refresh);return hit}
      return refresh.then(res=>res||caches.match('./index.html')).then(res=>res||Response.error());
    }));
    return;
  }
  e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok&&url.hostname.includes('fonts.g')){const c=res.clone();caches.open(CACHE).then(x=>x.put(req,c))}return res})));
});
