"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2248:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:6},o="Replay protection",s={unversionedId:"home/read-write-L2-state/replay-protection",id:"home/read-write-L2-state/replay-protection",title:"Replay protection",description:'Given that games made with Paima Engine are technically "open" (meaning anyone can submit valid game input), one thing which we need to look out for is replaying attacks. Replaying attacks are situations classically in blockchains (but liable to any openly accessible state machine) where a previous valid input is resubmitted to the state machine/blockchain. Usually this is done by bad actors, and can cause various issues.',source:"@site/docs/home/2-read-write-L2-state/6-replay-protection.md",sourceDirName:"home/2-read-write-L2-state",slug:"/home/read-write-L2-state/replay-protection",permalink:"/home/read-write-L2-state/replay-protection",draft:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/2-read-write-L2-state/6-replay-protection.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Batched mode",permalink:"/home/read-write-L2-state/batched-mode"},next:{title:"Auto-signing for apps",permalink:"/home/read-write-L2-state/autosign"}},l={},c=[{value:"Upgrading submittedData",id:"upgrading-submitteddata",level:2},{value:"Batch Submitted Game Input Nonces",id:"batch-submitted-game-input-nonces",level:2},{value:"Directly Submitted Game Input Nonces",id:"directly-submitted-game-input-nonces",level:2},{value:"Scheduled Input Nonces",id:"scheduled-input-nonces",level:2},{value:"Paima SM Nonce Checking",id:"paima-sm-nonce-checking",level:2}],p={toc:c},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"replay-protection"},"Replay protection"),(0,i.kt)("p",null,'Given that games made with Paima Engine are technically "open" (meaning anyone can submit valid game input), one thing which we need to look out for is replaying attacks. Replaying attacks are situations classically in blockchains (but liable to any openly accessible state machine) where a previous valid input is resubmitted to the state machine/blockchain. Usually this is done by bad actors, and can cause various issues.'),(0,i.kt)("p",null,"In our case, there are a few scenarios where replays can happen:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Repeating a user's transaction for one batch either multiple times in the same batch, or in different batches"),(0,i.kt)("li",{parentName:"ol"},"Resubmitting a user's transaction for one batch for a different app"),(0,i.kt)("li",{parentName:"ol"},"If our backend crashes in the middle of processing a block, it will re-pull the block via the funnel and re-process all game inputs again (even the ones it processed half-way through prior to crashing).")),(0,i.kt)("p",null,"We handle the base replay protection by having the user calculate ",(0,i.kt)("inlineCode",{parentName:"p"},"sign(securityPrefix || input || timestamp)")," where:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"securityPrefix")," is described ",(0,i.kt)("a",{parentName:"li",href:"./7%20-%20autosign.md"},"here")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," is used for replay protection")),(0,i.kt)("p",null,"However, just storing this signature is not enough to protect against ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kadenzipfel/smart-contract-vulnerabilities/blob/master/vulnerabilities/signature-malleability.md"},"signature malleability"),". As such, we require introducing the concept of nonces to game inputs to address the replay vectors above."),(0,i.kt)("h2",{id:"upgrading-submitteddata"},"Upgrading submittedData"),(0,i.kt)("p",null,"To support nonces, we first must add a ",(0,i.kt)("inlineCode",{parentName:"p"},"nonce")," field to ",(0,i.kt)("inlineCode",{parentName:"p"},"submittedData"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'{\n    inputData: "s|...",\n    userAddress: "0x...",\n    inputNonce: "9af3uasdfo2h..."\n}\n')),(0,i.kt)("p",null,"A nonce will be the hash of various other values (depending on how the game input was submitted), and thus be a string. Nonces are generated by Paima Funnel for each ",(0,i.kt)("inlineCode",{parentName:"p"},"submittedData")," when they read from on-chain."),(0,i.kt)("h2",{id:"batch-submitted-game-input-nonces"},"Batch Submitted Game Input Nonces"),(0,i.kt)("p",null,"Paima Funnel takes the batched transaction, separates out the ",(0,i.kt)("inlineCode",{parentName:"p"},"submittedData"),", and potentially performs two steps of computation for each:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Timestamp checking"),(0,i.kt)("li",{parentName:"ol"},"Nonce generation")),(0,i.kt)("p",null,"In timestamp checking, the ",(0,i.kt)("inlineCode",{parentName:"p"},"millisecondTimestamp")," is converted into seconds and checked whether it is within 24 hours of the ",(0,i.kt)("inlineCode",{parentName:"p"},"timestamp"),' of the block that the batched transaction was included in. In other words, all signed game inputs inside of batch transactions have a 24 hour "validity period". If the difference between the two timestamps is greater than 24 hours, then throw away the submittedData as it is deemed invalid. (As such, it is important for clients to honestly submit the time when signing in order to ensure the game input is accepted.)'),(0,i.kt)("p",null,"If timestamp checking succeeds, then the batch submitted game inputs have a nonce generated by Paima Funnel which is a hash of the:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[millisecondTimestamp] + [userAddress] + [game input]\n")),(0,i.kt)("h2",{id:"directly-submitted-game-input-nonces"},"Directly Submitted Game Input Nonces"),(0,i.kt)("p",null,"Directly submitted (non-batched) game inputs will be given a nonce by Paima Funnel which is a hash of the:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"[blockHeight] + [userAddress] + [game input]\n")),(0,i.kt)("p",null,"Unlike with batched game inputs, we can use block height here. This is because the blockchain prevents replay attacks (by bad actors) of the game input automatically, so it's safe to create a unique identifier with the block height and not some signed auxillary user-submitted data (the timestamp for batched game input nonces)."),(0,i.kt)("h2",{id:"scheduled-input-nonces"},"Scheduled Input Nonces"),(0,i.kt)("p",null,"Scheduled inputs should be created with an empty string nonce. Empty string nonces are impossible for non-scheduled inputs, and as such can be treated as always unique."),(0,i.kt)("p",null,"This empty string nonce model for scheduled inputs is secure from replays as long as we ensure that we delete the scheduled input at the same time (as a part of the same set of SQL queries) as applying the results of the STF on the scheduled input."),(0,i.kt)("h2",{id:"paima-sm-nonce-checking"},"Paima SM Nonce Checking"),(0,i.kt)("p",null,"Paima SM will create a ",(0,i.kt)("inlineCode",{parentName:"p"},"nonces")," table in the game DB on initial start, and use this table to record all nonces of game inputs which have finished processing and check for duplicates."),(0,i.kt)("p",null,"Nonce checking and saving works as such:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Every time a game input is processed by Paima SM, it goes through a nonce checking process where it looks up whether the nonce exists in the ",(0,i.kt)("inlineCode",{parentName:"li"},"nonces")," table (the nonce is the primary key)."),(0,i.kt)("li",{parentName:"ol"},"If yes, throw away the game input and don't run the STF as it would otherwise replay the game input (bad actor replaying a batched tx, or the db crashed while processing a block)."),(0,i.kt)("li",{parentName:"ol"},"If no (or empty string nonce, aka. scheduled input), continue using the game input in the STF."),(0,i.kt)("li",{parentName:"ol"},"After the game input has finished processing in the STF and returns a set of SQL queries, add one update query to add the nonce to the ",(0,i.kt)("inlineCode",{parentName:"li"},"nonces")," table, where the primary key is the nonce and the value is the current block height (from the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainData")," that contained this game input).")),(0,i.kt)("p",null,"As such, we prevent all replaying thanks to nonces, whether it is by a bad actor, or due to the backend dying while processing a block."),(0,i.kt)("p",null,"Nonces will be garbage collected every week, but this is safe, as the validity period of transactions with nonces would stop old transactions from being replayed anyway."))}h.isMDXComponent=!0}}]);