"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[16748],{95788:(e,a,t)=>{t.d(a,{Iu:()=>d,yg:()=>g});var i=t(11504);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,i,o=function(e,a){if(null==e)return{};var t,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var a=i.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=c(e.components);return i.createElement(l.Provider,{value:a},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(t),u=o,g=h["".concat(l,".").concat(u)]||h[u]||p[u]||n;return t?i.createElement(g,r(r({ref:a},d),{},{components:t})):i.createElement(g,r({ref:a},d))}));function g(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,r=new Array(n);r[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[h]="string"==typeof e?e:o,r[1]=s;for(var c=2;c<n;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64740:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>r,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var i=t(45072),o=(t(11504),t(95788));const n={title:"Troubleshooting",keywords:["hudi","troubleshooting"],toc_min_heading_level:2,toc_max_heading_level:5,last_modified_at:new Date("2021-08-18T19:59:57.000Z")},r=void 0,s={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"For performance related issues, please refer to the tuning guide",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/next/troubleshooting",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/troubleshooting.md",tags:[],version:"current",frontMatter:{title:"Troubleshooting",keywords:["hudi","troubleshooting"],toc_min_heading_level:2,toc_max_heading_level:5,last_modified_at:"2021-08-18T19:59:57.000Z"},sidebar:"docs",previous:{title:"Encryption",permalink:"/docs/next/encryption"},next:{title:"Spark Tuning Guide",permalink:"/docs/next/tuning-guide"}},l=[{value:"Writing Tables",id:"writing-tables",children:[{value:"org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field &#39;col1&#39; not found",id:"orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found",children:[],level:4},{value:"java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter",id:"javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter",children:[],level:4},{value:"SchemaCompatabilityException: Unable to validate the rewritten record",id:"schemacompatabilityexception-unable-to-validate-the-rewritten-record",children:[],level:4},{value:"INT96, INT64 and timestamp compatibility",id:"int96-int64-and-timestamp-compatibility",children:[],level:4},{value:"I am seeing lot of archive files. How do I control the number of archive commit files generated?",id:"i-am-seeing-lot-of-archive-files-how-do-i-control-the-number-of-archive-commit-files-generated",children:[],level:4},{value:"How can I resolve the NoSuchMethodError from HBase when using Hudi with metadata table on HDFS?",id:"how-can-i-resolve-the-nosuchmethoderror-from-hbase-when-using-hudi-with-metadata-table-on-hdfs",children:[],level:4},{value:"How can I resolve the RuntimeException saying <code>hbase-default.xml file seems to be for an older version of HBase</code>?",id:"how-can-i-resolve-the-runtimeexception-saying-hbase-defaultxml-file-seems-to-be-for-an-older-version-of-hbase",children:[],level:4},{value:"I see two different records for the same record key value, each record key with a different timestamp format. How is this possible?",id:"i-see-two-different-records-for-the-same-record-key-value-each-record-key-with-a-different-timestamp-format-how-is-this-possible",children:[],level:4}],level:3},{value:"Querying Tables",id:"querying-tables",children:[{value:"How can I now query the Hudi dataset I just wrote?",id:"how-can-i-now-query-the-hudi-dataset-i-just-wrote",children:[],level:4}],level:3},{value:"Data Quality Issues",id:"data-quality-issues",children:[{value:"Missing records",id:"missing-records",children:[],level:4},{value:"Duplicates",id:"duplicates",children:[],level:4}],level:3},{value:"Ingestion",id:"ingestion",children:[{value:"java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at kafka.utils.Utils$.read(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)",id:"javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54",children:[],level:4},{value:"java.lang.IllegalArgumentException: Could not find a &#39;KafkaClient&#39; entry in the JAAS configuration. System property &#39;java.security.auth.login.config&#39; is not set",id:"javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set",children:[],level:4},{value:"IOException: Write end dead or CIRCULAR REFERENCE while writing to GCS",id:"ioexception-write-end-dead-or-circular-reference-while-writing-to-gcs",children:[],level:4}],level:3},{value:"Hive Sync",id:"hive-sync",children:[{value:"SQLException: following columns have types incompatible",id:"sqlexception-following-columns-have-types-incompatible",children:[],level:4},{value:"HoodieHiveSyncException: Could not convert field Type from <code>&lt;type1&gt;</code> to <code>&lt;type2&gt;</code> for field col1",id:"hoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1",children:[],level:4},{value:"org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test_db",id:"orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db",children:[],level:4},{value:"org.apache.thrift.TApplicationException: Invalid method name: &#39;get_table_req&#39;",id:"orgapachethrifttapplicationexception-invalid-method-name-get_table_req",children:[],level:4},{value:"java.lang.UnsupportedOperationException: Table rename is not supported",id:"javalangunsupportedoperationexception-table-rename-is-not-supported",children:[],level:4},{value:"How can I resolve the IllegalArgumentException saying <code>Partitions must be in the same table</code> when attempting to sync to a metastore?",id:"how-can-i-resolve-the-illegalargumentexception-saying-partitions-must-be-in-the-same-table-when-attempting-to-sync-to-a-metastore",children:[],level:4}],level:3}],c={toc:l},d="wrapper";function h(e){let{components:a,...t}=e;return(0,o.yg)(d,(0,i.c)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"For performance related issues, please refer to the ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/tuning-guide"},"tuning guide")),(0,o.yg)("h3",{id:"writing-tables"},"Writing Tables"),(0,o.yg)("h4",{id:"orgapacheparquetioinvalidrecordexception-parquetavro-schema-mismatch-avro-field-col1-not-found"},"org.apache.parquet.io.InvalidRecordException: Parquet/Avro schema mismatch: Avro field 'col1' not found"),(0,o.yg)("p",null,"It is recommended that schema should evolve in ",(0,o.yg)("a",{parentName:"p",href:"https://docs.confluent.io/platform/current/schema-registry/avro.html"},"backwards compatible way")," while using Hudi. Please refer here for more information on avro schema resolution - ",(0,o.yg)("a",{parentName:"p",href:"https://avro.apache.org/docs/1.8.2/spec.html"},"https://avro.apache.org/docs/1.8.2/spec.html"),". This error generally occurs when the schema has evolved in backwards ",(0,o.yg)("strong",{parentName:"p"},"incompatible")," way by deleting some column 'col1' and we are trying to update some record in parquet file which has ay been written with previous schema (which had 'col1'). In such cases, parquet tries to find all the present fields in the incoming record and when it finds 'col1' is not present, the mentioned exception is thrown."),(0,o.yg)("p",null,"The fix for this is to try and create uber schema using all the schema versions evolved so far for the concerned event and use this uber schema as the target schema. One of the good approaches can be fetching schema from hive metastore and merging it with the current schema."),(0,o.yg)("p",null,'Sample stacktrace where a field named "toBeDeletedStr" was omitted from new batch of updates : ',(0,o.yg)("a",{parentName:"p",href:"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe"},"https://gist.github.com/nsivabalan/cafc53fc9a8681923e4e2fa4eb2133fe")),(0,o.yg)("h4",{id:"javalangunsupportedoperationexception-orgapacheparquetavroavroconvertersfieldintegerconverter"},"java.lang.UnsupportedOperationException: org.apache.parquet.avro.AvroConverters$FieldIntegerConverter"),(0,o.yg)("p",null,"This error will again occur due to schema evolutions in non-backwards compatible way. Basically there is some incoming update U for a record R which is already written to your Hudi dataset in the concerned parquet file. R contains field F which is having certain data type, let us say long. U has the same field F with updated data type of int type. Such incompatible data type conversions are not supported by Parquet FS."),(0,o.yg)("p",null,"For such errors, please try to ensure only valid data type conversions are happening in your primary data source from where you are trying to ingest."),(0,o.yg)("p",null,"Sample stacktrace when trying to evolve a field from Long type to Integer type with Hudi : ",(0,o.yg)("a",{parentName:"p",href:"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea"},"https://gist.github.com/nsivabalan/0d81cd60a3e7a0501e6a0cb50bfaacea")),(0,o.yg)("h4",{id:"schemacompatabilityexception-unable-to-validate-the-rewritten-record"},"SchemaCompatabilityException: Unable to validate the rewritten record"),(0,o.yg)("p",null,"This can possibly occur if your schema has some non-nullable field whose value is not present or is null. It is recommended to evolve schema in backwards compatible ways. In essence, this means either have every newly added field as nullable or define default values for every new field. See ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/schema_evolution"},"Schema Evolution")," docs for more."),(0,o.yg)("h4",{id:"int96-int64-and-timestamp-compatibility"},"INT96, INT64 and timestamp compatibility"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcehive_syncsupport_timestamp"},"https://hudi.apache.org/docs/configurations#hoodiedatasourcehive","_","syncsupport","_","timestamp")),(0,o.yg)("h4",{id:"i-am-seeing-lot-of-archive-files-how-do-i-control-the-number-of-archive-commit-files-generated"},"I am seeing lot of archive files. How do I control the number of archive commit files generated?"),(0,o.yg)("p",null,"Please note that in cloud stores that do not support log append operations, Hudi is forced to create new archive files to archive old metadata operations.\nYou can increase ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.commits.archival.batch")," moving forward to increase the number of commits archived per archive file.\nIn addition, you can increase the difference between the 2 watermark configurations : ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.keep.max.commits")," (default : 30)\nand ",(0,o.yg)("inlineCode",{parentName:"p"},"hoodie.keep.min.commits")," (default : 20). This way, you can reduce the number of archive files created and also\nat the same time increase the number of metadata archived per archive file. Note that post 0.7.0 release where we are\nadding consolidated Hudi metadata (",(0,o.yg)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC+-+15%3A+HUDI+File+Listing+Improvements"},"RFC-15"),"),\nthe follow up work would involve re-organizing archival metadata so that we can do periodic compactions to control\nfile-sizing of these archive files."),(0,o.yg)("h4",{id:"how-can-i-resolve-the-nosuchmethoderror-from-hbase-when-using-hudi-with-metadata-table-on-hdfs"},"How can I resolve the NoSuchMethodError from HBase when using Hudi with metadata table on HDFS?"),(0,o.yg)("p",null,"From 0.11.0 release, we have upgraded the HBase version to 2.4.9, which is released based on Hadoop 2.x. Hudi's metadata"),(0,o.yg)("p",null,"table uses HFile as the base file format, relying on the HBase library. When enabling metadata table in a Hudi table on"),(0,o.yg)("p",null,"HDFS using Hadoop 3.x, NoSuchMethodError can be thrown due to compatibility issues between Hadoop 2.x and 3.x."),(0,o.yg)("p",null,"To address this, here's the workaround:"),(0,o.yg)("p",null,"(1) Download HBase source code from ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hbase"},(0,o.yg)("inlineCode",{parentName:"a"},"https://github.com/apache/hbase")),";"),(0,o.yg)("p",null,"(2) Switch to the source code of 2.4.9 release with the tag ",(0,o.yg)("inlineCode",{parentName:"p"},"rel/2.4.9"),":"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"git checkout rel/2.4.9\n")),(0,o.yg)("p",null,"(3) Package a new version of HBase 2.4.9 with Hadoop 3 version:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-bash"},"mvn clean install -Denforcer.skip -DskipTests -Dhadoop.profile=3.0 -Psite-install-step\n")),(0,o.yg)("p",null,"(4) Package Hudi again."),(0,o.yg)("h4",{id:"how-can-i-resolve-the-runtimeexception-saying-hbase-defaultxml-file-seems-to-be-for-an-older-version-of-hbase"},"How can I resolve the RuntimeException saying ",(0,o.yg)("inlineCode",{parentName:"h4"},"hbase-default.xml file seems to be for an older version of HBase"),"?"),(0,o.yg)("p",null,"This usually happens when there are other HBase libs provided by the runtime environment in the classpath, such as"),(0,o.yg)("p",null,"Cloudera CDP stack, causing the conflict. To get around the RuntimeException, you can set the"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"hbase.defaults.for.version.skip")," to ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," in the ",(0,o.yg)("inlineCode",{parentName:"p"},"hbase-site.xml")," configuration file, e.g., overwriting the config"),(0,o.yg)("p",null,"within the Cloudera manager."),(0,o.yg)("h4",{id:"i-see-two-different-records-for-the-same-record-key-value-each-record-key-with-a-different-timestamp-format-how-is-this-possible"},"I see two different records for the same record key value, each record key with a different timestamp format. How is this possible?"),(0,o.yg)("p",null,"This is a known issue with enabling row-writer for bulk_insert operation. When you do a bulk_insert followed by another\nwrite operation such as upsert/insert this might be observed for timestamp fields specifically. For example, bulk_insert might produce\ntimestamp ",(0,o.yg)("inlineCode",{parentName:"p"},"2016-12-29 09:54:00.0")," for record key whereas non bulk_insert write operation might produce a long value like\n",(0,o.yg)("inlineCode",{parentName:"p"},"1483023240000000")," for the record key thus creating two different records. To fix this, starting 0.10.1 a new config ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations/#hoodiedatasourcewritekeygeneratorconsistentlogicaltimestampenabled"},"hoodie.datasource.write.keygenerator.consistent.logical.timestamp.enabled"),"\nis introduced to bring consistency irrespective of whether row writing is enabled on not. However, for the sake of\nbackwards compatibility and not breaking existing pipelines, this config is set to false by default and will have to be enabled explicitly."),(0,o.yg)("h3",{id:"querying-tables"},"Querying Tables"),(0,o.yg)("h4",{id:"how-can-i-now-query-the-hudi-dataset-i-just-wrote"},"How can I now query the Hudi dataset I just wrote?"),(0,o.yg)("p",null,"Unless Hive sync is enabled, the dataset written by Hudi using one of the methods above can simply be queries via the Spark datasource like any other source."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-scala"},'val hudiSnapshotQueryDF = spark\n     .read()\n     .format("hudi")\n     .option(DataSourceReadOptions.QUERY_TYPE_OPT_KEY(), DataSourceReadOptions.QUERY_TYPE_SNAPSHOT_OPT_VAL())\n     .load(basePath) \nval hudiIncQueryDF = spark.read().format("hudi")\n     .option(DataSourceReadOptions.VIEW_TYPE_OPT_KEY(), DataSourceReadOptions.VIEW_TYPE_INCREMENTAL_OPT_VAL())\n     .option(DataSourceReadOptions.BEGIN_INSTANTTIME_OPT_KEY(), <beginInstantTime>)\n     .load(basePath);\n')),(0,o.yg)("p",null,"if Hive Sync is enabled in the ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/d3edac4612bde2fa9deca9536801dbc48961fb95/docker/demo/sparksql-incremental.commands#L50"},"deltastreamer")," tool or ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiedatasourcehive_syncenable"},"datasource"),", the dataset is available in Hive as a couple of tables, that can now be read using HiveQL, Presto or SparkSQL. See ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/querying_data/"},"here")," for more."),(0,o.yg)("h3",{id:"data-quality-issues"},"Data Quality Issues"),(0,o.yg)("p",null,"Section below generally aids in debugging Hudi failures. Off the bat, the following metadata is added to every record to help triage issues easily using standard Hadoop SQL engines (Hive/PrestoDB/Spark)"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"_","hoodie","_","record","_","key")," - Treated as a primary key within each DFS partition, basis of all updates/inserts"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"_","hoodie","_","commit","_","time")," - Last commit that touched this record"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"_","hoodie_commit_seqno")," - This field contains a unique sequence number for each record within each transaction."),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"_","hoodie","_","file","_","name")," - Actual file name containing the record (super useful to triage duplicates)"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("strong",{parentName:"li"},"_","hoodie","_","partition","_","path")," - Path from basePath that identifies the partition containing this record")),(0,o.yg)("h4",{id:"missing-records"},"Missing records"),(0,o.yg)("p",null,"Please check if there were any write errors using the admin commands, during the window at which the record could have been written."),(0,o.yg)("p",null,"If you do find errors, then the record was not actually written by Hudi, but handed back to the application to decide what to do with it."),(0,o.yg)("h4",{id:"duplicates"},"Duplicates"),(0,o.yg)("p",null,"First of all, please confirm if you do indeed have duplicates ",(0,o.yg)("strong",{parentName:"p"},"AFTER")," ensuring the query is accessing the Hudi table ",(0,o.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/querying_data/"},"properly")," ."),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"If confirmed, please use the metadata fields above, to identify the physical files & partition files containing the records ."),(0,o.yg)("li",{parentName:"ul"},"If duplicates span files across partitionpath, then this means your application is generating different partitionPaths for same recordKey, Please fix your app"),(0,o.yg)("li",{parentName:"ul"},"if duplicates span multiple files within the same partitionpath, please engage with mailing list. This should not happen. You can use the ",(0,o.yg)("inlineCode",{parentName:"li"},"records deduplicate")," command to fix your data.")),(0,o.yg)("h3",{id:"ingestion"},"Ingestion"),(0,o.yg)("h4",{id:"javaioeofexception-received--1-when-reading-from-channel-socket-has-likely-been-closed-at-kafkautilsutilsreadutilsscala381-at-kafkanetworkboundedbytebufferreceivereadfromboundedbytebufferreceivescala54"},"java.io.EOFException: Received -1 when reading from channel, socket has likely been closed. at ",(0,o.yg)("a",{parentName:"h4",href:"http://kafka.utils.Utils$.read"},"kafka.utils.Utils$.read"),"(Utils.scala:381) at kafka.network.BoundedByteBufferReceive.readFrom(BoundedByteBufferReceive.scala:54)"),(0,o.yg)("p",null,"This might happen if you are ingesting from Kafka source, your cluster is ssl enabled by default and you are using some version of Hudi older than 0.5.1. Previous versions of Hudi were using spark-streaming-kafka-0-8 library. With the release of 0.5.1 version of Hudi, spark was upgraded to 2.4.4 and spark-streaming-kafka library was upgraded to spark-streaming-kafka-0-10. SSL support was introduced from spark-streaming-kafka-0-10. Please see here for reference."),(0,o.yg)("p",null,"The workaround can be either use Kafka cluster which is not ssl enabled, else upgrade Hudi version to at least 0.5.1 or spark-streaming-kafka library to spark-streaming-kafka-0-10."),(0,o.yg)("h4",{id:"javalangillegalargumentexception-could-not-find-a-kafkaclient-entry-in-the-jaas-configuration-system-property-javasecurityauthloginconfig-is-not-set"},"java.lang.IllegalArgumentException: Could not find a 'KafkaClient' entry in the JAAS configuration. System property 'java.security.auth.login.config' is not set"),(0,o.yg)("p",null,"This might happen when you are trying to ingest from ssl enabled kafka source and your setup is not able to read jars.conf file and its properties. To fix this, you need to pass the required property as part of your spark-submit command something like"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain"},"--files jaas.conf,failed_tables.json --conf 'spark.driver.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf' --conf 'spark.executor.extraJavaOptions=-Djava.security.auth.login.config=jaas.conf'\n")),(0,o.yg)("h4",{id:"ioexception-write-end-dead-or-circular-reference-while-writing-to-gcs"},"IOException: Write end dead or CIRCULAR REFERENCE while writing to GCS"),(0,o.yg)("p",null,"If you encounter below stacktrace, please set the spark config as suggested below."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain"},"--conf 'spark.hadoop.fs.gs.outputstream.pipe.type=NIO_CHANNEL_PIPE'\n")),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain"}," at org.apache.hudi.io.storage.HoodieAvroParquetWriter.close(HoodieAvroParquetWriter.java:84)\n    Suppressed: java.io.IOException: Upload failed for 'gs://bucket/b0ee4274-5193-4a26-bcff-d60654fd7b24-0_0-42-671_20230228055305900.parquet'\n        at...\n        ... 44 more\n    Caused by: java.io.IOException: Write end dead\n        at java.base/java.io.PipedInputStream.read(PipedInputStream.java:310)\n        at java.base/java.io.PipedInputStream.read(PipedInputStream.java:377)\n        at com.google.cloud.hadoop.repackaged.gcs.com.google.api.client.util.ByteStreams.read(ByteStreams.java:172)\n        at ...\n        ... 3 more\nCaused by: [CIRCULAR REFERENCE: java.io.IOException: Write end dead]\n")),(0,o.yg)("p",null,"We have an active patch(",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/7245"},"https://github.com/apache/hudi/pull/7245"),") on fixing the issue. Until we land this, you can use above config to bypass the issue."),(0,o.yg)("h3",{id:"hive-sync"},"Hive Sync"),(0,o.yg)("h4",{id:"sqlexception-following-columns-have-types-incompatible"},"SQLException: following columns have types incompatible"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain"},"Error while processing statement: FAILED: Execution Error, return code 1 from org.apache.hadoop.hive.ql.exec.DDLTask. Unable to alter table. The following columns have types incompatible with the existing columns in their respective positions : col1,col2\n")),(0,o.yg)("p",null,"This will usually happen when you are trying to add a new column to existing hive table using our ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/be4dfccbb24794dfac3714818971229870d24a2c/hudi-sync/hudi-hive-sync/src/main/java/org/apache/hudi/hive/HiveSyncTool.java"},"HiveSyncTool.java")," class. Databases usually will not allow to modify a column datatype from a higher order to lower order or cases where the datatypes may clash with the data that is already stored/will be stored in the table. To fix the same, try setting the following property -"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain"},"set hive.metastore.disallow.incompatible.col.type.changes=false;\n")),(0,o.yg)("h4",{id:"hoodiehivesyncexception-could-not-convert-field-type-from-type1-to-type2-for-field-col1"},"HoodieHiveSyncException: Could not convert field Type from ",(0,o.yg)("inlineCode",{parentName:"h4"},"<type1>")," to ",(0,o.yg)("inlineCode",{parentName:"h4"},"<type2>")," for field col1"),(0,o.yg)("p",null,"This occurs because HiveSyncTool currently supports only few compatible data type conversions. Doing any other incompatible change will throw this exception. Please check the data type evolution for the concerned field and verify if it indeed can be considered as a valid data type conversion as per Hudi code base."),(0,o.yg)("h4",{id:"orgapachehadoophiveqlparsesemanticexception-database-does-not-exist-test_db"},"org.apache.hadoop.hive.ql.parse.SemanticException: Database does not exist: test","_","db"),(0,o.yg)("p",null,"This generally occurs if you are trying to do Hive sync for your Hudi dataset and the configured hive","_","sync database does not exist. Please create the corresponding database on your Hive cluster and try again."),(0,o.yg)("h4",{id:"orgapachethrifttapplicationexception-invalid-method-name-get_table_req"},"org.apache.thrift.TApplicationException: Invalid method name: 'get","_","table","_","req'"),(0,o.yg)("p",null,"This issue is caused by hive version conflicts, hudi built with hive-2.3.x version, so if still want hudi work with older hive version"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-plain"},"Steps: (build with hive-2.1.0)\n1. git clone git@github.com:apache/incubator-hudi.git\n2. rm hudi-hadoop-mr/src/main/java/org/apache/hudi/hadoop/hive/HoodieCombineHiveInputFormat.java\n3. mvn clean package -DskipTests -DskipITs -Dhive.version=2.1.0\n")),(0,o.yg)("h4",{id:"javalangunsupportedoperationexception-table-rename-is-not-supported"},"java.lang.UnsupportedOperationException: Table rename is not supported"),(0,o.yg)("p",null,"This issue could occur when syncing to hive. Possible reason is that, hive does not play well if your table name has upper and lower case letter. Try to have all lower case letters for your table name and it should likely get fixed. Related issue: ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/issues/2409"},"https://github.com/apache/hudi/issues/2409")),(0,o.yg)("h4",{id:"how-can-i-resolve-the-illegalargumentexception-saying-partitions-must-be-in-the-same-table-when-attempting-to-sync-to-a-metastore"},"How can I resolve the IllegalArgumentException saying ",(0,o.yg)("inlineCode",{parentName:"h4"},"Partitions must be in the same table")," when attempting to sync to a metastore?"),(0,o.yg)("p",null,"This will occur when capital letters are used in the table name. Metastores such as Hive automatically convert table names"),(0,o.yg)("p",null,"to lowercase. While we allow capitalization on Hudi tables, if you would like to use a metastore you may be required to"),(0,o.yg)("p",null,"use all lowercase letters. More details on how this issue presents can be found ",(0,o.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/issues/6832"},"here"),"."),(0,o.yg)("h4",{id:""}))}h.isMDXComponent=!0}}]);