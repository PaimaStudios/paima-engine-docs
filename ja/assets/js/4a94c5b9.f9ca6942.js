"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[8361],{9969:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=a(5893),s=a(1151);const r={},i="Hardhat task list",c={id:"home/libraries/evm-contracts/hardhat-tasks",title:"Hardhat task list",description:"Paima Hardhat tasks allow easily interacting with the Paima contracts through the CLI or other external tools.",source:"@site/docs/home/10000-libraries/100-evm-contracts/300-hardhat-tasks.md",sourceDirName:"home/10000-libraries/100-evm-contracts",slug:"/home/libraries/evm-contracts/hardhat-tasks",permalink:"/ja/home/libraries/evm-contracts/hardhat-tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/10000-libraries/100-evm-contracts/300-hardhat-tasks.md",tags:[],version:"current",sidebarPosition:300,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Generated Docs",permalink:"/ja/home/libraries/evm-contracts/solidity/generated-docs"},next:{title:"prc-2\uff1aPaima Hololocker Interface",permalink:"/ja/home/PRCs/prc-2"}},o={},d=[{value:"Task list",id:"task-list",level:2},{value:"<code>PaimaL2Contract:setFee</code>",id:"paimal2contractsetfee",level:3},{value:"<code>PaimaL2Contract:setOwner</code>",id:"paimal2contractsetowner",level:3},{value:"<code>PaimaL2Contract:withdrawFunds</code>",id:"paimal2contractwithdrawfunds",level:3},{value:"<code>PaimaL2Contract:submitGameInput</code>",id:"paimal2contractsubmitgameinput",level:3},{value:"<code>PaimaL2Contract:recentInputs</code>",id:"paimal2contractrecentinputs",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"hardhat-task-list",children:"Hardhat task list"}),"\n",(0,n.jsx)(t.p,{children:"Paima Hardhat tasks allow easily interacting with the Paima contracts through the CLI or other external tools."}),"\n",(0,n.jsx)(t.p,{children:"To use the Paima Hardhat tasks, follow these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://hardhat.org/hardhat-runner/docs/getting-started",children:"Install Hardhat"})," (and all required peer dependencies) to your project."]}),"\n",(0,n.jsxs)(t.li,{children:["Add ",(0,n.jsx)(t.code,{children:"import @paima/evm-contracts/plugin"})," to the top of your ",(0,n.jsx)(t.code,{children:"hardhat.config.ts"})," file"]}),"\n",(0,n.jsxs)(t.li,{children:["Run ",(0,n.jsx)(t.code,{children:"npx hardhat paima"})," to see a list of all utilities provided"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["These are all the ",(0,n.jsx)(t.a,{href:"https://hardhat.org/hardhat-runner/docs/advanced/create-task",children:"hardhat tasks"})," available for the scope ",(0,n.jsx)(t.code,{children:"paima"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["You can call each of these tasks using ",(0,n.jsx)(t.code,{children:"npx hardhat paima task_name"})]}),"\n",(0,n.jsx)(t.h2,{id:"task-list",children:"Task list"}),"\n",(0,n.jsx)(t.h3,{id:"paimal2contractsetfee",children:(0,n.jsx)(t.code,{children:"PaimaL2Contract:setFee"})}),"\n",(0,n.jsx)(t.p,{children:"Sets the fee of a Paima L2 contract"}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"contract"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The contracts's address"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"fee"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The new fee (wei)"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"paimal2contractsetowner",children:(0,n.jsx)(t.code,{children:"PaimaL2Contract:setOwner"})}),"\n",(0,n.jsx)(t.p,{children:"Sets the owner of a Paima L2 contract"}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"contract"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The contracts's address"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"owner"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The new owner address"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"paimal2contractwithdrawfunds",children:(0,n.jsx)(t.code,{children:"PaimaL2Contract:withdrawFunds"})}),"\n",(0,n.jsx)(t.p,{children:"Withdraws funds out of the Paima L2 contract"}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"contract"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The contracts's address"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"paimal2contractsubmitgameinput",children:(0,n.jsx)(t.code,{children:"PaimaL2Contract:submitGameInput"})}),"\n",(0,n.jsx)(t.p,{children:"Submit data to the Paima L2 contract"}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"contract"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The contracts's address"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"data"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The data to submit either hex-encoded (0x...) or Paima concise-encoded"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"paimal2contractrecentinputs",children:(0,n.jsx)(t.code,{children:"PaimaL2Contract:recentInputs"})}),"\n",(0,n.jsx)(t.p,{children:"Gets data recently submitted to the Paima L2 contract"}),"\n",(0,n.jsx)(t.p,{children:"Parameters:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"contract"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The contracts's address"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"data"})," ",(0,n.jsx)(t.em,{children:"(optional, string)"})," : The data to submit in hex-encoded for (0x...)"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"range"})," ",(0,n.jsx)(t.em,{children:"(optional, int)"})," : How far back to get events (default: look back 1000 blocks from tip)"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var n=a(7294);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);