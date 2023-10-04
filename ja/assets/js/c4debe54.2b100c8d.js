"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[649],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,d=u["".concat(c,".").concat(m)]||u[m]||h[m]||a;return n?i.createElement(d,r(r({ref:t},p),{},{components:n})):i.createElement(d,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,r[1]=s;for(var l=2;l<a;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>g,frontMatter:()=>p,metadata:()=>h,toc:()=>d});var i=n(7462),o=(n(7294),n(3905)),a=n(7592);const r=n.p+"assets/images/high-level-flow-8c7f909be5fb7450578ec4a50ab5e2ee.png",s=n.p+"assets/images/finality-period-137172c8240755384e67ba0b1249ec53.png",c=n.p+"assets/images/rollback-issue-edbdb96dc2442f7880c05d239ea8accf.png",l=n.p+"assets/images/duplication-issue-6fc2c358ff293d90e59f30f6e4ef7015.png",p={},u="Basics",h={unversionedId:"home/multichain-support/projected-nfts/cross-chain/basics",id:"home/multichain-support/projected-nfts/cross-chain/basics",title:"Basics",description:"The goal of cross-chain NFTs is to allow people to play with NFTs from one chain in a game hosted on a different chain without requiring any bridge of centralized solution.",source:"@site/docs/home/7-multichain-support/1-projected-nfts/2-cross-chain/1-basics.mdx",sourceDirName:"home/7-multichain-support/1-projected-nfts/2-cross-chain",slug:"/home/multichain-support/projected-nfts/cross-chain/basics",permalink:"/ja/home/multichain-support/projected-nfts/cross-chain/basics",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/7-multichain-support/1-projected-nfts/2-cross-chain/1-basics.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/ja/home/multichain-support/projected-nfts/introduction"},next:{title:"Cardano",permalink:"/ja/home/multichain-support/projected-nfts/cross-chain/cardano"}},m={},d=[{value:"Issue #1: rollbacks",id:"issue-1-rollbacks",level:2},{value:"Issue #2: temporary duplication",id:"issue-2-temporary-duplication",level:2},{value:"Timing seconds instead of blocks",id:"timing-seconds-instead-of-blocks",level:2}],f={toc:d},b="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"basics"},"Basics"),(0,o.kt)("p",null,"The goal of cross-chain NFTs is to allow people to play with NFTs from one chain in a game hosted on a different chain without requiring any bridge of centralized solution."),(0,o.kt)("img",{src:a.Z,className:"img-full"}),(0,o.kt)("h1",{id:"high-level-flow"},"High-level flow"),(0,o.kt)("p",null,"To access their stateful NFT in-game, users need to put their NFT on the L1 in a ",(0,o.kt)("em",{parentName:"p"},"whirlpool hololocker"),". This locker can be unlocked anytime by the user, but doing so removes access to the NFT from the game."),(0,o.kt)("img",{src:r,className:"img-full"}),(0,o.kt)("h1",{id:"finality-period"},"Finality period"),(0,o.kt)("p",null,"Since the L1 and Paima run on different chains, we have to take L1 finality into account before actions in the hololocker are actionable in-game"),(0,o.kt)("img",{src:s,className:"img-full"}),(0,o.kt)("h2",{id:"issue-1-rollbacks"},"Issue #1: rollbacks"),(0,o.kt)("p",null,"Note that updates in the hololocker cannot instantaneously be reflected in the game since it is possible the L1 rolls back. Therefore, projections need to wait a certain amount of time until they are confident that no rollback will occur (represented by ",(0,o.kt)("inlineCode",{parentName:"p"},"minimum_lock_time"),")."),(0,o.kt)("p",null,"Failing to take into account, rollbacks could lead to the game getting into an invalid state as seen in the picture below"),(0,o.kt)("img",{src:c,className:"img-full"}),(0,o.kt)("h2",{id:"issue-2-temporary-duplication"},"Issue #2: temporary duplication"),(0,o.kt)("p",null,'If we did not have a special "Unlocking" state that requires users to wait for finality on the L1 before withdrawing their NFT, it could cause a situation where the same NFT is used in two places at once, which is unexpected'),(0,o.kt)("p",null,"This means that withdrawing your NFT is done in two steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Shutting down the projection"),(0,o.kt)("li",{parentName:"ol"},"Withdraw your NFT from the hololocker")),(0,o.kt)("p",null,"Failing to take into account, the same NFT can be used in two places at once as seen in the picture below"),(0,o.kt)("img",{src:l,className:"img-full"}),(0,o.kt)("h2",{id:"timing-seconds-instead-of-blocks"},"Timing seconds instead of blocks"),(0,o.kt)("p",null,"Finality is typically defined in terms of blocks. For example, in Bitcoin, people heuristically define finality as 6 blocks."),(0,o.kt)("p",null,"However, this definition is sightly problematic for our use case, because there is no guarantee every node running the game sees the 6th block at the same time (due to differences in block propagation in a global decentralized network). Notably, Paima runs on the clock of the chain hosting the game, and so there is no way for Paima to rely on the chain hosting the game to globally determine the block number of the chain where the hololocker exists. Additionally, there are blockchains like Cardano where you cannot even refer to blocks from smart contracts (to maintain determinism), and so knowing progress towards finality cannot be known. "),(0,o.kt)("p",null,"Therefore, it is easier to define the finality heuristically in terms of seconds since the transaction was made on the L1, which can be known. Note that this will not work for blockchains where you cannot define a deterministic mapping of blocks to timestamps with a precision lower than half the block time on the chain hosting the game, but in practice this exists for all major blockchains"))}g.isMDXComponent=!0},7592:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/crosschain-nft-44cc53b236eb67ea0131f86f9b6b8736.png"}}]);