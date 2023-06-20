"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[811],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var i=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var r=i.createContext({}),p=function(e){var t=i.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return i.createElement(r.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(a),m=o,d=h["".concat(r,".").concat(m)]||h[m]||u[m]||n;return a?i.createElement(d,s(s({ref:t},c),{},{components:a})):i.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,s=new Array(n);s[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var p=2;p<n;p++)s[p]=a[p];return i.createElement.apply(null,s)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4751:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=a(7462),o=(a(7294),a(3905));const n={sidebar_position:1,slug:"/"},s="What is Paima Engine?",l={unversionedId:"home/what-is-paima-engine",id:"home/what-is-paima-engine",title:"What is Paima Engine?",description:"Paima is a Web3 Engine optimized for games, gamification and autonomous worlds that allows building web3 applications in just days",source:"@site/docs/home/0 - what-is-paima-engine.md",sourceDirName:"home",slug:"/",permalink:"/ja/",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/0 - what-is-paima-engine.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"How To Use Paima Engine",permalink:"/ja/home/how-to-use-paima-engine"}},r={},p=[{value:"Sovereign rollups",id:"sovereign-rollups",level:2},{value:"State machines as Sovereign Rollup L2s",id:"state-machines-as-sovereign-rollup-l2s",level:2},{value:"Data Projections",id:"data-projections",level:2},{value:"Stateful NFTs and NFT compression",id:"stateful-nfts-and-nft-compression",level:2},{value:"Cross-chain and sequencing with Paima Whirlpool",id:"cross-chain-and-sequencing-with-paima-whirlpool",level:2},{value:"L2-level Account Abstraction",id:"l2-level-account-abstraction",level:3},{value:"Sequencer SDKs",id:"sequencer-sdks",level:3},{value:"Cross-chain NFTs: Projected NFTs",id:"cross-chain-nfts-projected-nfts",level:3},{value:"Non-custodial L2s",id:"non-custodial-l2s",level:2},{value:"Parallelization to handle over 10k tps per game",id:"parallelization-to-handle-over-10k-tps-per-game",level:2},{value:"Financing of decentralized games",id:"financing-of-decentralized-games",level:2},{value:"Data availability layer support",id:"data-availability-layer-support",level:3},{value:"ZK and FHE",id:"zk-and-fhe",level:2},{value:"State Channels",id:"state-channels",level:2},{value:"Optimistic Rollup disadvantages",id:"optimistic-rollup-disadvantages",level:2},{value:"ZK Rollup disadvantages",id:"zk-rollup-disadvantages",level:2},{value:"Sovereign Rollup disadvantages",id:"sovereign-rollup-disadvantages",level:2},{value:"Low DeFi support on the L2",id:"low-defi-support-on-the-l2",level:3},{value:"Low compatibility with other L1 dApps by default",id:"low-compatibility-with-other-l1-dapps-by-default",level:3},{value:"Trickier cross-game indexing",id:"trickier-cross-game-indexing",level:3},{value:"The Modular Gaming Rollup Stack",id:"the-modular-gaming-rollup-stack",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-paima-engine"},"What is Paima Engine?"),(0,o.kt)("p",null,"Paima is a Web3 Engine optimized for games, gamification and autonomous worlds that allows building web3 applications in just days"),(0,o.kt)("p",null,"Notably, its key features are that it"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Allows building onchain games with web2 skills"),(0,o.kt)("li",{parentName:"ol"},"Protects users even in the case of hacks allowing brands to build web3 applications without worrying"),(0,o.kt)("li",{parentName:"ol"},"Enables cross-wallet gameplay, meaning you can deploy your game to one chain yet have it be playable from across many blockchains"),(0,o.kt)("li",{parentName:"ol"},"Speeds you up to make weekly releases a reality instead of most web3 games which are release-and-pray")),(0,o.kt)("h1",{id:"key-technologies-that-enable-this"},"Key technologies that enable this"),(0,o.kt)("p",null,"If you prefer explanations in video form, we have ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=HtvemijxF-0"},"a video")," that explains some of the benefits of Paima Engine."),(0,o.kt)("h2",{id:"sovereign-rollups"},"Sovereign rollups"),(0,o.kt)("p",null,"Paima is a framework for creating app-specific layer 2s (L2s) as sovereign rollups. That is to say: apps publish transactions to a blockchain for ordering and data availability, but uses its own code to determine the correct app state"),(0,o.kt)("h2",{id:"state-machines-as-sovereign-rollup-l2s"},"State machines as Sovereign Rollup L2s"),(0,o.kt)("p",null,"We allow creating these L2s using Web2 skills such as Javascript, Unity or Game Maker by essentially turning state machines into L2s. The key insight is that every mathematical function has 3 key properties:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Function inputs"),(0,o.kt)("li",{parentName:"ol"},"Function definition"),(0,o.kt)("li",{parentName:"ol"},"Function outputs")),(0,o.kt)("p",null,"For Paima, the inputs are stored on-chain (which guarantees determinism), the function definition is packaged as an executable for running the app, and the function output is the resulting state machine after applying the transition (which can then be queried through an indexer)"),(0,o.kt)("p",null,'You may sometimes hear this referred to as a "pessimistic rollup" because nodes need to re-execute transactions to check the validity of the chain instead of optimistically being able to assume correctness.'),(0,o.kt)("h2",{id:"data-projections"},"Data Projections"),(0,o.kt)("p",null,"These state machines can evolve based on L1 updates such as"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"New blocks/transactions"),(0,o.kt)("li",{parentName:"ul"},"Contracts on the L1 being updated"),(0,o.kt)("li",{parentName:"ul"},"Accessing historical on-chain state"),(0,o.kt)("li",{parentName:"ul"},"Reading updates from other L2s/rollups deployed on the blockchain"),(0,o.kt)("li",{parentName:"ul"},"Passive time and timers\nOr even more complex transition rules.")),(0,o.kt)("p",null,"A great example of this is using the L1 blockchain as the source of randomness, which avoids every game having to re-implement a randomness oracle from scratch."),(0,o.kt)("p",null,"This is possible as sovereign rollups can project L1 state to the L2. A deep dive into data projections and the full modular gaming rollup stack ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=t9En_PR3NCA"},"can be found in this video.")," "),(0,o.kt)("h2",{id:"stateful-nfts-and-nft-compression"},"Stateful NFTs and NFT compression"),(0,o.kt)("p",null,"Thanks to projections, we can access the state of L1 NFTs from Paima. We can then interpret the output of the state machine as extra information associated to these NFTs allowing them to evolve over time based on user actions on the L2."),(0,o.kt)("p",null,"In a sense, you can think of this as an NFT compression protocol. Instead of having to mint a lot of static NFTs on the L1, you can instead mint a minimal set of NFTs on the L1 and then evolve them based off the state of the L2."),(0,o.kt)("h2",{id:"cross-chain-and-sequencing-with-paima-whirlpool"},"Cross-chain and sequencing with Paima Whirlpool"),(0,o.kt)("p",null,"Natively Paima supports users individually submitting inputs onchain on the specific chain the app is hosted on. However, we also support more efficient setups that also work cross-chain with Paima Whirlpool - a suite of tools to help translate complex interactions to something that integrate seamlessly with Paima Engine."),(0,o.kt)("h3",{id:"l2-level-account-abstraction"},"L2-level Account Abstraction"),(0,o.kt)("p",null,"Currently there is a large focus on account abstraction which powers smart contract wallets to create systems more flexible than the default public-key wallets created by most cryptocurrencies."),(0,o.kt)("p",null,"Paima Engine can enable much more flexible account abstraction by providing this functionality at the L2 level when needed, which allows easily validating cryptographic primitives that would not otherwise be available at the L1."),(0,o.kt)("h3",{id:"sequencer-sdks"},"Sequencer SDKs"),(0,o.kt)("p",null,"Although apps may not always need sequencers, they can improve scalability and also help user onboarding. Notably, they can"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Batch transactions together to amortize transaction fees"),(0,o.kt)("li",{parentName:"ul"},"Cover the transaction fees for specified users through meta-transactions (ex: free txs for users who hold a specific NFT, who delegate to a stake pool, or who paid on a separate chain).")),(0,o.kt)("p",null,"Thanks to the flexibility of the batcher system, Paima supports games built without an enshrined sequencer - that is to say, anybody can choose to run their own decentralized sequencer for the game and monetize it how they want. This give the benefit of sequencing without the centralization."),(0,o.kt)("h3",{id:"cross-chain-nfts-projected-nfts"},"Cross-chain NFTs: Projected NFTs"),(0,o.kt)("p",null,"(Coming in the future)\nProjects may want to allow users to play games with NFTs hosted on chains separate from where the app was deployed. For example, the game is deployed on Milkomeda, but is playable from NFT living on Ethereum L1."),(0,o.kt)("p",null,"To enable this, we will enable users to time-lock their NFTs (self-custodial) to project their NFTs directly into the game. Note that thanks to Paima being powered by a Sovereign Rollup architecture, this scheme isn't required for projecting L1 NFTs to L2s (if for example deploying a Paima game as a L3 on top of a L2 like Arbitrum)"),(0,o.kt)("p",null,"You can find more about the idea ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dcSpark/projected-nft-whirlpool/"},"in this github repo.")),(0,o.kt)("h2",{id:"non-custodial-l2s"},"Non-custodial L2s"),(0,o.kt)("p",null,"Most blockchain apps and L2s are custodial in nature. That is to say, to use them you first have to deposit your funds into the app/L2. This is dangerous because it means that if the contract that is custodying user funds gets hacked, all user funds are at risk. "),(0,o.kt)("p",null,"Paima however, thanks to its projective rollup support, can allow users to keep full custody of their assets while using games & apps written using Paima. That is to say, even if your app gets hacked, user L1 assets are not at risk. This makes Paima a very safe way for brands to deploy onchain applications and brand reputation risk in the case of a hack is minimal."),(0,o.kt)("p",null,"Additionally, this also helps a lot with user acquisition as empirically most users are not comfortable bridging their NFTs from L1\u2192L2 due to bridge security concerns."),(0,o.kt)("p",null,"Lastly, it also helps with liquidity & composability, as its means you don't have to fracture assets between L1 and L2."),(0,o.kt)("h2",{id:"parallelization-to-handle-over-10k-tps-per-game"},"Parallelization to handle over 10k tps per game"),(0,o.kt)("p",null,"Paima state machine L2s are not only significantly more efficient than the EVM, they also supports optionally running state machine updates in parallel (not natively available in the EVM), allowing games and apps to massively scale by, for example, having different PVP matches or different maps in an MMO run in parallel."),(0,o.kt)("h2",{id:"financing-of-decentralized-games"},"Financing of decentralized games"),(0,o.kt)("p",null,"Although Paima allows games to subsidize gameplay, games can also choose to specify that users must pay a fee to submit moves in-game. This allows DAOs to gain funding to drive development of their game or app."),(0,o.kt)("h3",{id:"data-availability-layer-support"},"Data availability layer support"),(0,o.kt)("p",null,"(Coming in the future)\nProjects may want the blockchain used as the Data Availability (DA) layer to be different from the primary chain used for their app."),(0,o.kt)("p",null,"To enable this, Paima will facilitate storing state machine inputs on a DA layer, significantly lowering costs for data-hungry use-cases"),(0,o.kt)("h2",{id:"zk-and-fhe"},"ZK and FHE"),(0,o.kt)("p",null,"(Coming in the future)\nWe are working with partners to help enable use-cases that require private sections of their state machine"),(0,o.kt)("h2",{id:"state-channels"},"State Channels"),(0,o.kt)("p",null,"(Coming in the future)\nWe are working to allow games to easily build state channels to facilitate use-cases like 5v5 fights where a state channel could be opened between participants and settled when the game is over"),(0,o.kt)("h1",{id:"why-sovereign-rollups"},"Why Sovereign rollups?"),(0,o.kt)("p",null,"There are a few ways of powering scalable applications on-chain. Paima is built using Sovereign Rollups instead of two other common techniques: Optimistic Rollups and ZK Rollups"),(0,o.kt)("h2",{id:"optimistic-rollup-disadvantages"},"Optimistic Rollup disadvantages"),(0,o.kt)("p",null,"This section is written assuming an EVM-based optimistic rollup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Apps have to be written in Solidity (if deploying to an existing optimistic rollup like Arbitrum) or be written to be compatible with the fraud-proof system (if an app-chain) which limits flexibility and generally means it's not composable with standard game development tools"),(0,o.kt)("li",{parentName:"ol"},"App performance is bottlenecked by EVM performance. Even implementing parallelization (very common for games) requires a complex sharding system, greatly increasing ecosystem complexity."),(0,o.kt)("li",{parentName:"ol"},"Limited to EVM's data model (reads and writes are slow)"),(0,o.kt)("li",{parentName:"ol"},"No support for passive time, as you cannot fraud-proof the passage of time. However, passive time is hugely important for games (ex: timers)"),(0,o.kt)("li",{parentName:"ol"},"Requires Solidity boilerplate (not accessible to most game developers)"),(0,o.kt)("li",{parentName:"ol"},"Limited projection and stateful NFT support (optimistic rollups have limited projective rollup support). This limits the user base as many users will not want to bridge their NFTs from L1\u2192L2 to use the app and also hurts liquidity & composability"),(0,o.kt)("li",{parentName:"ol"},"Apps have very long finality as they may get rolled back due to fraud proofs")),(0,o.kt)("h2",{id:"zk-rollup-disadvantages"},"ZK Rollup disadvantages"),(0,o.kt)("p",null,"ZK Rollups are primarily a computation solution. Although handling computation is important, a lot of apps (especially games) are more data management platforms (user accounts, encoding how the accounts update over time, etc.). Therefore it often makes more sense to have a sovereign rollup as the base for the game, and only use ZK when required on specific parts of your app (such as associating ZK proofs to stateful NFTs that may represent things like results of a match)"),(0,o.kt)("p",null,"If ZK is enforced or if the whole application needs to be written as one giant ZK circuit, you will run into the following issues:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ZK performance is generally slow for large circuits, making it very hard to build complex games"),(0,o.kt)("li",{parentName:"ol"},"ZK platforms typically enforce a global maximum on circuit sizes for zkApps deployed to their platform, which complex games will exceed"),(0,o.kt)("li",{parentName:"ol"},"ZK circuits are currently still hard to write. There are some languages and efforts to simplify this, but they generally still require manual fine-tuning to try and minimize circuit size as much as possible"),(0,o.kt)("li",{parentName:"ol"},"No support for passive time. This may be, depending in the use-case, replaceable by a Verifiable Delay Function, but this is much more complicated and not as powerful")),(0,o.kt)("h2",{id:"sovereign-rollup-disadvantages"},"Sovereign Rollup disadvantages"),(0,o.kt)("p",null,'Unfortunately there is no "free lunch", and so usage of Paima comes with some disadvantages as well.'),(0,o.kt)("h3",{id:"low-defi-support-on-the-l2"},"Low DeFi support on the L2"),(0,o.kt)("p",null,"You cannot trustlessly bridge from the L2 back to the L1 (that is to say, you cannot put $5 into the game, make some money, then take $10 out). This isn't a requirement to build in-game economies, and this also isn't required for the overwhelming majority of non-DeFi applications and so it's not as problematic as one might think."),(0,o.kt)("p",null,"If you do want this functionality, there are two key ways to do it:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Provide a centralized "redemption" service. For example, if you build a casino with Paima, players would play the game with chips, and then would turn their chips back into money through a centralized redemption service (that possibly does KYC). This is no different than the way the overwhelming majority of casinos work in the real world.'),(0,o.kt)("li",{parentName:"ol"},"Simply don't bridge the asset to the L2. Even if the user funds stay on the L1 (non-custodially), you can project the state into the Paima game, which means you can still build in-game economies. In fact, building it this way is significantly safer as it means user funds are not at risk if your game gets hacked!")),(0,o.kt)("h3",{id:"low-compatibility-with-other-l1-dapps-by-default"},"Low compatibility with other L1 dApps by default"),(0,o.kt)("p",null,"Paima gains a lot of its strength from shifting game state management into the L2, which cannot be read from other L1 dApps. We think this is actually a benefit though, as it avoids web3 developers making the single most common mistake in web3 games: overly focusing on compatibility when they do not have a product-market fit yet."),(0,o.kt)("p",null,"That is to say, Paima allows you to start by building your entire app / game on the L2 and then, once you know users love the experience, you can migrate parts of your game state to the L1 (which requires you to write it in the L1 language like Solidity) and then projecting its state to the L2. This makes bootstrapping your game significantly faster, cheaper, safer, and makes it easier to update. Only focus on compatibility once users love your system and truly desire connecting it with other experiences."),(0,o.kt)("h3",{id:"trickier-cross-game-indexing"},"Trickier cross-game indexing"),(0,o.kt)("p",null,"Unlike games that are built as one giant recursive SNARK circuit, there is no way to succinctly prove a summary of game state. Additionally, unlike optimistic rollups, it's harder to leverage any L1 light client infrastructure to prove game state. This is a consequence of being a pessimistic rollup by default."),(0,o.kt)("p",null,"This makes it harder to do things like peer-discovery of RPC nodes for a game and build cross-game indexing services like a platform to see all achievements earned across games written with Paima. We do, however, have some standards planned to help alleviate this issue."),(0,o.kt)("h2",{id:"the-modular-gaming-rollup-stack"},"The Modular Gaming Rollup Stack"),(0,o.kt)("h1",{id:"architecture-overview"},"Architecture overview"),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://paimastudios.com/paima-engine"},"this page")," for more."))}u.isMDXComponent=!0}}]);