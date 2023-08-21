"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},312:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a="L2 Quirks",s={unversionedId:"home/Reacting to Events/L2-quirks",id:"home/Reacting to Events/L2-quirks",title:"L2 Quirks",description:"L2s often have different definitions for certain fields inside blocks. If you are deploying a game with Paima on top of one of these L2s, you need to understand the meaning of these values to avoid tipfalls. To facilitate these, we've generated a table of the meaning of these values for the most commons L2s.",source:"@site/docs/home/3 - Reacting to Events/3 - L2-quirks.md",sourceDirName:"home/3 - Reacting to Events",slug:"/home/Reacting to Events/L2-quirks",permalink:"/ja/home/Reacting to Events/L2-quirks",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3 - Reacting to Events/3 - L2-quirks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stable Tick Rate",permalink:"/ja/home/Reacting to Events/Funnel Types/Stable Tick Funnel"},next:{title:"Randomness",permalink:"/ja/home/Randomness/"}},l={},c=[{value:"Arbitrum",id:"arbitrum",level:2}],u={toc:c};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"l2-quirks"},"L2 Quirks"),(0,i.kt)("p",null,"L2s often have different definitions for certain fields inside blocks. If you are deploying a game with Paima on top of one of these L2s, you need to understand the meaning of these values to avoid tipfalls. To facilitate these, we've generated a table of the meaning of these values for the most commons L2s."),(0,i.kt)("h2",{id:"arbitrum"},"Arbitrum"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block number"),": When you get a block, it contains two fields:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"number")," which is simply an increasing value starting from 0"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"l1BlockNumber")," underlying L1 block"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block timestamp"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"block.timestamp")," is similar in behavior to L1, but two different blocks in L2 can have the same ",(0,i.kt)("inlineCode",{parentName:"li"},"block.timestamp"),", unlike in L1. This is because Arbitrum One produces about 4 blocks a second. If each block needed a new timestamp it would get way out of sync with the real time because it's denominated in seconds and would need to increase 4 times a second."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Block hash"),": Arbitrum\u2019s L2 block hash is calculated using the same function as Ethereum, but just over Arbitrum's modified block format created by the sequencer")))}m.isMDXComponent=!0}}]);