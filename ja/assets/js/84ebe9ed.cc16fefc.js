"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[82],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="ERC6551 CDEs",s={unversionedId:"home/react-to-events/chain-data-extensions/ERC6551",id:"home/react-to-events/chain-data-extensions/ERC6551",title:"ERC6551 CDEs",description:"- ERC6551 Registry, keeping track of registrations of Token-Bound Accounts (TBAs) on the chain",source:"@site/docs/home/3-react-to-events/2-chain-data-extensions/4-ERC6551.md",sourceDirName:"home/3-react-to-events/2-chain-data-extensions",slug:"/home/react-to-events/chain-data-extensions/ERC6551",permalink:"/ja/home/react-to-events/chain-data-extensions/ERC6551",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3-react-to-events/2-chain-data-extensions/4-ERC6551.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERC721 CDEs",permalink:"/ja/home/react-to-events/chain-data-extensions/ERC721"},next:{title:"Generic CDE",permalink:"/ja/home/react-to-events/chain-data-extensions/Generic"}},c={},l=[{value:"ERC6551 Registry",id:"erc6551-registry",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Utility functions",id:"utility-functions",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"erc6551-cdes"},"ERC6551 CDEs"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#erc6551-registry"},"ERC6551 Registry"),", keeping track of registrations of Token-Bound Accounts (TBAs) on the chain")),(0,a.kt)("h2",{id:"erc6551-registry"},"ERC6551 Registry"),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'extensions:\n  - name: "ERC6551 Registry"\n    type: "erc6551-registry"\n    contractAddress: "0x01...ef" # optional. Uses the standardized ERC6551 registry by default\n    implementation: "0x01...ef" # optional. Filters to only TBAs created with a specific implementation\n    tokenContract: "0x01...ef" # optional. Filters to only TBAs for a specific NFT collection\n    tokenId: "1234" # optional. Filters to only TBAs for a specific token ID in the collection\n    salt: "1234" # optional. Filters to only TBAs generated with a specific salt. Note: this is not an `indexed` field in the contract, so this will not lower the number of RPC calls\n    startBlockHeight: 7654321\n')),(0,a.kt)("h3",{id:"meaning"},"Meaning"),(0,a.kt)("p",null,"ERC6551 uses a ",(0,a.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-6551#registry"},"global registry")," that where all TBAs are registered. This address is constant among all chains, and acts as an easy way to know all the TBAs deployed to the chain"),(0,a.kt)("p",null,"This extension allows you to track all the TBAs that exist so that your game can easily aggregate state across different accounts owned by the same player, and it can allow you to treat specific kinds of TBA (ex: where the owner is a specific NFT for your game or a specific tool like ",(0,a.kt)("a",{parentName:"p",href:"https://www.stp.network"},"AWNS"),") differently."),(0,a.kt)("h3",{id:"utility-functions"},"Utility functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getErc6551AccountOwner"),", fetch the NFT that owns this account:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getErc6551AccountOwner(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  accountCreated: string\n): Promise<TokenIdPair | null>;\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"getAllOwnedErc6551Accounts"),", fetch all accounts owned by this NFT. This call is NOT recursive:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"export async function getErc6551AccountOwner(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  nft: TokenIdPair\n): Promise<string[]>;\n")))}d.isMDXComponent=!0}}]);