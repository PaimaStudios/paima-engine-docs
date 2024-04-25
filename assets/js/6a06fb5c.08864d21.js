"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[2692],{3122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var l=n(5893),a=n(1151);const i={},r="Introduction",o={id:"home/multichain-support/wallet-layer/delegate-wallet/introduction",title:"Introduction",description:"Delegate Wallet allows for a wallet address to be delegated to another wallet address.",source:"@site/docs/home/700-multichain-support/2-wallet-layer/100-delegate-wallet/1-introduction.mdx",sourceDirName:"home/700-multichain-support/2-wallet-layer/100-delegate-wallet",slug:"/home/multichain-support/wallet-layer/delegate-wallet/introduction",permalink:"/home/multichain-support/wallet-layer/delegate-wallet/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/700-multichain-support/2-wallet-layer/100-delegate-wallet/1-introduction.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basics",permalink:"/home/multichain-support/wallet-layer/introduction"},next:{title:"Effect on Interfaces",permalink:"/home/multichain-support/wallet-layer/delegate-wallet/interfaces"}},s={},c=[];function d(e){const t={a:"a",code:"code",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.h1,{id:"introduction",children:"Introduction"}),"\n",(0,l.jsx)(t.p,{children:"Delegate Wallet allows for a wallet address to be delegated to another wallet address."}),"\n",(0,l.jsxs)(t.p,{children:["In practice, a user can use wallet address ",(0,l.jsx)(t.code,{children:"A"})," to play, but their real wallet address is ",(0,l.jsx)(t.code,{children:"B"})]}),"\n",(0,l.jsx)(t.p,{children:"Some use cases:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Better UX"}),': By using a "Local Wallet" within the browser and sending transactions through the "Batcher", so each transaction gets signed automatically.']}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Security"}),': Allowing players to have a "Burner Wallet" with limited funds to play on.']}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Security"}),": Reduce interaction with real wallet."]}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.strong,{children:"Account Recovery"}),": account can be re-delegated to a new wallet address."]}),"\n"]}),"\n",(0,l.jsxs)(t.p,{children:["This feature is optional and you can implement at any time.\nHowever, it's good practice use ",(0,l.jsx)(t.code,{children:"user_id"})," in the STF to identify the user, and not the wallet address in case you end up implementing wallet delegation later."]}),"\n",(0,l.jsx)(t.p,{children:"Feature notes:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Delegation can be done after-the-fact (ex: you can play on a burner wallet, and connect it to a main wallet later)"}),"\n",(0,l.jsx)(t.li,{children:"Delegations can be cancelled"}),"\n",(0,l.jsxs)(t.li,{children:[(0,l.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Cycle_(graph_theory)",children:"Cycles"})," are not allowed"]}),"\n",(0,l.jsx)(t.li,{children:"Main wallet state can be delegated to multiple burner wallets (ex: playing on multiple devices at once)"}),"\n"]}),"\n",(0,l.jsx)(t.p,{children:"Security risk:"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"Somebody could trick you into delegating your game state to them (steal all your in-game progress). To avoid this, the delegation transaction uses human-readable strings so the user can easily see what they are signing."}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var l=n(7294);const a={},i=l.createContext(a);function r(e){const t=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);