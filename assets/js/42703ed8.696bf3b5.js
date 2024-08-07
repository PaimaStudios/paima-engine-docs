"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[4838],{3134:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var n=i(5893),a=i(1151);const s={sidebar_position:2},o="Primitive Catalogue",r={id:"home/state-machine/react-to-events/primitive-catalogue/introduction",title:"Primitive Catalogue",description:"Paima, by default, can provide standard transaction types (ex know it's an ERC20 transfer). These refinements acts as a sort of primitive that games can easily leverage without having to write the parsing logic themselves, and since these primitives live on the underlying chains they are composable (within that chain)",source:"@site/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/1-introduction.md",sourceDirName:"home/100-state-machine/300-react-to-events/10-primitive-catalogue",slug:"/home/state-machine/react-to-events/primitive-catalogue/introduction",permalink:"/home/state-machine/react-to-events/primitive-catalogue/introduction",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/tree/main/docs/home/100-state-machine/300-react-to-events/10-primitive-catalogue/1-introduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Avail block funnel",permalink:"/home/state-machine/react-to-events/funnel-types/avail-block-funnel"},next:{title:"Primitive List",permalink:"/home/state-machine/react-to-events/primitive-catalogue/meta/introduction"}},c={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Accessing the collected data",id:"accessing-the-collected-data",level:2},{value:"Relation to funnels",id:"relation-to-funnels",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"primitive-catalogue",children:"Primitive Catalogue"}),"\n",(0,n.jsx)(t.p,{children:"Paima, by default, can provide standard transaction types (ex: EVM transactions), but for usability it is useful to refine this raw data type into something more meaningful (ex: know it's an ERC20 transfer). These refinements acts as a sort of primitive that games can easily leverage without having to write the parsing logic themselves, and since these primitives live on the underlying chains they are composable (within that chain)"}),"\n",(0,n.jsxs)(t.p,{children:["Paima Engine enables this by automatically doing the heavy work for you via a feature called the ",(0,n.jsx)(t.em,{children:"Primitive Catalogue"}),". Primitives allow you to read data trustlessly from multiple locations such as various L1/L2s. The goal is the Primitive Catalogue is to be the Library of Alexandria of primitives necessary to build onchain games."]}),"\n",(0,n.jsx)("div",{style:{textAlign:"center"},children:(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(306).Z+"",width:"1024",height:"1024"})})}),"\n",(0,n.jsx)(t.p,{children:"The basic approach is simple: you set up a config file where you specify what contracts you want to collect data from, and Paima Engine automatically projects the emitted event data to your game node. In other words, when you then run your game node, it will automatically acquire the data for you along with a simple-to-use interface in the Paima SDK to allow you to access this data."}),"\n",(0,n.jsx)(t.p,{children:"Paima Engine currently supports many different kinds of primitives that you can find in this section of the documentation."}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["To specify which Primitives you are using for your game, you need to provide a configuration file. By default, a file named ",(0,n.jsx)(t.code,{children:"extensions.yml"})," in your root directory (same place as the ",(0,n.jsx)(t.code,{children:".env"})," file) is expected, but you may adjust this path using the ",(0,n.jsx)(t.code,{children:"CDE_CONFIG_PATH"})," environment variable. We recommend using ",(0,n.jsx)(t.code,{children:"extensions.$NETWORK.yml"})," to have different files depending on which network you're deploying your rollup to (ex: ",(0,n.jsx)(t.code,{children:"localhost"})," or ",(0,n.jsx)(t.code,{children:"mainnet"}),")"]}),"\n",(0,n.jsxs)(t.p,{children:["Here is an example ",(0,n.jsx)(t.code,{children:"extensions.yml"})," that you can copy paste into the root folder of your project:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'extensions:\n  - name: "My NFT Contract"\n    type: "erc721"\n    contractAddress: "0x01...EF"\n    startBlockHeight: 7654321\n    scheduledPrefix: "newnft"\n'})}),"\n",(0,n.jsx)(t.p,{children:"Note that extensions of different types often require slightly different fields \u2013 this will be described in their respective sections. However, here is a quick overview of the purposes of each field in the above config:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"name"}),": This field allows you to refer to this particular extension when using the Paima SDK functions for accessing the data it has collected;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"type"}),": This specifies which extension you want to use, currently supporting values corresponding to the types of extensions described in later subsections (such as ",(0,n.jsx)(t.code,{children:"erc20"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"contractAddress"}),": The address of the contract to read data from;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"startBlockHeight"}),": The starting blockheight from which you want the data to be read, zero by default; You should always set this to the block height that the smart contract was deployed on when in production."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"scheduledPrefix"}),": For extensions that trigger scheduled inputs (ERC721 and ERC20Deposit) specifies the prefix used with these scheduled inputs;"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"depositAddress"}),": This field is only used by the ERC20Deposit extension type to specify the target address of transactions you are interested in tracking."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"network"})," (see ",(0,n.jsx)(t.a,{href:"/home/state-machine/react-to-events/funnel-types/configuration",children:"here"})," to learn about handling primitives for multiple networks)"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"If you try to run your game node with an invalid or non-existent Primitive Catalogue config file, Paima Engine will report the problem to you and then carry on as if no Primitives were specified."}),"\n",(0,n.jsx)(t.h2,{id:"accessing-the-collected-data",children:"Accessing the collected data"}),"\n",(0,n.jsx)(t.p,{children:"Each extension may provide data to your game in one (or both) of the two ways below:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"By collecting the data and saving it into your game database directly, which you can access using Paima SDK functions described in the corresponding sections;"}),"\n",(0,n.jsxs)(t.li,{children:["By ",(0,n.jsx)(t.a,{href:"/home/state-machine/creating-events/timers-ticks",children:"scheduling inputs"})," when certain events happen, which you can then react to in your state transition function."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The data collected and functions used to access it are specific to each type of extension and you can find more information about that in their respective sections. In general, be aware that these functions will read directly from the game state database (which is what the ",(0,n.jsx)(t.code,{children:"readonlyDBConn"})," parameter is for), and you will need to specify the extension name (which is what the ",(0,n.jsx)(t.code,{children:"cdeName"})," parameter in each function is for) which needs to correspond to the name you specified in the configuration file."]}),"\n",(0,n.jsxs)(t.p,{children:["Scheduled inputs are triggered by events specific to each extension type, with the circumstances and the format of the scheduled input described in their respective sections. The inputs are always scheduled either for the current blockheight (which enables them to be processed immediately, as scheduled inputs are processed before the state transition function is called), or, if they are triggered before the overall ",(0,n.jsx)(t.code,{children:"START_BLOCKHEIGHT"})," of the game node (specified in the ",(0,n.jsx)(t.code,{children:".env"})," file), in the so-called ",(0,n.jsx)(t.em,{children:"pre-sync"})," phase, they are scheduled for ",(0,n.jsx)(t.code,{children:"START_BLOCKHEIGHT + 1"})," (which is the first blockheight for which the state transition function is called). The scheduled inputs will always start with the prefix specified in the config as ",(0,n.jsx)(t.code,{children:"scheduledPrefix"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"../../../read-write-L2-state/read-data#stf-function",children:"state transition function"})," call triggered by a scheduled input originating from a Primitive can also access:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"inputData.scheduledTxHash"}),": the original transaction hash that triggered this primitive"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"inputData.extensionName"}),": the primitive that triggered"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"caip2"}),": the ",(0,n.jsx)(t.a,{href:"https://github.com/ChainAgnostic/CAIPs/blob/main/CAIPs/caip-2.md",children:"caip2"})," id of the chain that triggered the event"]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To learn by example, please consult the NFT LvlUp game template \u2013 ",(0,n.jsx)(t.code,{children:"./paima-engine-linux init template nft-lvlup"})," to learn more."]}),"\n",(0,n.jsx)(t.h2,{id:"relation-to-funnels",children:"Relation to funnels"}),"\n",(0,n.jsxs)(t.p,{children:["Paima ",(0,n.jsx)(t.a,{href:"/home/state-machine/react-to-events/funnel-types/common-concepts/intro",children:"funnels"})," are in charge of fetching data from various sources for your game, including data for the Primitive Catalogue which are stored as part of ",(0,n.jsx)(t.code,{children:"ChainData"}),".. Depending on where the data you want to access comes from, you may have to add an extra funnel to your game."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},306:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/primitive-catalogue-334251ea9aa6d8d48b5f72c18c4530d9.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>r,a:()=>o});var n=i(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);