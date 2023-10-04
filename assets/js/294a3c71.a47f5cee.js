"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[572],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,m=p["".concat(c,".").concat(d)]||p[d]||h[d]||o;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var i=n(7462),r=(n(7294),n(3905)),o=n(7592);const a=n.p+"assets/images/singlechain-nft-6cc15e63a62a15f687ebb7440045b8e3.png",s={},c="Introduction",l={unversionedId:"home/multichain-support/projected-nfts/introduction",id:"home/multichain-support/projected-nfts/introduction",title:"Introduction",description:"The Projected NFT Whirlpool system allows existing NFTs to be used in games written with Paima without requiring an NFT bridge - even if the NFT lives on a different layer of the same chain, or on a different chain entirely.",source:"@site/docs/home/7-multichain-support/1-projected-nfts/1-introduction.mdx",sourceDirName:"home/7-multichain-support/1-projected-nfts",slug:"/home/multichain-support/projected-nfts/introduction",permalink:"/home/multichain-support/projected-nfts/introduction",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/7-multichain-support/1-projected-nfts/1-introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Game Versioning",permalink:"/home/releasing-a-game/versioning"},next:{title:"Basics",permalink:"/home/multichain-support/projected-nfts/cross-chain/basics"}},u={},p=[{value:"1) Same underlying L1",id:"1-same-underlying-l1",level:2},{value:"2) Different chains",id:"2-different-chains",level:2}],h={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The Projected NFT Whirlpool system allows existing NFTs to be used in games written with Paima without requiring an NFT bridge - even if the NFT lives on a different layer of the same chain, or on a different chain entirely."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Motivation"),": many games, due to being data and computation heavy applications, run on sidechains, L2s and appchain as opposed to popular L1 blockchains. This is problematic because popular NFT collections (which people generally want to use in-game) live on the L1 (a different environment). A common solution to this problem is building an NFT bridge, but bridges not only have a bad reputation for fungible tokens which limits usage, the problem is even worse for NFTs where there is also a philosophical disconnect (if a bridge gets hacked, which is the canonical NFT? The one the hacker stole, or the bridged asset?)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution"),": instead of bridging NFTs, we instead encourage users to ",(0,r.kt)("em",{parentName:"p"},"project")," their NFT directly into the game, allowing them to access their asset in-game without having to bridge it to the game chain. Although the main use-case is projecting a single NFT, we support projecting multiple NFTs at once as well (think of this as an extended version of ",(0,r.kt)("a",{parentName:"p",href:"/home/react-to-events/chain-data-extensions/introduction"},"CDEs")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No free lunch"),": note that using this solution means that running the game requires synchronizing multiple blockchains, as you need to run both the chain the game is hosted on, as well as the game where the NFTs are stored. This only requires checking the state of a single contract though."),(0,r.kt)("p",null,"This solution comes in two flavors depending on the situation:"),(0,r.kt)("h2",{id:"1-same-underlying-l1"},"1) Same underlying L1"),(0,r.kt)("p",null,"When using the same underlying L1, projected NFTs are non-custodial and requires no locking, giving the best user experience possible."),(0,r.kt)("img",{src:a,className:"img-full"}),(0,r.kt)("h2",{id:"2-different-chains"},"2) Different chains"),(0,r.kt)("img",{src:o.Z,className:"img-full"}))}m.isMDXComponent=!0},7592:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/crosschain-nft-44cc53b236eb67ea0131f86f9b6b8736.png"}}]);