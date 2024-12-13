"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[24970],{6816:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"indexing","title":"Indexing","description":"Indexing","source":"@site/versioned_docs/version-0.15.0/indexing.md","sourceDirName":".","slug":"/indexing","permalink":"/docs/0.15.0/indexing","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/indexing.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Indexing","toc":true,"toc_min_heading_level":2,"toc_max_heading_level":4},"sidebar":"docs","previous":{"title":"Table & Query Types","permalink":"/docs/0.15.0/table_types"},"next":{"title":"Write Operations","permalink":"/docs/0.15.0/write_operations"}}');var s=n(74848),a=n(28453);const o={title:"Indexing",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},r=void 0,d={},l=[{value:"Indexing",id:"indexing",level:2},{value:"Multi-modal Indexing",id:"multi-modal-indexing",level:2},{value:"Index Types in Hudi",id:"index-types-in-hudi",level:2},{value:"Global and Non-Global Indexes",id:"global-and-non-global-indexes",level:3},{value:"Configs",id:"configs",level:3},{value:"Spark based configs",id:"spark-based-configs",level:4},{value:"Flink based configs",id:"flink-based-configs",level:4},{value:"Indexing Strategies",id:"indexing-strategies",level:2},{value:"Workload 1: Late arriving updates to fact tables",id:"workload-1-late-arriving-updates-to-fact-tables",level:3},{value:"Workload 2: De-Duplication in event tables",id:"workload-2-de-duplication-in-event-tables",level:3},{value:"Workload 3: Random updates/deletes to a dimension table",id:"workload-3-random-updatesdeletes-to-a-dimension-table",level:3},{value:"Related Resources",id:"related-resources",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"indexing",children:"Indexing"}),"\n",(0,s.jsx)(i.p,{children:"Hudi provides efficient upserts, by mapping a given hoodie key (record key + partition path) consistently to a file id, via an indexing mechanism.\nThis mapping between record key and file group/file id, never changes once the first version of a record has been written to a file. In short, the\nmapped file group contains all versions of a group of records."}),"\n",(0,s.jsxs)(i.p,{children:["For ",(0,s.jsx)(i.a,{href:"table_types#copy-on-write-table",children:"Copy-On-Write tables"}),", this enables fast upsert/delete operations, by\navoiding the need to join against the entire dataset to determine which files to rewrite.\nFor ",(0,s.jsx)(i.a,{href:"table_types#merge-on-read-table",children:"Merge-On-Read tables"}),", this design allows Hudi to bound the amount of\nrecords any given base file needs to be merged against.\nSpecifically, a given base file needs to merged only against updates for records that are part of that base file. In contrast,\ndesigns without an indexing component (e.g: ",(0,s.jsx)(i.a,{href:"https://cwiki.apache.org/confluence/display/Hive/Hive+Transactions",children:"Apache Hive ACID"}),"),\ncould end up having to merge all the base files against all incoming updates/delete records:"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Fact table",src:n(82301).A+"",width:"3994",height:"1704"}),"\n",(0,s.jsx)("p",{align:"center",children:"Figure: Comparison of merge cost for updates (dark blue blocks) against base files (light blue blocks)"})]}),"\n",(0,s.jsx)(i.h2,{id:"multi-modal-indexing",children:"Multi-modal Indexing"}),"\n",(0,s.jsxs)(i.p,{children:["Hudi supoprts a multi-modal index by augmenting the metadata table with the capability to incorporate new types of indexes, complemented by an asynchronous mechanism for index construction. This enhancement supports a range of indexes within the metadata table, significantly improving the efficiency of both writing to and reading from the table. For additional information on Hudi's metadata table, check out Hudi's ",(0,s.jsx)(i.a,{href:"https://hudi.apache.org/docs/next/metadata",children:"metadata table"})," documentation."]}),"\n",(0,s.jsx)(i.h2,{id:"index-types-in-hudi",children:"Index Types in Hudi"}),"\n",(0,s.jsx)(i.p,{children:"Currently, Hudi supports the following index types. Default is SIMPLE on Spark engine, and INMEMORY on Flink and Java\nengines."}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"BLOOM:"})," Uses bloom filters generated from record keys, with the option to further narrow down candidate files based on the ranges of the record keys. It requires keys to be partition-level unique so it can function correctly."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GLOBAL_BLOOM:"})," Utilizes bloom filters created from record keys, and may also refine the selection of candidate files by using the ranges of record keys. It requires keys to be table/global-level unique so it can function correctly."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"SIMPLE (default for Spark engines):"})," This is the standard index type for the Spark engine. It executes an efficient join of incoming records with keys retrieved from the table stored on disk. It requires keys to be partition-level unique so it can function correctly."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"GLOBAL_SIMPLE:"})," Performs a lean join of the incoming records against keys extracted from the table on storage. It requires keys to be table/global-level unique so it can function correctly."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"HBASE:"})," Mangages the index mapping through an external table in Apache HBase."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"INMEMORY (default for Flink and Java):"})," Uses in-memory hashmap in Spark and Java engine and Flink in-memory state in Flink for indexing."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"BUCKET:"})," Utilizes bucket hashing to identify the file group that houses the records, which proves to be particularly advantageous on a large scale. To select the type of bucket engine\u2014that is, the method by which buckets are created\u2014use the ",(0,s.jsx)(i.code,{children:"hoodie.index.bucket.engine"})," configuration option."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"SIMPLE(default)"}),": This index employs a fixed number of buckets for file groups within each partition, which do not have the capacity to decrease or increase in size. It is applicable to both COW and MOR tables. Due to the unchangeable number of buckets and the design principle of mapping each bucket to a single file group, this indexing method may not be ideal for partitions with significant data skew."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"CONSISTENT_HASHING"}),": This index accommodates a dynamic number of buckets, with the capability for bucket resizing to ensure each bucket is sized appropriately. This addresses the issue of data skew in partitions with a high volume of data by allowing these partitions to be dynamically resized. As a result, partitions can have multiple reasonably sized buckets, unlike the fixed bucket count per partition seen in the SIMPLE bucket engine type. This feature is exclusively compatible with MOR tables."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"RECORD_INDEX:"})," This index saves the record key to location mappings in the HUDI Metadata Table. It functions as a global index, requiring keys to be unique across all partitions within the table. To accommodate very high scales, it utilizes sharding. The record index is specifically optimized to enable fast upserts. Additionally, when it comes to reading data, the index is crafted to allow for rapid point lookups, significantly speeding up data retrieval processes."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.strong,{children:"Bring your own implementation:"})," You can extend this ",(0,s.jsx)(i.a,{href:"https://github.com/apache/hudi/blob/master/hudi-client/hudi-client-common/src/main/java/org/apache/hudi/index/HoodieIndex.java",children:"public API"}),"\nto implement custom indexing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Writers can pick one of these options using ",(0,s.jsx)(i.code,{children:"hoodie.index.type"})," config option. Additionally, a custom index implementation can also be employed\nusing ",(0,s.jsx)(i.code,{children:"hoodie.index.class"})," and supplying a subclass of ",(0,s.jsx)(i.code,{children:"SparkHoodieIndex"})," (for Apache Spark writers)"]}),"\n",(0,s.jsx)(i.h3,{id:"global-and-non-global-indexes",children:"Global and Non-Global Indexes"}),"\n",(0,s.jsxs)(i.p,{children:["Another key aspect worth understanding is the difference between global and non-global indexes. Both bloom and simple index have\nglobal options - ",(0,s.jsx)(i.code,{children:"hoodie.index.type=GLOBAL_BLOOM"})," and ",(0,s.jsx)(i.code,{children:"hoodie.index.type=GLOBAL_SIMPLE"})," - respectively. Record index and\nHBase index are by nature a global index."]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Global index:"}),"  Global indexes enforce uniqueness of keys across all partitions of a table i.e guarantees that exactly\none record exists in the table for a given record key. Global indexes offer stronger guarantees, but the update/delete\ncost can still grow with size of the table ",(0,s.jsx)(i.code,{children:"O(size of table)"}),", since the record could belong to any partition in storage.\nIn case of non-global index, lookup involves file groups only for the matching partitions from the incoming records and\nso its not impacted by the total size of the table. These global indexes(GLOBAL_SIMPLE or GLOBAL_BLOOM), might be\nacceptable for decent sized tables, but for large tables, a newly added index (0.14.0) called Record Level Index (RLI),\ncan offer pretty good index lookup performance compared to other global indices(GLOBAL_SIMPLE or GLOBAL_BLOOM) or\nHbase and also avoids the operational overhead of maintaining external systems."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Non Global index:"})," On the other hand, the default index implementations enforce this constraint only within a specific partition.\nAs one might imagine, non global indexes depends on the writer to provide the same consistent partition path for a given record key during update/delete,\nbut can deliver much better performance since the index lookup operation becomes ",(0,s.jsx)(i.code,{children:"O(number of records updated/deleted)"})," and\nscales well with write volume."]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"configs",children:"Configs"}),"\n",(0,s.jsx)(i.h4,{id:"spark-based-configs",children:"Spark based configs"}),"\n",(0,s.jsxs)(i.p,{children:["For Spark DataSource, Spark SQL, DeltaStreamer and Structured Streaming following are the key configs that control\nindexing behavior. Please refer to ",(0,s.jsx)(i.a,{href:"https://hudi.apache.org/docs/next/configurations#Common-Index-Configs-advanced-configs",children:"Advanced Configs"}),"\nfor more details. All these, support the index types mentioned ",(0,s.jsx)(i.a,{href:"#index-types-in-hudi",children:"above"}),"."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Config Name"}),(0,s.jsx)(i.th,{children:"Default"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.index.type"}),(0,s.jsxs)(i.td,{children:["N/A ",(0,s.jsx)(i.strong,{children:"(Required)"})]}),(0,s.jsxs)(i.td,{children:["org.apache.hudi.index.HoodieIndex$IndexType: Determines how input records are indexed, i.e., looked up based on the key for the location in the existing table. Default is SIMPLE on Spark engine, and INMEMORY on Flink and Java engines. Possible Values: ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"BLOOM"}),(0,s.jsx)("li",{children:"GLOBAL_BLOOM"}),(0,s.jsx)("li",{children:"SIMPLE"}),(0,s.jsx)("li",{children:"GLOBAL_SIMPLE"}),(0,s.jsx)("li",{children:"HBASE"}),(0,s.jsx)("li",{children:"INMEMORY"}),(0,s.jsx)("li",{children:"FLINK_STATE"}),(0,s.jsx)("li",{children:"BUCKET"}),(0,s.jsx)("li",{children:"RECORD_INDEX"})]}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: INDEX_TYPE"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.index.bucket.engine"}),(0,s.jsx)(i.td,{children:"SIMPLE (Optional)"}),(0,s.jsxs)(i.td,{children:["org.apache.hudi.index.HoodieIndex$BucketIndexEngineType: Determines the type of bucketing or hashing to use when ",(0,s.jsx)(i.code,{children:"hoodie.index.type"})," is set to ",(0,s.jsx)(i.code,{children:"BUCKET"}),".    Possible Values: ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"SIMPLE"}),(0,s.jsx)("li",{children:"CONSISTENT_HASHING"})]})," ",(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: BUCKET_INDEX_ENGINE_TYPE"}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Since Version: 0.11.0"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.index.class"}),(0,s.jsx)(i.td,{children:"(Optional)"}),(0,s.jsxs)(i.td,{children:["Full path of user-defined index class and must be a subclass of HoodieIndex class. It will take precedence over the hoodie.index.type configuration if specified",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: INDEX_CLASS_NAME"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.bloom.index.update.partition.path"}),(0,s.jsx)(i.td,{children:"true (Optional)"}),(0,s.jsxs)(i.td,{children:["Only applies if index type is GLOBAL_BLOOM. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: BLOOM_INDEX_UPDATE_PARTITION_PATH_ENABLE"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.record.index.update.partition.path"}),(0,s.jsx)(i.td,{children:"false (Optional)"}),(0,s.jsxs)(i.td,{children:["Similar to Key: 'hoodie.bloom.index.update.partition.path' , Only applies if index type is RECORD_INDEX. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: RECORD_INDEX_UPDATE_PARTITION_PATH_ENABLE"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.simple.index.update.partition.path"}),(0,s.jsx)(i.td,{children:"true (Optional)"}),(0,s.jsxs)(i.td,{children:["Similar to Key: 'hoodie.bloom.index.update.partition.path' , Only applies if index type is GLOBAL_SIMPLE. When set to true, an update including the partition path of a record that already exists will result in inserting the incoming record into the new partition and deleting the original record in the old partition. When set to false, the original record will only be updated in the old partition, ignoring the new incoming partition if there is a mis-match between partition value for an incoming record with whats in storage. ",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: SIMPLE_INDEX_UPDATE_PARTITION_PATH_ENABLE"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.hbase.index.update.partition.path"}),(0,s.jsx)(i.td,{children:"false (Optional)"}),(0,s.jsxs)(i.td,{children:["Only applies if index type is HBASE. When an already existing record is upserted to a new partition compared to whats in storage, this config when set, will delete old record in old partition and will insert it as new record in new partition.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(i.code,{children:"Config Param: UPDATE_PARTITION_PATH_ENABLE"})]})]})]})]}),"\n",(0,s.jsx)(i.h4,{id:"flink-based-configs",children:"Flink based configs"}),"\n",(0,s.jsxs)(i.p,{children:["For Flink DataStream and Flink SQL only support Bucket Index and internal Flink state store backed in memory index.\nFollowing are the basic configs that control the indexing behavior. Please refer ",(0,s.jsx)(i.a,{href:"https://hudi.apache.org/docs/next/configurations#Flink-Options-advanced-configs",children:"here"}),"\nfor advanced configs."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Config Name"}),(0,s.jsx)(i.th,{children:"Default"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"index.type"}),(0,s.jsx)(i.td,{children:"FLINK_STATE (Optional)"}),(0,s.jsxs)(i.td,{children:["Index type of Flink write job, default is using state backed index. Possible values:",(0,s.jsx)("br",{})," ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"FLINK_STATE"}),(0,s.jsx)("li",{children:"BUCKET"})]}),(0,s.jsx)("br",{}),"  ",(0,s.jsx)(i.code,{children:"Config Param: INDEX_TYPE"})]})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:"hoodie.index.bucket.engine"}),(0,s.jsx)(i.td,{children:"SIMPLE (Optional)"}),(0,s.jsxs)(i.td,{children:["org.apache.hudi.index.HoodieIndex$BucketIndexEngineType: Determines the type of bucketing or hashing to use when ",(0,s.jsx)(i.code,{children:"hoodie.index.type"})," is set to ",(0,s.jsx)(i.code,{children:"BUCKET"}),".    Possible Values: ",(0,s.jsx)("br",{})," ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"SIMPLE"}),(0,s.jsx)("li",{children:"CONSISTENT_HASHING"})]})]})]})]})]}),"\n",(0,s.jsx)(i.h2,{id:"indexing-strategies",children:"Indexing Strategies"}),"\n",(0,s.jsx)(i.p,{children:"Since data comes in at different volumes, velocity and has different access patterns, different indices could be used for different workload types.\nLet\u2019s walk through some typical workload types and see how to leverage the right Hudi index for such use-cases.\nThis is based on our experience and you should diligently decide if the same strategies are best for your workloads."}),"\n",(0,s.jsx)(i.h3,{id:"workload-1-late-arriving-updates-to-fact-tables",children:"Workload 1: Late arriving updates to fact tables"}),"\n",(0,s.jsx)(i.p,{children:"Many companies store large volumes of transactional data in NoSQL data stores. For eg, trip tables in case of ride-sharing, buying and selling of shares,\norders in an e-commerce site. These tables are usually ever growing with random updates on most recent data with long tail updates going to older data, either\ndue to transactions settling at a later date/data corrections. In other words, most updates go into the latest partitions with few updates going to older ones."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Fact table",src:n(50042).A+"",width:"3191",height:"1327"}),"\n",(0,s.jsx)("p",{align:"center",children:"Figure: Typical update pattern for Fact tables"})]}),"\n",(0,s.jsxs)(i.p,{children:["For such workloads, the ",(0,s.jsx)(i.code,{children:"BLOOM"})," index performs well, since index look-up will prune a lot of data files based on a well-sized bloom filter.\nAdditionally, if the keys can be constructed such that they have a certain ordering, the number of files to be compared is further reduced by range pruning.\nHudi constructs an interval tree with all the file key ranges and efficiently filters out the files that don't match any key ranges in the updates/deleted records."]}),"\n",(0,s.jsxs)(i.p,{children:["In order to efficiently compare incoming record keys against bloom filters i.e with minimal number of bloom filter reads and uniform distribution of work across\nthe executors, Hudi leverages caching of input records and employs a custom partitioner that can iron out data skews using statistics. At times, if the bloom filter\nfalse positive ratio is high, it could increase the amount of data shuffled to perform the lookup. Hudi supports dynamic bloom filters\n(enabled using ",(0,s.jsx)(i.code,{children:"hoodie.bloom.index.filter.type=DYNAMIC_V0"}),"), which adjusts its size based on the number of records stored in a given file to deliver the\nconfigured false positive ratio."]}),"\n",(0,s.jsx)(i.h3,{id:"workload-2-de-duplication-in-event-tables",children:"Workload 2: De-Duplication in event tables"}),"\n",(0,s.jsx)(i.p,{children:'Event Streaming is everywhere. Events coming from Apache Kafka or similar message bus are typically 10-100x the size of fact tables and often treat "time" (event\'s arrival time/processing\ntime) as a first class citizen. For eg, IoT event stream, click stream data, ad impressions etc. Inserts and updates only span the last few partitions as these are mostly append only data.\nGiven duplicate events can be introduced anywhere in the end-end pipeline, de-duplication before storing on the data lake is a common requirement.'}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Event table",src:n(39506).A+"",width:"6218",height:"2609"}),"\n",(0,s.jsx)("p",{align:"center",children:"Figure showing the spread of updates for Event table."})]}),"\n",(0,s.jsxs)(i.p,{children:["In general, this is a very challenging problem to solve at lower cost. Although, we could even employ a key value store to perform this de-duplication with HBASE index, the index storage\ncosts would grow linear with number of events and thus can be prohibitively expensive. In fact, ",(0,s.jsx)(i.code,{children:"BLOOM"})," index with range pruning is the optimal solution here. One can leverage the fact\nthat time is often a first class citizen and construct a key such as ",(0,s.jsx)(i.code,{children:"event_ts + event_id"})," such that the inserted records have monotonically increasing keys. This yields great returns\nby pruning large amounts of files even within the latest table partitions."]}),"\n",(0,s.jsx)(i.h3,{id:"workload-3-random-updatesdeletes-to-a-dimension-table",children:"Workload 3: Random updates/deletes to a dimension table"}),"\n",(0,s.jsx)(i.p,{children:"These types of tables usually contain high dimensional data and hold reference data e.g user profile, merchant information. These are high fidelity tables where the updates are often small but also spread\nacross a lot of partitions and data files ranging across the dataset from old to new. Often times, these tables are also un-partitioned, since there is also not a good way to partition these tables."}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.img,{alt:"Dimensions table",src:n(17429).A+"",width:"13365",height:"5602"}),"\n",(0,s.jsx)("p",{align:"center",children:"Figure showing the spread of updates for Dimensions table."})]}),"\n",(0,s.jsxs)(i.p,{children:["As discussed before, the ",(0,s.jsx)(i.code,{children:"BLOOM"})," index may not yield benefits if a good number of files cannot be pruned out by comparing ranges/filters. In such a random write workload, updates end up touching\nmost files within in the table and thus bloom filters will typically indicate a true positive for all files based on some incoming update. Consequently, we would end up comparing ranges/filter, only\nto finally check the incoming updates against all files. The ",(0,s.jsx)(i.code,{children:"SIMPLE"})," Index will be a better fit as it does not do any upfront pruning based, but directly joins with interested fields from every data file.\n",(0,s.jsx)(i.code,{children:"HBASE"})," index can be employed, if the operational overhead is acceptable and would provide much better lookup times for these tables."]}),"\n",(0,s.jsxs)(i.p,{children:["When using a global index, users should also consider setting ",(0,s.jsx)(i.code,{children:"hoodie.bloom.index.update.partition.path=true"})," or ",(0,s.jsx)(i.code,{children:"hoodie.simple.index.update.partition.path=true"})," to deal with cases where the\npartition path value could change due to an update e.g users table partitioned by home city; user relocates to a different city. These tables are also excellent candidates for the Merge-On-Read table type."]}),"\n",(0,s.jsx)(i.h2,{id:"related-resources",children:"Related Resources"}),"\n",(0,s.jsx)("h3",{children:"Videos"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://youtu.be/XlRvMFJ7g9c",children:"Global Bloom Index: Remove duplicates & guarantee uniquness - Hudi Labs"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},17429:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/dimension-c1a4d25a9b59f1ae577b2159336b2a4e.png"},39506:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/event_bus-0066b1fff4c3b67ef966404738e53e59.png"},50042:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/nosql-bc8be272a92982296f05780fb60394ff.png"},82301:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/with_without_index-c0808363df23ac1aba63bc81a68b6c8c.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>r});var t=n(96540);const s={},a=t.createContext(s);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);