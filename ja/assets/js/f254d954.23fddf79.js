"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[94],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>g});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return t?i.createElement(g,o(o({ref:n},m),{},{components:t})):i.createElement(g,o({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3247:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=t(7462),a=(t(7294),t(3905));const r={},o="Game Versioning",s={unversionedId:"home/releasing-a-game/versioning",id:"home/releasing-a-game/versioning",title:"Game Versioning",description:"Games often require frequent updates to keep users engaged, so Paima makes releasing new versions of games as easy as possible.",source:"@site/docs/home/6-releasing-a-game/2-versioning.md",sourceDirName:"home/6-releasing-a-game",slug:"/home/releasing-a-game/versioning",permalink:"/ja/home/releasing-a-game/versioning",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/6-releasing-a-game/2-versioning.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Snapshotting",permalink:"/ja/home/database-management/snapshotting"}},l={},c=[{value:"Updating your state machine",id:"updating-your-state-machine",level:2},{value:"Updating a game with active players",id:"updating-a-game-with-active-players",level:2},{value:"Semantic Versioning",id:"semantic-versioning",level:3},{value:"Specifying Version",id:"specifying-version",level:3},{value:"For your frontend",id:"for-your-frontend",level:4},{value:"For your backend",id:"for-your-backend",level:4},{value:"Verifying Version Compatibility In Middleware",id:"verifying-version-compatibility-in-middleware",level:3}],m={toc:c},u="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(u,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"game-versioning"},"Game Versioning"),(0,a.kt)("p",null,"Games often require frequent updates to keep users engaged, so Paima makes releasing new versions of games as easy as possible."),(0,a.kt)("h2",{id:"updating-your-state-machine"},"Updating your state machine"),(0,a.kt)("p",null,"Since games written with Paima are typically all onchain, you need to be able to introduce your new code without breaking validation of old data."),(0,a.kt)("p",null,"This is done by allowing games to modify which state machine they use based on the current block number. We call this the ",(0,a.kt)("inlineCode",{parentName:"p"},"gameStateTransitionRouter"),"."),(0,a.kt)("p",null,"The process to ",(0,a.kt)("a",{parentName:"p",href:"../1-setting-up-your-environment/how-to-use-paima-engine#packing-your-game-code"},"pack your game code")," will set it up so that Paima Engine can easily find this router function, and Paima Engine will automatically call it to know which state transition function to call for a given block height."),(0,a.kt)("p",null,"Here is an example of how you can update your transition router to call your new state transition function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const V2_START_HEIGHT = ...;\n\nfunction gameStateTransitionRouter(blockHeight: number) {\n  if (ENV.START_BLOCKHEIGHT <= blockHeight && ENV.START_BLOCKHEIGHT + V2_START_HEIGHT > blockHeight) {\n    return gameStateTransitionV1;\n  }\n  if (ENV.START_BLOCKHEIGHT + V2_START_HEIGHT <= blockHeight) return gameStateTransitionV2;\n  else return gameStateTransitionV1;\n}\n")),(0,a.kt)("h2",{id:"updating-a-game-with-active-players"},"Updating a game with active players"),(0,a.kt)("p",null,"For a game with active players, submitting a new version of the game with a new state machine is not enough. We actually need to have clear versioning for the backend so the middleware/frontend know if they are compatible. This is important in cases such as making upgrades to the round executor, but a user can still be left on an old version of the frontend/middleware loaded on their device and need to refresh/update."),(0,a.kt)("p",null,"As such we will add versioning to the game's whole backend, and ensure that when the middleware is compiled it targets a specific major version."),(0,a.kt)("h3",{id:"semantic-versioning"},"Semantic Versioning"),(0,a.kt)("p",null,"We will use the classic semantic versioning of ",(0,a.kt)("inlineCode",{parentName:"p"},"MAJOR.MINOR.PATCH")," format. In our case for games, specifically:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Major versions must be incremented when anything in the STF is updated (thus including the round executor) or anything else which breaks backward compatibility for the middleware."),(0,a.kt)("li",{parentName:"ol"},"Minor version must be incremented when new features are added to the backend which are compatible."),(0,a.kt)("li",{parentName:"ol"},"Patch version is incremented when compatible bug fixes are made.")),(0,a.kt)("h3",{id:"specifying-version"},"Specifying Version"),(0,a.kt)("h4",{id:"for-your-frontend"},"For your frontend"),(0,a.kt)("p",null,"When initializing the middleware, pass your app's version number to ",(0,a.kt)("inlineCode",{parentName:"p"},"initMiddlewareCore")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export const gameBackendVersion: VersionString = ...;\nexport const GAME_NAME: string = ...;\n\ninitMiddlewareCore(GAME_NAME, gameBackendVersion);\n")),(0,a.kt)("h4",{id:"for-your-backend"},"For your backend"),(0,a.kt)("p",null,"TBD. This is still in development: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaimaStudios/paima-engine/issues/209"},"https://github.com/PaimaStudios/paima-engine/issues/209")),(0,a.kt)("h3",{id:"verifying-version-compatibility-in-middleware"},"Verifying Version Compatibility In Middleware"),(0,a.kt)("p",null,"It's up to you as a developer to check if the versions match in the place that makes the most sense for your game, and handle it the way you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"import { localRemoteVersionsCompatible } from 'paima-sdk/paima-mw-core';\n\nasync function someAction() {\n  // check if versions match\n  await localRemoteVersionsCompatible();\n}\n")),(0,a.kt)("p",null,"The only place Paima will check for you is inside the built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"userWalletLogin")," utility function, which will throw a ",(0,a.kt)("inlineCode",{parentName:"p"},"PaimaMiddlewareErrorCode.BACKEND_VERSION_INCOMPATIBLE")," if the major versions do not match."))}p.isMDXComponent=!0}}]);