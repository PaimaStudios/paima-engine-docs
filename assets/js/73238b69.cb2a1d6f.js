"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[1384],{400:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=i(5893),n=i(1151);const o={},r="Create your own Primitive",s={id:"home/react-to-events/primitive-catalogue/create-your-own",title:"Create your own Primitive",description:"Although custom Primitives do not always have to be added to Paima (people can just use the Generic EVM Primitive), adding a Primitive to Paima itself helps both with usability and with type inference.",source:"@site/docs/home/300-react-to-events/2-primitive-catalogue/2000-create-your-own.md",sourceDirName:"home/300-react-to-events/2-primitive-catalogue",slug:"/home/react-to-events/primitive-catalogue/create-your-own",permalink:"/home/react-to-events/primitive-catalogue/create-your-own",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/300-react-to-events/2-primitive-catalogue/2000-create-your-own.md",tags:[],version:"current",sidebarPosition:2e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generic Primitives",permalink:"/home/react-to-events/primitive-catalogue/mina/generic"},next:{title:"L2 Quirks",permalink:"/home/react-to-events/L2-quirks"}},c={},l=[{value:"FAQ",id:"faq",level:2},{value:"Q: Do I need to write a Primitive for my dApp? I have an API where people can fetch their account state in my dApp already",id:"q-do-i-need-to-write-a-primitive-for-my-dapp-i-have-an-api-where-people-can-fetch-their-account-state-in-my-dapp-already",level:3},{value:"Q: All this seems only for reading state. What about writing state?",id:"q-all-this-seems-only-for-reading-state-what-about-writing-state",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"create-your-own-primitive",children:"Create your own Primitive"}),"\n",(0,a.jsxs)(t.p,{children:["Although custom Primitives do not always have to be added to Paima (people can just use the ",(0,a.jsx)(t.a,{href:"/home/react-to-events/primitive-catalogue/evm/Generic",children:"Generic EVM Primitive"}),"), adding a Primitive to Paima itself helps both with usability and with type inference."]}),"\n",(0,a.jsx)(t.p,{children:"To add a custom Primitive to Paima, you need to do the following:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["(templates - optional) add your contract to ",(0,a.jsx)(t.code,{children:"packages/contracts"})," if you think this contract should be bundled with Paima (useful for specifications like ERC20, etc. that might be reused often)"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["fetcher (",(0,a.jsx)(t.code,{children:"@paima/funnel"}),"): fetches your data from the blockchain"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["updater (",(0,a.jsx)(t.code,{children:"@paima/sm"}),"): handles creating updates for the Paima state machine / database when data for the Primitive is found"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["indexer (",(0,a.jsx)(t.code,{children:"@paima/db"}),"): stores historical onchain Primitive updates to the database for games to easily access"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["config (",(0,a.jsx)(t.code,{children:"@paima/runtime"}),"): handles parsing Primitive config files users will write"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:["utils (",(0,a.jsx)(t.code,{children:"@paima/utils"}),"): provides utility functions on top your Primitive (ex: get all NFTs owned by a user)"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["With all these steps complete, your can create a pull request to the ",(0,a.jsx)(t.a,{href:"https://github.com/PaimaStudios/paima-engine/",children:"Paima codebase"})," so users can leverage your Primitive!"]}),"\n",(0,a.jsx)(t.h2,{id:"faq",children:"FAQ"}),"\n",(0,a.jsx)(t.h3,{id:"q-do-i-need-to-write-a-primitive-for-my-dapp-i-have-an-api-where-people-can-fetch-their-account-state-in-my-dapp-already",children:"Q: Do I need to write a Primitive for my dApp? I have an API where people can fetch their account state in my dApp already"}),"\n",(0,a.jsx)(t.p,{children:"It depends what you want. If actions in your dApp do no directly tie into the game world, you do not need a Primitive. However, if you want actions in your dApp to be able to affect game state (ex: something like Pokemon where some pokemon only evolves if you trade them on a specific marketplace), then you will need a Primitive so that the game can trustlessly update based on the onchain activity (otherwise, the game would break if your API ever goes down)"}),"\n",(0,a.jsx)(t.h3,{id:"q-all-this-seems-only-for-reading-state-what-about-writing-state",children:"Q: All this seems only for reading state. What about writing state?"}),"\n",(0,a.jsxs)(t.p,{children:["Primitives are just about reading state from the chain and evolving the game based off of them. For creating transactions from the game frontend, you can use whatever API you prefer for creating the transaction. Do keep in mind that Paima does come with its own ",(0,a.jsx)(t.a,{href:"/home/multichain-support/wallet-layer/introduction",children:"account abstraction framework"})," for creating wallets, so if your API for creating transactions is too high-level (ex: if it handles the entire flow from wallet initialization through ",(0,a.jsx)(t.code,{children:"window.ethereum"})," down to creating the transaction) it may be hard to combine with our account abstraction framework."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var a=i(7294);const n={},o=a.createContext(n);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);