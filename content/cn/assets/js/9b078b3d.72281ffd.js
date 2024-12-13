"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13021],{37103:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"storage_layouts","title":"Storage Layouts","description":"The following describes the general organization of files in storage for a Hudi table.","source":"@site/versioned_docs/version-1.0.0/storage_layouts.md","sourceDirName":".","slug":"/storage_layouts","permalink":"/cn/docs/storage_layouts","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/storage_layouts.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Storage Layouts","toc":false},"sidebar":"docs","previous":{"title":"Timeline","permalink":"/cn/docs/timeline"},"next":{"title":"Write Operations","permalink":"/cn/docs/write_operations"}}');var n=t(74848),r=t(28453);const a={title:"Storage Layouts",toc:!1},o=void 0,l={},d=[{value:"Base Files",id:"base-files",level:3},{value:"Log Files",id:"log-files",level:3},{value:"Storage Format Versioning",id:"storage-format-versioning",level:3},{value:"Configs",id:"configs",level:3}];function c(e){const i={a:"a",code:"code",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"The following describes the general organization of files in storage for a Hudi table."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Hudi organizes data tables into a directory structure under a ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"base path"})})," on a storage."]}),"\n",(0,n.jsxs)(i.li,{children:["Tables are optionally broken up into ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"partitions"})}),", based on partition columns defined in the table schema."]}),"\n",(0,n.jsxs)(i.li,{children:["Within each partition, files are organized into ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"file groups"})}),", uniquely identified by a file ID (uuid)"]}),"\n",(0,n.jsxs)(i.li,{children:["Each file group contains several ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"file slices"})}),"."]}),"\n",(0,n.jsxs)(i.li,{children:["Each slice contains a ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"base file"})})," (parquet/orc/hfile) (defined by the config - ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/next/configurations/#hoodietablebasefileformat",children:"hoodie.table.base.file.format"})," )\nwritten by a commit that completed at a certain instant, along with set of ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"log files"})})," (",(0,n.jsx)(i.em,{children:".log."}),") written by commits that completed\nbefore the next base file's requested instant."]}),"\n",(0,n.jsxs)(i.li,{children:["Hudi employs Multiversion Concurrency Control (MVCC), where ",(0,n.jsx)(i.a,{href:"compaction",children:"compaction"})," action merges logs and base files to produce new\nfile slices and ",(0,n.jsx)(i.a,{href:"cleaning",children:"cleaning"})," action gets rid of unused/older file slices to reclaim space on the file system."]}),"\n",(0,n.jsxs)(i.li,{children:["All metadata including timeline, metadata table are stored in a special ",(0,n.jsx)(i.code,{children:".hoodie"})," directory under the base path."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"file groups in a table partition",src:t(61525).A+"",width:"6652",height:"3176"})}),"\n",(0,n.jsxs)(i.p,{children:["Please refer the ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.a,{href:"https://hudi.apache.org/tech-specs#file-layout-hierarchy",children:"tech spec"})})," for a more detailed description of the file layouts."]}),"\n",(0,n.jsx)(i.h3,{id:"base-files",children:"Base Files"}),"\n",(0,n.jsx)(i.p,{children:"Base files store full records, against which change records are stored in delta log files below. Hudi currently supports following\nbase file formats."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"columnar formats for vectorized reads, columnar compression and efficient column based access for analytics/data science."}),"\n",(0,n.jsx)(i.li,{children:"row-oriented avro files for fast scans for reading whole records."}),"\n",(0,n.jsxs)(i.li,{children:["random access optimized HFiles for efficient searching for indexed records (based on ",(0,n.jsx)(i.a,{href:"https://github.com/facebook/rocksdb/wiki/A-Tutorial-of-RocksDB-SST-formats",children:"SSTable"})," format)"]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"Row vs Columnar File Format",src:t(68077).A+"",width:"808",height:"625"})}),"\n",(0,n.jsx)(i.h3,{id:"log-files",children:"Log Files"}),"\n",(0,n.jsx)(i.p,{children:"Log files store incremental changes (partial or full) to a base file, such as updates, inserts, and deletes, after the base file was created.\nLog files contain different blocks (data, command, delete blocks etc.) that encode specific changes to the base file. The data block\nencodes updates/inserts to the base file, with customizability to support different needs."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"row-oriented avro files for fast/lightweight writing"}),"\n",(0,n.jsxs)(i.li,{children:["random access optimized HFiles for efficient searching for indexed records (based on ",(0,n.jsx)(i.a,{href:"https://github.com/facebook/rocksdb/wiki/A-Tutorial-of-RocksDB-SST-formats",children:"SSTable"})," format)"]}),"\n",(0,n.jsx)(i.li,{children:"columnar parquet files for vectorized log merging."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"storage-format-versioning",children:"Storage Format Versioning"}),"\n",(0,n.jsxs)(i.p,{children:["Elements of Hudi's storage format like log format, log block structure, timeline file/data schema are all versioned and tied to a given\ntable version. The ",(0,n.jsx)(i.strong,{children:(0,n.jsx)(i.em,{children:"table version"})})," is a monotonically increasing number that is bumped up everytime some bits produced in storage change."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Backwards compatible reading"}),": Hudi releases are backwards compatible to ensure new software releases can read recent older table versions. The recommended way to upgrade\nHudi across different engines, is by first upgrading all readers (e.g. interactive query engines that consume tables) and then upgrading\nany/all writers and table services. Hudi storage engine also implements auto upgrade capability that can gracefully perform a table version\nupgrade on the subsequent write operation, by automatically performing any necessary steps without downtime to queries/reads."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Backwards compatible writing"}),": However, this may not be possible at all times given data platforms built on Hudi could have multi-stage pipelines that can act as readers and\nwriters at the same time. In such cases, Hudi upgrade needs to be performed by upgrading the most downstream jobs first, tracking all the way to\nthe first Hudi tables written possibly by ingestion systems. To ease this process, Hudi allows also writing recent older table versions, such that\nthe new Hudi software binaries can first be rolled out across the entire deployment on top of the same older table version. Once all jobs and engines\nhave the new binary, then upgrade to newer table version can happen in any order and readers will dynamically adapt."]}),"\n",(0,n.jsx)(i.h3,{id:"configs",children:"Configs"}),"\n",(0,n.jsx)(i.p,{children:"The following writer configs control writing older table versions and auto upgrade behavior."}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Config Name"}),(0,n.jsx)(i.th,{children:"Default"}),(0,n.jsx)(i.th,{children:"Description"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.table.version"}),(0,n.jsx)(i.td,{children:"latest (Optional)"}),(0,n.jsx)(i.td,{children:"The table version this writer is storing the table in. This should match the current table version, if table already exists. Set this to a lower version when upgrade as described above."})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:"hoodie.write.auto.upgrade"}),(0,n.jsx)(i.td,{children:"true (Optional)"}),(0,n.jsx)(i.td,{children:"If enabled, writers automatically migrate the table to the specified write table version if the current table version is lower."})]})]})]}),"\n",(0,n.jsxs)(i.p,{children:["Please refer ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/next/configurations/#Layout-Configs",children:"here"})," for additional configs that control storage layout and data distribution, which defines how the files are organized within a table."]})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},61525:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/MOR_new-aa806492cc5034a48039f9d8a392b9d8.png"},68077:(e,i,t)=>{t.d(i,{A:()=>s});const s=t.p+"assets/images/row-col-based-base-file-formats-4d32210387a04e1109cb59c9261a38af.png"},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>o});var s=t(96540);const n={},r=s.createContext(n);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);