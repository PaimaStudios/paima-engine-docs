"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[1573],{1129:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var i=t(5893),s=t(1151);const a={},r="Carp Funnel",o={id:"home/state-machine/react-to-events/funnel-types/carp-funnel",title:"Carp Funnel",description:"This funnel allows using Cardano Primitives leveraging Carp. It's enabled when either Cardano is specified in the settings or .env.",source:"@site/docs/home/100-state-machine/300-react-to-events/3-funnel-types/500-carp-funnel.md",sourceDirName:"home/100-state-machine/300-react-to-events/3-funnel-types",slug:"/home/state-machine/react-to-events/funnel-types/carp-funnel",permalink:"/ja/home/state-machine/react-to-events/funnel-types/carp-funnel",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/300-react-to-events/3-funnel-types/500-carp-funnel.md",tags:[],version:"current",sidebarPosition:500,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Emulated Block Funnel (Stable Ticks)",permalink:"/ja/home/state-machine/react-to-events/funnel-types/stable-tick-rate-funnel"},next:{title:"Parallel EVM funnel",permalink:"/ja/home/state-machine/react-to-events/funnel-types/parallel-evm-funnel"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Determinism",id:"determinism",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"carp-funnel",children:"Carp Funnel"}),"\n",(0,i.jsxs)(n.p,{children:["This funnel allows using Cardano Primitives leveraging ",(0,i.jsx)(n.a,{href:"https://dcspark.github.io/carp/docs/intro",children:"Carp"}),". It's enabled when either Cardano is specified in the ",(0,i.jsx)(n.a,{href:"/ja/home/state-machine/react-to-events/funnel-types/configuration",children:"settings"})," or ",(0,i.jsx)(n.a,{href:"/ja/home/setup/environment-config-values",children:".env"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"network"})," which Cardano network this funnel will track"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"confirmationDepth"})," when a block is considered stable"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"paginationLimit"})," used as the pagination limit for underlying Carp queries"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:["An instance of Carp is required to index the data for this funnel. Additionally, the ",(0,i.jsx)(n.code,{children:"MultieraAddressDelegationTask"})," task needs to be in the execution plan. For setup, refer to the ",(0,i.jsx)(n.a,{href:"https://dcspark.github.io/carp/",children:"documentation"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"determinism",children:"Determinism"}),"\n",(0,i.jsxs)(n.p,{children:["Ensuring consistency in the state transition for a block during synchronization across multiple synchronization rounds is crucial to ensure that the game state transitions are deterministic. To achieve this, events merged with a specific EVM block at height B are collected by considering both ",(0,i.jsx)(n.code,{children:"timestamp(B)"})," and ",(0,i.jsx)(n.code,{children:"timestamp(B - 1)"}),". The timestamps are then mapped to the corresponding absolute slots in Cardano, with an adjustment for finality. All events within this slot range are consolidated into a single state transition. This range is open on the lower bound, and closed on the upper bound. In the case where it's not possible to know if all the events in the range are already below the confirmation point, the funnel will wait before returning for enough Cardano blocks to be generated, in order to get above the maximum slot required."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var i=t(7294);const s={},a=i.createContext(s);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);