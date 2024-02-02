"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13116],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>h});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),g=i,h=c["".concat(l,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9780:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(45072),i=(n(11504),n(95788));const o={title:"Indexing",toc:!0},r=void 0,s={unversionedId:"indexing",id:"version-0.13.0/indexing",title:"Indexing",description:"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.",source:"@site/versioned_docs/version-0.13.0/indexing.md",sourceDirName:".",slug:"/indexing",permalink:"/cn/docs/0.13.0/indexing",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/indexing.md",tags:[],version:"0.13.0",frontMatter:{title:"Indexing",toc:!0},sidebar:"docs",previous:{title:"Table & Query Types",permalink:"/cn/docs/0.13.0/table_types"},next:{title:"File Layouts",permalink:"/cn/docs/0.13.0/file_layouts"}},l=[{value:"Index Types in Hudi",id:"index-types-in-hudi",children:[],level:2},{value:"Indexing Strategies",id:"indexing-strategies",children:[{value:"Workload 1: Late arriving updates to fact tables",id:"workload-1-late-arriving-updates-to-fact-tables",children:[],level:3},{value:"Workload 2: De-Duplication in event tables",id:"workload-2-de-duplication-in-event-tables",children:[],level:3},{value:"Workload 3: Random updates/deletes to a dimension table",id:"workload-3-random-updatesdeletes-to-a-dimension-table",children:[],level:3}],level:2}],d={toc:l},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,a.c)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."),(0,i.yg)("p",null,"For ",(0,i.yg)("a",{parentName:"p",href:"/docs/table_types#copy-on-write-table"},"Copy-On-Write tables"),", this enables fast upsert/delete operations, by\navoiding the need to join against the entire dataset to determine which files to rewrite.\nFor ",(0,i.yg)("a",{parentName:"p",href:"/docs/table_types#merge-on-read-table"},"Merge-On-Read tables"),", this design allows Hudi to bound the amount of\nrecords any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,i.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions"},"Apache Hive ACID"),"),\ncould end up having to merge all the base files against all incoming updates/delete records:"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Fact table",src:n(69800).c}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure: Comparison of merge cost for updates (yellow blocks) against base files (white blocks)")),(0,i.yg)("h2",{id:"index-types-in-hudi"},"Index Types in Hudi"),(0,i.yg)("p",null,"Currently, Hudi supports the following indexing options."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Bloom Index (default):")," Employs bloom filters built out of the record keys, optionally also pruning candidate files using record key ranges."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Simple Index:")," Performs a lean join of the incoming update/delete records against keys extracted from the table on storage."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"HBase Index:")," Manages the index mapping in an external Apache HBase table."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"Bring your own implementation:")," You can extend this ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/HoodieIndex.java"},"public API"),"\nto implement custom indexing.")),(0,i.yg)("p",null,"Writers can pick one of these options using ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.index.type")," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.index.class")," and supplying a subclass of ",(0,i.yg)("inlineCode",{parentName:"p"},"SparkHoodieIndex")," (for Apache Spark writers)"),(0,i.yg)("p",null,"Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.index.type=GLOBAL_BLOOM")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.index.type=GLOBAL_SIMPLE")," - respectively. HBase index is by nature a global index."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Global index:"),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete cost grows\nwith size of the table ",(0,i.yg)("inlineCode",{parentName:"p"},"O(size of table)"),", which might still be acceptable for smaller tables.")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"Non Global index:")," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,i.yg)("inlineCode",{parentName:"p"},"O(number of records updated/deleted)")," and\nscales well with write volume."))),(0,i.yg)("p",null,"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workload types.\nLet\u2019s walk through some typical workload types and see how to leverage the right Hudi index for such use-cases.\nThis is based on our experience and you should diligently decide if the same strategies are best for your workloads."),(0,i.yg)("h2",{id:"indexing-strategies"},"Indexing Strategies"),(0,i.yg)("h3",{id:"workload-1-late-arriving-updates-to-fact-tables"},"Workload 1: Late arriving updates to fact tables"),(0,i.yg)("p",null,"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Fact table",src:n(82920).c}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure: Typical update pattern for Fact tables")),(0,i.yg)("p",null,"For such workloads, the ",(0,i.yg)("inlineCode",{parentName:"p"},"BLOOM")," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."),(0,i.yg)("p",null,"In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.bloom.index.filter.type=DYNAMIC_V0"),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio."),(0,i.yg)("h3",{id:"workload-2-de-duplication-in-event-tables"},"Workload 2: De-Duplication in event tables"),(0,i.yg)("p",null,'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement.'),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Event table",src:n(98856).c}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure showing the spread of updates for Event table.")),(0,i.yg)("p",null,"In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication with HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,i.yg)("inlineCode",{parentName:"p"},"BLOOM")," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,i.yg)("inlineCode",{parentName:"p"},"event_ts + event_id")," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions."),(0,i.yg)("h3",{id:"workload-3-random-updatesdeletes-to-a-dimension-table"},"Workload 3: Random updates/deletes to a dimension table"),(0,i.yg)("p",null,"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"Dimensions table",src:n(68009).c}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure showing the spread of updates for Dimensions table.")),(0,i.yg)("p",null,"As discussed before, the ",(0,i.yg)("inlineCode",{parentName:"p"},"BLOOM")," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,i.yg)("inlineCode",{parentName:"p"},"SIMPLE")," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,i.yg)("inlineCode",{parentName:"p"},"HBASE")," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables."),(0,i.yg)("p",null,"When using a global index, users should also consider setting ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.bloom.index.update.partition.path=true")," or ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.simple.index.update.partition.path=true")," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."))}c.isMDXComponent=!0},68009:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Dimension20tables-6bbe96fbe9102541487b1819532f6bd4.gif"},98856:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Event20tables-8998b57588a66cb2f5d3e9233dfb6d0f.gif"},82920:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Fact20tables-0255e82a96683124f7116060e9f76cbe.gif"},69800:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/with-and-without-index-81d481917e61e4cd1be2426c12994b8b.png"}}]);