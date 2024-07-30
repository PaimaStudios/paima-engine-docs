"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[8290],{6031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(5893),s=n(1151);const o={},a="L2 Quirks",r={id:"home/state-machine/react-to-events/L2-quirks",title:"L2 Quirks",description:"L2s often have different definitions for certain fields inside blocks. If you are deploying a game with Paima on top of one of these L2s, you need to understand the meaning of these values to avoid tipfalls. To facilitate these, we've generated a table of the meaning of these values for the most commons L2s.",source:"@site/docs/home/100-state-machine/300-react-to-events/100-L2-quirks.md",sourceDirName:"home/100-state-machine/300-react-to-events",slug:"/home/state-machine/react-to-events/L2-quirks",permalink:"/ja/home/state-machine/react-to-events/L2-quirks",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/300-react-to-events/100-L2-quirks.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create your own Primitive",permalink:"/ja/home/state-machine/react-to-events/primitive-catalogue/create-your-own"},next:{title:"Introduction",permalink:"/ja/home/state-machine/creating-events/introduction"}},c={},l=[{value:"Arbitrum",id:"arbitrum",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"l2-quirks",children:"L2 Quirks"}),"\n",(0,i.jsx)(t.p,{children:"L2s often have different definitions for certain fields inside blocks. If you are deploying a game with Paima on top of one of these L2s, you need to understand the meaning of these values to avoid tipfalls. To facilitate these, we've generated a table of the meaning of these values for the most commons L2s."}),"\n",(0,i.jsx)(t.h2,{id:"arbitrum",children:"Arbitrum"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Block number"}),": When you get a block, it contains two fields:","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"number"})," which is simply an increasing value starting from 0"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"l1BlockNumber"})," underlying L1 block"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Block timestamp"}),": ",(0,i.jsx)(t.code,{children:"block.timestamp"})," is similar in behavior to L1, but two different blocks in L2 can have the same ",(0,i.jsx)(t.code,{children:"block.timestamp"}),", unlike in L1. This is because Arbitrum One produces about 4 blocks a second. If each block needed a new timestamp it would get way out of sync with the real time because it's denominated in seconds and would need to increase 4 times a second."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:"Block hash"}),": Arbitrum\u2019s L2 block hash is calculated using the same function as Ethereum, but just over Arbitrum's modified block format created by the sequencer"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);