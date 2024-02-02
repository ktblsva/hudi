"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[23888],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>g});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,g=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},46296:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(45072),r=(n(11504),n(95788));const i={title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null},o=void 0,s={unversionedId:"query_engine_setup",id:"version-0.9.0/query_engine_setup",title:"Query Engine Setup",description:"Spark",source:"@site/versioned_docs/version-0.9.0/query_engine_setup.md",sourceDirName:".",slug:"/query_engine_setup",permalink:"/cn/docs/0.9.0/query_engine_setup",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.9.0/query_engine_setup.md",tags:[],version:"0.9.0",frontMatter:{title:"Query Engine Setup",summary:"In this page, we describe how to setup various query engines for Hudi.",toc:!0,last_modified_at:null}},p=[{value:"Spark",id:"spark",children:[],level:2},{value:"PrestoDB",id:"prestodb",children:[],level:2},{value:"Trino",id:"trino",children:[],level:2},{value:"Hive",id:"hive",children:[],level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.c)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"spark"},"Spark"),(0,r.yg)("p",null,"The Spark Datasource API is a popular way of authoring Spark ETL pipelines. Hudi tables can be queried via the Spark datasource with a simple ",(0,r.yg)("inlineCode",{parentName:"p"},"spark.read.parquet"),".\nSee the ",(0,r.yg)("a",{parentName:"p",href:"/docs/quick-start-guide"},"Spark Quick Start")," for more examples of Spark datasource reading queries."),(0,r.yg)("p",null,"If your Spark environment does not have the Hudi jars installed, add ",(0,r.yg)("inlineCode",{parentName:"p"},"--jars <path to jar>/hudi-spark-bundle_2.11-<hudi version>.jar")," to the classpath of drivers\nand executors. Alternatively, hudi-spark-bundle can also fetched via the ",(0,r.yg)("inlineCode",{parentName:"p"},"--packages")," options (e.g: ",(0,r.yg)("inlineCode",{parentName:"p"},"--packages org.apache.hudi:hudi-spark-bundle_2.11:0.5.3"),")."),(0,r.yg)("h2",{id:"prestodb"},"PrestoDB"),(0,r.yg)("p",null,"PrestoDB is a popular query engine, providing interactive query performance. PrestoDB currently supports snapshot querying on COPY_ON_WRITE tables.\nBoth snapshot and read optimized queries are supported on MERGE_ON_READ Hudi tables. Since PrestoDB-Hudi integration has evolved over time, the installation\ninstructions for PrestoDB would vary based on versions. Please check the below table for query types supported and installation instructions\nfor different versions of PrestoDB."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"PrestoDB Version")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Installation description")),(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("strong",{parentName:"th"},"Query types supported")))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"< 0.233"),(0,r.yg)("td",{parentName:"tr",align:null},"Requires the ",(0,r.yg)("inlineCode",{parentName:"td"},"hudi-presto-bundle")," jar to be placed into ",(0,r.yg)("inlineCode",{parentName:"td"},"<presto_install>/plugin/hive-hadoop2/"),", across the installation."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.233"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi (0.5.1-incubating) is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on COW tables. Read optimized querying on MOR tables.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},">= 0.240"),(0,r.yg)("td",{parentName:"tr",align:null},"No action needed. Hudi 0.5.3 version is a compile time dependency."),(0,r.yg)("td",{parentName:"tr",align:null},"Snapshot querying on both COW and MOR tables")))),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"We upgraded Hudi version from 0.5.3 to 0.9.0 in Presto 0.265 but that introduced a breaking dependency change in\nanother presto module. See ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/prestodb/presto/issues/17164"},"this issue")," for more details. Since then,\nwe have ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/pull/4551"},"fixed the hudi-presto-bundle")," in version 0.10.1. Now, we need to\nupgrade Hudi in Presto again. This is being tracked by ",(0,r.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/HUDI-3010"},"HUDI-3010"),".\nOur suggestion is to avoid upgrading Presto until the issue is fixed. However, if this is not an option, then the\nworkaround is to download the hudi-presto-bundle jar from our ",(0,r.yg)("a",{parentName:"p",href:"https://mvnrepository.com/artifact/org.apache.hudi/hudi-presto-bundle"},"maven repo"),"\nand place it in ",(0,r.yg)("inlineCode",{parentName:"p"},"<presto_install>/plugin/hive-hadoop2/"),"."))),(0,r.yg)("h2",{id:"trino"},"Trino"),(0,r.yg)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},(0,r.yg)("a",{parentName:"p",href:"https://trino.io/"},"Trino")," (formerly PrestoSQL) was forked off of PrestoDB a few years ago. Hudi supports 'Snapshot' queries for Copy-On-Write tables and 'Read Optimized' queries\nfor Merge-On-Read tables. This is through the initial input format based integration in PrestoDB (pre forking). This approach has\nknown performance limitations with very large tables, which has been since fixed on PrestoDB. We are working on replicating the same fixes on Trino as well."))),(0,r.yg)("p",null,"To query Hudi tables on Trino, please place the ",(0,r.yg)("inlineCode",{parentName:"p"},"hudi-trino-bundle")," jar into the Hive connector installation ",(0,r.yg)("inlineCode",{parentName:"p"},"<trino_install>/plugin/hive-hadoop2"),"."),(0,r.yg)("h2",{id:"hive"},"Hive"),(0,r.yg)("p",null,"In order for Hive to recognize Hudi tables and query correctly,"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the HiveServer2 needs to be provided with the ",(0,r.yg)("inlineCode",{parentName:"li"},"hudi-hadoop-mr-bundle-x.y.z-SNAPSHOT.jar")," in its ",(0,r.yg)("a",{parentName:"li",href:"https://www.cloudera.com/documentation/enterprise/5-6-x/topics/cm_mc_hive_udf#concept_nc3_mms_lr"},"aux jars path"),". This will ensure the input format\nclasses with its dependencies are available for query planning & execution."),(0,r.yg)("li",{parentName:"ul"},"For MERGE_ON_READ tables, additionally the bundle needs to be put on the hadoop/hive installation across the cluster, so that queries can pick up the custom RecordReader as well.")),(0,r.yg)("p",null,"In addition to setup above, for beeline cli access, the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.input.format")," variable needs to be set to the fully qualified path name of the\ninputformat ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.hadoop.HoodieParquetInputFormat"),". For Tez, additionally the ",(0,r.yg)("inlineCode",{parentName:"p"},"hive.tez.input.format")," needs to be set\nto ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hadoop.hive.ql.io.HiveInputFormat"),". Then proceed to query the table like any other Hive table."))}u.isMDXComponent=!0}}]);