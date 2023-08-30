"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[750],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,f=h["".concat(l,".").concat(p)]||h[p]||u[p]||o;return n?a.createElement(f,r(r({ref:t},d),{},{components:n})):a.createElement(f,r({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={sidebar_position:2},r="Chain Data Extensions (CDEs)",s={unversionedId:"home/Reacting to Events/Chain Data Extensions/introduction",id:"home/Reacting to Events/Chain Data Extensions/introduction",title:"Chain Data Extensions (CDEs)",description:"When you are looking to add deep blockchain integration to your game, you will likely be interested in accessing information about ownership of ERC721s (NFTs) or a wallet's balance of ERC20 tokens for example. Paima Engine enables this by automatically doing the heavy work for you via a feature called Chain Data Extensions. CDEs allow you to read data trustlessly from multiple locations such as the underlying L1.",source:"@site/docs/home/3 - Reacting to Events/2 - Chain Data Extensions/1 - introduction.md",sourceDirName:"home/3 - Reacting to Events/2 - Chain Data Extensions",slug:"/home/Reacting to Events/Chain Data Extensions/introduction",permalink:"/ja/home/Reacting to Events/Chain Data Extensions/introduction",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/3 - Reacting to Events/2 - Chain Data Extensions/1 - introduction.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Scheduling Events and Timers",permalink:"/ja/home/Reacting to Events/scheduled-events"},next:{title:"ERC20 CDEs",permalink:"/ja/home/Reacting to Events/Chain Data Extensions/ERC20"}},l={},c=[{value:"Configuration",id:"configuration",level:2},{value:"Accessing the collected data",id:"accessing-the-collected-data",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"chain-data-extensions-cdes"},"Chain Data Extensions (CDEs)"),(0,i.kt)("p",null,"When you are looking to add deep blockchain integration to your game, you will likely be interested in accessing information about ownership of ERC721s (NFTs) or a wallet's balance of ERC20 tokens for example. Paima Engine enables this by automatically doing the heavy work for you via a feature called ",(0,i.kt)("em",{parentName:"p"},"Chain Data Extensions"),". CDEs allow you to read data trustlessly from multiple locations such as the underlying L1."),(0,i.kt)("p",null,"The basic approach is simple: you set up a config file where you specify what contracts you want to collect data from (in the L1) and Paima Engine automatically projects the emitted event data to your game node. In other words, when you then run your game node, it will automatically acquire the data for you along with a simple-to-use interface in the Paima SDK to allow you to access this data."),(0,i.kt)("p",null,"Paima Engine currently supports many different kinds of CDEs that you can find in this section of the documentation."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To specify which chain data extensions you are using for your game, you need to provide a configuration file. By default, a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions.yml")," in your root directory (same place as the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file) is expected, but you may adjust this path using the ",(0,i.kt)("inlineCode",{parentName:"p"},"CDE_CONFIG_PATH")," environment variable."),(0,i.kt)("p",null,"Here is an example ",(0,i.kt)("inlineCode",{parentName:"p"},"extensions.yml")," that you can copy paste into the root folder of your project:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'extensions:\n  - name: "My NFT Contract"\n    type: "erc721"\n    contractAddress: "0x01...EF"\n    startBlockHeight: 7654321\n    scheduledPrefix: "newnft"\n')),(0,i.kt)("p",null,"Note that extensions of different types often require slightly different fields ","\u2013"," this will be described in their respective sections. However, here is a quick overview of the purposes of each field in the above config:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"name"),": This field allows you to refer to this particular extension when using the Paima SDK functions for accessing the data it has collected;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type"),": This specifies which extension you want to use, currently supporting values corresponding to the types of extensions described in later subsections (such as ",(0,i.kt)("inlineCode",{parentName:"li"},"erc20"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contractAddress"),": The address of the contract to read data from;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startBlockHeight"),": The starting blockheight from which you want the data to be read, zero by default; You should always set this to the block height that the smart contract was deployed on when in production."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"scheduledPrefix"),": For extensions that trigger scheduled inputs (ERC721 and ERC20Deposit) specifies the prefix used with these scheduled inputs;"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"depositAddress"),": This field is only used by the ERC20Deposit extension type to specify the target address of transactions you are interested in tracking.")),(0,i.kt)("p",null,"If you try to run your game node with an invalid or non-existent CDE config file, Paima Engine will report the problem to you and then carry on as if no chain data extensions were specified."),(0,i.kt)("h2",{id:"accessing-the-collected-data"},"Accessing the collected data"),(0,i.kt)("p",null,"Each extension may provide data to your game in one (or both) of the two ways below:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"By collecting the data and saving it into your game database directly, which you can access using Paima SDK functions described below;"),(0,i.kt)("li",{parentName:"ol"},"By ",(0,i.kt)("a",{parentName:"li",href:"/ja/home/Reacting%20to%20Events/scheduled-events"},"scheduling inputs")," when certain events happen, which you can then react to in your state transition function.")),(0,i.kt)("p",null,"The data collected and functions used to access it are specific to each type of extension and you can find more information about that in their respective sections. In general, be aware that these functions will read directly from the game state database (which is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"readonlyDBConn")," parameter is for), and you will need to specify the extension name (which is what the ",(0,i.kt)("inlineCode",{parentName:"p"},"cdeName")," parameter in each function is for) which needs to correspond to the name you specified in the configuration file."),(0,i.kt)("p",null,"Scheduled inputs are triggered by events specific to each extension type, with the circumstances and the format of the scheduled input described in their respective sections. The inputs are always scheduled either for the current blockheight (which enables them to be processed immediately, as scheduled inputs are processed before the state transition function is called), or, if they are triggered before the overall ",(0,i.kt)("inlineCode",{parentName:"p"},"START_BLOCKHEIGHT")," of the game node (specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},".env")," file), in the so-called ",(0,i.kt)("em",{parentName:"p"},"pre-sync")," phase, they are scheduled for ",(0,i.kt)("inlineCode",{parentName:"p"},"START_BLOCKHEIGHT + 1")," (which is the first blockheight for which the state transition function is called). The scheduled inputs will always start with the prefix specified in the config as ",(0,i.kt)("inlineCode",{parentName:"p"},"scheduledPrefix"),"."),(0,i.kt)("p",null,"To learn by example, please consult the NFT LvlUp game template ","\u2013"," ",(0,i.kt)("inlineCode",{parentName:"p"},"./paima-engine-linux init template nft-lvlup")," to learn more."))}u.isMDXComponent=!0}}]);