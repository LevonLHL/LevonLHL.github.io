if(!self.define){let e,i={};const r=(r,a)=>(r=new URL(r+".js",a).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(a,d)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let b={};const s=e=>r(e,c),f={module:{uri:c},exports:b,require:s};i[c]=Promise.all(a.map((e=>f[e]||s(e)))).then((e=>(d(...e),b)))}}define(["./workbox-c2bc8b5b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/08/28/hello-world/index.html",revision:"e1e423a746481207b0a8b37cdb3eb640"},{url:"2023/09/09/test/index.html",revision:"ab1ff4aa1c49331ae82d9b88265b7a8e"},{url:"404.html",revision:"d7ed1386be71d34b709113ef20972124"},{url:"archives/2023/08/index.html",revision:"025f0a0b65f13de712ab83952ee5e73c"},{url:"archives/2023/09/index.html",revision:"74848dda94e03bf1487c3e13a4f6a09f"},{url:"archives/2023/index.html",revision:"7eb3ddb688499e72bf7a2246641a3984"},{url:"archives/index.html",revision:"b6d20b2b55bb671e60eae69bd26b9222"},{url:"categories/index.html",revision:"ec269364b7295794c0648776f760f794"},{url:"categories/学习/index.html",revision:"54b3105ad65239f29cfc6aba41fdceca"},{url:"css/index.css",revision:"1f81b4928e600498c5f23ca128938e9c"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/113.jpg",revision:"b327bb228731ae849f45b7d2daf69598"},{url:"img/114.jpg",revision:"e55fca9944626b18a69c5c4a6c066a56"},{url:"img/115.jpg",revision:"f6ad000641275b575381009ddc28c3b7"},{url:"img/116.jpg",revision:"0311055840ba26a10d832248760b4beb"},{url:"img/117.jpg",revision:"da5b09e24d80fb6d064610b87befd9ff"},{url:"img/119.jpg",revision:"737e8ce965e64ecc6e7725bf37ac4399"},{url:"img/121.jpg",revision:"6761c09125aadfa19fee63fbe933ac81"},{url:"img/122.jpg",revision:"2365715107b44cadbca800c33652d94f"},{url:"img/123.jpg",revision:"2f1f876d3fd770426f69037d5d264866"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/algolia.svg",revision:"88450dd56ea1a00ba772424b30b7d34d"},{url:"img/avatar.jpg",revision:"7724c9c9105d64a5a9424219284aedf0"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/icp.png",revision:"6e26aed5ced63bc60524cc736611d39e"},{url:"img/loading.gif",revision:"d1cf8d9ccb6a2b3514a7d14332035a3c"},{url:"img/three-pigs.jpg",revision:"52b0c71a0583b5be196bb739b3826e9b"},{url:"img/wechat.jpg",revision:"9b6da9b2381be4aa8c39e8bf6122c140"},{url:"img/zhifubao.jpg",revision:"fd66eaf5087c1ace050aeb90a00e042b"},{url:"index.html",revision:"3f3276c4bfc22b36c577f8e1d89d4fe8"},{url:"js/main.js",revision:"c1abc98ff6aa69f598f43b8604fb7b3e"},{url:"js/search/algolia.js",revision:"5e2a2c65f28bddbb3d94529453e91716"},{url:"js/search/local-search.js",revision:"2e3ff3d156bb208f752d95375ebca557"},{url:"js/tw_cn.js",revision:"fd395fc3b4df9c7da17e730d173cfbea"},{url:"js/utils.js",revision:"2fd35bd141fd541a188ef52dd30108d5"},{url:"link/index.html",revision:"ff0ca9d5f24ada4101d668b13e27537e"},{url:"tags/C语言/index.html",revision:"ee40aabe41015ae48a58236a7cf1ff85"},{url:"tags/index.html",revision:"9e7a5ba8b6419252a7aff3cee823f5c4"},{url:"tags/数据结构/index.html",revision:"e2409e1241727892d3f10536ecf68df9"},{url:"tags/英格培训/index.html",revision:"5cea9c1b6eb1b5795ab6a6f5742bd6e1"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
