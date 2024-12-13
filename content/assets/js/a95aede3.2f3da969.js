"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[77200],{10894:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"deployment","title":"Deployment","description":"This section provides all the help you need to deploy and operate Hudi tables at scale.","source":"@site/versioned_docs/version-1.0.0/deployment.md","sourceDirName":".","slug":"/deployment","permalink":"/docs/deployment","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/deployment.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Deployment","keywords":["hudi","administration","operation","devops","deployment"],"summary":"This section offers an overview of tools available to operate an ecosystem of Hudi","toc":true,"last_modified_at":"2019-12-30T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Performance","permalink":"/docs/performance"},"next":{"title":"SQL Procedures","permalink":"/docs/procedures"}}');var r=a(74848),t=a(28453);const o={title:"Deployment",keywords:["hudi","administration","operation","devops","deployment"],summary:"This section offers an overview of tools available to operate an ecosystem of Hudi",toc:!0,last_modified_at:new Date("2019-12-30T19:59:57.000Z")},s=void 0,d={},l=[{value:"Deploying",id:"deploying",level:2},{value:"Hudi Streamer",id:"hudi-streamer",level:3},{value:"Spark Datasource Writer Jobs",id:"spark-datasource-writer-jobs",level:3},{value:"Upgrading",id:"upgrading",level:2},{value:"Upgrading to 1.0.0",id:"upgrading-to-100",level:3},{value:"Downgrading",id:"downgrading",level:2},{value:"Migrating",id:"migrating",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section provides all the help you need to deploy and operate Hudi tables at scale.\nSpecifically, we will cover the following aspects."}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#deploying",children:"Deployment Model"})," : How various Hudi components are deployed and managed."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#upgrading",children:"Upgrading Versions"})," : Picking up new releases of Hudi, guidelines and general best-practices."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#downgrading",children:"Downgrading Versions"})," : Reverting back to an older version of Hudi"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#migrating",children:"Migrating to Hudi"})," : How to migrate your existing tables to Apache Hudi."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"deploying",children:"Deploying"}),"\n",(0,r.jsxs)(n.p,{children:["All in all, Hudi deploys with no long running servers or additional infrastructure cost to your data lake. In fact, Hudi pioneered this model of building a transactional distributed storage layer\nusing existing infrastructure and its heartening to see other systems adopting similar approaches as well. Hudi writing is done via Spark jobs (Hudi Streamer or custom Spark datasource jobs), deployed per standard Apache Spark ",(0,r.jsx)(n.a,{href:"https://spark.apache.org/docs/latest/cluster-overview",children:"recommendations"}),".\nQuerying Hudi tables happens via libraries installed into Apache Hive, Apache Spark or PrestoDB and hence no additional infrastructure is necessary."]}),"\n",(0,r.jsx)(n.p,{children:"A typical Hudi data ingestion can be achieved in 2 modes. In a single run mode, Hudi ingestion reads next batch of data, ingest them to Hudi table and exits. In continuous mode, Hudi ingestion runs as a long-running service executing ingestion in a loop."}),"\n",(0,r.jsx)(n.p,{children:"With Merge_On_Read Table, Hudi ingestion needs to also take care of compacting delta files. Again, compaction can be performed in an asynchronous-mode by letting compaction run concurrently with ingestion or in a serial fashion with one after another."}),"\n",(0,r.jsx)(n.h3,{id:"hudi-streamer",children:"Hudi Streamer"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/hoodie_streaming_ingestion#hudi-streamer",children:"Hudi Streamer"})," is the standalone utility to incrementally pull upstream changes\nfrom varied sources such as DFS, Kafka and DB Changelogs and ingest them to hudi tables.  It runs as a spark application in two modes."]}),"\n",(0,r.jsxs)(n.p,{children:["To use Hudi Streamer in Spark, the ",(0,r.jsx)(n.code,{children:"hudi-utilities-slim-bundle"})," and Hudi Spark bundle are required, by adding\n",(0,r.jsx)(n.code,{children:"--packages org.apache.hudi:hudi-utilities-slim-bundle_2.12:1.0.0,org.apache.hudi:hudi-spark3.5-bundle_2.12:1.0.0"})," to the ",(0,r.jsx)(n.code,{children:"spark-submit"})," command."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Run Once Mode"}),' : In this mode, Hudi Streamer performs one ingestion round which includes incrementally pulling events from upstream sources and ingesting them to hudi table. Background operations like cleaning old file versions and archiving hoodie timeline are automatically executed as part of the run. For Merge-On-Read tables, Compaction is also run inline as part of ingestion unless disabled by passing the flag "--disable-compaction". By default, Compaction is run inline for every ingestion run and this can be changed by setting the property "hoodie.compact.inline.max.delta.commits". You can either manually run this spark application or use any cron trigger or workflow orchestrator (most common deployment strategy) such as Apache Airflow to spawn this application. See command line options in ',(0,r.jsx)(n.a,{href:"/docs/hoodie_streaming_ingestion#hudi-streamer",children:"this section"})," for running the spark application."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example invocation for reading from kafka topic in a single-run mode and writing to Merge On Read table type in a yarn cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'[hoodie]$ spark-submit \\\n --packages org.apache.hudi:hudi-utilities-slim-bundle_2.12:1.0.0,org.apache.hudi:hudi-spark3.5-bundle_2.12:1.0.0 \\\n --master yarn \\\n --deploy-mode cluster \\\n --num-executors 10 \\\n --executor-memory 3g \\\n --driver-memory 6g \\\n --conf spark.driver.extraJavaOptions="-XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/varadarb_ds_driver.hprof" \\\n --conf spark.executor.extraJavaOptions="-XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/varadarb_ds_executor.hprof" \\\n --queue hadoop-platform-queue \\\n --conf spark.scheduler.mode=FAIR \\\n --conf spark.yarn.executor.memoryOverhead=1072 \\\n --conf spark.yarn.driver.memoryOverhead=2048 \\\n --conf spark.task.cpus=1 \\\n --conf spark.executor.cores=1 \\\n --conf spark.task.maxFailures=10 \\\n --conf spark.memory.fraction=0.4 \\\n --conf spark.rdd.compress=true \\\n --conf spark.kryoserializer.buffer.max=200m \\\n --conf spark.serializer=org.apache.spark.serializer.KryoSerializer \\\n --conf spark.memory.storageFraction=0.1 \\\n --conf spark.shuffle.service.enabled=true \\\n --conf spark.sql.hive.convertMetastoreParquet=false \\\n --conf spark.ui.port=5555 \\\n --conf spark.driver.maxResultSize=3g \\\n --conf spark.executor.heartbeatInterval=120s \\\n --conf spark.network.timeout=600s \\\n --conf spark.eventLog.overwrite=true \\\n --conf spark.eventLog.enabled=true \\\n --conf spark.eventLog.dir=hdfs:///user/spark/applicationHistory \\\n --conf spark.yarn.max.executor.failures=10 \\\n --conf spark.sql.catalogImplementation=hive \\\n --conf spark.sql.shuffle.partitions=100 \\\n --driver-class-path $HADOOP_CONF_DIR \\\n --class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n --table-type MERGE_ON_READ \\\n --source-class org.apache.hudi.utilities.sources.JsonKafkaSource \\\n --source-ordering-field ts  \\\n --target-base-path /user/hive/warehouse/stock_ticks_mor \\\n --target-table stock_ticks_mor \\\n --props /var/demo/config/kafka-source.properties \\\n --schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider\n'})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Continuous Mode"})," :  Here, Hudi Streamer runs an infinite loop with each round performing one ingestion round as described in ",(0,r.jsx)(n.strong,{children:"Run Once Mode"}),'. The frequency of data ingestion can be controlled by the configuration "--min-sync-interval-seconds". For Merge-On-Read tables, Compaction is run in asynchronous fashion concurrently with ingestion unless disabled by passing the flag "--disable-compaction". Every ingestion run triggers a compaction request asynchronously and this frequency can be changed by setting the property "hoodie.compact.inline.max.delta.commits". As both ingestion and compaction is running in the same spark context, you can use resource allocation configuration in Hudi Streamer CLI such as ("--delta-sync-scheduling-weight", "--compact-scheduling-weight", ""--delta-sync-scheduling-minshare", and "--compact-scheduling-minshare") to control executor allocation between ingestion and compaction.']}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Here is an example invocation for reading from kafka topic in a continuous mode and writing to Merge On Read table type in a yarn cluster."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'[hoodie]$ spark-submit \\\n --packages org.apache.hudi:hudi-utilities-slim-bundle_2.12:1.0.0,org.apache.hudi:hudi-spark3.5-bundle_2.12:1.0.0 \\\n --master yarn \\\n --deploy-mode cluster \\\n --num-executors 10 \\\n --executor-memory 3g \\\n --driver-memory 6g \\\n --conf spark.driver.extraJavaOptions="-XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/varadarb_ds_driver.hprof" \\\n --conf spark.executor.extraJavaOptions="-XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/varadarb_ds_executor.hprof" \\\n --queue hadoop-platform-queue \\\n --conf spark.scheduler.mode=FAIR \\\n --conf spark.yarn.executor.memoryOverhead=1072 \\\n --conf spark.yarn.driver.memoryOverhead=2048 \\\n --conf spark.task.cpus=1 \\\n --conf spark.executor.cores=1 \\\n --conf spark.task.maxFailures=10 \\\n --conf spark.memory.fraction=0.4 \\\n --conf spark.rdd.compress=true \\\n --conf spark.kryoserializer.buffer.max=200m \\\n --conf spark.serializer=org.apache.spark.serializer.KryoSerializer \\\n --conf spark.memory.storageFraction=0.1 \\\n --conf spark.shuffle.service.enabled=true \\\n --conf spark.sql.hive.convertMetastoreParquet=false \\\n --conf spark.ui.port=5555 \\\n --conf spark.driver.maxResultSize=3g \\\n --conf spark.executor.heartbeatInterval=120s \\\n --conf spark.network.timeout=600s \\\n --conf spark.eventLog.overwrite=true \\\n --conf spark.eventLog.enabled=true \\\n --conf spark.eventLog.dir=hdfs:///user/spark/applicationHistory \\\n --conf spark.yarn.max.executor.failures=10 \\\n --conf spark.sql.catalogImplementation=hive \\\n --conf spark.sql.shuffle.partitions=100 \\\n --driver-class-path $HADOOP_CONF_DIR \\\n --class org.apache.hudi.utilities.streamer.HoodieStreamer \\\n --table-type MERGE_ON_READ \\\n --source-class org.apache.hudi.utilities.sources.JsonKafkaSource \\\n --source-ordering-field ts  \\\n --target-base-path /user/hive/warehouse/stock_ticks_mor \\\n --target-table stock_ticks_mor \\\n --props /var/demo/config/kafka-source.properties \\\n --schemaprovider-class org.apache.hudi.utilities.schema.FilebasedSchemaProvider \\\n --continuous\n'})}),"\n",(0,r.jsx)(n.h3,{id:"spark-datasource-writer-jobs",children:"Spark Datasource Writer Jobs"}),"\n",(0,r.jsxs)(n.p,{children:["As described in ",(0,r.jsx)(n.a,{href:"writing_data#spark-datasource-api",children:"Batch Writes"}),', you can use spark datasource to ingest to hudi table. This mechanism allows you to ingest any spark dataframe in Hudi format. Hudi Spark DataSource also supports spark streaming to ingest a streaming source to Hudi table. For Merge On Read table types, inline compaction is turned on by default which runs after every ingestion run. The compaction frequency can be changed by setting the property "hoodie.compact.inline.max.delta.commits".']}),"\n",(0,r.jsx)(n.p,{children:"Here is an example invocation using spark datasource"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-java",children:'inputDF.write()\n       .format("org.apache.hudi")\n       .options(clientOpts) // any of the Hudi client opts can be passed in as well\n       .option("hoodie.datasource.write.recordkey.field", "_row_key")\n       .option("hoodie.datasource.write.partitionpath.field", "partition")\n       .option("hoodie.datasource.write.precombine.field"(), "timestamp")\n       .option("hoodie.table.name", tableName)\n       .mode(SaveMode.Append)\n       .save(basePath);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"upgrading",children:"Upgrading"}),"\n",(0,r.jsxs)(n.p,{children:["New Hudi releases are listed on the ",(0,r.jsx)(n.a,{href:"/releases/download",children:"releases page"}),", with detailed notes which list all the changes, with highlights in each release.\nAt the end of the day, Hudi is a storage system and with that comes a lot of responsibilities, which we take seriously."]}),"\n",(0,r.jsx)(n.p,{children:"As general guidelines,"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"We strive to keep all changes backwards compatible (i.e new code can read old data/timeline files) and when we cannot, we will provide upgrade/downgrade tools via the CLI"}),"\n",(0,r.jsx)(n.li,{children:"We cannot always guarantee forward compatibility (i.e old code being able to read data/timeline files written by a greater version). This is generally the norm, since no new features can be built otherwise.\nHowever any large such changes, will be turned off by default, for smooth transition to newer release. After a few releases and once enough users deem the feature stable in production, we will flip the defaults in a subsequent release."}),"\n",(0,r.jsx)(n.li,{children:"Always upgrade the query bundles (mr-bundle, presto-bundle, spark-bundle) first and then upgrade the writers (Hudi Streamer, spark jobs using datasource). This often provides the best experience and it's easy to fix\nany issues by rolling forward/back the writer code (which typically you might have more control over)"}),"\n",(0,r.jsx)(n.li,{children:"With large, feature rich releases we recommend migrating slowly, by first testing in staging environments and running your own tests. Upgrading Hudi is no different than upgrading any database system."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Note that release notes can override this information with specific instructions, applicable on case-by-case basis."}),"\n",(0,r.jsx)(n.h3,{id:"upgrading-to-100",children:"Upgrading to 1.0.0"}),"\n",(0,r.jsx)(n.p,{children:"1.0.0 is a major release with significant format changes. To ensure a smooth migration experience, we recommend the\nfollowing steps:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Stop any async table services in 0.x completely."}),"\n",(0,r.jsxs)(n.li,{children:["Upgrade writers to 1.x with table version (tv) 6, ",(0,r.jsx)(n.code,{children:"autoUpgrade"})," and metadata disabled (this won't auto-upgrade anything);\n0.x readers will continue to work; writers can also be readers and will continue to read both tv=6.\na. Set ",(0,r.jsx)(n.code,{children:"hoodie.write.auto.upgrade"})," to false.\nb. Set ",(0,r.jsx)(n.code,{children:"hoodie.metadata.enable"})," to false."]}),"\n",(0,r.jsx)(n.li,{children:"Upgrade table services to 1.x with tv=6, and resume operations."}),"\n",(0,r.jsx)(n.li,{children:"Upgrade all remaining readers to 1.x, with tv=6."}),"\n",(0,r.jsx)(n.li,{children:"Redeploy writers with tv=8; table services and readers will adapt/pick up tv=8 on the fly."}),"\n",(0,r.jsx)(n.li,{children:"Once all readers and writers are in 1.x, we are good to enable any new features, including metadata, with 1.x tables."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"During the upgrade, metadata table will not be updated and it will be behind the data table. It is important to note\nthat metadata table will be updated only when the writer is upgraded to tv=8. So, even the readers should keep metadata\ndisabled during rolling upgrade until all writers are upgraded to tv=8."}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsxs)(n.p,{children:["Most things are seamlessly handled by the auto upgrade process, but there are some limitations. Please read through the\nlimitations of the upgrade downgrade process before proceeding to migrate. Please\ncheck ",(0,r.jsx)(n.a,{href:"https://github.com/apache/hudi/blob/master/rfc/rfc-78/rfc-78.md#support-matrix-for-different-readers-and-writers",children:"RFC-78"}),"\nfor more details."]})}),"\n",(0,r.jsx)(n.h2,{id:"downgrading",children:"Downgrading"}),"\n",(0,r.jsx)(n.p,{children:"Upgrade is automatic whenever a new Hudi version is used whereas downgrade is a manual step. We need to use the Hudi\nCLI to downgrade a table from a higher version to lower version. Let's consider an example where we create a table using\n0.12.0, upgrade it to 0.13.0 and then downgrade it via Hudi CLI."}),"\n",(0,r.jsx)(n.p,{children:"Launch spark shell with Hudi 0.11.0 version."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"spark-shell \\\n  --packages org.apache.hudi:hudi-spark3.2-bundle_2.12:0.11.0 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n  --conf 'spark.sql.catalog.spark_catalog=org.apache.spark.sql.hudi.catalog.HoodieCatalog' \\\n  --conf 'spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension'\n"})}),"\n",(0,r.jsx)(n.p,{children:"Create a hudi table by using the scala script below."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-scala",children:'import org.apache.hudi.QuickstartUtils._\nimport scala.collection.JavaConversions._\nimport org.apache.spark.sql.SaveMode._\nimport org.apache.hudi.DataSourceReadOptions._\nimport org.apache.hudi.DataSourceWriteOptions._\nimport org.apache.hudi.config.HoodieWriteConfig._\nimport org.apache.hudi.common.model.HoodieRecord\nimport org.apache.hudi.common.table.timeline.HoodieTimeline\nimport org.apache.hudi.common.fs.FSUtils\nimport org.apache.hudi.HoodieDataSourceHelpers\n\nval dataGen = new DataGenerator\nval tableType = MOR_TABLE_TYPE_OPT_VAL\nval basePath = "file:///tmp/hudi_table"\nval tableName = "hudi_table"\n\nval inserts = convertToStringList(dataGen.generateInserts(100)).toList\nval insertDf = spark.read.json(spark.sparkContext.parallelize(inserts, 2))\ninsertDf.write.format("hudi").\n        options(getQuickstartWriteConfigs).\n        option("hoodie.datasource.write.precombine.field", "ts").\n        option("hoodie.datasource.write.recordkey.field", "uuid").\n        option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n        option("hoodie.table.name", tableName).\n        option("hoodie.datasource.write.operation", "insert").\n        mode(Append).\n        save(basePath)\n'})}),"\n",(0,r.jsx)(n.p,{children:"You will see an entry for table version in hoodie.properties which states the table version is 4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bash$ cat /tmp/hudi_table/.hoodie/hoodie.properties | grep hoodie.table.version\nhoodie.table.version=4\n"})}),"\n",(0,r.jsx)(n.p,{children:"Launch a new spark shell using version 0.13.0 and append to the same table using the script above. Note the upgrade\nhappens automatically with the new version."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"spark-shell \\\n  --packages org.apache.hudi:hudi-spark3.2-bundle_2.12:0.13.1 \\\n  --conf 'spark.serializer=org.apache.spark.serializer.KryoSerializer' \\\n  --conf 'spark.sql.catalog.spark_catalog=org.apache.spark.sql.hudi.catalog.HoodieCatalog' \\\n  --conf 'spark.sql.extensions=org.apache.spark.sql.hudi.HoodieSparkSessionExtension'\n"})}),"\n",(0,r.jsx)(n.p,{children:"After upgrade, the table version is updated to 5."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bash$ cat /tmp/hudi_table/.hoodie/hoodie.properties | grep hoodie.table.version\nhoodie.table.version=5\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Lets try downgrading the table back to version 4. For downgrading we will need to use Hudi CLI and execute downgrade.\nFor more details on downgrade, please refer documentation ",(0,r.jsx)(n.a,{href:"cli#upgrade-and-downgrade-table",children:"here"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"connect --path /tmp/hudi_table\ndowngrade table --toVersion 4\n"})}),"\n",(0,r.jsx)(n.p,{children:"After downgrade, the table version is updated to 4."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"bash$ cat /tmp/hudi_table/.hoodie/hoodie.properties | grep hoodie.table.version\nhoodie.table.version=4\n"})}),"\n",(0,r.jsx)(n.h2,{id:"migrating",children:"Migrating"}),"\n",(0,r.jsx)(n.p,{children:"Currently migrating to Hudi can be done using two approaches"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Convert newer partitions to Hudi"})," : This model is suitable for large event tables (e.g: click streams, ad impressions), which also typically receive writes for the last few days alone. You can convert the last\nN partitions to Hudi and proceed writing as if it were a Hudi table to begin with. The Hudi query side code is able to correctly handle both hudi and non-hudi data partitions."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Full conversion to Hudi"})," : This model is suitable if you are currently bulk/full loading the table few times a day (e.g database ingestion). The full conversion of Hudi is simply a one-time step (akin to 1 run of your existing job),\nwhich moves all of the data into the Hudi format and provides the ability to incrementally update for future writes."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["For more details, refer to the detailed ",(0,r.jsx)(n.a,{href:"/docs/migration_guide",children:"migration guide"}),". In the future, we will be supporting seamless zero-copy bootstrap of existing tables with all the upsert/incremental query capabilities fully supported."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>s});var i=a(96540);const r={},t=i.createContext(r);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);