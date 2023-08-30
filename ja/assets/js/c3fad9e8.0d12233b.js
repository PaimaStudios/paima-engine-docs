"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[283],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1895:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={},o="ERC20 CDEs",s={unversionedId:"home/Reacting to Events/Chain Data Extensions/ERC20",id:"home/Reacting to Events/Chain Data Extensions/ERC20",title:"ERC20 CDEs",description:"- ERC20, keeping track of wallet balances for a specified ERC20 contract;",source:"@site/docs/home/3 - Reacting to Events/2 - Chain Data Extensions/2 - ERC20.md",sourceDirName:"home/3 - Reacting to Events/2 - Chain Data Extensions",slug:"/home/Reacting to Events/Chain Data Extensions/ERC20",permalink:"/ja/home/Reacting to Events/Chain Data Extensions/ERC20",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3 - Reacting to Events/2 - Chain Data Extensions/2 - ERC20.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chain Data Extensions (CDEs)",permalink:"/ja/home/Reacting to Events/Chain Data Extensions/introduction"},next:{title:"ERC721 CDEs",permalink:"/ja/home/Reacting to Events/Chain Data Extensions/ERC721"}},l={},c=[{value:"ERC20",id:"erc20",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Utility functions",id:"utility-functions",level:3},{value:"ERC20Deposit",id:"erc20deposit",level:2},{value:"Example",id:"example-1",level:3},{value:"Meaning",id:"meaning-1",level:3},{value:"Paima Concise format",id:"paima-concise-format-1",level:3},{value:"Utility functions",id:"utility-functions-1",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"erc20-cdes"},"ERC20 CDEs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#erc20"},"ERC20"),", keeping track of wallet balances for a specified ERC20 contract;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#erc20deposit"},"ERC20Deposit"),", keeping track of the total amount of a specified ERC20 contract sent by wallets to a ")),(0,i.kt)("h2",{id:"erc20"},"ERC20"),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'extensions:\n  - name: "Bar"\n    type: "erc20"\n    contractAddress: "0xFE...11"\n    startBlockHeight: 4567123\n')),(0,i.kt)("h3",{id:"meaning"},"Meaning"),(0,i.kt)("p",null,"This extension allows you to track the balances of a specified ERC20 token for all wallets by processing ",(0,i.kt)("inlineCode",{parentName:"p"},"Transfer")," events the contract emits."),(0,i.kt)("h3",{id:"paima-concise-format"},"Paima Concise format"),(0,i.kt)("p",null,"The ERC20 CDE does not schedule any inputs, so the ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledPrefix")," field can be omitted."),(0,i.kt)("h3",{id:"utility-functions"},"Utility functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"getFungibleTokenBalance"),", to fetch the balance of a specified wallet address:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getFungibleTokenBalance(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  walletAddress: string\n): Promise<bigint | null>;\n")),(0,i.kt)("h2",{id:"erc20deposit"},"ERC20Deposit"),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'extensions:\n  - name: "Foo"\n    type: "erc20-deposit"\n    contractAddress: "0xFE...10"\n    startBlockHeight: 4567123\n    scheduledPrefix: "dp"\n    depositAddress: "0xAB...CD"\n')),(0,i.kt)("h3",{id:"meaning-1"},"Meaning"),(0,i.kt)("p",null,"Unlike the ERC20 extension, which keeps track of the overall balances of the specified token, this one only keeps track of transfers made to a ",(0,i.kt)("em",{parentName:"p"},"Deposit Address")," specified in the config file. It stores the total amount transferred, and triggers a scheduled input for each such transfer. The desired deposit address needs to be specified in the config file as the ",(0,i.kt)("inlineCode",{parentName:"p"},"depositAddress")," field as seen in the example earlier."),(0,i.kt)("h3",{id:"paima-concise-format-1"},"Paima Concise format"),(0,i.kt)("p",null,"A scheduled input is triggered every time a transfer is made to the deposit address. The scheduled input will have the following format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"prefix|fromAddr|value\n")),(0,i.kt)("p",null,"where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"prefix")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"scheduledPrefix")," specified in the config file,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fromAddr")," is the address from which tokens have been sent to the deposit address,"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"value")," is the amount transferred in base 10.")),(0,i.kt)("h3",{id:"utility-functions-1"},"Utility functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fetch the total amount the specified address has deposited to the deposit address")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"// total amount the specified address has deposited to the deposit address\nexport async function totalAmountDeposited(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  walletAddress: string\n): Promise<bigint | null>;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fetch the list of wallet addresses which have sent at least the specified threshold amount")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"export async function findUsersWithDepositsGreaterThan(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  thresholdAmount: bigint\n): Promise<string[]>;\n")))}p.isMDXComponent=!0}}]);