"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[977],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(a),h=s,f=c["".concat(l,".").concat(h)]||c[h]||m[h]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:s,o[1]=r;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2525:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var n=a(7462),s=(a(7294),a(3905));const i={sidebar_position:7},o="Auto-signing for apps",r={unversionedId:"home/read-write-L2-state/autosign",id:"home/read-write-L2-state/autosign",title:"Auto-signing for apps",description:"Note: wallets that use this feature are still in development",source:"@site/docs/home/2-read-write-L2-state/7-autosign.md",sourceDirName:"home/2-read-write-L2-state",slug:"/home/read-write-L2-state/autosign",permalink:"/ja/home/read-write-L2-state/autosign",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/2-read-write-L2-state/7-autosign.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Replay protection",permalink:"/ja/home/read-write-L2-state/replay-protection"},next:{title:"Scheduling Events and Timers",permalink:"/ja/home/react-to-events/scheduled-events"}},l={},p=[{value:"1. Data-only auto-signing",id:"1-data-only-auto-signing",level:2},{value:"Namespaced auto-sign",id:"namespaced-auto-sign",level:3},{value:"Defining your namespace",id:"defining-your-namespace",level:3},{value:"Wallets that plan to support this format",id:"wallets-that-plan-to-support-this-format",level:3},{value:"2. Game-specific auto-signing transactions",id:"2-game-specific-auto-signing-transactions",level:2},{value:"Wallets that plan to support this format",id:"wallets-that-plan-to-support-this-format-1",level:3},{value:"3. Full auto-signing for all transactions",id:"3-full-auto-signing-for-all-transactions",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,s.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"auto-signing-for-apps"},"Auto-signing for apps"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note"),": wallets that use this feature are still in development"),(0,s.kt)("p",null,"Requiring users to manually sign every transaction for every game is a terrible user experience not just because it breaks immersion constantly, but because it's incompatible with games where users play with a controller (which is how many users play games)"),(0,s.kt)("p",null,"However, auto-signing can be dangerous. A game could steal all funds in your wallet without you explicitly approving it (either because the game was malicious, or because the game was hacked)"),(0,s.kt)("p",null,"To tackle this, Paima introduces three different auto-sign methods that all guarantee safety of the user's L1 funds"),(0,s.kt)("h2",{id:"1-data-only-auto-signing"},"1. Data-only auto-signing"),(0,s.kt)("p",null,"For apps that run ",(0,s.kt)("a",{parentName:"p",href:"/ja/home/setup/paima-bacher"},"Paima batchers")," or similar systems (meta-transactions, account-abstraction or sequencers), signing data is often enough for the game "),(0,s.kt)("p",null,"Concrete examples of cases where this is sufficient:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Blockchains with zero transaction fees (Immutable, Oasys, etc.) where you can simply have somebody submit the transaction for you"),(0,s.kt)("li",{parentName:"ul"},'Systems where users pay to have free transactions (ex: deposit $5 into a contract, but have to "top up" their balance occasionally).')),(0,s.kt)("h3",{id:"namespaced-auto-sign"},"Namespaced auto-sign"),(0,s.kt)("p",null,"For these cases, we just need to ensure that a message signed for one game cannot be reused for any other application (be it an L1 transaction or for a different game). Paima is great for this because every game/app gets its own L2 with its own data format, so messages are already unlikely to be reusable for other purposes"),(0,s.kt)("p",null,"However, what if two apps use the same encoding for creating lobbies? It's very possible (especially if many projects for the same template), and so we may care to differentiate these. "),(0,s.kt)("p",null,"To tackle this, Paima forces all games that want to use auto-sign to specify a ",(0,s.kt)("inlineCode",{parentName:"p"},"security namespace")," that guarantees signatures for their app are different than every other app. Notably, we recommend the following options for prefixes:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"The contract address"),(0,s.kt)("li",{parentName:"ol"},"A unique name. This is useful if your platform consists of multiple apps that you want to share the same auto-sign namespace")),(0,s.kt)("p",null,"The format of these namespaces is ",(0,s.kt)("inlineCode",{parentName:"p"},"namespace || rest")," (learn more ",(0,s.kt)("a",{parentName:"p",href:"/ja/home/read-write-L2-state/replay-protection"},"here"),"). Paima Engine will not actually store these prefixes on-chain. Rather, it generates the signature ",(0,s.kt)("inlineCode",{parentName:"p"},"sign(namespace || rest)"),", but only posts the user command onchain. This is because the app knows its own prefix, so it can implicitly add the prefix to make sure the signature matches. This means even if a long string or contract address is used for the security namespace, it does not lead to chain bloat."),(0,s.kt)("h3",{id:"defining-your-namespace"},"Defining your namespace"),(0,s.kt)("p",null,"By default, the namespace is set to ",(0,s.kt)("inlineCode",{parentName:"p"},"CONTRACT_ADDRESS"),". However, there are cases where you may want to update your namespace. To do this, set the env variable ",(0,s.kt)("inlineCode",{parentName:"p"},"SECURITY_NAMESPACE")," to either"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"A value (",(0,s.kt)("inlineCode",{parentName:"li"},"SECURITY_NAMESPACE=foo"),")"),(0,s.kt)("li",{parentName:"ol"},"A YAML file (",(0,s.kt)("inlineCode",{parentName:"li"},"SECURITY_NAMESPACE=namespace.yml"),") with the following schema")),(0,s.kt)("p",null,"The YAML configuration type allows you to specify multiple prefixes. This is useful in case you want your app to request a different auto-sign namespace depending on where it's deployed, but still treat signatures from other namespaces as valid. Note having many prefixes may have a performance impact due the cryptography overhead."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'namespace:\n  write: "CONTRACT_ADDRESS"\n  read:\n    # Settings for block height >=10000\n    - block_height: 10000\n        prefix:\n        - "CONTRACT_ADDRESS" # Paima will replace this special keyword with your contract\'s address\n        - "company_name"\n\n    # Settings for block height >=15000\n    - block_height: 15000\n        prefix:\n        - "new_company_name"\n')),(0,s.kt)("h3",{id:"wallets-that-plan-to-support-this-format"},"Wallets that plan to support this format"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Metamask through the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/PaimaStudios/paima-session-snap"},"Paima Session Snap")),(0,s.kt)("li",{parentName:"ul"},"Flint Wallet (",(0,s.kt)("a",{parentName:"li",href:"https://flint-wallet.com/"},"link"),") (for Milkomeda C1 only)")),(0,s.kt)("h2",{id:"2-game-specific-auto-signing-transactions"},"2. Game-specific auto-signing transactions"),(0,s.kt)("p",null,"For games that do not have a batcher, or in cases where users prefer submitting transactions themselves, we still want to enable safe auto-sign behavior."),(0,s.kt)("p",null,"However, in this case, adding the security namespace would add a lot of useless data on-chain, so instead wallets will auto-sign and transaction where the ",(0,s.kt)("inlineCode",{parentName:"p"},"to")," field is the contract hash of the game's L2 contract with some measure to avoid these dApps slowly draining the user's L1 balance."),(0,s.kt)("h3",{id:"wallets-that-plan-to-support-this-format-1"},"Wallets that plan to support this format"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Metamask through the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/PaimaStudios/paima-session-snap"},"Paima Session Snap"))),(0,s.kt)("h2",{id:"3-full-auto-signing-for-all-transactions"},"3. Full auto-signing for all transactions"),(0,s.kt)("p",null,"For some apps, simply auto-signing data may not be enough. Instead, to safely sign transactions for the app, you want some kind of session key for the game."),(0,s.kt)("p",null,"To do this, we plan to generate a deterministic session key for each game."),(0,s.kt)("p",null,"Wallets that plan to support this format:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Metamask through the ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/PaimaStudios/paima-session-snap"},"Paima Session Snap"))))}m.isMDXComponent=!0}}]);