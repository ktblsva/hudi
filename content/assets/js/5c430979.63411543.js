"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[99308],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>m});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||o;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},70468:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(45072),r=(n(11504),n(95788));const o={title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},i=void 0,l={unversionedId:"query_engine_setup",id:"version-0.13.0/query_engine_setup",title:"Query Engine Setup",description:"Spark",source:"@site/versioned_docs/version-0.13.0/query_engine_setup.md",sourceDirName:".",slug:"/query_engine_setup",permalink:"/docs/0.13.0/query_engine_setup",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.0/query_engine_setup.md",tags:[],version:"0.13.0",frontMatter:{title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},sidebar:"docs",previous:{title:"All Configurations",permalink:"/docs/0.13.0/configurations"},next:{title:"Performance",permalink:"/docs/0.13.0/performance"}},s=[{value:"Spark",id:"spark",children:[],level:2},{value:"PrestoDB",id:"prestodb",children:[{value:"Presto Environment",id:"presto-environment",children:[],level:3},{value:"Query",id:"query",children:[],level:3}],level:2},{value:"Trino",id:"trino",children:[{value:"Hive Connector",id:"hive-connector",children:[],level:3},{value:"Hudi Connector",id:"hudi-connector",children:[],level:3}],level:2},{value:"Hive",id:"hive",children:[],level:2},{value:"Redshift Spectrum",id:"redshift-spectrum",children:[],level:2},{value:"Doris",id:"doris",children:[],level:2},{value:"StarRocks",id:"starrocks",children:[],level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.c)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"spark"},"Spark"),(0,r.yg)("p",null,"The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,r.yg)("inlineCode",{parentName:"p"},"spark.read.parquet"),".\nSee the ",(0,r.yg)("a",{parentName:"p",href:"/docs/quick-start-guide"},"Spark Quick Start")," for more examples of Spark datasource reading queries."),(0,r.yg)("p",null,"If your Spark environment does not have the Hudi jars installed, add ",(0,r.yg)("inlineCode",{parentName:"p"},"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar")," to the classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,r.yg)("inlineCode",{parentName:"p"},"--packages")," options (e.g: ",(0,r.yg)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"),")."),(0,r.yg)("h2",{id:"prestodb"},"PrestoDB"),(0,r.yg)("p",null,"PrestoDB is a popular query engine, providing interactive query performance.\nOne can use both Hive or Hudi connector (Presto version 0.275 onwards) for querying Hudi tables.\nBoth connectors currently support snapshot querying on COPY_ON_WRITE tables, and\nsnapshot and read optimized queries on MERGE_ON_READ Hudi tables. "),(0,r.yg)("p",null,"Since PrestoDB-Hudi integration has evolved over time, the installation\ninstructions for PrestoDB would vary based on versions.\nPlease check the below table for query types supported and installation instructions\nfor different versions of PrestoDB."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"PrestoDB Version")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Installation description")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Query types supported")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 0.233"),(0,r.yg)("td",{parentName:"tr",align:null},"Requires the ",(0,r.yg)("inlineCode",{parentName:"td"},"hudi-presto-bundle")," jar to be placed into ",(0,r.yg)("inlineCode",{parentName:"td"},"<presto_install>/plugin/hive-hadoop2/"),", across the installation."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.233"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi (0.5.1-incubating) is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.240"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi 0.5.3 version is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on both COW and MOR tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.268"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi 0.9.0 version is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on bootstrap tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.272"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi 0.10.1 version is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"File listing optimizations. Improved query performance.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.275"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi 0.11.0 version is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"All of the above. Native Hudi connector that is on par with Hive connector.")))),(0,r.yg)("p",null,"To learn more about the usage of Hudi connector, please checkout ",(0,r.yg)("a",{parentName:"p",href:"https://prestodb.io/docs/current/connector/hudi.html"},"prestodb documentation"),"."),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Incremental queries and point in time queries are not supported either through the Hive connector or Hudi connector.\nHowever, it is in our roadmap and you can track the development under ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-3210"},"HUDI-3210"),"."),(0,r.yg)("p",{parentName:"div"},"There is a known issue (",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-4290"},"HUDI-4290"),") for a clustered Hudi table. Presto query using version 0.272 or later\nmay contain duplicates in results if clustering is enabled. This issue has been fixed in Hudi version 0.12.0 and we need to upgrade ",(0,r.yg)("inlineCode",{parentName:"p"},"hudi-presto-bundle"),"\nin presto to version 0.12.0. It is tracked in ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-4605"},"HUDI-4605"),"."))),(0,r.yg)("h3",{id:"presto-environment"},"Presto Environment"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Configure Presto according to the ",(0,r.yg)("a",{parentName:"li",href:"https://prestodb.io/docs/current/installation/deployment.html"},"Presto configuration document"),"."),(0,r.yg)("li",{parentName:"ol"},"Configure hive catalog in ",(0,r.yg)("inlineCode",{parentName:"li"}," /presto-server-0.2xxx/etc/catalog/hive.properties")," as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"connector.name=hive-hadoop2\nhive.metastore.uri=thrift://xxx.xxx.xxx.xxx:9083\nhive.config.resources=.../hadoop-2.x/etc/hadoop/core-site.xml,.../hadoop-2.x/etc/hadoop/hdfs-site.xml\n")),(0,r.yg)("ol",{start:3},(0,r.yg)("li",{parentName:"ol"},"Alternatively, configure hudi catalog in ",(0,r.yg)("inlineCode",{parentName:"li"}," /presto-server-0.2xxx/etc/catalog/hudi.properties")," as follows:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-properties"},"connector.name=hudi\nhive.metastore.uri=thrift://xxx.xxx.xxx.xxx:9083\nhive.config.resources=.../hadoop-2.x/etc/hadoop/core-site.xml,.../hadoop-2.x/etc/hadoop/hdfs-site.xml\n")),(0,r.yg)("h3",{id:"query"},"Query"),(0,r.yg)("p",null,"Beginning query by connecting hive metastore with presto client. The presto client connection command is as follows:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"# The presto client connection command where <catalog_name> is either hudi or hive,\n# and <schema_name> is the database name used in hive sync.\n./presto --server xxx.xxx.xxx.xxx:9999 --catalog <catalog_name> --schema <schema_name>\n")),(0,r.yg)("h2",{id:"trino"},"Trino"),(0,r.yg)("p",null,"Just like PrestoDB, there are two ways to query Hudi tables using Trino i.e. either using ",(0,r.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/hive.html"},"Hive")," connector or the native\n",(0,r.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/hudi.html"},"Hudi")," connector (available since version 398). However, since version 411, Hive connector redirects to Hudi catalog for reading Hudi tables."),(0,r.yg)("h3",{id:"hive-connector"},"Hive Connector"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Trino Version")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Installation description")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Query types supported")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 406"),(0,r.yg)("td",{parentName:"tr",align:null},"Requires the ",(0,r.yg)("inlineCode",{parentName:"td"},"hudi-trino-bundle")," jar to be placed into ",(0,r.yg)("inlineCode",{parentName:"td"},"<trino_install>/plugin/hive")),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> = 406"),(0,r.yg)("td",{parentName:"tr",align:null},"Requires the ",(0,r.yg)("inlineCode",{parentName:"td"},"hudi-trino-bundle")," jar to be placed into ",(0,r.yg)("inlineCode",{parentName:"td"},"<trino_install>/plugin/hive")),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables. ",(0,r.yg)("strong",{parentName:"td"},"Redirection to Hudi catalog also supported."))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> = 411"),(0,r.yg)("td",{parentName:"tr",align:null},"NA"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables. Hudi tables can be ",(0,r.yg)("strong",{parentName:"td"},"only")," queried by ",(0,r.yg)("a",{parentName:"td",href:"https://trino.io/docs/current/connector/hive.html#table-redirection"},"table redirection"),".")))),(0,r.yg)("p",null,"If you are using Trino version 411 or greater, and also using Hive connector to query Hudi tables, please set the below config to support table redirection."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hive.hudi-catalog-name=hudi\n")),(0,r.yg)("p",null,"It is recommended to use ",(0,r.yg)("inlineCode",{parentName:"p"},"hudi-trino-bundle")," version 0.12.2 or later for optimal query performance with Hive connector."),(0,r.yg)("h3",{id:"hudi-connector"},"Hudi Connector"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Trino Version")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Installation description")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Query types supported")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 398"),(0,r.yg)("td",{parentName:"tr",align:null},"NA - can only use Hive connector to query Hudi tables"),(0,r.yg)("td",{parentName:"tr",align:null},"Same as that of Hive connector version < 406.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"> = 398"),(0,r.yg)("td",{parentName:"tr",align:null},"NA - no need to place bundle jars manually, as they are compile-time dependency"),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")))),(0,r.yg)("p",null,"To learn more about the usage of Hudi connector, please check out\nthe ",(0,r.yg)("a",{parentName:"p",href:"https://trino.io/docs/current/connector/hudi.html"},"connector documentation"),". Both the connectors are on par in\nterms of query support, i.e. 'Snapshot' queries for COW tables and 'Read Optimized' queries for MOR\ntables. We have an active ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trinodb/trino/pull/16034"},"PR")," under review to bring the performance of\nHudi connector on par with Hive connector. Furthermore, we\nexpect ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/trinodb/trino/pull/14786"},"MOR table snapshot query")," support will soon be added to the Hudi\nconnector."),(0,r.yg)("h2",{id:"hive"},"Hive"),(0,r.yg)("p",null,"In order for Hive to recognize Hudi tables and query correctly,"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the HiveServer2 needs to be provided with the ",(0,r.yg)("inlineCode",{parentName:"li"},"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar")," in its ",(0,r.yg)("a",{parentName:"li",href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf.html#concept_nc3_mms_lr"},"aux jars path"),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."),(0,r.yg)("li",{parentName:"ul"},"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well.")),(0,r.yg)("p",null,"In addition to setup above, for beeline cli access, the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.input.format")," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.hadoop.HoodieParquetInputFormat"),". For Tez, additionally the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.tez.input.format")," needs to be set\nto ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.ql.io.HiveInputFormat"),". Then proceed to query the table like any other Hive table."),(0,r.yg)("h2",{id:"redshift-spectrum"},"Redshift Spectrum"),(0,r.yg)("p",null,"Copy on Write Tables in Apache Hudi versions 0.5.2, 0.6.0, 0.7.0, 0.8.0, 0.9.0, 0.10.x, 0.11.x and 0.12.x can be queried via Amazon Redshift Spectrum external tables.\nTo be able to query Hudi versions 0.10.0 and above please try latest versions of Redshift."),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Hudi tables are supported only when AWS Glue Data Catalog is used. It's not supported when you use an Apache Hive metastore as the external catalog."))),(0,r.yg)("p",null,"Please refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/redshift/latest/dg/c-spectrum-external-tables.html#c-spectrum-column-mapping-hudi"},"Redshift Spectrum Integration with Apache Hudi"),"\nfor more details."),(0,r.yg)("h2",{id:"doris"},"Doris"),(0,r.yg)("p",null,"Copy on Write Tables in Hudi version 0.10.0 can be queried via Doris external tables starting from Doris version 1.1.\nPlease refer to ",(0,r.yg)("a",{parentName:"p",href:"https://doris.apache.org/docs/ecosystem/external-table/hudi-external-table/"},"Doris Hudi external table"),"\nfor more details on the setup. "),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"The current default supported version of Hudi is 0.10.0 and has not been tested in other versions. More versions will be supported in the future."))),(0,r.yg)("h2",{id:"starrocks"},"StarRocks"),(0,r.yg)("p",null,"Copy on Write tables in Apache Hudi 0.10.0 and above can be queried via StarRocks external tables from StarRocks version 2.2.0.\nOnly snapshot queries are supported currently. In future releases Merge on Read tables will also be supported.\nPlease refer to ",(0,r.yg)("a",{parentName:"p",href:"https://docs.starrocks.com/en-us/2.2/using_starrocks/External_table#hudi-external-table"},"StarRocks Hudi external table"),"\nfor more details on the setup."))}u.isMDXComponent=!0}}]);