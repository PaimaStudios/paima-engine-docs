"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[2144],{7843:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(5893),s=n(1151);const i={},r="Introduction to Paima Funnels",o={id:"home/react-to-events/funnel-types/intro",title:"Introduction to Paima Funnels",description:"paima-funnel is a core library which allows a consumer to initialize a chain funnel object which holds state regarding:",source:"@site/docs/home/300-react-to-events/3-funnel-types/1-intro.md",sourceDirName:"home/300-react-to-events/3-funnel-types",slug:"/home/react-to-events/funnel-types/intro",permalink:"/home/react-to-events/funnel-types/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/300-react-to-events/3-funnel-types/1-intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L2 Quirks",permalink:"/home/react-to-events/L2-quirks"},next:{title:"Configuring your Funnel",permalink:"/home/react-to-events/funnel-types/configuration"}},c={},l=[{value:"readData function",id:"readdata-function",level:3},{value:"readPresyncData function",id:"readpresyncdata-function",level:3},{value:"getDbTx",id:"getdbtx",level:3}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"introduction-to-paima-funnels",children:"Introduction to Paima Funnels"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.code,{children:"paima-funnel"})," is a core library which allows a consumer to initialize a chain funnel object which holds state regarding:"]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["The blockchain node (",(0,a.jsx)(t.code,{children:"CHAIN_URI"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["The deployed Paima Contract address (",(0,a.jsx)(t.code,{children:"CONTRACT_ADDRESS"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:["The set of ",(0,a.jsx)(t.a,{href:"/home/react-to-events/primitive-catalogue/introduction",children:"Primitives"})," that the developer provided"]}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Notably, funnels play a key role in allowing Paima to not just synchronize a single chain, but also combine multiple different data sources together such as DA layers, merging L1+L2 data together, or merging NFT data from different chains."}),"\n",(0,a.jsx)(t.p,{children:"All Paima Funnels implement a simple interface:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"interface ChainFunnel {\n  readData: (blockHeight: number) => Promise<ChainData[]>;\n  readPresyncData: (\n    args: ReadPresyncDataFrom\n  ) => Promise<{ [network: number]: PresyncChainData[] | 'finished' }>;\n  getDbTx(): PoolClient;\n}\n\ntype ReadPresyncDataFrom = {\n  network: Network;\n  from: number;\n  to: number;\n}[];\n"})}),"\n",(0,a.jsx)(t.p,{children:"Funnels are meant to be stateless between blocks to avoid subtle bugs in the case of errors during the sync process (so that state properly gets reset), as well as to encapsulate the fact that funnels are executed together in a joint SQL transaction. Funnels that need state should use:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["For persistent storage, use the Paima SQL database. This can be use to hydrate the funnel type using a custom-defined ",(0,a.jsx)(t.code,{children:"recoverState"}),". If used, you should NOT assume that data for your funnel being persisted in the database implies the game state machine will successfully be updated. Fetching data (funnels) and update the game machine are done in separate SQL transactions (so it's possible fetching data succeeds, but updating the game fails so re-fetching the data is required)"]}),"\n",(0,a.jsxs)(t.li,{children:["A custom cache entry in ",(0,a.jsx)(t.code,{children:"FunnelCacheManager"})," for state that either needs to be persisted (ex: query a batch of data that gets processed across multiple blocks) or that needs to be shared between funnels"]}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Multiple funnels are combined together based on the developer's needs using a combination of the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Composite_pattern",children:"composite pattern"})," and the ",(0,a.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Decorator_pattern",children:"decorator pattern"}),", allowing to mix-and-match funnel types depending on the game's setup to get all the data they need."]}),"\n",(0,a.jsx)(t.h3,{id:"readdata-function",children:"readData function"}),"\n",(0,a.jsxs)(t.p,{children:["At its core, Paima will call the ",(0,a.jsx)(t.code,{children:"readData"})," function according to ",(0,a.jsx)(t.code,{children:"POLLING_RATE"})," (which by default is based on ",(0,a.jsx)(t.code,{children:"BLOCK_TIME"}),"), and pass in the next expected block height (based off what is stored on disk by the Paima state machine)."]}),"\n",(0,a.jsxs)(t.p,{children:["Paima funnel is in charge of filling the ",(0,a.jsx)(t.code,{children:"ChainData"})," which represents the combined output of all the different funnels for a block. Its type is as follows"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"export interface ChainData {\n  timestamp: number;\n  blockHash: string;\n  blockNumber: number;\n  submittedData: SubmittedData[];\n  extensionDatums?: ChainDataExtensionDatum[];\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"readpresyncdata-function",children:"readPresyncData function"}),"\n",(0,a.jsxs)(t.p,{children:["When extensions are used, the runtime must start polling from a block height that was before any of the contracts referenced in the Primitives were deployed. Thus all events that take place (ie. all NFT mints/transfer events) are accounted for and are saved in the DB so the state machine has proper access to a valid copy of the current state of the contract. We call this the ",(0,a.jsx)(t.em,{children:"pre-sync"})," phase."]}),"\n",(0,a.jsxs)(t.p,{children:["In other words, this function is meant to gather events for ",(0,a.jsx)(t.a,{href:"/home/react-to-events/primitive-catalogue/introduction#accessing-the-collected-data",children:"Primitives"})," that happened before ",(0,a.jsx)(t.code,{children:"START_BLOCKHEIGHT"}),", or the equivalent point if other primitives from other chains are used."]}),"\n",(0,a.jsx)(t.h3,{id:"getdbtx",children:"getDbTx"}),"\n",(0,a.jsx)(t.p,{children:"Gets the database transaction used when executing this funnel"})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var a=n(7294);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);