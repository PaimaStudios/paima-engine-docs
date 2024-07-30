"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[479],{6625:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=i(5893),s=i(1151);const r={},c="ERC721 Primitives",o={id:"home/state-machine/react-to-events/primitive-catalogue/evm/ERC721",title:"ERC721 Primitives",description:"- ERC721, keeping track of NFT ownership for a specified ERC721 contract at the currently processed blockheight, as well as generating scheduled inputs for newly minted NFTs;",source:"@site/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/10-evm/3-ERC721.md",sourceDirName:"home/100-state-machine/300-react-to-events/10-primitive-catalogue/10-evm",slug:"/home/state-machine/react-to-events/primitive-catalogue/evm/ERC721",permalink:"/ja/home/state-machine/react-to-events/primitive-catalogue/evm/ERC721",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/10-evm/3-ERC721.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ERC20 Primitives",permalink:"/ja/home/state-machine/react-to-events/primitive-catalogue/evm/ERC20"},next:{title:"ERC6551 Primitives",permalink:"/ja/home/state-machine/react-to-events/primitive-catalogue/evm/ERC6551"}},a={},l=[{value:"ERC721",id:"erc721",level:2},{value:"Example",id:"example",level:3},{value:"Meaning",id:"meaning",level:3},{value:"Paima Concise format",id:"paima-concise-format",level:3},{value:"Utility functions",id:"utility-functions",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"erc721-primitives",children:"ERC721 Primitives"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#erc721",children:"ERC721"}),", keeping track of NFT ownership for a specified ERC721 contract at the currently processed blockheight, as well as generating scheduled inputs for newly minted NFTs;"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"erc721",children:"ERC721"}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'extensions:\n  - name: "My NFT Contract"\n    type: "erc721"\n    contractAddress: "0x01...ef"\n    startBlockHeight: 7654321\n    scheduledPrefix: "newnft"\n    # optional - monitors both the 0-address and the dEaD-address\n    burnScheduledPrefix: "nftburn"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"meaning",children:"Meaning"}),"\n",(0,t.jsx)(n.p,{children:"This extension allows you to track NFT ownership for any ERC721-compatible contract. You may also use it with PaimaERC721 contracts, which additionally allow you to specify an arbitrary string when minting an NFT \u2013 this extension type supports retrieving that string using scheduled inputs."}),"\n",(0,t.jsx)(n.h3,{id:"paima-concise-format",children:"Paima Concise format"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"prefix|contractAddress|tokenId|mintData\n"})}),"\n",(0,t.jsx)(n.p,{children:"where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prefix"})," is the ",(0,t.jsx)(n.code,{children:"scheduledPrefix"})," specified in the config file,"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"contractAddress"})," is the address of the contract (also specified in the config file),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tokenId"})," is the ID of the newly minted token (in base 10),"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"mintData"})," is the string emitted when the NFT was minted for PaimaERC721 NFTs (used for specifying the type of Stateful NFT). For classical ERC721 contracts, it will always be an empty string."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"If"})," ",(0,t.jsx)(n.code,{children:"burnScheduledPrefix"})," is set, burn events are also emitted with the format:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"prefix|owner|tokenId\n"})}),"\n",(0,t.jsx)(n.p,{children:"where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"prefix"})," is the value of ",(0,t.jsx)(n.code,{children:"burnScheduledPrefix"})," in the config file."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"owner"})," is the address that burned the token."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"tokenId"})," is the ID of the burned token (in base 10),"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"utility-functions",children:"Utility functions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getNftOwner"}),", to fetch the address which owns the NFT with the specified token ID:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export async function getNftOwner(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  nftId: bigint\n): Promise<string | null>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"isNftOwner"}),", to check whether the specified address owns the specified NFT:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export async function isNftOwner(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  nftId: bigint,\n  ownerAddress: string\n): Promise<boolean>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getOwnedNfts"}),", to fetch a list of token IDs of NFTs owned by the specified wallet address:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export async function getOwnedNfts(\n  readonlyDBConn: PoolClient,\n  cdeName: string,\n  ownerAddress: string\n): Promise<bigint[]>;\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"getAllOwnedNfts"}),", to fetch a list of ",(0,t.jsx)(n.code,{children:"tokenId"}),",",(0,t.jsx)(n.code,{children:"cdeName"})," pairs of NFTs owned by the specified wallet address across all Primitives:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export async function getAllOwnedNfts(\n  readonlyDBConn: PoolClient,\n  ownerAddress: string\n): Promise<\n  {\n    cdeName: string;\n    tokenId: bigint;\n  }[]\n>;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>c});var t=i(7294);const s={},r=t.createContext(s);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);