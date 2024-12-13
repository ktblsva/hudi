"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[71117],{66897:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"tuning-guide","title":"Spark Tuning Guide","description":"To get a better understanding of where your Hudi jobs is spending its time, use a tool like YourKit Java Profiler, to obtain heap dumps/flame graphs.","source":"@site/versioned_docs/version-0.15.0/tuning-guide.md","sourceDirName":".","slug":"/tuning-guide","permalink":"/cn/docs/0.15.0/tuning-guide","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.15.0/tuning-guide.md","tags":[],"version":"0.15.0","frontMatter":{"title":"Spark Tuning Guide","keywords":["hudi","tuning","performance"],"last_modified_at":"2021-09-29T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"Troubleshooting","permalink":"/cn/docs/0.15.0/troubleshooting"},"next":{"title":"Flink Tuning Guide","permalink":"/cn/docs/0.15.0/flink_tuning"}}');var n=r(74848),a=r(28453);const o={title:"Spark Tuning Guide",keywords:["hudi","tuning","performance"],last_modified_at:new Date("2021-09-29T19:59:57.000Z")},s="Spark Tuning Guide",l={},d=[{value:"Writing",id:"writing",level:2},{value:"General Tips",id:"general-tips",level:3},{value:"Spark failures",id:"spark-ui",level:3},{value:"Hudi consumes too much space in a temp folder while upsert",id:"hudi-consumes-too-much-space-in-a-temp-folder-while-upsert",level:3},{value:"How to tune shuffle parallelism of Hudi jobs ?",id:"how-to-tune-shuffle-parallelism-of-hudi-jobs-",level:3},{value:"GC Tuning",id:"gc-tuning",level:3}];function u(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"spark-tuning-guide",children:"Spark Tuning Guide"})}),"\n",(0,n.jsx)(i.admonition,{title:"Profiling Tip",type:"note",children:(0,n.jsxs)(i.p,{children:["To get a better understanding of where your Hudi jobs is spending its time, use a tool like ",(0,n.jsx)(i.a,{href:"https://www.yourkit.com/download/",children:"YourKit Java Profiler"}),", to obtain heap dumps/flame graphs."]})}),"\n",(0,n.jsx)(i.h2,{id:"writing",children:"Writing"}),"\n",(0,n.jsx)(i.h3,{id:"general-tips",children:"General Tips"}),"\n",(0,n.jsx)(i.p,{children:"Writing data via Hudi happens as a Spark job and thus general rules of spark debugging applies here too. Below is a list of things to keep in mind, if you are looking to improving performance or reliability."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Input Parallelism"})," : By default, Hudi follows the input parallelism. Bump this up accordingly if you have larger inputs, that can cause more shuffles. We recommend tuning shuffle parallelism hoodie.[insert|upsert|bulkinsert].shuffle.parallelism such that its at least input_data_size/500MB."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Off-heap memory"})," : Hudi writes parquet files and that needs good amount of off-heap memory proportional to schema width. Consider setting something like spark.executor.memoryOverhead or spark.driver.memoryOverhead, if you are running into such failures."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Spark Memory"})," : Typically, hudi needs to be able to read a single file into memory to perform merges or compactions and thus the executor memory should be sufficient to accomodate this. In addition, Hudi caches the input to be able to intelligently place data and thus leaving some ",(0,n.jsx)(i.code,{children:"spark.memory.storageFraction"})," will generally help boost performance."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Sizing files"}),": Set target file sizes judiciously, to balance ingest/write latency vs number of files & consequently metadata overhead associated with it."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Timeseries/Log data"})," : Default configs are tuned for database/nosql changelogs where individual record sizes are large. Another very popular class of data is timeseries/event/log data that tends to be more volumnious with lot more records per partition. In such cases consider tuning the bloom filter accuracy to achieve your target index look up time or use a bucketed index configuration. Also, consider making a key that is prefixed with time of the event, which will enable range pruning & significantly speeding up index lookup."]}),"\n",(0,n.jsx)(i.h3,{id:"spark-ui",children:"Spark failures"}),"\n",(0,n.jsx)(i.p,{children:"Typical upsert() DAG looks like below. Note that Hudi client also caches intermediate RDDs to intelligently profile workload and size files and spark parallelism.\nAlso Spark UI shows sortByKey twice due to the probe job also being shown, nonetheless its just a single sort."}),"\n",(0,n.jsx)("figure",{children:(0,n.jsx)("img",{className:"docimage",src:r(81892).A,alt:"hudi_upsert_dag.png"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"At a high level, there are two steps"}),":"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"Index Lookup to identify files to be changed"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Job 1 : Triggers the input data read, converts to HoodieRecord object and then stops at obtaining a spread of input records to target partition paths"}),"\n",(0,n.jsx)(i.li,{children:"Job 2 : Load the set of file names which we need check against"}),"\n",(0,n.jsx)(i.li,{children:"Job 3  & 4 : Actual lookup after smart sizing of spark join parallelism, by joining RDDs in 1 & 2 above"}),"\n",(0,n.jsx)(i.li,{children:"Job 5 : Have a tagged RDD of recordKeys with locations"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.em,{children:"Performing the actual writing of data"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Job 6 : Lazy join of incoming records against recordKey, location to provide a final set of HoodieRecord which now contain the information about which file/partitionpath they are found at (or null if insert). Then also profile the workload again to determine sizing of files"}),"\n",(0,n.jsx)(i.li,{children:"Job 7 : Actual writing of data (update + insert + insert turned to updates to maintain file size)"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Depending on the exception source (Hudi/Spark), the above knowledge of the DAG can be used to pinpoint the actual issue. The most often encountered failures result from YARN/DFS temporary failures.\nIn the future, a more sophisticated debug/management UI would be added to the project, that can help automate some of this debugging."}),"\n",(0,n.jsx)(i.h3,{id:"hudi-consumes-too-much-space-in-a-temp-folder-while-upsert",children:"Hudi consumes too much space in a temp folder while upsert"}),"\n",(0,n.jsxs)(i.p,{children:["When upsert large input data, hudi spills part of input data to disk when reach the max memory for merge. if there is enough memory, please increase spark executor's memory and  ",(0,n.jsx)(i.code,{children:"hoodie.memory.merge.fraction"})," option, for example\n",(0,n.jsx)(i.code,{children:'option("hoodie.memory.merge.fraction", "0.8")'})]}),"\n",(0,n.jsx)(i.h3,{id:"how-to-tune-shuffle-parallelism-of-hudi-jobs-",children:"How to tune shuffle parallelism of Hudi jobs ?"}),"\n",(0,n.jsxs)(i.p,{children:["First, let's understand what the term parallelism means in the context of Hudi jobs. For any Hudi job using Spark, parallelism equals to the number of spark partitions that should be generated for a particular stage in the DAG. To understand more about spark partitions, read this ",(0,n.jsx)(i.a,{href:"https://www.dezyre.com/article/how-data-partitioning-in-spark-helps-achieve-more-parallelism/297",children:"article"}),". In spark, each spark partition is mapped to a spark task that can be executed on an executor. Typically, for a spark application the following hierarchy holds true"]}),"\n",(0,n.jsx)(i.p,{children:"(Spark Application \u2192 N Spark Jobs \u2192 M Spark Stages \u2192 T Spark Tasks) on (E executors with C cores)"}),"\n",(0,n.jsx)(i.p,{children:"A spark application can be given E number of executors to run the spark application on. Each executor might hold 1 or more spark cores. Every spark task will require atleast 1 core to execute, so imagine T number of tasks to be done in Z time depending on C cores. The higher C, Z is smaller."}),"\n",(0,n.jsx)(i.p,{children:"With this understanding, if you want your DAG stage to run faster, bring T as close or higher to C. Additionally, this parallelism finally controls the number of output files you write using a Hudi based job. Let's understand the different kinds of knobs available:"}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodiebulkinsertshuffleparallelism",children:"BulkInsertParallelism"})," \u2192 This is used to control the parallelism with which output files will be created by a Hudi job. The higher this parallelism, the more number of tasks are created and hence the more number of output files will eventually be created. Even if you define ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodieparquetmaxfilesize",children:"parquet-max-file-size"})," to be of a high value, if you make parallelism really high, the max file size cannot be honored since the spark tasks are working on smaller amounts of data."]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodieupsertshuffleparallelism",children:"Upsert"})," / ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations#hoodieinsertshuffleparallelism",children:"Insert Parallelism"})," \u2192 This is used to control how fast the read process should be when reading data into the job. Find more details ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/configurations/",children:"here"}),"."]}),"\n",(0,n.jsx)(i.h3,{id:"gc-tuning",children:"GC Tuning"}),"\n",(0,n.jsx)(i.p,{children:"Please be sure to follow garbage collection tuning tips from Spark tuning guide to avoid OutOfMemory errors. Must Use G1/CMS Collector. Sample CMS Flags to add to spark.executor.extraJavaOptions:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-java",children:"-XX:NewSize=1g -XX:SurvivorRatio=2 -XX:+UseCompressedOops -XX:+UseConcMarkSweepGC -XX:+UseParNewGC -XX:CMSInitiatingOccupancyFraction=70 -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintTenuringDistribution -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\n"})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"OutOfMemory Errors"}),": If it keeps OOMing still, reduce spark memory conservatively: spark.memory.fraction=0.2, spark.memory.storageFraction=0.2 allowing it to spill rather than OOM. (reliably slow vs crashing intermittently)"]}),"\n",(0,n.jsx)(i.p,{children:"Below is a full working production config used at Uber (HDFS/Yarn), for their ingest platform."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-scala",children:"spark.driver.extraClassPath /etc/hive/conf\nspark.driver.extraJavaOptions -XX:+PrintTenuringDistribution -XX:+PrintGCDetails -XX:+PrintGCDateStamps -XX:+PrintGCApplicationStoppedTime -XX:+PrintGCApplicationConcurrentTime -XX:+PrintGCTimeStamps -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\nspark.driver.maxResultSize 2g\nspark.driver.memory 4g\nspark.executor.cores 1\nspark.executor.extraJavaOptions -XX:+PrintFlagsFinal -XX:+PrintReferenceGC -verbose:gc -XX:+PrintGCDetails -XX:+PrintGCTimeStamps -XX:+PrintAdaptiveSizePolicy -XX:+UnlockDiagnosticVMOptions -XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/hoodie-heapdump.hprof\nspark.executor.id driver\nspark.executor.instances 300\nspark.executor.memory 6g\nspark.rdd.compress true\n\nspark.kryoserializer.buffer.max 512m\nspark.serializer org.apache.spark.serializer.KryoSerializer\nspark.shuffle.service.enabled true\nspark.submit.deployMode cluster\nspark.task.cpus 1\nspark.task.maxFailures 4\n\nspark.driver.memoryOverhead 1024\nspark.executor.memoryOverhead 3072\nspark.yarn.max.executor.failures 100\n"})})]})}function p(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},81892:(e,i,r)=>{r.d(i,{A:()=>t});const t=r.p+"assets/images/hudi_upsert_dag-3b2d81de8560fad7af112e40a2f8c437.png"},28453:(e,i,r)=>{r.d(i,{R:()=>o,x:()=>s});var t=r(96540);const n={},a=t.createContext(n);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);