importScripts("https://raw.githubusercontent.com/LxtteDev/Ultraviolet-Proxy/master/uv/uv.sw.js");

const sw = new UVServiceWorker();

self.addEventListener("fetch", (event) => event.respondWith(sw.fetch(event)));
