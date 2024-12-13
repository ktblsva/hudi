"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[66499],{50433:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"querying_data","title":"Querying Data","description":"This page is no longer maintained. Please refer to Hudi SQL DDL, SQL DML, SQL Queries and Procedures for the latest documentation.","source":"@site/versioned_docs/version-0.15.0/querying_data.md","sourceDirName":".","slug":"/querying_data","permalink":"/docs/0.15.0/querying_data","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/querying_data.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Querying Data","keywords":["hudi","hive","spark","sql","presto"],"summary":"In this page, we go over how to process data in Hudi tables.","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"}}');var n=r(74848),s=r(28453);const a={title:"Querying Data",keywords:["hudi","hive","spark","sql","presto"],summary:"In this page, we go over how to process data in Hudi tables.",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},d=void 0,o={},l=[{value:"Spark Datasource",id:"spark-datasource",level:2},{value:"Snapshot query",id:"spark-snap-query",level:3},{value:"Incremental query",id:"spark-incr-query",level:3},{value:"Incremental query",id:"incremental-query",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"danger",children:(0,n.jsxs)(t.p,{children:["This page is no longer maintained. Please refer to Hudi ",(0,n.jsx)(t.a,{href:"sql_ddl",children:"SQL DDL"}),", ",(0,n.jsx)(t.a,{href:"sql_dml",children:"SQL DML"}),", ",(0,n.jsx)(t.a,{href:"sql_queries",children:"SQL Queries"})," and ",(0,n.jsx)(t.a,{href:"procedures",children:"Procedures"})," for the latest documentation."]})}),"\n",(0,n.jsxs)(t.p,{children:["Conceptually, Hudi stores data physically once on DFS, while providing 3 different ways of querying, as explained ",(0,n.jsx)(t.a,{href:"/docs/concepts#query-types",children:"before"}),".\nOnce the table is synced to the Hive metastore, it provides external Hive tables backed by Hudi's custom inputformats. Once the proper hudi\nbundle has been installed, the table can be queried by popular query engines like Hive, Spark SQL, Flink, Trino and PrestoDB."]}),"\n",(0,n.jsx)(t.p,{children:"In sections, below we will discuss specific setup to access different query types from different query engines."}),"\n",(0,n.jsx)(t.h2,{id:"spark-datasource",children:"Spark Datasource"}),"\n",(0,n.jsxs)(t.p,{children:["The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,n.jsx)(t.code,{children:"spark.read.parquet"}),".\nSee the ",(0,n.jsx)(t.a,{href:"/docs/quick-start-guide",children:"Spark Quick Start"})," for more examples of Spark datasource reading queries."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Setup"})}),"\n",(0,n.jsxs)(t.p,{children:["If your Spark environment does not have the Hudi jars installed, add ",(0,n.jsx)(t.a,{href:"https://mvnrepository.com/artifact/org.apache.hudi/hudi-spark-bundle",children:"hudi-spark-bundle"})," jar to the\nclasspath of drivers and executors using ",(0,n.jsx)(t.code,{children:"--jars"})," option. Alternatively, hudi-spark-bundle can also fetched via the\n--packages options (e.g: --packages org.apache.hudi",":hudi-spark-bundle_2",".11:0.13.0)."]}),"\n",(0,n.jsx)(t.h3,{id:"spark-snap-query",children:"Snapshot query"}),"\n",(0,n.jsx)(t.p,{children:"Retrieve the data table at the present point in time."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-scala",children:'val hudiSnapshotQueryDF = spark\n     .read\n     .format("hudi")\n     .option("hoodie.datasource.query.type", "snapshot")\n     .load(tablePath) \n'})}),"\n",(0,n.jsx)(t.h3,{id:"spark-incr-query",children:"Incremental query"}),"\n",(0,n.jsxs)(t.p,{children:["Of special interest to spark pipelines, is Hudi's ability to support incremental queries, like below. A sample incremental query, that will obtain all records written since ",(0,n.jsx)(t.code,{children:"beginInstantTime"}),", looks like below.\nThanks to Hudi's support for record level change streams, these incremental pipelines often offer 10x efficiency over batch counterparts by only processing the changed records."]}),"\n",(0,n.jsxs)(t.p,{children:["The following snippet shows how to obtain all records changed after ",(0,n.jsx)(t.code,{children:"beginInstantTime"})," and run some SQL on them."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-java",children:'Dataset<Row> hudiIncQueryDF = spark.read()\n     .format("org.apache.hudi")\n     .option("hoodie.datasource.query.type", "incremental"())\n     .option("hoodie.datasource.read.begin.instanttime", <beginInstantTime>)\n     .option(DataSourceReadOptions.INCR_PATH_GLOB_OPT_KEY(), "/year=2020/month=*/day=*") // Optional, use glob pattern if querying certain partitions\n     .load(tablePath); // For incremental query, pass in the root/base path of table\n     \nhudiIncQueryDF.createOrReplaceTempView("hudi_trips_incremental")\nspark.sql("select `_hoodie_commit_time`, fare, begin_lon, begin_lat, ts from  hudi_trips_incremental where fare > 20.0").show()\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For examples, refer to ",(0,n.jsx)(t.a,{href:"/docs/quick-start-guide#incremental-query",children:"Incremental Queries"})," in the Spark quickstart.\nPlease refer to ",(0,n.jsx)(t.a,{href:"/docs/configurations#SPARK_DATASOURCE",children:"configurations"})," section, to view all datasource options."]}),"\n",(0,n.jsxs)(t.p,{children:["Additionally, ",(0,n.jsx)(t.code,{children:"HoodieReadClient"})," offers the following functionality using Hudi's implicit indexing."]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"API"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"read(keys)"}),(0,n.jsx)(t.td,{children:"Read out the data corresponding to the keys as a DataFrame, using Hudi's own index for faster lookup"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"filterExists()"}),(0,n.jsxs)(t.td,{children:["Filter out already existing records from the provided ",(0,n.jsx)(t.code,{children:"RDD[HoodieRecord]"}),". Useful for de-duplication"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"checkExists(keys)"}),(0,n.jsx)(t.td,{children:"Check if the provided keys exist in a Hudi table"})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"incremental-query",children:"Incremental query"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"HiveIncrementalPuller"})," allows incrementally extracting changes from large fact/dimension tables via HiveQL, combining the benefits of Hive (reliably process complex SQL queries) and\nincremental primitives (speed up querying tables incrementally instead of scanning fully). The tool uses Hive JDBC to run the hive query and saves its results in a temp table.\nthat can later be upserted. Upsert utility (",(0,n.jsx)(t.code,{children:"HoodieStreamer"}),") has all the state it needs from the directory structure to know what should be the commit time on the target table.\ne.g: ",(0,n.jsx)(t.code,{children:"/app/incremental-hql/intermediate/{source_table_name}_temp/{last_commit_included}"}),".The Delta Hive table registered will be of the form ",(0,n.jsx)(t.code,{children:"{tmpdb}.{source_table}_{last_commit_included}"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"The following are the configuration options for HiveIncrementalPuller"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Config"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Description"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"Default"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hiveUrl"}),(0,n.jsx)(t.td,{children:"Hive Server 2 URL to connect to"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hiveUser"}),(0,n.jsx)(t.td,{children:"Hive Server 2 Username"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"hivePass"}),(0,n.jsx)(t.td,{children:"Hive Server 2 Password"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"queue"}),(0,n.jsx)(t.td,{children:"YARN Queue name"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tmp"}),(0,n.jsx)(t.td,{children:"Directory where the temporary delta data is stored in DFS. The directory structure will follow conventions. Please see the below section."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"extractSQLFile"}),(0,n.jsx)(t.td,{children:"The SQL to execute on the source table to extract the data. The data extracted will be all the rows that changed since a particular point in time."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sourceTable"}),(0,n.jsx)(t.td,{children:"Source Table Name. Needed to set hive environment properties."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"sourceDb"}),(0,n.jsx)(t.td,{children:"Source DB name. Needed to set hive environment properties."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"targetTable"}),(0,n.jsx)(t.td,{children:"Target Table Name. Needed for the intermediate storage directory structure."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"targetDb"}),(0,n.jsx)(t.td,{children:"Target table's DB name."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tmpdb"}),(0,n.jsx)(t.td,{children:"The database to which the intermediate temp delta table will be created"}),(0,n.jsx)(t.td,{children:"hoodie_temp"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"fromCommitTime"}),(0,n.jsx)(t.td,{children:"This is the most important parameter. This is the point in time from which the changed records are queried from."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"maxCommits"}),(0,n.jsx)(t.td,{children:"Number of commits to include in the query. Setting this to -1 will include all the commits from fromCommitTime. Setting this to a value > 0, will include records that ONLY changed in the specified number of commits after fromCommitTime. This may be needed if you need to catch up say 2 commits at a time."}),(0,n.jsx)(t.td,{children:"3"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"help"}),(0,n.jsx)(t.td,{children:"Utility Help"}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"Setting fromCommitTime=0 and maxCommits=-1 will fetch the entire source table and can be used to initiate backfills. If the target table is a Hudi table,\nthen the utility can determine if the target table has no commits or is behind more than 24 hour (this is configurable),\nit will automatically use the backfill configuration, since applying the last 24 hours incrementally could take more time than doing a backfill. The current limitation of the tool\nis the lack of support for self-joining the same table in mixed mode (snapshot and incremental modes)."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>d});var i=r(96540);const n={},s=i.createContext(n);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);