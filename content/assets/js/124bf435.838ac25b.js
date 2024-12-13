"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[61886],{21131:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"table_types","title":"Table & Query Types","description":"Table and Query Types","source":"@site/versioned_docs/version-0.15.0/table_types.md","sourceDirName":".","slug":"/table_types","permalink":"/docs/0.15.0/table_types","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/table_types.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Table & Query Types","summary":"In this page, we describe the different tables types in Hudi.","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4,"last_modified_at":null},"sidebar":"docs","previous":{"title":"File Layouts","permalink":"/docs/0.15.0/file_layouts"},"next":{"title":"Indexing","permalink":"/docs/0.15.0/indexing"}}');var s=i(74848),r=i(28453);const a={title:"Table & Query Types",summary:"In this page, we describe the different tables types in Hudi.",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4,last_modified_at:null},o=void 0,l={},d=[{value:"Table and Query Types",id:"table-and-query-types",level:2},{value:"Table Types",id:"table-types",level:3},{value:"Query types",id:"query-types",level:3},{value:"Copy On Write Table",id:"copy-on-write-table",level:2},{value:"Merge On Read Table",id:"merge-on-read-table",level:2},{value:"Query configs",id:"query-configs",level:2},{value:"Spark configs",id:"spark-configs",level:3},{value:"Flink Configs",id:"flink-configs",level:3},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"table-and-query-types",children:"Table and Query Types"}),"\n",(0,s.jsxs)(t.p,{children:["Hudi table types define how data is indexed & laid out on the DFS and how the above primitives and timeline activities are implemented on top of such organization (i.e how data is written).\nIn turn, ",(0,s.jsx)(t.code,{children:"query types"})," define how the underlying data is exposed to the queries (i.e how data is read)."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Table Type"}),(0,s.jsx)(t.th,{children:"Supported Query types"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Copy On Write"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Snapshot Queries"}),(0,s.jsx)("li",{children:"Incremental Queries"}),(0,s.jsx)("li",{children:"Incremental Queries (CDC)"}),(0,s.jsx)("li",{children:"Time Travel"})]})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Merge On Read"}),(0,s.jsx)(t.td,{children:(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Snapshot Queries"}),(0,s.jsx)("li",{children:"Incremental Queries"}),(0,s.jsx)("li",{children:"Read Optimized Queries"}),(0,s.jsx)("li",{children:"Time Travel"})]})})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"table-types",children:"Table Types"}),"\n",(0,s.jsx)(t.p,{children:"Hudi supports the following table types."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#copy-on-write-table",children:"Copy On Write"})," : Stores data using exclusively columnar file formats (e.g parquet). Updates simply version & rewrite the files by performing a synchronous merge during write."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"#merge-on-read-table",children:"Merge On Read"})," : Stores data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats. Updates are logged to delta files & later compacted to produce new versions of columnar files synchronously or asynchronously."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Following table summarizes the trade-offs between these two table types"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Trade-off"}),(0,s.jsx)(t.th,{children:"CopyOnWrite"}),(0,s.jsx)(t.th,{children:"MergeOnRead"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Latency"}),(0,s.jsx)(t.td,{children:"Higher"}),(0,s.jsx)(t.td,{children:"Lower"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Query Latency"}),(0,s.jsx)(t.td,{children:"Lower"}),(0,s.jsx)(t.td,{children:"Higher"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Update cost (I/O)"}),(0,s.jsx)(t.td,{children:"Higher (rewrite entire parquet)"}),(0,s.jsx)(t.td,{children:"Lower (append to delta log)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Parquet File Size"}),(0,s.jsx)(t.td,{children:"Smaller (high update(I/0) cost)"}),(0,s.jsx)(t.td,{children:"Larger (low update cost)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Write Amplification"}),(0,s.jsx)(t.td,{children:"Higher"}),(0,s.jsx)(t.td,{children:"Lower (depending on compaction strategy)"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"query-types",children:"Query types"}),"\n",(0,s.jsx)(t.p,{children:"Hudi supports the following query types"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Snapshot Queries"})," : Queries see the latest snapshot of the table as of a given commit or compaction action. In case of merge on read table, it exposes near-real time data(few mins) by merging\nthe base and delta files of the latest file slice on-the-fly. For copy on write table,  it provides a drop-in replacement for existing parquet tables, while providing upsert/delete and other write side features."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Incremental Queries"})," : Queries only see new data written to the table, since a given commit/compaction.\nThis effectively provides change streams to enable incremental data pipelines. By default, this produces the latest\nsnapshot of the changes since a given point in timeline.","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Incremental Queries(CDC)"})})," : These are a subtype fo Incremental queries, where queries see all changed data since\na given commit/compaction as opposed to latest state of changed data. This enables full cdc style query use cases\nallowing to see before and after images of the changes along with operations that caused the change."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Read Optimized Queries"})," : Queries see the latest snapshot of table as of a given commit/compaction action. Exposes only the base/columnar files in the latest file slices and guarantees the\nsame columnar query performance compared to a non-hudi columnar table."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Time Travel Queries"})," : Queries the snapshot of a table as of a given timestamp in the timeline."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Following table summarizes the trade-offs between the Snapshot and Read Optimized query types."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Trade-off"}),(0,s.jsx)(t.th,{children:"Snapshot"}),(0,s.jsx)(t.th,{children:"Read Optimized"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Data Latency"}),(0,s.jsx)(t.td,{children:"Lower"}),(0,s.jsx)(t.td,{children:"Higher"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Query Latency"}),(0,s.jsx)(t.td,{children:"Higher (merge base / columnar file + row based delta / log files)"}),(0,s.jsx)(t.td,{children:"Lower (raw base / columnar file performance)"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["For configs related to query types refer ",(0,s.jsx)(t.a,{href:"#query-configs",children:"below"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"copy-on-write-table",children:"Copy On Write Table"}),"\n",(0,s.jsx)(t.p,{children:"File slices in Copy-On-Write table only contain the base/columnar file and each commit produces new versions of base files.\nIn other words, we implicitly compact on every commit, such that only columnar data exists. As a result, the write amplification\n(number of bytes written for 1 byte of incoming data) is much higher, where read amplification is zero.\nThis is a much desired property for analytical workloads, which is predominantly read-heavy."}),"\n",(0,s.jsx)(t.p,{children:"Following illustrates how this works conceptually, when data written into copy-on-write table  and two queries running on top of it."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:i(15377).A,alt:"hudi_cow.png"})}),"\n",(0,s.jsxs)(t.p,{children:["As data gets written, updates to existing file groups produce a new slice for that file group stamped with the commit instant time,\nwhile inserts allocate a new file group and write its first slice for that file group. These file slices and their commit instant times are color coded above.\nSQL queries running against such a table (eg: ",(0,s.jsx)(t.code,{children:"select count(*)"})," counting the total records in that partition), first checks the timeline for the latest commit\nand filters all but latest file slices of each file group. As you can see, an old query does not see the current inflight commit's files color coded in pink,\nbut a new query starting after the commit picks up the new data. Thus queries are immune to any write failures/partial writes and only run on committed data."]}),"\n",(0,s.jsx)(t.p,{children:"The intention of copy on write table, is to fundamentally improve how tables are managed today through"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"First class support for atomically updating data at file-level, instead of rewriting whole tables/partitions"}),"\n",(0,s.jsx)(t.li,{children:"Ability to incremental consume changes, as opposed to wasteful scans or fumbling with heuristics"}),"\n",(0,s.jsx)(t.li,{children:"Tight control of file sizes to keep query performance excellent (small files hurt query performance considerably)."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"merge-on-read-table",children:"Merge On Read Table"}),"\n",(0,s.jsx)(t.p,{children:"Merge on read table is a superset of copy on write, in the sense it still supports read optimized queries of the table by exposing only the base/columnar files in latest file slices.\nAdditionally, it stores incoming upserts for each file group, onto a row based delta log, to support snapshot queries by applying the delta log,\nonto the latest version of each file id on-the-fly during query time. Thus, this table type attempts to balance read and write amplification intelligently, to provide near real-time data.\nThe most significant change here, would be to the compactor, which now carefully chooses which delta log files need to be compacted onto\ntheir columnar base file, to keep the query performance in check (larger delta log files would incur longer merge times with merge data on query side)"}),"\n",(0,s.jsx)(t.p,{children:"Following illustrates how the table works, and shows two types of queries - snapshot query and read optimized query."}),"\n",(0,s.jsx)("figure",{children:(0,s.jsx)("img",{className:"docimage",src:i(15746).A,alt:"hudi_mor.png"})}),"\n",(0,s.jsx)(t.p,{children:"There are lot of interesting things happening in this example, which bring out the subtleties in the approach."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"We now have commits every 1 minute or so, something we could not do in the other table type."}),"\n",(0,s.jsx)(t.li,{children:"Within each file id group, now there is an delta log file, which holds incoming updates to records in the base columnar files. In the example, the delta log files hold\nall the data from 10:05 to 10:10. The base columnar files are still versioned with the commit, as before.\nThus, if one were to simply look at base files alone, then the table layout looks exactly like a copy on write table."}),"\n",(0,s.jsx)(t.li,{children:"A periodic compaction process reconciles these changes from the delta log and produces a new version of base file, just like what happened at 10:05 in the example."}),"\n",(0,s.jsx)(t.li,{children:"There are two ways of querying the same underlying table: Read Optimized query and Snapshot query, depending on whether we chose query performance or freshness of data."}),"\n",(0,s.jsx)(t.li,{children:"The semantics around when data from a commit is available to a query changes in a subtle way for a read optimized query. Note, that such a query\nrunning at 10:10, wont see data after 10:05 above, while a snapshot query always sees the freshest data."}),"\n",(0,s.jsx)(t.li,{children:"When we trigger compaction & what it decides to compact hold all the key to solving these hard problems. By implementing a compacting\nstrategy, where we aggressively compact the latest partitions compared to older partitions, we could ensure the read optimized queries see data\npublished within X minutes in a consistent fashion."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The intention of merge on read table is to enable near real-time processing directly on top of DFS, as opposed to copying\ndata out to specialized systems, which may not be able to handle the data volume. There are also a few secondary side benefits to\nthis table such as reduced write amplification by avoiding synchronous merge of data, i.e, the amount of data written per 1 bytes of data in a batch"}),"\n",(0,s.jsx)(t.h2,{id:"query-configs",children:"Query configs"}),"\n",(0,s.jsx)(t.p,{children:"Following are the configs relevant to different query types."}),"\n",(0,s.jsx)(t.h3,{id:"spark-configs",children:"Spark configs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.datasource.query.type"}),(0,s.jsx)(t.td,{children:"snapshot (Optional)"}),(0,s.jsxs)(t.td,{children:["Whether data needs to be read, in ",(0,s.jsx)(t.code,{children:"incremental"})," mode (new data since an instantTime) (or) ",(0,s.jsx)(t.code,{children:"read_optimized"})," mode (obtain latest view, based on base files) (or) ",(0,s.jsx)(t.code,{children:"snapshot"})," mode (obtain latest view, by merging base and (if any) log files)",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: QUERY_TYPE"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.datasource.read.begin.instanttime"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["Required when ",(0,s.jsx)(t.code,{children:"hoodie.datasource.query.type"})," is set to ",(0,s.jsx)(t.code,{children:"incremental"}),". Represents the instant time to start incrementally pulling data from. The instanttime here need not necessarily correspond to an instant on the timeline. New data written with an instant_time > BEGIN_INSTANTTIME are fetched out. For e.g: \u201820170901080000\u2019 will get all new data written after Sep 1, 2017 08:00AM. Note that if ",(0,s.jsx)(t.code,{children:"hoodie.datasource.read.handle.hollow.commit"})," set to USE_STATE_TRANSITION_TIME, will use instant's ",(0,s.jsx)(t.code,{children:"stateTransitionTime"})," to perform comparison.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: BEGIN_INSTANTTIME"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.datasource.read.end.instanttime"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["Used when ",(0,s.jsx)(t.code,{children:"hoodie.datasource.query.type"})," is set to ",(0,s.jsx)(t.code,{children:"incremental"}),". Represents the instant time to limit incrementally fetched data to. When not specified latest commit time from timeline is assumed by default. When specified, new data written with an instant_time <= END_INSTANTTIME are fetched out. Point in time type queries make more sense with begin and end instant times specified. Note that if ",(0,s.jsx)(t.code,{children:"hoodie.datasource.read.handle.hollow.commit"})," set to ",(0,s.jsx)(t.code,{children:"USE_STATE_TRANSITION_TIME"}),", will use instant's ",(0,s.jsx)(t.code,{children:"stateTransitionTime"})," to perform comparison.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: END_INSTANTTIME"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.datasource.query.incremental.format"}),(0,s.jsx)(t.td,{children:"latest_state (Optional)"}),(0,s.jsxs)(t.td,{children:["This config is used alone with the 'incremental' query type.When set to 'latest_state', it returns the latest records' values.When set to 'cdc', it returns the cdc data.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: INCREMENTAL_FORMAT"}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Since Version: 0.13.0"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"as.of.instant"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["The query instant for time travel. Required only in the context of time travel queries. Without specified this option, we query the latest snapshot.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(t.code,{children:"Config Param: TIME_TRAVEL_AS_OF_INSTANT"})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Refer ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Read-Options",children:"here"})," for more details"]}),"\n",(0,s.jsx)(t.h3,{id:"flink-configs",children:"Flink Configs"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Config Name"}),(0,s.jsx)(t.th,{children:"Default"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"hoodie.datasource.query.type"}),(0,s.jsx)(t.td,{children:"snapshot (Optional)"}),(0,s.jsxs)(t.td,{children:["Decides how data files need to be read, in 1) Snapshot mode (obtain latest view, based on row & columnar data); 2) incremental mode (new data since an instantTime). If ",(0,s.jsx)(t.code,{children:"cdc.enabled"})," is set incremental queries on cdc data are possible; 3) Read Optimized mode (obtain latest view, based on columnar data) .Default: snapshot",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: QUERY_TYPE"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"read.start-commit"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["Required in case of incremental queries. Start commit instant for reading, the commit time format should be 'yyyyMMddHHmmss', by default reading from the latest instant for streaming read",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: READ_START_COMMIT"})]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"read.end-commit"}),(0,s.jsxs)(t.td,{children:["N/A ",(0,s.jsx)(t.strong,{children:"(Required)"})]}),(0,s.jsxs)(t.td,{children:["Used in the context of incremental queries. End commit instant for reading, the commit time format should be 'yyyyMMddHHmmss'",(0,s.jsx)("br",{}),(0,s.jsx)("br",{})," ",(0,s.jsx)(t.code,{children:"Config Param: READ_END_COMMIT"})]})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["Refer ",(0,s.jsx)(t.a,{href:"https://hudi.apache.org/docs/next/configurations#Flink-Options",children:"here"})," for more details."]}),"\n",(0,s.jsx)(t.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsx)("h3",{children:"Videos"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://youtu.be/BiTXyzFNHlA",children:"Comparing Apache Hudi's MOR and COW Tables, Use Cases from Uber"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://youtu.be/vyEvlt57L-s",children:"Different table types in Apache Hudi, MOR and COW, Deep Dive"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.youtube.com/watch?v=c6DCJR91rBQx",children:"How to Query Hudi Tables in Incremental Fashion and Get only New data on AWS Glue | Hands on Lab"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},15377:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/COW_new-34af9e190486467e1b0bfbc5dc410ee2.png"},15746:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/MOR_new-aa806492cc5034a48039f9d8a392b9d8.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);