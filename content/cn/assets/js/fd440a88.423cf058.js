"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[73856],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>g});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||y[c]||i;return a?n.createElement(g,l(l({ref:t},u),{},{components:a})):n.createElement(g,l({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},36332:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(45072),r=(a(11504),a(95788));const i={title:"Table & Query Types",summary:"In this page, we describe the different tables types in Hudi.",toc:!0,last_modified_at:null},l=void 0,o={unversionedId:"table_types",id:"version-0.12.0/table_types",title:"Table & Query Types",description:"Table and Query Types",source:"@site/versioned_docs/version-0.12.0/table_types.md",sourceDirName:".",slug:"/table_types",permalink:"/cn/docs/0.12.0/table_types",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.0/table_types.md",tags:[],version:"0.12.0",frontMatter:{title:"Table & Query Types",summary:"In this page, we describe the different tables types in Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"Timeline",permalink:"/cn/docs/0.12.0/timeline"},next:{title:"Indexing",permalink:"/cn/docs/0.12.0/indexing"}},s=[{value:"Table and Query Types",id:"table-and-query-types",children:[{value:"Table Types",id:"table-types",children:[],level:3},{value:"Query types",id:"query-types",children:[],level:3}],level:2},{value:"Copy On Write Table",id:"copy-on-write-table",children:[],level:2},{value:"Merge On Read Table",id:"merge-on-read-table",children:[],level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.yg)(u,(0,n.c)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"table-and-query-types"},"Table and Query Types"),(0,r.yg)("p",null,"Hudi table types define how data is indexed & laid out on the DFS and how the above primitives and timeline activities are implemented on top of such organization (i.e how data is written).\nIn turn, ",(0,r.yg)("inlineCode",{parentName:"p"},"query types")," define how the underlying data is exposed to the queries (i.e how data is read)."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Table Type"),(0,r.yg)("th",{parentName:"tr",align:null},"Supported Query types"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Copy On Write"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot Queries + Incremental Queries")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Merge On Read"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot Queries + Incremental Queries + Read Optimized Queries")))),(0,r.yg)("h3",{id:"table-types"},"Table Types"),(0,r.yg)("p",null,"Hudi supports the following table types."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#copy-on-write-table"},"Copy On Write")," : Stores data using exclusively columnar file formats (e.g parquet). Updates simply version & rewrite the files by performing a synchronous merge during write."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"#merge-on-read-table"},"Merge On Read")," : Stores data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats. Updates are logged to delta files & later compacted to produce new versions of columnar files synchronously or asynchronously.")),(0,r.yg)("p",null,"Following table summarizes the trade-offs between these two table types"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Trade-off"),(0,r.yg)("th",{parentName:"tr",align:null},"CopyOnWrite"),(0,r.yg)("th",{parentName:"tr",align:null},"MergeOnRead"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Latency"),(0,r.yg)("td",{parentName:"tr",align:null},"Higher"),(0,r.yg)("td",{parentName:"tr",align:null},"Lower")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Query Latency"),(0,r.yg)("td",{parentName:"tr",align:null},"Lower"),(0,r.yg)("td",{parentName:"tr",align:null},"Higher")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Update cost (I/O)"),(0,r.yg)("td",{parentName:"tr",align:null},"Higher (rewrite entire parquet)"),(0,r.yg)("td",{parentName:"tr",align:null},"Lower (append to delta log)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Parquet File Size"),(0,r.yg)("td",{parentName:"tr",align:null},"Smaller (high update(I/0) cost)"),(0,r.yg)("td",{parentName:"tr",align:null},"Larger (low update cost)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Write Amplification"),(0,r.yg)("td",{parentName:"tr",align:null},"Higher"),(0,r.yg)("td",{parentName:"tr",align:null},"Lower (depending on compaction strategy)")))),(0,r.yg)("h3",{id:"query-types"},"Query types"),(0,r.yg)("p",null,"Hudi supports the following query types"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Snapshot Queries")," : Queries see the latest snapshot of the table as of a given commit or compaction action. In case of merge on read table, it exposes near-real time data(few mins) by merging\nthe base and delta files of the latest file slice on-the-fly. For copy on write table,  it provides a drop-in replacement for existing parquet tables, while providing upsert/delete and other write side features."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Incremental Queries")," : Queries only see new data written to the table, since a given commit/compaction. This effectively provides change streams to enable incremental data pipelines."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Read Optimized Queries")," : Queries see the latest snapshot of table as of a given commit/compaction action. Exposes only the base/columnar files in latest file slices and guarantees the\nsame columnar query performance compared to a non-hudi columnar table.")),(0,r.yg)("p",null,"Following table summarizes the trade-offs between the different query types."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Trade-off"),(0,r.yg)("th",{parentName:"tr",align:null},"Snapshot"),(0,r.yg)("th",{parentName:"tr",align:null},"Read Optimized"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data Latency"),(0,r.yg)("td",{parentName:"tr",align:null},"Lower"),(0,r.yg)("td",{parentName:"tr",align:null},"Higher")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Query Latency"),(0,r.yg)("td",{parentName:"tr",align:null},"Higher (merge base / columnar file + row based delta / log files)"),(0,r.yg)("td",{parentName:"tr",align:null},"Lower (raw base / columnar file performance)")))),(0,r.yg)("h2",{id:"copy-on-write-table"},"Copy On Write Table"),(0,r.yg)("p",null,"File slices in Copy-On-Write table only contain the base/columnar file and each commit produces new versions of base files.\nIn other words, we implicitly compact on every commit, such that only columnar data exists. As a result, the write amplification\n(number of bytes written for 1 byte of incoming data) is much higher, where read amplification is zero.\nThis is a much desired property for analytical workloads, which is predominantly read-heavy."),(0,r.yg)("p",null,"Following illustrates how this works conceptually, when data written into copy-on-write table  and two queries running on top of it."),(0,r.yg)("figure",null,(0,r.yg)("img",{className:"docimage",src:a(85808).c,alt:"hudi_cow.png"})),(0,r.yg)("p",null,"As data gets written, updates to existing file groups produce a new slice for that file group stamped with the commit instant time,\nwhile inserts allocate a new file group and write its first slice for that file group. These file slices and their commit instant times are color coded above.\nSQL queries running against such a table (eg: ",(0,r.yg)("inlineCode",{parentName:"p"},"select count(*)")," counting the total records in that partition), first checks the timeline for the latest commit\nand filters all but latest file slices of each file group. As you can see, an old query does not see the current inflight commit's files color coded in pink,\nbut a new query starting after the commit picks up the new data. Thus queries are immune to any write failures/partial writes and only run on committed data."),(0,r.yg)("p",null,"The intention of copy on write table, is to fundamentally improve how tables are managed today through"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"First class support for atomically updating data at file-level, instead of rewriting whole tables/partitions"),(0,r.yg)("li",{parentName:"ul"},"Ability to incremental consume changes, as opposed to wasteful scans or fumbling with heuristics"),(0,r.yg)("li",{parentName:"ul"},"Tight control of file sizes to keep query performance excellent (small files hurt query performance considerably).")),(0,r.yg)("h2",{id:"merge-on-read-table"},"Merge On Read Table"),(0,r.yg)("p",null,"Merge on read table is a superset of copy on write, in the sense it still supports read optimized queries of the table by exposing only the base/columnar files in latest file slices.\nAdditionally, it stores incoming upserts for each file group, onto a row based delta log, to support snapshot queries by applying the delta log,\nonto the latest version of each file id on-the-fly during query time. Thus, this table type attempts to balance read and write amplification intelligently, to provide near real-time data.\nThe most significant change here, would be to the compactor, which now carefully chooses which delta log files need to be compacted onto\ntheir columnar base file, to keep the query performance in check (larger delta log files would incur longer merge times with merge data on query side)"),(0,r.yg)("p",null,"Following illustrates how the table works, and shows two types of queries - snapshot query and read optimized query."),(0,r.yg)("figure",null,(0,r.yg)("img",{className:"docimage",src:a(54140).c,alt:"hudi_mor.png"})),(0,r.yg)("p",null,"There are lot of interesting things happening in this example, which bring out the subtleties in the approach."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"We now have commits every 1 minute or so, something we could not do in the other table type."),(0,r.yg)("li",{parentName:"ul"},"Within each file id group, now there is an delta log file, which holds incoming updates to records in the base columnar files. In the example, the delta log files hold\nall the data from 10:05 to 10:10. The base columnar files are still versioned with the commit, as before.\nThus, if one were to simply look at base files alone, then the table layout looks exactly like a copy on write table."),(0,r.yg)("li",{parentName:"ul"},"A periodic compaction process reconciles these changes from the delta log and produces a new version of base file, just like what happened at 10:05 in the example."),(0,r.yg)("li",{parentName:"ul"},"There are two ways of querying the same underlying table: Read Optimized query and Snapshot query, depending on whether we chose query performance or freshness of data."),(0,r.yg)("li",{parentName:"ul"},"The semantics around when data from a commit is available to a query changes in a subtle way for a read optimized query. Note, that such a query\nrunning at 10:10, wont see data after 10:05 above, while a snapshot query always sees the freshest data."),(0,r.yg)("li",{parentName:"ul"},"When we trigger compaction & what it decides to compact hold all the key to solving these hard problems. By implementing a compacting\nstrategy, where we aggressively compact the latest partitions compared to older partitions, we could ensure the read optimized queries see data\npublished within X minutes in a consistent fashion.")),(0,r.yg)("p",null,"The intention of merge on read table is to enable near real-time processing directly on top of DFS, as opposed to copying\ndata out to specialized systems, which may not be able to handle the data volume. There are also a few secondary side benefits to\nthis table such as reduced write amplification by avoiding synchronous merge of data, i.e, the amount of data written per 1 bytes of data in a batch"))}d.isMDXComponent=!0},85808:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/hudi_cow-9750b5f006646e2d1874ad18b355d200.png"},54140:(e,t,a)=>{a.d(t,{c:()=>n});const n=a.p+"assets/images/hudi_mor-5f9da4e0c57c9ee20b74b31c035ba0e6.png"}}]);