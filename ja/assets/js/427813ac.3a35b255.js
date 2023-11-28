"use strict";(self.webpackChunkpaima_engine_docs=self.webpackChunkpaima_engine_docs||[]).push([[8823],{9767:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>h,toc:()=>l});var a=s(5893),n=s(1151);const o={},i="Database Snapshotting",h={id:"home/database-management/snapshotting",title:"Database Snapshotting",description:"Paima will periodically generate local snapshots of the database. This is useful for two main cases:",source:"@site/docs/home/500-database-management/1-snapshotting.md",sourceDirName:"home/500-database-management",slug:"/home/database-management/snapshotting",permalink:"/ja/home/database-management/snapshotting",draft:!1,unlisted:!1,editUrl:"https://github.com/PaimaStudios/paima-engine-docs/docs/home/500-database-management/1-snapshotting.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Randomness",permalink:"/ja/home/randomness/"},next:{title:"Game Versioning",permalink:"/ja/home/releasing-a-game/versioning"}},r={},l=[{value:"Snapshots Storage &amp; Scheduling",id:"snapshots-storage--scheduling",level:2},{value:"Creating The Snapshot",id:"creating-the-snapshot",level:2},{value:"Snapshot Deletion",id:"snapshot-deletion",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"database-snapshotting",children:"Database Snapshotting"}),"\n",(0,a.jsx)(t.p,{children:"Paima will periodically generate local snapshots of the database. This is useful for two main cases:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Restoring the database in case a bug causes it to get into a bad state"}),"\n",(0,a.jsx)(t.li,{children:"Bootstrapping new deployments of a game quickly"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"snapshots-storage--scheduling",children:"Snapshots Storage & Scheduling"}),"\n",(0,a.jsxs)(t.p,{children:["Paima Engine Runtime will automatically create/use a ",(0,a.jsx)(t.code,{children:"snapshots"})," folder. On startup, the runtime will check the snapshots folder and note the block height when the last snapshot was taken (by reading the file names, which are following the ",(0,a.jsx)(t.code,{children:"paima-snapshot-X"})," standard, where ",(0,a.jsx)(t.code,{children:"X"})," is the block height that the snapshot was taken at). If no snapshot exists, then a snapshot is created at that point."]}),"\n",(0,a.jsxs)(t.p,{children:["Snapshots are made based on the latest block height stored in the game's state machine. Notably, snapshots are made every ",(0,a.jsx)(t.code,{children:"21600"})," blocks AFTER the state machine has been updated for that block number."]}),"\n",(0,a.jsx)(t.h2,{id:"creating-the-snapshot",children:"Creating The Snapshot"}),"\n",(0,a.jsxs)(t.p,{children:["We will be using ",(0,a.jsx)(t.a,{href:"https://www.postgresql.org/docs/current/app-pgdump.html",children:"pg_dump"}),' to create the snapshots because "it makes consistent backups even if the database is being used concurrently."']}),"\n",(0,a.jsxs)(t.p,{children:["You can find a pretty straightforward set of instructions for initiating the snapshots by following ",(0,a.jsx)(t.a,{href:"https://soshace.com/automated-postgresql-backups-with-nodejs-and-bash/",children:"this guide"}),' all the way up until "compressing the archive" (we will want to do compression).']}),"\n",(0,a.jsx)(t.h2,{id:"snapshot-deletion",children:"Snapshot Deletion"}),"\n",(0,a.jsx)(t.p,{children:"Only 2 snapshots should be kept, thus when a new snapshot is created the runtime should check how many snapshots exist in the folder. If there are 3, then the oldest snapshot must be deleted."})]})}function c(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>h,a:()=>i});var a=s(7294);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);