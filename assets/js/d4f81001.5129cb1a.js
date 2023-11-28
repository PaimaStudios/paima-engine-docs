"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[7361],{4379:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=i(5893),t=i(1151);const o={},s="Game Versioning",r={id:"home/releasing-a-game/versioning",title:"Game Versioning",description:"Games often require frequent updates to keep users engaged, so Paima makes releasing new versions of games as easy as possible.",source:"@site/docs/home/600-releasing-a-game/2-versioning.md",sourceDirName:"home/600-releasing-a-game",slug:"/home/releasing-a-game/versioning",permalink:"/home/releasing-a-game/versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/600-releasing-a-game/2-versioning.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Database Snapshotting",permalink:"/home/database-management/snapshotting"},next:{title:"Introduction",permalink:"/home/multichain-support/projected-nfts/introduction"}},c={},l=[{value:"Updating your state machine",id:"updating-your-state-machine",level:2},{value:"Updating a game with active players",id:"updating-a-game-with-active-players",level:2},{value:"Semantic Versioning",id:"semantic-versioning",level:3},{value:"Specifying Version",id:"specifying-version",level:3},{value:"For your frontend",id:"for-your-frontend",level:4},{value:"For your backend",id:"for-your-backend",level:4},{value:"Verifying Version Compatibility In Middleware",id:"verifying-version-compatibility-in-middleware",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"game-versioning",children:"Game Versioning"}),"\n",(0,a.jsx)(n.p,{children:"Games often require frequent updates to keep users engaged, so Paima makes releasing new versions of games as easy as possible."}),"\n",(0,a.jsx)(n.h2,{id:"updating-your-state-machine",children:"Updating your state machine"}),"\n",(0,a.jsx)(n.p,{children:"Since games written with Paima are typically all onchain, you need to be able to introduce your new code without breaking validation of old data."}),"\n",(0,a.jsxs)(n.p,{children:["This is done by allowing games to modify which state machine they use based on the current block number. We call this the ",(0,a.jsx)(n.code,{children:"gameStateTransitionRouter"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The process to ",(0,a.jsx)(n.a,{href:"../1-setting-up-your-environment/how-to-use-paima-engine#packing-your-game-code",children:"pack your game code"})," will set it up so that Paima Engine can easily find this router function, and Paima Engine will automatically call it to know which state transition function to call for a given block height."]}),"\n",(0,a.jsx)(n.p,{children:"Here is an example of how you can update your transition router to call your new state transition function"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"const V2_START_HEIGHT = ...;\n\nfunction gameStateTransitionRouter(blockHeight: number) {\n  if (ENV.START_BLOCKHEIGHT <= blockHeight && ENV.START_BLOCKHEIGHT + V2_START_HEIGHT > blockHeight) {\n    return gameStateTransitionV1;\n  }\n  if (ENV.START_BLOCKHEIGHT + V2_START_HEIGHT <= blockHeight) return gameStateTransitionV2;\n  else return gameStateTransitionV1;\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"updating-a-game-with-active-players",children:"Updating a game with active players"}),"\n",(0,a.jsx)(n.p,{children:"For a game with active players, submitting a new version of the game with a new state machine is not enough. We actually need to have clear versioning for the backend so the middleware/frontend know if they are compatible. This is important in cases such as making upgrades to the round executor, but a user can still be left on an old version of the frontend/middleware loaded on their device and need to refresh/update."}),"\n",(0,a.jsx)(n.p,{children:"As such we will add versioning to the game's whole backend, and ensure that when the middleware is compiled it targets a specific major version."}),"\n",(0,a.jsx)(n.h3,{id:"semantic-versioning",children:"Semantic Versioning"}),"\n",(0,a.jsxs)(n.p,{children:["We will use the classic semantic versioning of ",(0,a.jsx)(n.code,{children:"MAJOR.MINOR.PATCH"})," format. In our case for games, specifically:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Major versions must be incremented when anything in the STF is updated (thus including the round executor) or anything else which breaks backward compatibility for the middleware."}),"\n",(0,a.jsx)(n.li,{children:"Minor version must be incremented when new features are added to the backend which are compatible."}),"\n",(0,a.jsx)(n.li,{children:"Patch version is incremented when compatible bug fixes are made."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"specifying-version",children:"Specifying Version"}),"\n",(0,a.jsx)(n.h4,{id:"for-your-frontend",children:"For your frontend"}),"\n",(0,a.jsxs)(n.p,{children:["When initializing the middleware, pass your app's version number to ",(0,a.jsx)(n.code,{children:"initMiddlewareCore"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"export const gameBackendVersion: VersionString = ...;\nexport const GAME_NAME: string = ...;\n\ninitMiddlewareCore(GAME_NAME, gameBackendVersion);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"for-your-backend",children:"For your backend"}),"\n",(0,a.jsxs)(n.p,{children:["TBD. This is still in development: ",(0,a.jsx)(n.a,{href:"https://github.com/PaimaStudios/paima-engine/issues/209",children:"https://github.com/PaimaStudios/paima-engine/issues/209"})]}),"\n",(0,a.jsx)(n.h3,{id:"verifying-version-compatibility-in-middleware",children:"Verifying Version Compatibility In Middleware"}),"\n",(0,a.jsx)(n.p,{children:"It's up to you as a developer to check if the versions match in the place that makes the most sense for your game, and handle it the way you want."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"import { localRemoteVersionsCompatible } from '@paima/sdk/mw-core';\n\nasync function someAction() {\n  // check if versions match\n  await localRemoteVersionsCompatible();\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The only place Paima will check for you is inside the built-in ",(0,a.jsx)(n.code,{children:"userWalletLogin"})," utility function, which will throw a ",(0,a.jsx)(n.code,{children:"PaimaMiddlewareErrorCode.BACKEND_VERSION_INCOMPATIBLE"})," if the major versions do not match. This won't be enough to warn users already playing a game to refresh their app if the backend version changes."]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>s});var a=i(7294);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);