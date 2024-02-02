"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[72209],{95788:(e,r,t)=>{t.d(r,{Iu:()=>p,yg:()=>m});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),u=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return a.createElement(c.Provider,{value:r},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},g=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(t),g=n,m=l["".concat(c,".").concat(g)]||l[g]||d[g]||o;return t?a.createElement(m,i(i({ref:r},p),{},{components:t})):a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=g;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[l]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},96012:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=t(45072),n=(t(11504),t(95788));const o={title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},i=void 0,s={unversionedId:"structure",id:"version-0.10.0/structure",title:"Structure",description:"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (HDFS or cloud stores) and provides three types of queries.",source:"@site/versioned_docs/version-0.10.0/structure.md",sourceDirName:".",slug:"/structure",permalink:"/docs/0.10.0/structure",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/structure.md",tags:[],version:"0.10.0",frontMatter:{title:"Structure",keywords:["big data","stream processing","cloud","hdfs","storage","upserts","change capture"],summary:"Hudi brings stream processing to big data, providing fresh data while being an order of magnitude efficient over traditional batch processing.",last_modified_at:"2019-12-30T19:59:57.000Z"}},c=[],u={toc:c},p="wrapper";function l(e){let{components:r,...o}=e;return(0,n.yg)(p,(0,a.c)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Hudi (pronounced \u201cHoodie\u201d) ingests & manages storage of large analytical tables over DFS (",(0,n.yg)("a",{parentName:"p",href:"http://hadoop.apache.org/docs/stable/hadoop-project-dist/hadoop-hdfs/HdfsDesign"},"HDFS")," or cloud stores) and provides three types of queries."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Read Optimized query")," - Provides excellent query performance on pure columnar storage, much like plain ",(0,n.yg)("a",{parentName:"li",href:"https://parquet.apache.org/"},"Parquet")," tables."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Incremental query")," - Provides a change stream out of the dataset to feed downstream jobs/ETLs."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Snapshot query")," - Provides queries on real-time data, using a combination of columnar & row based storage (e.g Parquet + ",(0,n.yg)("a",{parentName:"li",href:"http://avro.apache.org/docs/current/mr"},"Avro"),")")),(0,n.yg)("figure",null,(0,n.yg)("img",{className:"docimage",src:t(85364).c,alt:"hudi_intro_1.png"})),(0,n.yg)("p",null,"By carefully managing how data is laid out in storage & how it\u2019s exposed to queries, Hudi is able to power a rich data ecosystem where external sources can be ingested in near real-time and made available for interactive SQL Engines like ",(0,n.yg)("a",{parentName:"p",href:"https://prestodb.io"},"PrestoDB")," & ",(0,n.yg)("a",{parentName:"p",href:"https://spark.apache.org/sql/"},"Spark"),", while at the same time capable of being consumed incrementally from processing/ETL frameworks like ",(0,n.yg)("a",{parentName:"p",href:"https://hive.apache.org/"},"Hive")," & ",(0,n.yg)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/"},"Spark")," to build derived (Hudi) tables."),(0,n.yg)("p",null,"Hudi broadly consists of a self contained Spark library to build tables and integrations with existing query engines for data access. See ",(0,n.yg)("a",{parentName:"p",href:"/docs/quick-start-guide"},"quickstart")," for a demo."))}l.isMDXComponent=!0},85364:(e,r,t)=>{t.d(r,{c:()=>a});const a=t.p+"assets/images/hudi_intro_1-802c5b502d13c9b2a25b8e65c8cf27fd.png"}}]);