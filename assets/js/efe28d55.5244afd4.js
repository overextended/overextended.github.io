"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[623],{9613:(e,t,l)=>{l.d(t,{Zo:()=>p,kt:()=>d});var a=l(9496);function n(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){n(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,a,n=function(e,t){if(null==e)return{};var l,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var l=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=u(l),d=n,k=b["".concat(o,".").concat(d)]||b[d]||s[d]||r;return l?a.createElement(k,i(i({ref:t},p),{},{components:l})):a.createElement(k,i({ref:t},p))}));function d(e,t){var l=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=l.length,i=new Array(r);i[0]=b;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<r;u++)i[u]=l[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}b.displayName="MDXCreateElement"},8261:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>u});var a=l(4250),n=(l(9496),l(9613));const r={},i=void 0,c={unversionedId:"ox_lib/Callback/Client",id:"ox_lib/Callback/Client",title:"Client",description:"Trigger Server Callback",source:"@site/docs/ox_lib/Callback/Client.md",sourceDirName:"ox_lib/Callback",slug:"/ox_lib/Callback/Client",permalink:"/docs/ox_lib/Callback/Client",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Callback/Client.md",tags:[],version:"current",lastUpdatedAt:1670726385,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{},sidebar:"ox_lib",previous:{title:"Client",permalink:"/docs/ox_lib/Cache/Client"},next:{title:"Server",permalink:"/docs/ox_lib/Callback/Server"}},o={},u=[{value:"Trigger Server Callback",id:"trigger-server-callback",level:2},{value:"lib.callback",id:"libcallback",level:3},{value:"lib.callback.await",id:"libcallbackawait",level:3},{value:"Register Client Callback",id:"register-client-callback",level:2},{value:"lib.callback.register",id:"libcallbackregister",level:3}],p={toc:u};function s(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"trigger-server-callback"},"Trigger Server Callback"),(0,n.kt)("h3",{id:"libcallback"},"lib.callback"),(0,n.kt)("p",null,"The response is handled in a separate coroutine."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback(name, delay, cb, ...)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"delay: ",(0,n.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},"cb: ",(0,n.kt)("inlineCode",{parentName:"li"},"function")),(0,n.kt)("li",{parentName:"ul"},"...: ",(0,n.kt)("inlineCode",{parentName:"li"},"any"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback('ox_inventory:getItemCount', false, function(count)\n    print(count)\nend, 'water', {type = 'fresh'})\n")),(0,n.kt)("h3",{id:"libcallbackawait"},"lib.callback.await"),(0,n.kt)("p",null,"The current coroutine is yielded until a response is received."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.await(name, delay, ...)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"delay: ",(0,n.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"false")),(0,n.kt)("li",{parentName:"ul"},"...: ",(0,n.kt)("inlineCode",{parentName:"li"},"any"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"local count = lib.callback.await('ox_inventory:getItemCount', false, 'water', {type = 'fresh'})\nprint(count)\n")),(0,n.kt)("h2",{id:"register-client-callback"},"Register Client Callback"),(0,n.kt)("h3",{id:"libcallbackregister"},"lib.callback.register"),(0,n.kt)("p",null,"Register an event handler for responding to server requests."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register(name, cb)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name: ",(0,n.kt)("inlineCode",{parentName:"li"},"string")),(0,n.kt)("li",{parentName:"ul"},"cb: ",(0,n.kt)("inlineCode",{parentName:"li"},"function"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua"},"lib.callback.register('ox:getNearbyVehicles', function(radius)\n  local nearbyVehicles = lib.getNearbyVehicles(GetEntityCoords(cache.ped), radius, true)\n  return nearbyVehicles\nend)\n")))}s.isMDXComponent=!0}}]);