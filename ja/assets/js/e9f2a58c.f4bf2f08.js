"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[7458],{7510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(5893),o=n(1151);const s={},a="Basic Concepts",c={id:"home/game-node-api/introduction",title:"Basic Concepts",description:"Games need to communicate not just with their UI, but also the rest of the web2 world that may want to interact with the game state. Paima exposes multiple different endpoints to help both with humans and tools to access the game state.",source:"@site/docs/home/350-game-node-api/1-introduction.md",sourceDirName:"home/350-game-node-api",slug:"/home/game-node-api/introduction",permalink:"/ja/home/game-node-api/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/350-game-node-api/1-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"L2 Block structure",permalink:"/ja/home/state-machine/structure"},next:{title:"Achievements",permalink:"/ja/home/game-node-api/achievements"}},r={},l=[{value:"(REST) OpenAPI",id:"rest-openapi",level:2},{value:"(MQTT) AsyncAPI",id:"mqtt-asyncapi",level:2},{value:"(JSON-RPC) EVM RPC API",id:"json-rpc-evm-rpc-api",level:2},{value:"(JSON) Precompile information",id:"json-precompile-information",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"basic-concepts",children:"Basic Concepts"}),"\n",(0,i.jsx)(t.p,{children:"Games need to communicate not just with their UI, but also the rest of the web2 world that may want to interact with the game state. Paima exposes multiple different endpoints to help both with humans and tools to access the game state."}),"\n",(0,i.jsx)(t.h2,{id:"rest-openapi",children:"(REST) OpenAPI"}),"\n",(0,i.jsxs)(t.p,{children:["Paima Engine comes with support for ",(0,i.jsx)(t.a,{href:"https://www.openapis.org/",children:"OpenAPI"})," in two ways:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["(for humans) ",(0,i.jsx)(t.code,{children:"http://localhost:3333/docs/rest/ui"})," to visually see the REST API generated for the node"]}),"\n",(0,i.jsxs)(t.li,{children:["(for robots) ",(0,i.jsx)(t.code,{children:"http://localhost:3333/docs/rest/spec.json"})," to access the OpenAPI specification for the node"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Notably, the specification can be combined with tools like ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/openapi-typescript",children:"openapi-typescript"})," to generate a typescript library for your application."]}),"\n",(0,i.jsxs)(t.p,{children:["To have your game's OpenAPI definition also show up in the docs, simply place an ",(0,i.jsx)(t.code,{children:"openapi.json"})," file inside the ",(0,i.jsx)(t.code,{children:"packaged"})," folder generated by your game, and Paima will automatically detect it (this is done automatically for you in the Paima game templates)"]}),"\n",(0,i.jsx)(t.h2,{id:"mqtt-asyncapi",children:"(MQTT) AsyncAPI"}),"\n",(0,i.jsxs)(t.p,{children:["Paima Engine comes with support for ",(0,i.jsx)(t.a,{href:"https://www.asyncapi.com/",children:"AsyncAPI"})," in two ways:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["(for humans) ",(0,i.jsx)(t.code,{children:"http://localhost:3333/docs/asyncapi/ui"})," to visually see the AsyncAPI generated for the node"]}),"\n",(0,i.jsxs)(t.li,{children:["(for robots) ",(0,i.jsx)(t.code,{children:"http://localhost:3333/docs/asyncapi/spec.yml"})," to access the AsyncAPI specification for the node"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["You don't typically have to interact with the specification directly, as you typically interact with these through the ",(0,i.jsx)(t.a,{href:"/ja/home/state-machine/creating-events/events/general-interface",children:"event log system"})]}),"\n",(0,i.jsx)(t.h2,{id:"json-rpc-evm-rpc-api",children:"(JSON-RPC) EVM RPC API"}),"\n",(0,i.jsxs)(t.p,{children:["Some tools only support the ",(0,i.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1474",children:"EVM JSON-RPC specification"}),". Since Paima applications are non-EVM in nature (they aggregate multiple stacks, some of which might not even be EVM at all), it doesn't support this specification fully."]}),"\n",(0,i.jsx)(t.p,{children:"However, Paima nodes expose a EVM RPC wrapper API that tries its best to emulate the same behavior as EVM."}),"\n",(0,i.jsxs)(t.p,{children:["You can access the wrapper API at ",(0,i.jsx)(t.code,{children:"http://localhost:3333/rpc/evm"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"NOTE"}),": this feature is still experimental, and we will update which endpoints work and which ones don't as well as subtle differences at a later time"]}),"\n",(0,i.jsx)(t.h2,{id:"json-precompile-information",children:"(JSON) Precompile information"}),"\n",(0,i.jsxs)(t.p,{children:["You can find information about all the ",(0,i.jsx)(t.a,{href:"/ja/home/state-machine/creating-events/precompiles/introduction",children:"precompiles"})," of the node at ",(0,i.jsx)(t.code,{children:"http://localhost:3333/docs/precompiles"})]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var i=n(7294);const o={},s=i.createContext(o);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);