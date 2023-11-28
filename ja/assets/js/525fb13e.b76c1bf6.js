"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[6809],{4080:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var s=a(5893),n=a(1151);const i={sidebar_position:7},o="Auto-signing for apps",r={id:"home/read-write-L2-state/autosign",title:"Auto-signing for apps",description:"Note: wallets that use this feature are still in development",source:"@site/docs/home/200-read-write-L2-state/7-autosign.md",sourceDirName:"home/200-read-write-L2-state",slug:"/home/read-write-L2-state/autosign",permalink:"/ja/home/read-write-L2-state/autosign",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/200-read-write-L2-state/7-autosign.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Replay protection",permalink:"/ja/home/read-write-L2-state/replay-protection"},next:{title:"Scheduling Events and Timers",permalink:"/ja/home/react-to-events/scheduled-events"}},l={},h=[{value:"1. Data-only auto-signing",id:"1-data-only-auto-signing",level:2},{value:"Namespaced auto-sign",id:"namespaced-auto-sign",level:3},{value:"Defining your namespace",id:"defining-your-namespace",level:3},{value:"Wallets that plan to support this format",id:"wallets-that-plan-to-support-this-format",level:3},{value:"2. Game-specific auto-signing transactions",id:"2-game-specific-auto-signing-transactions",level:2},{value:"Wallets that plan to support this format",id:"wallets-that-plan-to-support-this-format-1",level:3},{value:"3. Full auto-signing for all transactions",id:"3-full-auto-signing-for-all-transactions",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"auto-signing-for-apps",children:"Auto-signing for apps"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": wallets that use this feature are still in development"]}),"\n",(0,s.jsx)(t.p,{children:"Requiring users to manually sign every transaction for every game is a terrible user experience not just because it breaks immersion constantly, but because it's incompatible with games where users play with a controller (which is how many users play games)"}),"\n",(0,s.jsx)(t.p,{children:"However, auto-signing can be dangerous. A game could steal all funds in your wallet without you explicitly approving it (either because the game was malicious, or because the game was hacked)"}),"\n",(0,s.jsx)(t.p,{children:"To tackle this, Paima introduces three different auto-sign methods that all guarantee safety of the user's L1 funds"}),"\n",(0,s.jsx)(t.h2,{id:"1-data-only-auto-signing",children:"1. Data-only auto-signing"}),"\n",(0,s.jsxs)(t.p,{children:["For apps that run ",(0,s.jsx)(t.a,{href:"/ja/home/setup/paima-bacher",children:"Paima batchers"})," or similar systems (meta-transactions, account-abstraction or sequencers), signing data is often enough for the game"]}),"\n",(0,s.jsx)(t.p,{children:"Concrete examples of cases where this is sufficient:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Blockchains with zero transaction fees (Immutable, Oasys, etc.) where you can simply have somebody submit the transaction for you"}),"\n",(0,s.jsx)(t.li,{children:'Systems where users pay to have free transactions (ex: deposit $5 into a contract, but have to "top up" their balance occasionally).'}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"namespaced-auto-sign",children:"Namespaced auto-sign"}),"\n",(0,s.jsx)(t.p,{children:"For these cases, we just need to ensure that a message signed for one game cannot be reused for any other application (be it an L1 transaction or for a different game). Paima is great for this because every game/app gets its own L2 with its own data format, so messages are already unlikely to be reusable for other purposes"}),"\n",(0,s.jsx)(t.p,{children:"However, what if two apps use the same encoding for creating lobbies? It's very possible (especially if many projects for the same template), and so we may care to differentiate these."}),"\n",(0,s.jsxs)(t.p,{children:["To tackle this, Paima forces all games that want to use auto-sign to specify a ",(0,s.jsx)(t.code,{children:"security namespace"})," that guarantees signatures for their app are different than every other app. Notably, we recommend the following options for prefixes:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"The contract address"}),"\n",(0,s.jsx)(t.li,{children:"A unique name. This is useful if your platform consists of multiple apps that you want to share the same auto-sign namespace"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The format of these namespaces is ",(0,s.jsx)(t.code,{children:"namespace || rest"})," (learn more ",(0,s.jsx)(t.a,{href:"/ja/home/read-write-L2-state/replay-protection",children:"here"}),"). Paima Engine will not actually store these prefixes on-chain. Rather, it generates the signature ",(0,s.jsx)(t.code,{children:"sign(namespace || rest)"}),", but only posts the user command onchain. This is because the app knows its own prefix, so it can implicitly add the prefix to make sure the signature matches. This means even if a long string or contract address is used for the security namespace, it does not lead to chain bloat."]}),"\n",(0,s.jsx)(t.h3,{id:"defining-your-namespace",children:"Defining your namespace"}),"\n",(0,s.jsxs)(t.p,{children:["By default, the namespace is set to ",(0,s.jsx)(t.code,{children:"CONTRACT_ADDRESS"}),". However, there are cases where you may want to update your namespace. To do this, set the env variable ",(0,s.jsx)(t.code,{children:"SECURITY_NAMESPACE"})," to either"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["A value (",(0,s.jsx)(t.code,{children:"SECURITY_NAMESPACE=foo"}),")"]}),"\n",(0,s.jsxs)(t.li,{children:["A YAML file (",(0,s.jsx)(t.code,{children:"SECURITY_NAMESPACE=namespace.yml"}),") with the following schema"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The YAML configuration type allows you to specify multiple prefixes. This is useful in case you want your app to request a different auto-sign namespace depending on where it's deployed, but still treat signatures from other namespaces as valid. Note having many prefixes may have a performance impact due the cryptography overhead."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'namespace:\n  write: "CONTRACT_ADDRESS"\n  read:\n    # Settings for block height >=10000\n    - block_height: 10000\n        prefix:\n        - "CONTRACT_ADDRESS" # Paima will replace this special keyword with your contract\'s address\n        - "company_name"\n\n    # Settings for block height >=15000\n    - block_height: 15000\n        prefix:\n        - "new_company_name"\n'})}),"\n",(0,s.jsx)(t.h3,{id:"wallets-that-plan-to-support-this-format",children:"Wallets that plan to support this format"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Metamask through the ",(0,s.jsx)(t.a,{href:"https://github.com/PaimaStudios/paima-session-snap",children:"Paima Session Snap"})]}),"\n",(0,s.jsxs)(t.li,{children:["Flint Wallet (",(0,s.jsx)(t.a,{href:"https://flint-wallet.com/",children:"link"}),") (for Milkomeda C1 only)"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"2-game-specific-auto-signing-transactions",children:"2. Game-specific auto-signing transactions"}),"\n",(0,s.jsx)(t.p,{children:"For games that do not have a batcher, or in cases where users prefer submitting transactions themselves, we still want to enable safe auto-sign behavior."}),"\n",(0,s.jsxs)(t.p,{children:["However, in this case, adding the security namespace would add a lot of useless data on-chain, so instead wallets will auto-sign and transaction where the ",(0,s.jsx)(t.code,{children:"to"})," field is the contract hash of the game's L2 contract with some measure to avoid these dApps slowly draining the user's L1 balance."]}),"\n",(0,s.jsx)(t.h3,{id:"wallets-that-plan-to-support-this-format-1",children:"Wallets that plan to support this format"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Metamask through the ",(0,s.jsx)(t.a,{href:"https://github.com/PaimaStudios/paima-session-snap",children:"Paima Session Snap"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"3-full-auto-signing-for-all-transactions",children:"3. Full auto-signing for all transactions"}),"\n",(0,s.jsx)(t.p,{children:"For some apps, simply auto-signing data may not be enough. Instead, to safely sign transactions for the app, you want some kind of session key for the game."}),"\n",(0,s.jsx)(t.p,{children:"To do this, we plan to generate a deterministic session key for each game."}),"\n",(0,s.jsx)(t.p,{children:"Wallets that plan to support this format:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Metamask through the ",(0,s.jsx)(t.a,{href:"https://github.com/PaimaStudios/paima-session-snap",children:"Paima Session Snap"})]}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>o});var s=a(7294);const n={},i=s.createContext(n);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);