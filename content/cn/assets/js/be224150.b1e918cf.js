"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[61796],{95788:(e,t,a)=>{a.d(t,{Iu:()=>d,yg:()=>m});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=s(a),y=r,m=g["".concat(p,".").concat(y)]||g[y]||u[y]||l;return a?n.createElement(m,i(i({ref:t},d),{},{components:a})):n.createElement(m,i({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[g]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},58016:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(45072),r=(a(11504),a(95788));const l={title:"Querying Data",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to enable SQL queries on Hudi built tables.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},i=void 0,o={unversionedId:"querying_data",id:"version-0.11.0/querying_data",title:"Querying Data",description:"Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained before.",source:"@site/versioned_docs/version-0.11.0/querying_data.md",sourceDirName:".",slug:"/querying_data",permalink:"/cn/docs/0.11.0/querying_data",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.0/querying_data.md",tags:[],version:"0.11.0",frontMatter:{title:"Querying Data",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to enable SQL queries on Hudi built tables.",toc:!0,last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"docs",previous:{title:"Streaming Ingestion",permalink:"/cn/docs/0.11.0/hoodie_deltastreamer"},next:{title:"Flink Setup",permalink:"/cn/docs/0.11.0/flink_configuration"}},p=[{value:"Spark Datasource",id:"spark-datasource",children:[{value:"Snapshot query",id:"spark-snap-query",children:[],level:3},{value:"Incremental query",id:"spark-incr-query",children:[],level:3},{value:"Spark SQL",id:"spark-sql",children:[{value:"Copy On Write tables",id:"copy-on-write-tables",children:[],level:4},{value:"Merge On Read tables",id:"merge-on-read-tables",children:[],level:4}],level:3}],level:2},{value:"Flink SQL",id:"flink-sql",children:[],level:2},{value:"Hive",id:"hive",children:[{value:"Incremental query",id:"incremental-query",children:[],level:3}],level:2},{value:"PrestoDB",id:"prestodb",children:[],level:2},{value:"Trino",id:"trino",children:[],level:2},{value:"Impala (3.4 or later)",id:"impala-34-or-later",children:[{value:"Snapshot Query",id:"snapshot-query",children:[],level:3}],level:2},{value:"Redshift Spectrum",id:"redshift-spectrum",children:[],level:2},{value:"StarRocks",id:"starrocks",children:[],level:2},{value:"Support Matrix",id:"support-matrix",children:[{value:"Copy-On-Write tables",id:"copy-on-write-tables-1",children:[],level:3},{value:"Merge-On-Read tables",id:"merge-on-read-tables-1",children:[],level:3}],level:2}],s={toc:p},d="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(d,(0,n.c)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained ",(0,r.yg)("a",{parentName:"p",href:"/docs/concepts#query-types"},"before"),".\nOnce the table is synced to the Hive metastore, it provides external Hive tables backed by Hudi's custom inputformats. Once the proper hudi\nbundle has been installed, the table can be queried by popular query engines like Hive, Spark SQL, Spark Datasource API and PrestoDB."),(0,r.yg)("p",null,"In sections, below we will discuss specific setup to access different query types from different query engines. "),(0,r.yg)("h2",{id:"spark-datasource"},"Spark Datasource"),(0,r.yg)("p",null,"The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,r.yg)("inlineCode",{parentName:"p"},"spark.read.parquet"),".\nSee the ",(0,r.yg)("a",{parentName:"p",href:"/docs/quick-start-guide"},"Spark Quick Start")," for more examples of Spark datasource reading queries. "),(0,r.yg)("p",null,"To setup Spark for querying Hudi, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.11.0/query_engine_setup#Spark-DataSource"},"Query Engine Setup")," page."),(0,r.yg)("h3",{id:"spark-snap-query"},"Snapshot query"),(0,r.yg)("p",null,"Retrieve the data table at the present point in time."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val hudiIncQueryDF = spark\n     .read()\n     .format("hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_SNAPSHOT_OPT_VAL())\n     .load(tablePath) \n')),(0,r.yg)("h3",{id:"spark-incr-query"},"Incremental query"),(0,r.yg)("p",null,"Of special interest to spark pipelines, is Hudi's ability to support incremental queries, like below. A sample incremental query, that will obtain all records written since ",(0,r.yg)("inlineCode",{parentName:"p"},"beginInstantTime"),", looks like below.\nThanks to Hudi's support for record level change streams, these incremental pipelines often offer 10x efficiency over batch counterparts by only processing the changed records."),(0,r.yg)("p",null,"The following snippet shows how to obtain all records changed after ",(0,r.yg)("inlineCode",{parentName:"p"},"beginInstantTime")," and run some SQL on them."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},' Dataset<Row> hudiIncQueryDF = spark.read()\n     .format("org.apache.hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_INCREMENTAL_OPT_VAL())\n     .option(DataSourceReadOptions.BEGIN_INSTANTTIME_OPT_KEY(), <beginInstantTime>)\n     .option(DataSourceReadOptions.INCR_PATH_GLOB_OPT_KEY(), "/year=2020/month=*/day=*") // Optional, use glob pattern if querying certain partitions\n     .load(tablePath); // For incremental query, pass in the root/base path of table\n     \nhudiIncQueryDF.createOrReplaceTempView("hudi_trips_incremental")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n')),(0,r.yg)("p",null,"For examples, refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/quick-start-guide#incremental-query"},"Incremental Queries")," in the Spark quickstart.\nPlease refer to ",(0,r.yg)("a",{parentName:"p",href:"/docs/configurations#SPARK_DATASOURCE"},"configurations")," section, to view all datasource options."),(0,r.yg)("p",null,"Additionally, ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieReadClient")," offers the following functionality using Hudi's implicit indexing."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"API")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Description")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"read(keys)"),(0,r.yg)("td",{parentName:"tr",align:null},"Read out the data corresponding to the keys as a DataFrame, using Hudi's own index for faster lookup")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"filterExists()"),(0,r.yg)("td",{parentName:"tr",align:null},"Filter out already existing records from the provided ",(0,r.yg)("inlineCode",{parentName:"td"},"RDD[HoodieRecord]"),". Useful for de-duplication")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"checkExists(keys)"),(0,r.yg)("td",{parentName:"tr",align:null},"Check if the provided keys exist in a Hudi table")))),(0,r.yg)("h3",{id:"spark-sql"},"Spark SQL"),(0,r.yg)("p",null,"Once the Hudi tables have been registered to the Hive metastore, they can be queried using the Spark-Hive integration.\nBy default, Spark SQL will try to use its own parquet reader instead of Hive SerDe when reading from Hive metastore parquet tables.\nThe following are important settings to consider when querying COPY_ON_WRITE or MERGE_ON_READ tables. "),(0,r.yg)("h4",{id:"copy-on-write-tables"},"Copy On Write tables"),(0,r.yg)("p",null,"For COPY_ON_WRITE tables, Spark's default parquet reader can be used to retain Sparks built-in optimizations for reading parquet files like vectorized reading on Hudi Hive tables.\nIf using the default parquet reader, a path filter needs to be pushed into sparkContext as follows."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'spark.sparkContext.hadoopConfiguration.setClass("mapreduce.input.pathFilter.class", classOf[org.apache.hudi.hadoop.HoodieROTablePathFilter], classOf[org.apache.hadoop.fs.PathFilter]);\n')),(0,r.yg)("h4",{id:"merge-on-read-tables"},"Merge On Read tables"),(0,r.yg)("p",null,"No special configurations are needed for querying MERGE_ON_READ tables with Hudi version 0.9.0+"),(0,r.yg)("p",null,"If you are querying MERGE_ON_READ tables using Hudi version <= 0.8.0, you need to turn off the SparkSQL default parquet reader by setting: ",(0,r.yg)("inlineCode",{parentName:"p"},"spark.sql.hive.convertMetastoreParquet=false"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-java"},"$ spark-shell --driver-class-path /etc/hive/conf  --packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3,org.apache.spark:spark-avro_2.11:2.4.4 --conf spark.sql.hive.convertMetastoreParquet=false\n\nscala> sqlContext.sql(\"select count(*) from hudi_trips_mor_rt where datestr = '2016-10-02'\").show()\nscala> sqlContext.sql(\"select count(*) from hudi_trips_mor_rt where datestr = '2016-10-02'\").show()\n")),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Note: COPY_ON_WRITE tables can also still be read if you turn off the default parquet reader."))),(0,r.yg)("h2",{id:"flink-sql"},"Flink SQL"),(0,r.yg)("p",null,"Once the flink Hudi tables have been registered to the Flink catalog, it can be queried using the Flink SQL. It supports all query types across both Hudi table types,\nrelying on the custom Hudi input formats again like Hive. Typically notebook users and Flink SQL CLI users leverage flink sql for querying Hudi tables. Please add hudi-flink-bundle as described in the ",(0,r.yg)("a",{parentName:"p",href:"/docs/flink-quick-start-guide"},"Flink Quickstart"),"."),(0,r.yg)("p",null,"By default, Flink SQL will try to use its own parquet reader instead of Hive SerDe when reading from Hive metastore parquet tables."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# HADOOP_HOME is your hadoop root directory after unpack the binary package.\nexport HADOOP_CLASSPATH=`$HADOOP_HOME/bin/hadoop classpath`\n\n./bin/sql-client.sh embedded -j .../hudi-flink-bundle_2.1?-*.*.*.jar shell\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-sql"},"-- this defines a COPY_ON_WRITE table named 't1'\nCREATE TABLE t1(\n  uuid VARCHAR(20), -- you can use 'PRIMARY KEY NOT ENFORCED' syntax to specify the field as record key\n  name VARCHAR(10),\n  age INT,\n  ts TIMESTAMP(3),\n  `partition` VARCHAR(20)\n)\nPARTITIONED BY (`partition`)\nWITH (\n  'connector' = 'hudi',\n  'path' = 'table_base+path'\n);\n\n-- query the data\nselect * from t1 where `partition` = 'par1';\n")),(0,r.yg)("p",null,"Flink's built-in support parquet is used for both COPY_ON_WRITE and MERGE_ON_READ tables,\nadditionally partition prune is applied by Flink engine internally if a partition path is specified\nin the filter. Filters push down is not supported yet (already on the roadmap)."),(0,r.yg)("p",null,"For MERGE_ON_READ table, in order to query hudi table as a streaming, you need to add option ",(0,r.yg)("inlineCode",{parentName:"p"},"'read.streaming.enabled' = 'true'"),",\nwhen querying the table, a Flink streaming pipeline starts and never ends until the user cancel the job manually.\nYou can specify the start commit with option ",(0,r.yg)("inlineCode",{parentName:"p"},"read.start-commit")," and source monitoring interval with option\n",(0,r.yg)("inlineCode",{parentName:"p"},"read.streaming.check-interval"),"."),(0,r.yg)("h2",{id:"hive"},"Hive"),(0,r.yg)("p",null,"To setup Hive for querying Hudi, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.11.0/query_engine_setup#hive"},"Query Engine Setup")," page."),(0,r.yg)("h3",{id:"incremental-query"},"Incremental query"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"HiveIncrementalPuller")," allows incrementally extracting changes from large fact/dimension tables via HiveQL, combining the benefits of Hive (reliably process complex SQL queries) and\nincremental primitives (speed up querying tables incrementally instead of scanning fully). The tool uses Hive JDBC to run the hive query and saves its results in a temp table.\nthat can later be upserted. Upsert utility (",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),") has all the state it needs from the directory structure to know what should be the commit time on the target table.\ne.g: ",(0,r.yg)("inlineCode",{parentName:"p"},"/app/incremental-hql/intermediate/{source_table_name}_temp/{last_commit_included}"),".The Delta Hive table registered will be of the form ",(0,r.yg)("inlineCode",{parentName:"p"},"{tmpdb}.{source_table}_{last_commit_included}"),"."),(0,r.yg)("p",null,"The following are the configuration options for HiveIncrementalPuller"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Config")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Description")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Default")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hiveUrl"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive Server 2 URL to connect to"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hiveUser"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive Server 2 Username"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"hivePass"),(0,r.yg)("td",{parentName:"tr",align:null},"Hive Server 2 Password"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"queue"),(0,r.yg)("td",{parentName:"tr",align:null},"YARN Queue name"),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tmp"),(0,r.yg)("td",{parentName:"tr",align:null},"Directory where the temporary delta data is stored in DFS. The directory structure will follow conventions. Please see the below section."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"extractSQLFile"),(0,r.yg)("td",{parentName:"tr",align:null},"The SQL to execute on the source table to extract the data. The data extracted will be all the rows that changed since a particular point in time."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sourceTable"),(0,r.yg)("td",{parentName:"tr",align:null},"Source Table Name. Needed to set hive environment properties."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"sourceDb"),(0,r.yg)("td",{parentName:"tr",align:null},"Source DB name. Needed to set hive environment properties."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetTable"),(0,r.yg)("td",{parentName:"tr",align:null},"Target Table Name. Needed for the intermediate storage directory structure."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"targetDb"),(0,r.yg)("td",{parentName:"tr",align:null},"Target table's DB name."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"tmpdb"),(0,r.yg)("td",{parentName:"tr",align:null},"The database to which the intermediate temp delta table will be created"),(0,r.yg)("td",{parentName:"tr",align:null},"hoodie_temp")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"fromCommitTime"),(0,r.yg)("td",{parentName:"tr",align:null},"This is the most important parameter. This is the point in time from which the changed records are queried from."),(0,r.yg)("td",{parentName:"tr",align:null})),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"maxCommits"),(0,r.yg)("td",{parentName:"tr",align:null},"Number of commits to include in the query. Setting this to -1 will include all the commits from fromCommitTime. Setting this to a value > 0, will include records that ONLY changed in the specified number of commits after fromCommitTime. This may be needed if you need to catch up say 2 commits at a time."),(0,r.yg)("td",{parentName:"tr",align:null},"3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"help"),(0,r.yg)("td",{parentName:"tr",align:null},"Utility Help"),(0,r.yg)("td",{parentName:"tr",align:null})))),(0,r.yg)("p",null,"Setting fromCommitTime=0 and maxCommits=-1 will fetch the entire source table and can be used to initiate backfills. If the target table is a Hudi table,\nthen the utility can determine if the target table has no commits or is behind more than 24 hour (this is configurable),\nit will automatically use the backfill configuration, since applying the last 24 hours incrementally could take more time than doing a backfill. The current limitation of the tool\nis the lack of support for self-joining the same table in mixed mode (snapshot and incremental modes)."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"NOTE on Hive incremental queries that are executed using Fetch task:"),"\nSince Fetch tasks invoke InputFormat.listStatus() per partition, Hoodie metadata can be listed in\nevery such listStatus() call. In order to avoid this, it might be useful to disable fetch tasks\nusing the hive session property for incremental queries: ",(0,r.yg)("inlineCode",{parentName:"p"},"set hive.fetch.task.conversion=none;")," This\nwould ensure Map Reduce execution is chosen for a Hive query, which combines partitions (comma\nseparated) and calls InputFormat.listStatus() only once with all those partitions."),(0,r.yg)("h2",{id:"prestodb"},"PrestoDB"),(0,r.yg)("p",null,"To setup PrestoDB for querying Hudi, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.11.0/query_engine_setup#prestodb"},"Query Engine Setup")," page."),(0,r.yg)("h2",{id:"trino"},"Trino"),(0,r.yg)("p",null,"To setup Trino for querying Hudi, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.11.0/query_engine_setup#trino"},"Query Engine Setup")," page."),(0,r.yg)("h2",{id:"impala-34-or-later"},"Impala (3.4 or later)"),(0,r.yg)("h3",{id:"snapshot-query"},"Snapshot Query"),(0,r.yg)("p",null,"Impala is able to query Hudi Copy-on-write table as an ",(0,r.yg)("a",{parentName:"p",href:"https://docs.cloudera.com/documentation/enterprise/6/6.3/topics/impala_tables.html#external_tables"},"EXTERNAL TABLE")," on HDFS.  "),(0,r.yg)("p",null,"To create a Hudi read optimized table on Impala:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\n")),(0,r.yg)("p",null,"Impala is able to take advantage of the physical partition structure to improve the query performance.\nTo create a partitioned table, the folder should follow the naming convention like ",(0,r.yg)("inlineCode",{parentName:"p"},"year=2020/month=1"),".\nImpala use ",(0,r.yg)("inlineCode",{parentName:"p"},"=")," to separate partition name and partition value.",(0,r.yg)("br",{parentName:"p"}),"\n","To create a partitioned Hudi read optimized table on Impala:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"CREATE EXTERNAL TABLE database.table_name\nLIKE PARQUET '/path/to/load/xxx.parquet'\nPARTITION BY (year int, month int, day int)\nSTORED AS HUDIPARQUET\nLOCATION '/path/to/load';\nALTER TABLE database.table_name RECOVER PARTITIONS;\n")),(0,r.yg)("p",null,"After Hudi made a new commit, refresh the Impala table to get the latest results."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"REFRESH database.table_name\n")),(0,r.yg)("h2",{id:"redshift-spectrum"},"Redshift Spectrum"),(0,r.yg)("p",null,"To set up Redshift Spectrum for querying Hudi, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.11.0/query_engine_setup#redshift-spectrum"},"Query Engine Setup")," page."),(0,r.yg)("h2",{id:"starrocks"},"StarRocks"),(0,r.yg)("p",null,"To set up StarRocks for querying Hudi, see the ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.11.0/query_engine_setup#starrocks"},"Query Engine Setup")," page."),(0,r.yg)("h2",{id:"support-matrix"},"Support Matrix"),(0,r.yg)("p",null,"Following tables show whether a given query is supported on specific query engine."),(0,r.yg)("h3",{id:"copy-on-write-tables-1"},"Copy-On-Write tables"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query Engine"),(0,r.yg)("th",{parentName:"tr",align:null},"Snapshot Queries"),(0,r.yg)("th",{parentName:"tr",align:null},"Incremental Queries"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Hive")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Spark SQL")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Spark Datasource")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Flink SQL")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"PrestoDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Trino")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Impala")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Redshift Spectrum")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"StarRocks")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N")))),(0,r.yg)("p",null,"Note that ",(0,r.yg)("inlineCode",{parentName:"p"},"Read Optimized")," queries are not applicable for COPY_ON_WRITE tables."),(0,r.yg)("h3",{id:"merge-on-read-tables-1"},"Merge-On-Read tables"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Query Engine"),(0,r.yg)("th",{parentName:"tr",align:null},"Snapshot Queries"),(0,r.yg)("th",{parentName:"tr",align:null},"Incremental Queries"),(0,r.yg)("th",{parentName:"tr",align:null},"Read Optimized Queries"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Hive")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Spark SQL")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Spark Datasource")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Flink SQL")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"PrestoDB")),(0,r.yg)("td",{parentName:"tr",align:null},"Y"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Trino")),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"td"},"Impala")),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"N"),(0,r.yg)("td",{parentName:"tr",align:null},"Y")))))}g.isMDXComponent=!0}}]);