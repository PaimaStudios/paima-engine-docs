"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[655],{8605:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var i=t(5893),a=t(1151);const r={},o="Generic Primitives",c={id:"home/state-machine/react-to-events/primitive-catalogue/mina/generic",title:"Generic Primitives",description:"- Generic, allowing you to provide an arbitrary contract address to track any event / action it emits, allowing you to collect data even from smart contract standards not directly supported by other primitives.",source:"@site/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/30-mina/10-generic.md",sourceDirName:"home/100-state-machine/300-react-to-events/10-primitive-catalogue/30-mina",slug:"/home/state-machine/react-to-events/primitive-catalogue/mina/generic",permalink:"/home/state-machine/react-to-events/primitive-catalogue/mina/generic",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/30-mina/10-generic.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Cardano Projected NFT",permalink:"/home/state-machine/react-to-events/primitive-catalogue/cardano/projected-nft"},next:{title:"Create your own Primitive",permalink:"/home/state-machine/react-to-events/primitive-catalogue/create-your-own"}},s={},m=[{value:"Generic",id:"generic",level:2},{value:"Example configuration",id:"example-configuration",level:3},{value:"Concise format",id:"concise-format",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"generic-primitives",children:"Generic Primitives"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"#generic",children:"Generic"}),", allowing you to provide an arbitrary contract address to track any ",(0,i.jsx)(n.a,{href:"https://docs.minaprotocol.com/zkapps/o1js/fetch-events-and-actions",children:"event / action"})," it emits, allowing you to collect data even from smart contract standards not directly supported by other primitives."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"generic",children:"Generic"}),"\n",(0,i.jsx)(n.p,{children:"Generic primitives allow getting all of the events or all the actions provided the address of a zkApp."}),"\n",(0,i.jsx)(n.h3,{id:"example-configuration",children:"Example configuration"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  - name: "mina generic event"\n    type: "mina-event-generic"\n    address: "B62qoP3xe9zZJmBDacZPL8roBivpVKhAiDNtpAM9RCAW579JnJo1ZL2"\n    startBlockHeight: 0\n    scheduledPrefix: "mge"\n    network: \'Mina\'\n  - name: "mina generic action"\n    type: "mina-action-generic"\n    address: "B62qoP3xe9zZJmBDacZPL8roBivpVKhAiDNtpAM9RCAW579JnJo1ZL2"\n    startBlockHeight: 0\n    scheduledPrefix: "mga"\n    network: \'Mina\'\n'})}),"\n",(0,i.jsx)(n.h2,{id:"concise-format",children:"Concise format"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"minaGenericEvent = mge|data\nminaGenericAction = mga|data\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"const minaGenericEvent: ParserRecord<MinaGenericEvent> = {\n  data: PaimaParser.Json(),\n};\n\nconst minaGenericAction: ParserRecord<MinaGenericAction> = {\n  data: PaimaParser.Json(),\n};\n"})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>o});var i=t(7294);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);