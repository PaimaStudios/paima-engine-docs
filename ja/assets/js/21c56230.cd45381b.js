"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[29],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=o,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1004:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={},i="Create your own CDE",s={unversionedId:"home/react-to-events/chain-data-extensions/create-your-own",id:"home/react-to-events/chain-data-extensions/create-your-own",title:"Create your own CDE",description:"Although custom CDEs do not have to be added to Paima (people can just use the generic CDE, adding a CDE to Paima itself helps both with usability and with type inference.",source:"@site/docs/home/3-react-to-events/2-chain-data-extensions/1000-create-your-own.md",sourceDirName:"home/3-react-to-events/2-chain-data-extensions",slug:"/home/react-to-events/chain-data-extensions/create-your-own",permalink:"/ja/home/react-to-events/chain-data-extensions/create-your-own",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3-react-to-events/2-chain-data-extensions/1000-create-your-own.md",tags:[],version:"current",sidebarPosition:1e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generic CDE",permalink:"/ja/home/react-to-events/chain-data-extensions/Generic"},next:{title:"L2 Quirks",permalink:"/ja/home/react-to-events/L2-quirks"}},c={},l=[{value:"FAQ",id:"faq",level:2},{value:"Q: Do I need to write a CDE for my dApp? I have an API where people can fetch their account state in my dApp already",id:"q-do-i-need-to-write-a-cde-for-my-dapp-i-have-an-api-where-people-can-fetch-their-account-state-in-my-dapp-already",level:3},{value:"Q: All this seems only for reading state. What about writing state?",id:"q-all-this-seems-only-for-reading-state-what-about-writing-state",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(p,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-your-own-cde"},"Create your own CDE"),(0,o.kt)("p",null,"Although custom CDEs do not have to be added to Paima (people can just use the ",(0,o.kt)("a",{parentName:"p",href:"/ja/home/react-to-events/chain-data-extensions/Generic"},"generic CDE"),", adding a CDE to Paima itself helps both with usability and with type inference."),(0,o.kt)("p",null,"To add a custom CDE to Paima, you need to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"(templates - optional) add your contract to ",(0,o.kt)("inlineCode",{parentName:"li"},"packages/contracts")," if you think this contract should be bundled with Paima (useful for specifications like ERC20, etc. that might be reused often)")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fetcher (",(0,o.kt)("inlineCode",{parentName:"li"},"@paima/funnel"),"): fetches your data from the blockchain"),(0,o.kt)("li",{parentName:"ul"},"updater (",(0,o.kt)("inlineCode",{parentName:"li"},"@paima/sm"),"): handles creating updates for the Paima state machine / database when data for the CDE is found"),(0,o.kt)("li",{parentName:"ul"},"indexer (",(0,o.kt)("inlineCode",{parentName:"li"},"@paima/db"),"): stores historical onchain CDE updates to the database for games to easily access"),(0,o.kt)("li",{parentName:"ul"},"config (",(0,o.kt)("inlineCode",{parentName:"li"},"@paima/runtime"),"): handles parsing CDE config files users will write"),(0,o.kt)("li",{parentName:"ul"},"utils (",(0,o.kt)("inlineCode",{parentName:"li"},"@paima/utils"),"): provides utility functions on top your CDE (ex: get all NFTs owned by a user)")),(0,o.kt)("p",null,"With all these steps complete, your can create a pull request to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/PaimaStudios/paima-engine/"},"Paima codebase")," so users can leverage your CDE!"),(0,o.kt)("h2",{id:"faq"},"FAQ"),(0,o.kt)("h3",{id:"q-do-i-need-to-write-a-cde-for-my-dapp-i-have-an-api-where-people-can-fetch-their-account-state-in-my-dapp-already"},"Q: Do I need to write a CDE for my dApp? I have an API where people can fetch their account state in my dApp already"),(0,o.kt)("p",null,"It depends what you want. If actions in your dApp do no directly tie into the game world, you do not need a CDE. However, if you want actions in your dApp to be able to affect game state (ex: something like Pokemon where some pokemon only evolves if you trade them on a specific marketplace), then you will need a CDE so that the game can trustlessly update based on the onchain activity (otherwise, the game would break if your API ever goes down)"),(0,o.kt)("h3",{id:"q-all-this-seems-only-for-reading-state-what-about-writing-state"},"Q: All this seems only for reading state. What about writing state?"),(0,o.kt)("p",null,"CDEs are just about reading state from the chain and evolving the game based off of them. For creating transactions from the game frontend, you can use whatever API you prefer for creating the transaction. Do keep in mind that Paima does come with its own ",(0,o.kt)("a",{parentName:"p",href:"https://docs.paimastudios.com/home/multichain-support/wallet-layer"},"account abstraction framework")," for creating wallets, so if your API for creating transactions is too high-level (ex: if it handles the entire flow from wallet initialization through ",(0,o.kt)("inlineCode",{parentName:"p"},"window.ethereum")," down to creating the transaction) it may be hard to combine with our account abstraction framework."))}d.isMDXComponent=!0}}]);