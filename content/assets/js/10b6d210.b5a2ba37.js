"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[5948],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>u});var a=n(11504);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,u=d["".concat(s,".").concat(m)]||d[m]||g[m]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68024:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(45072),i=(n(11504),n(95788));const o={title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4,last_modified_at:null},r=void 0,l={unversionedId:"compaction",id:"compaction",title:"Compaction",description:"Background",source:"@site/docs/compaction.md",sourceDirName:".",slug:"/compaction",permalink:"/docs/next/compaction",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/compaction.md",tags:[],version:"current",frontMatter:{title:"Compaction",summary:"In this page, we describe async compaction in Hudi.",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4,last_modified_at:null},sidebar:"docs",previous:{title:"Bootstrapping",permalink:"/docs/next/migration_guide"},next:{title:"Clustering",permalink:"/docs/next/clustering"}},s=[{value:"Background",id:"background",children:[{value:"Why MOR tables need compaction?",id:"why-mor-tables-need-compaction",children:[],level:3}],level:2},{value:"Compaction Architecture",id:"compaction-architecture",children:[{value:"Strategies in Compaction Scheduling",id:"strategies-in-compaction-scheduling",children:[{value:"Trigger Strategies",id:"trigger-strategies",children:[],level:4},{value:"Compaction Strategies",id:"compaction-strategies",children:[],level:4}],level:3}],level:2},{value:"Ways to trigger Compaction",id:"ways-to-trigger-compaction",children:[{value:"Inline",id:"inline",children:[],level:3},{value:"Async &amp; Offline Compaction models",id:"async--offline-compaction-models",children:[{value:"Async execution within the same process",id:"async-execution-within-the-same-process",children:[{value:"Spark Structured Streaming",id:"spark-structured-streaming",children:[],level:5},{value:"Hudi Streamer Continuous Mode",id:"hudi-streamer-continuous-mode",children:[],level:5}],level:4},{value:"Scheduling and Execution by a separate process",id:"scheduling-and-execution-by-a-separate-process",children:[],level:4},{value:"Scheduling inline and executing async",id:"scheduling-inline-and-executing-async",children:[],level:4},{value:"Hudi Compactor Utility",id:"hudi-compactor-utility",children:[],level:4},{value:"Hudi CLI",id:"hudi-cli",children:[],level:4},{value:"Flink Offline Compaction",id:"flink-offline-compaction",children:[],level:4},{value:"Options",id:"options",children:[],level:4}],level:3}],level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...o}=e;return(0,i.yg)(p,(0,a.c)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"background"},"Background"),(0,i.yg)("p",null,"Compaction is a table service employed by Hudi specifically in Merge On Read(MOR) tables to merge updates from row-based log\nfiles to the corresponding columnar-based base file periodically to produce a new version of the base file. Compaction is\nnot applicable to Copy On Write(COW) tables and only applies to MOR tables. "),(0,i.yg)("h3",{id:"why-mor-tables-need-compaction"},"Why MOR tables need compaction?"),(0,i.yg)("p",null,"To understand the significance of compaction in MOR tables, it is helpful to understand the MOR table layout first. In Hudi,\ndata is organized in terms of ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/file_layouts/"},"file groups"),". Each file group in a MOR table\nconsists of a base file and one or more log files. Typically, during writes, inserts are stored in the base file, and updates\nare appended to log files."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"mor_table_file_layout",src:n(79860).c}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure: MOR  table file layout showing different file groups with base data file and log files")),(0,i.yg)("p",null,"During the compaction process, updates from the log files are merged with the base file to form a new version of the\nbase file as shown below. Since MOR is designed to be write-optimized, on new writes, after index tagging is complete,\nHudi appends the records pertaining to each file groups as log blocks in log files. There is no synchronous merge\nhappening during write, resulting in a lower write amplification and better write latency. In contrast, on new writes to a\nCOW table, Hudi combines the new writes with the older base file to produce a new version of the base file resulting in\na higher write amplification and higher write latencies."),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"mor_table_file_layout",src:n(23428).c}),"\n",(0,i.yg)("em",{parentName:"p"},"Figure: Compaction on a given file group")),(0,i.yg)("p",null,"While serving the read query(snapshot read), for each file group, records in base file and all its corresponding log\nfiles are merged together and served. And hence the read latency for MOR snapshot query might be higher compared to\nCOW table since there is no merge involved in case of COW at read time. Compaction takes care of merging the updates from\nlog files with the base file at regular intervals to bound the growth of log files and to ensure the read latencies do not\nspike up."),(0,i.yg)("h2",{id:"compaction-architecture"},"Compaction Architecture"),(0,i.yg)("p",null,"There are two steps to compaction. "),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"Compaction Scheduling")),": In this step, Hudi scans the partitions and selects file slices to be compacted. A compaction\nplan is finally written to Hudi timeline."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},(0,i.yg)("em",{parentName:"strong"},"Compaction Execution")),": In this step the compaction plan is read and file slices are compacted.")),(0,i.yg)("h3",{id:"strategies-in-compaction-scheduling"},"Strategies in Compaction Scheduling"),(0,i.yg)("p",null,"There are two strategies involved in scheduling the compaction:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Trigger Strategy: Determines how often to trigger scheduling of the compaction. "),(0,i.yg)("li",{parentName:"ul"},"Compaction Strategy: Determines which file groups to compact.")),(0,i.yg)("p",null,"Hudi provides various options for both these strategies as discussed below."),(0,i.yg)("h4",{id:"trigger-strategies"},"Trigger Strategies"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.compact.inline.trigger.strategy"),(0,i.yg)("td",{parentName:"tr",align:null},"NUM_COMMITS (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"org.apache.hudi.table.action.compact.CompactionTriggerStrategy: Controls when compaction is scheduled.",(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: INLINE_COMPACT_TRIGGER_STRATEGY"))))),(0,i.yg)("p",null,"Possible values: ",(0,i.yg)("br",null),(0,i.yg)("ul",null,(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"NUM_COMMITS"),": triggers compaction when there are at least N delta commits after last\ncompleted compaction."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"NUM_COMMITS_AFTER_LAST_REQUEST"),": triggers compaction when there are at least N delta commits\nafter last completed or requested compaction."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"TIME_ELAPSED"),": triggers compaction after N seconds since last\ncompaction."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"NUM_AND_TIME"),": triggers compaction when both there are at least N delta commits and N seconds\nelapsed (both must be satisfied) after last completed compaction."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"NUM_OR_TIME"),": triggers compaction when both\nthere are at least N delta commits or N seconds elapsed (either condition is satisfied) after last completed compaction."))),(0,i.yg)("h4",{id:"compaction-strategies"},"Compaction Strategies"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},"hoodie.compaction.strategy"),(0,i.yg)("td",{parentName:"tr",align:null},"org.apache.hudi.table.action.compact.strategy.LogFileSizeBasedCompactionStrategy (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Compaction strategy decides which file groups are picked up for compaction during each compaction run. By default. Hudi picks the log file with most accumulated unmerged data. ",(0,i.yg)("br",null),(0,i.yg)("br",null),(0,i.yg)("inlineCode",{parentName:"td"},"Config Param: COMPACTION_STRATEGY"))))),(0,i.yg)("p",null,"Available Strategies (Provide the full package name when using the strategy): ",(0,i.yg)("ul",null,(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"LogFileNumBasedCompactionStrategy"),":\norders the compactions based on the total log files count, filters the file group with log files count greater than the\nthreshold and limits the compactions within a configured IO bound."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"LogFileSizeBasedCompactionStrategy"),": orders\nthe compactions based on the total log files size, filters the file group which log files size is greater than the\nthreshold and limits the compactions within a configured IO bound."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"BoundedIOCompactionStrategy"),": CompactionStrategy\nwhich looks at total IO to be done for the compaction (read + write) and limits the list of compactions to be under a\nconfigured limit on the IO."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"BoundedPartitionAwareCompactionStrategy"),":This strategy ensures that the last N partitions\nare picked up even if there are later partitions created for the table. lastNPartitions is defined as the N partitions before\nthe currentDate. currentDay = 2018/01/01 The table has partitions for 2018/02/02 and 2018/03/03 beyond the currentDay This\nstrategy will pick up the following partitions for compaction : (2018/01/01, allPartitionsInRange[(2018/01/01 - lastNPartitions)\nto 2018/01/01), 2018/02/02, 2018/03/03)"),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"DayBasedCompactionStrategy"),":This strategy orders compactions in reverse\norder of creation of Hive Partitions. It helps to compact data in latest partitions first and then older capped at the\nTotal_IO allowed."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"UnBoundedCompactionStrategy"),": UnBoundedCompactionStrategy will not change ordering or filter\nany compaction. It is a pass-through and will compact all the base files which has a log file. This usually means\nno-intelligence on compaction."),(0,i.yg)("li",null,(0,i.yg)("inlineCode",{parentName:"p"},"UnBoundedPartitionAwareCompactionStrategy"),":UnBoundedPartitionAwareCompactionStrategy is a custom UnBounded Strategy. This will filter all the partitions that\nare eligible to be compacted by a {@link BoundedPartitionAwareCompactionStrategy} and return the result. This is done\nso that a long running UnBoundedPartitionAwareCompactionStrategy does not step over partitions in a shorter running\nBoundedPartitionAwareCompactionStrategy. Essentially, this is an inverse of the partitions chosen in\nBoundedPartitionAwareCompactionStrategy"))),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"Please refer to ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Compaction-Configs"},"advanced configs")," for more details."))),(0,i.yg)("h2",{id:"ways-to-trigger-compaction"},"Ways to trigger Compaction"),(0,i.yg)("h3",{id:"inline"},"Inline"),(0,i.yg)("p",null,"By default, compaction is run asynchronously."),(0,i.yg)("p",null,"If latency of ingesting records is important for you, you are most likely using Merge-On-Read tables.\nMerge-On-Read tables store data using a combination of columnar (e.g parquet) + row based (e.g avro) file formats.\nUpdates are logged to delta files & later compacted to produce new versions of columnar files.\nTo improve ingestion latency, Async Compaction is the default configuration."),(0,i.yg)("p",null,"If immediate read performance of a new commit is important for you, or you want simplicity of not managing separate compaction jobs,\nyou may want synchronous inline compaction, which means that as a commit is written it is also compacted by the same job."),(0,i.yg)("p",null,"For this deployment mode, please use ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.compact.inline = true")," for Spark Datasource and Spark SQL writers. For\nHoodieStreamer sync once mode inline compaction can be achieved by passing the flag ",(0,i.yg)("inlineCode",{parentName:"p"},"--disable-compaction")," (Meaning to\ndisable async compaction). Further in HoodieStreamer when both\ningestion and compaction is running in the same spark context, you can use resource allocation configuration\nin Hudi Streamer CLI such as (",(0,i.yg)("inlineCode",{parentName:"p"},"--delta-sync-scheduling-weight"),",\n",(0,i.yg)("inlineCode",{parentName:"p"},"--compact-scheduling-weight"),", ",(0,i.yg)("inlineCode",{parentName:"p"},"--delta-sync-scheduling-minshare"),", and ",(0,i.yg)("inlineCode",{parentName:"p"},"--compact-scheduling-minshare"),")\nto control executor allocation between ingestion and compaction."),(0,i.yg)("h3",{id:"async--offline-compaction-models"},"Async & Offline Compaction models"),(0,i.yg)("p",null,"There are a couple of ways here to trigger compaction ."),(0,i.yg)("h4",{id:"async-execution-within-the-same-process"},"Async execution within the same process"),(0,i.yg)("p",null,"In streaming ingestion write models like HoodieStreamer\ncontinuous mode, Flink and Spark Streaming, async compaction is enabled by default and runs alongside without blocking\nregular ingestion. "),(0,i.yg)("h5",{id:"spark-structured-streaming"},"Spark Structured Streaming"),(0,i.yg)("p",null,"Compactions are scheduled and executed asynchronously inside the\nstreaming job.Here is an example snippet in java"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},'import org.apache.hudi.DataSourceWriteOptions;\nimport org.apache.hudi.HoodieDataSourceHelpers;\nimport org.apache.hudi.config.HoodieCompactionConfig;\nimport org.apache.hudi.config.HoodieWriteConfig;\n\nimport org.apache.spark.sql.streaming.OutputMode;\nimport org.apache.spark.sql.streaming.ProcessingTime;\n\n\n DataStreamWriter<Row> writer = streamingInput.writeStream().format("org.apache.hudi")\n        .option(DataSourceWriteOptions.OPERATION_OPT_KEY(), operationType)\n        .option(DataSourceWriteOptions.TABLE_TYPE_OPT_KEY(), tableType)\n        .option(DataSourceWriteOptions.RECORDKEY_FIELD_OPT_KEY(), "_row_key")\n        .option(DataSourceWriteOptions.PARTITIONPATH_FIELD_OPT_KEY(), "partition")\n        .option(DataSourceWriteOptions.PRECOMBINE_FIELD_OPT_KEY(), "timestamp")\n        .option(HoodieCompactionConfig.INLINE_COMPACT_NUM_DELTA_COMMITS_PROP, "10")\n        .option(DataSourceWriteOptions.ASYNC_COMPACT_ENABLE_OPT_KEY(), "true")\n        .option(HoodieWriteConfig.TABLE_NAME, tableName).option("checkpointLocation", checkpointLocation)\n        .outputMode(OutputMode.Append());\n writer.trigger(new ProcessingTime(30000)).start(tablePath);\n')),(0,i.yg)("h5",{id:"hudi-streamer-continuous-mode"},"Hudi Streamer Continuous Mode"),(0,i.yg)("p",null,"Hudi Streamer provides continuous ingestion mode where a single long running spark application",(0,i.yg)("br",{parentName:"p"}),"\n","ingests data to Hudi table continuously from upstream sources. In this mode, Hudi supports managing asynchronous\ncompactions. Here is an example snippet for running in continuous mode with async compactions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n--table-type MERGE_ON_READ \\\n--target-base-path <hudi_base_path> \\\n--target-table <hudi_table> \\\n--source-class org.apache.hudi.utilities.sources.JsonDFSSource \\\n--source-ordering-field ts \\\n--props /path/to/source.properties \\\n--continous\n")),(0,i.yg)("h4",{id:"scheduling-and-execution-by-a-separate-process"},"Scheduling and Execution by a separate process"),(0,i.yg)("p",null,"For some use cases with long running table services, instead of having the regular writes block, users have the option to run\nboth steps of the compaction (",(0,i.yg)("a",{parentName:"p",href:"#compaction-architecture"},"scheduling and execution"),") offline in a separate process altogether.\nThis allows for regular writers to not bother about these compaction steps and allows users to provide more resources for\nthe compaction job as needed. "),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"This model needs a lock provider configured for all jobs - the regular writer as well as the offline compaction job."))),(0,i.yg)("h4",{id:"scheduling-inline-and-executing-async"},"Scheduling inline and executing async"),(0,i.yg)("p",null,"In this model, it is possible for a Spark Datasource writer or a Flink job to just schedule the compaction inline ( that\nwill serialize the compaction plan in the timeline but will not execute it). And then a separate utility like\nHudiCompactor or HoodieFlinkCompactor can take care of periodically executing the compaction plan."),(0,i.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.yg)("div",{parentName:"div",className:"admonition-heading"},(0,i.yg)("h5",{parentName:"div"},(0,i.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,i.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.yg)("div",{parentName:"div",className:"admonition-content"},(0,i.yg)("p",{parentName:"div"},"This model may need a lock provider ",(0,i.yg)("strong",{parentName:"p"},"if")," metadata table is enabled."))),(0,i.yg)("h4",{id:"hudi-compactor-utility"},"Hudi Compactor Utility"),(0,i.yg)("p",null,"Hudi provides a standalone tool to execute specific compactions asynchronously. Below is an example and you can read more in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/cli#compactions"},"deployment guide"),"\nThe compactor utility allows to do scheduling and execution of compaction."),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"spark-submit --packages org.apache.hudi:hudi-utilities-bundle_2.11:0.6.0 \\\n--class org.apache.hudi.utilities.HoodieCompactor \\\n--base-path <base_path> \\\n--table-name <table_name> \\\n--schema-file <schema_file> \\\n--instant-time <compaction_instant>\n")),(0,i.yg)("p",null,"Note, the ",(0,i.yg)("inlineCode",{parentName:"p"},"instant-time")," parameter is now optional for the Hudi Compactor Utility. If using the utility without ",(0,i.yg)("inlineCode",{parentName:"p"},"--instant time"),",\nthe spark-submit will execute the earliest scheduled compaction on the Hudi timeline.  "),(0,i.yg)("h4",{id:"hudi-cli"},"Hudi CLI"),(0,i.yg)("p",null,"Hudi CLI is yet another way to execute specific compactions asynchronously. Here is an example and you can read more in the ",(0,i.yg)("a",{parentName:"p",href:"/docs/cli#compactions"},"deployment guide")),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-properties"},"hudi:trips->compaction run --tableName <table_name> --parallelism <parallelism> --compactionInstant <InstantTime>\n...\n")),(0,i.yg)("h4",{id:"flink-offline-compaction"},"Flink Offline Compaction"),(0,i.yg)("p",null,"Offline compaction needs to submit the Flink task on the command line. The program entry is as follows: ",(0,i.yg)("inlineCode",{parentName:"p"},"hudi-flink-bundle_2.11-0.9.0-SNAPSHOT.jar")," :\n",(0,i.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.sink.compact.HoodieFlinkCompactor")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-bash"},"# Command line\n./bin/flink run -c org.apache.hudi.sink.compact.HoodieFlinkCompactor lib/hudi-flink-bundle_2.11-0.9.0.jar --path hdfs://xxx:9000/table\n")),(0,i.yg)("h4",{id:"options"},"Options"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Option Name"),(0,i.yg)("th",{parentName:"tr",align:null},"Default"),(0,i.yg)("th",{parentName:"tr",align:null},"Description"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"--path")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"n/a **(Required)**")),(0,i.yg)("td",{parentName:"tr",align:null},"The path where the target table is stored on Hudi")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"--compaction-max-memory")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"100")," (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"The index map size of log data during compaction, 100 MB by default. If you have enough memory, you can turn up this parameter")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"--schedule")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false")," (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"whether to execute the operation of scheduling compaction plan. When the write process is still writing\uff0c turning on this parameter have a risk of losing data. Therefore, it must be ensured that there are no write tasks currently writing data to this table when this parameter is turned on")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"--seq")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"LIFO"),"  (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"The order in which compaction tasks are executed. Executing from the latest compaction plan by default. ",(0,i.yg)("inlineCode",{parentName:"td"},"LIFO"),": executing from the latest plan. ",(0,i.yg)("inlineCode",{parentName:"td"},"FIFO"),": executing from the oldest plan.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"--service")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"false"),"  (Optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"Whether to start a monitoring service that checks and schedules new compaction task in configured interval.")),(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"--min-compaction-interval-seconds")),(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("inlineCode",{parentName:"td"},"600(s)")," (optional)"),(0,i.yg)("td",{parentName:"tr",align:null},"The checking interval for service mode, by default 10 minutes.")))))}d.isMDXComponent=!0},79860:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/hudi_mor_file_layout-643f9f7fda5aa0d532682af27fe3e42c.jpg"},23428:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/hudi_mor_file_layout_post_compaction-9f10af785d4927dc3d66303dac5bc7ba.jpg"}}]);