if(!self.define){let e,s={};const t=(t,a)=>(t=new URL(t+".js",a).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>t(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(a.map((e=>r[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/test0/_next/app-build-manifest.json",revision:"136a86a0d13f949da2e9762e542105c0"},{url:"/test0/_next/static/chunks/173-72c4261e17b46eb3.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/23-82512b16aebec948.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/app/_not-found/page-05886c10710171db.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/app/layout-1b245b96122f65cb.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/app/page-e9c55d7c8b2c3ffb.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/fd9d1056-2821b0f0cabcd8bd.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/framework-f66176bb897dc684.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/main-17c0816234666fd9.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/main-app-03ddea6c5d62da83.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/test0/_next/static/chunks/webpack-c8667334b677573d.js",revision:"juduva5UL5FWlStbiD531"},{url:"/test0/_next/static/css/9792fe3b3608f156.css",revision:"9792fe3b3608f156"},{url:"/test0/_next/static/css/e41a733de96a1d34.css",revision:"e41a733de96a1d34"},{url:"/test0/_next/static/juduva5UL5FWlStbiD531/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/test0/_next/static/juduva5UL5FWlStbiD531/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/test0/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/test0/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/test0/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/test0/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/test0/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/test0/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/test0/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/test0/icons/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"/test0/icons/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"/test0/manifest.json",revision:"dfd74c71278a42d3b26ad29db3059487"},{url:"/test0/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/test0/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/test0",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:t,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
