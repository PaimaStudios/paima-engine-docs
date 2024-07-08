"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[2181],{2220:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=t(5893),r=t(1151);const o={},a="Configuring your Funnel",s={id:"home/react-to-events/funnel-types/configuration",title:"Configuring your Funnel",description:"On startup, Paima Engine will look for a file name either",source:"@site/docs/home/300-react-to-events/3-funnel-types/200-configuration.md",sourceDirName:"home/300-react-to-events/3-funnel-types",slug:"/home/react-to-events/funnel-types/configuration",permalink:"/home/react-to-events/funnel-types/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/300-react-to-events/3-funnel-types/200-configuration.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parallel funnels",permalink:"/home/react-to-events/funnel-types/common-concepts/parallel-networks"},next:{title:"Block Funnel",permalink:"/home/react-to-events/funnel-types/block-funnel"}},l={},c=[{value:"Format",id:"format",level:2},{value:"Variables",id:"variables",level:2},{value:"Example",id:"example",level:2},{value:"Extensions",id:"extensions",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"configuring-your-funnel",children:"Configuring your Funnel"}),"\n",(0,i.jsxs)(n.p,{children:["On startup, Paima Engine will look for a file name either\n",(0,i.jsx)(n.code,{children:"config.${NETWORK}.yml"})," or ",(0,i.jsx)(n.code,{children:"config.${NETWORK}.yaml"})," for this. If this is not\nprovided, the config defaults to the one provided with the environment\nvariables (learn more ",(0,i.jsx)(n.a,{href:"/home/setup/environment-config-values",children:"here"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"format",children:"Format"}),"\n",(0,i.jsxs)(n.p,{children:["The format of the config file is a yaml object mapping of a network name to the\nconfig object. The name is used then in the ",(0,i.jsx)(n.code,{children:"extensions.yml"})," configuration in\norder to associate Paima Primitives with a particular network."]}),"\n",(0,i.jsxs)(n.p,{children:["Each entry should have a ",(0,i.jsx)(n.code,{children:"type"})," variable, which can be one of"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"evm-main"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"evm-other"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"cardano"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"mina"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"avail-main"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"avail-other"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["There can be only one entry of the ",(0,i.jsx)(n.code,{children:"main"})," type. In the case of ",(0,i.jsx)(n.code,{children:"evm-main"}),", this\nnetwork is the one that has the Paima contract deployed."]}),"\n",(0,i.jsxs)(n.p,{children:["Currently also there should only be one entry of type ",(0,i.jsx)(n.code,{children:"cardano"})," and ",(0,i.jsx)(n.code,{children:"mina"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["There can be multiple entries of the ",(0,i.jsx)(n.code,{children:"evm-other"})," or ",(0,i.jsx)(n.code,{children:"avail-other"})," types. A\nfunnel is instantiated for each one of these."]}),"\n",(0,i.jsx)(n.h2,{id:"variables",children:"Variables"}),"\n",(0,i.jsx)(n.p,{children:"For EVM networks, the following variables are required:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"chainUri: string\nchainId: number\nchainCurrencyName: string\nchainCurrencySymbol: string\nchainCurrencyDecimals: number\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Also, if the network is ",(0,i.jsx)(n.code,{children:"evm-main"}),", the paima contract address needs to be provided:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"paimaL2ContractAddress: string\n"})}),"\n",(0,i.jsx)(n.p,{children:"There are also some optional variables:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"chainExplorerUri: string\nfunnelBlockGroupSize: number\npresyncStepSize: number\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," These do ",(0,i.jsx)(n.em,{children:"not"})," default to the value in the corresponding\nenvironment configuration if not provided. Paima only defaults to the values in\nthe ENV file when the entire config file is missing."]}),"\n",(0,i.jsxs)(n.p,{children:["All the variables except ",(0,i.jsx)(n.code,{children:"funnelBlockGroupSize"})," have the same purpose and\ndefault values as they have in the environment configuration. Please refer to\n",(0,i.jsx)(n.a,{href:"/home/setup/environment-config-values",children:"that section"})," for details."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"funnelBlockGroupSize"})," it's used to control how many blocks are fetched in a\nsingle request per network, which helps if a network has a lower rate limit."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, for funnels that synchronize a parallel network, there are options to set\nup a delayed state. See ",(0,i.jsx)(n.a,{href:"common-concepts/parallel-networks#delayed-state",children:"this"}),"\nfor more details."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"# config.localhost.yml\nHardhat1:\n  type: evm-main\n  chainUri: 'http://localhost:8545'\n  chainId: 31337\n  chainCurrencyName: 'Test Hardhat Tokens'\n  chainCurrencySymbol: 'TEST'\n  chainCurrencyDecimals: 18\n  blockTime: 2\n  paimaL2ContractAddress: '0x5FbDB2315678afecb367f032d93F642f64180aa3'\n\nHardhat2:\n  type: evm-other\n  chainUri: 'http://localhost:8546'\n  chainId: 31338\n  chainCurrencyName: 'ETH'\n  chainCurrencySymbol: 'ETH'\n  chainCurrencyDecimals: 18\n  blockTime: 4\n  # this regulates the amount of blocks fetched during the sync in a single round. It helps to avoid rate-limiting.\n  funnelBlockGroupSize: 20\n\nCardano:\n  type: cardano\n  carpUrl: http://localhost:3000\n  network: preview\n  confirmationDepth: 10\n  paginationLimit: 2\n\nAvail:\n  type: avail-other\n  lightClient: 'http://localhost:7007'\n  rpc: ws://127.0.0.1:9944\n  delay: 200 \n  confirmationDepth: 10\n  funnelBlockGroupSize: 100\n  presyncStepSize: 1000\n"})}),"\n",(0,i.jsx)(n.h2,{id:"extensions",children:"Extensions"}),"\n",(0,i.jsxs)(n.p,{children:["If the config file is present, then the extensions should use the ",(0,i.jsx)(n.code,{children:"network"})," key to assign the primitive to a particular funnel. Learn more about extensions ",(0,i.jsx)(n.a,{href:"/home/react-to-events/primitive-catalogue/introduction#configuration",children:"here"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:'# extensions.yml\nextensions:\n  - name: "Bar"\n    type: "erc20"\n    contractAddress: "0x0000000000000000000000000000000000000001"\n    startBlockHeight: 0\n    # This is required so that the funnel can know which extensions it should care about\n    network: "Hardhat1"\n\n  - name: "Foo"\n    type: "erc20"\n    contractAddress: "0x0000000000000000000000000000000000000002"\n    startBlockHeight: 100\n    network: "Hardhat2"\n'})})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(7294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);