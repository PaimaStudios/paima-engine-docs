"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[9565],{6586:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(5893),t=n(1151);const a={sidebar_position:3},i="Error Handling",s={id:"home/read-write-L2-state/error-handling",title:"Error Handling",description:"Errors are unavoidable. Notably, be sure to take into accounts the following error types:",source:"@site/docs/home/200-read-write-L2-state/3-error-handling.md",sourceDirName:"home/200-read-write-L2-state",slug:"/home/read-write-L2-state/error-handling",permalink:"/ja/home/read-write-L2-state/error-handling",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/200-read-write-L2-state/3-error-handling.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sequential State Identifier",permalink:"/ja/home/read-write-L2-state/parallelism"},next:{title:"Posting Test Game Inputs To L2 Contract",permalink:"/ja/home/read-write-L2-state/posting-test-game-inputs"}},d={},l=[];function c(e){const r={code:"code",h1:"h1",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h1,{id:"error-handling",children:"Error Handling"}),"\n",(0,o.jsx)(r.p,{children:"Errors are unavoidable. Notably, be sure to take into accounts the following error types:"}),"\n",(0,o.jsxs)(r.ol,{children:["\n",(0,o.jsx)(r.li,{children:"Programming mistakes"}),"\n",(0,o.jsx)(r.li,{children:"Concurrency issues. Blockchains are asynchronous and so an action that was valid when the user took it may no longer be valid when it appears on-chain. For example, a user could try joining a lobby that no longer exists."}),"\n",(0,o.jsx)(r.li,{children:"User abuse. Just because your application has no UI for something, it doesn't stop somebody from creating a transaction and submitting it to the blockchain manually. For example, a user could try joining the same lobby two times on the same wallet to see if it breaks your application"}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"To handle errors, Paima has a system to allow define error codes for your application that extend the built-in error handling in Paima"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"import type { ErrorMessageFxn } from '@paima/sdk/utils';\nimport { buildErrorCodeTranslator } from '@paima/sdk/utils';\nimport type { EndpointErrorFxn } from '@paima/sdk/mw-core';\nimport {\n  PaimaMiddlewareErrorCode,\n  PAIMA_MIDDLEWARE_ERROR_MESSAGES,\n  buildAbstractEndpointErrorFxn,\n} from '@paima/sdk/mw-core';\n\nexport const enum MiddlewareErrorCode {\n  // start your error codes after the reserved namespace for Paima Engine's internal system\n  GENERIC_ERROR = PaimaMiddlewareErrorCode.FINAL_PAIMA_GENERIC_ERROR + 1,\n  CANNOT_JOIN_OWN_LOBBY,\n}\n\ntype ErrorMessageMapping = Record<MiddlewareErrorCode, string>;\nconst MIDDLEWARE_ERROR_MESSAGES: ErrorMessageMapping = {\n  [MiddlewareErrorCode.GENERIC_ERROR]: 'Unspecified generic Game error',\n  [MiddlewareErrorCode.CANNOT_JOIN_OWN_LOBBY]: 'Cannot join your own lobby',\n};\n\nconst errorMessageFxn: ErrorMessageFxn = buildErrorCodeTranslator({\n  ...PAIMA_MIDDLEWARE_ERROR_MESSAGES,\n  ...MIDDLEWARE_ERROR_MESSAGES,\n});\n\nexport function buildEndpointErrorFxn(endpointName: string): EndpointErrorFxn {\n  return buildAbstractEndpointErrorFxn(errorMessageFxn, endpointName);\n}\n"})}),"\n",(0,o.jsx)(r.p,{children:"Now, when you need to throw an error, you can easily handle them as seen below"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-typescript",children:"const errorFxn = buildEndpointErrorFxn('joinLobby');\n\nif (userJoinedOwnLobby(lobby, userId)) {\n    return errorFxn(MiddlewareErrorCode.CANNOT_JOIN_OWN_LOBBY);\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,r,n)=>{n.d(r,{Z:()=>s,a:()=>i});var o=n(7294);const t={},a=o.createContext(t);function i(e){const r=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(a.Provider,{value:r},e.children)}}}]);