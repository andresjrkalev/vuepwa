(function(e){function t(t){for(var r,c,u=t[0],i=t[1],l=t[2],s=0,v=[];s<u.length;s++)c=u[s],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&v.push(n[c][0]),n[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(t);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,c=1;c<a.length;c++){var i=a[c];0!==n[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=a[0]))}return e}var r={},n={app:0},o=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"063687bd"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,u),a.l=!0,a.exports}u.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,r){a=n[e]=[t,r]}));t.push(a[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var l=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(s);var a=n[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[e]=void 0}};var s=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,a){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(u.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(a,r,function(t){return e[t]}.bind(null,r));return a},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/vuepwa/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var b=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},3785:function(e,t,a){"use strict";a("4570")},4570:function(e,t,a){},ad3e:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23"),n={id:"nav"},o=Object(r["f"])("Home"),c=Object(r["f"])(" | "),u=Object(r["f"])("About");function i(e,t){var a=Object(r["w"])("router-link"),i=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",n,[Object(r["g"])(a,{to:"/"},{default:Object(r["B"])((function(){return[o]})),_:1}),c,Object(r["g"])(a,{to:"/about"},{default:Object(r["B"])((function(){return[u]})),_:1})]),Object(r["g"])(i)],64)}a("3785");const l={};l.render=i;var s=l,b=a("9483");Object(b["a"])("".concat("/vuepwa/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});a("d3b7");var v=a("6c02"),p=a("cf05"),d=a.n(p),f={class:"home"},g=Object(r["g"])("img",{alt:"Vue logo",src:d.a},null,-1);function h(e,t,a,n,o,c){var u=Object(r["w"])("HelloWorld");return Object(r["p"])(),Object(r["d"])("div",f,[g,Object(r["g"])(u,{msg:"Welcome to Your Vue.js + TypeScript App"})])}var j=a("d4ec"),m=a("262e"),O=a("2caf"),k=a("9ab4"),w=a("ce1f"),y=Object(r["C"])("data-v-2508bc76");Object(r["t"])("data-v-2508bc76");var _={class:"hello"},x=Object(r["e"])('<p data-v-2508bc76> For a guide and recipes on how to configure / customize this project,<br data-v-2508bc76> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>vue-cli documentation</a>. </p><h3 data-v-2508bc76>Installed CLI Plugins</h3><ul data-v-2508bc76><li data-v-2508bc76><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-2508bc76>babel</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener" data-v-2508bc76>pwa</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener" data-v-2508bc76>router</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener" data-v-2508bc76>vuex</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-2508bc76>eslint</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener" data-v-2508bc76>typescript</a></li></ul><h3 data-v-2508bc76>Essential Links</h3><ul data-v-2508bc76><li data-v-2508bc76><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>Core Docs</a></li><li data-v-2508bc76><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>Forum</a></li><li data-v-2508bc76><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>Community Chat</a></li><li data-v-2508bc76><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-2508bc76>Twitter</a></li><li data-v-2508bc76><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>News</a></li></ul><h3 data-v-2508bc76>Ecosystem</h3><ul data-v-2508bc76><li data-v-2508bc76><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>vue-router</a></li><li data-v-2508bc76><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>vuex</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-2508bc76>vue-devtools</a></li><li data-v-2508bc76><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-2508bc76>vue-loader</a></li><li data-v-2508bc76><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-2508bc76>awesome-vue</a></li></ul>',7);Object(r["q"])();var P=y((function(e,t,a,n,o,c){return Object(r["p"])(),Object(r["d"])("div",_,[Object(r["g"])("h1",null,Object(r["y"])(e.msg),1),x])})),C=function(e){Object(m["a"])(a,e);var t=Object(O["a"])(a);function a(){return Object(j["a"])(this,a),t.apply(this,arguments)}return a}(w["b"]);C=Object(k["a"])([Object(w["a"])({props:{msg:String}})],C);var S=C;a("e52d");S.render=P,S.__scopeId="data-v-2508bc76";var A=S,E=function(e){Object(m["a"])(a,e);var t=Object(O["a"])(a);function a(){return Object(j["a"])(this,a),t.apply(this,arguments)}return a}(w["b"]);E=Object(k["a"])([Object(w["a"])({components:{HelloWorld:A}})],E);var T=E;T.render=h;var F=T,H=[{path:"/",name:"Home",component:F},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],L=Object(v["a"])({history:Object(v["b"])("/vuepwa/"),routes:H}),M=L,N=a("5502"),q=Object(N["a"])({state:{},mutations:{},actions:{},modules:{}});Object(r["c"])(s).use(q).use(M).mount("#app")},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},e52d:function(e,t,a){"use strict";a("ad3e")}});
//# sourceMappingURL=app.dc075439.js.map