"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[7568],{95788:(e,a,t)=>{t.d(a,{Iu:()=>d,yg:()=>y});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function p(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=r.createContext({}),o=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):g(g({},a),e)),t},d=function(e){var a=o(e.components);return r.createElement(i.Provider,{value:a},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=o(t),u=n,y=m["".concat(i,".").concat(u)]||m[u]||s[u]||l;return t?r.createElement(y,g(g({ref:a},d),{},{components:t})):r.createElement(y,g({ref:a},d))}));function y(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,g=new Array(l);g[0]=u;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p[m]="string"==typeof e?e:n,g[1]=p;for(var o=2;o<l;o++)g[o]=t[o];return r.createElement.apply(null,g)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},48780:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>g,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var r=t(45072),n=(t(11504),t(95788));const l={title:"Roadmap",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},g="Roadmap",p={type:"mdx",permalink:"/cn/roadmap",source:"@site/src/pages/roadmap.md"},i=[{value:"Future Releases",id:"future-releases",children:[],level:2},{value:"Transactional Database Layer",id:"transactional-database-layer",children:[],level:2},{value:"Programming APIs",id:"programming-apis",children:[],level:2},{value:"Execution Engine Integration",id:"execution-engine-integration",children:[],level:2},{value:"Platform Services",id:"platform-services",children:[],level:2}],o={toc:i},d="wrapper";function m(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.c)({},o,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"roadmap"},"Roadmap"),(0,n.yg)("p",null,"Hudi community strives to deliver major releases every 3-4 months, while offering minor releases every other month!\nThis page captures the forward-looking roadmap of ongoing & upcoming projects and when they are expected to land, broken\ndown by areas on our ",(0,n.yg)("a",{parentName:"p",href:"blog/2021/07/21/streaming-data-lake-platform/#hudi-stack"},"stack"),"."),(0,n.yg)("h2",{id:"future-releases"},"Future Releases"),(0,n.yg)("p",null,"Next upcoming release : ",(0,n.yg)("a",{parentName:"p",href:"https://issues.apache.org/jira/projects/HUDI/versions/12353493"},"0.14.1")," (Dec 2023)"),(0,n.yg)("h2",{id:"transactional-database-layer"},"Transactional Database Layer"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Feature"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Release"),(0,n.yg)("th",{parentName:"tr",align:null},"Tracking"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Support for primary key-less table"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4699"},"HUDI-4699"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Efficient bootstrap and migration of existing non-Hudi dataset"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-1265"},"HUDI-1265"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Record-level index to speed up UUID-based upserts and deletes"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://cwiki.apache.org/confluence/display/HUDI/RFC-08++Record+level+indexing+mechanisms+for+Hudi+datasets"},"RFC-08"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-53"},"HUDI-53"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"1.x Storage format"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-6242"},"HUDI-6242"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Writer performance improvements"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-3249"},"HUDI-3249"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Non-blocking concurrency control"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-3187"},"HUDI-3187"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-1042"},"HUDI-1042"),", ",(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/7907"},"RFC-66"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Time Travel updates, deletes"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"General purpose support for multi-table transactions"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"A more effective HoodieMergeHandler for COW table with parquet"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/blob/f1afb1bf04abdc94a26d61dc302f36ec2bbeb15b/rfc/rfc-68/rfc-68.md"},"RFC-68"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Secondary indexes to improve query performance"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/5370"},"RFC-52"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-3907"},"HUDI-3907"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Index Function for Optimizing Query Performance"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/7235"},"RFC-63"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-512"},"HUDI-512"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Logical partitioning via indexing"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-512"},"HUDI-512"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Streaming CDC/Incremental read improvement"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-2749"},"HUDI-2749"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Supervised table service planning and execution"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/4309"},"RFC-43"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4147"},"HUDI-4147"))))),(0,n.yg)("h2",{id:"programming-apis"},"Programming APIs"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Feature"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Release"),(0,n.yg)("th",{parentName:"tr",align:null},"Tracking"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"MOR snapshot reader"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/9066"},"HUDI-6452"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"APIs/Abstractions, Record mergers"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-6243"},"HUDI-6243"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-3217"},"HUDI-3217"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"New Hudi Table Format APIs for Query Integrations"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/7080"},"RFC-64"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4141"},"HUDI-4141"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Snapshot view management"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/6576"},"RFC-61"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4677"},"HUDI-4677"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Optimized storage layout for cloud object stores"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/5113"},"RFC-60"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-3625"},"HUDI-3625"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Support of verification with multiple event_time fields"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/6382"},"RFC-59"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4569"},"HUDI-4569"))))),(0,n.yg)("h2",{id:"execution-engine-integration"},"Execution Engine Integration"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Feature"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Release"),(0,n.yg)("th",{parentName:"tr",align:null},"Tracking"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Support for Spark 3.4.0"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-6198"},"HUDI-6198"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Integrate column stats index with all query engines"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/6345"},"RFC-58"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4552"},"HUDI-4552"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Upgrade to Spark 3 as the default profile"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-3431"},"HUDI-3431"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Performance for Spark-SQL writes"),(0,n.yg)("td",{parentName:"tr",align:null},"0.14.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-6315"},"HUDI-6315"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-6376"},"HUDI-6376"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Presto/Trino queries with new format"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4394"},"HUDI-3210"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4394"},"HUDI-4394"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4552"},"HUDI-4552"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Materialized Views with incremental updates using Flink"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Explore other execution engines/runtimes (Ray, native Rust, Python)"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Spark datasource V2 read"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-4449"},"HUDI-4449"))))),(0,n.yg)("h2",{id:"platform-services"},"Platform Services"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Feature"),(0,n.yg)("th",{parentName:"tr",align:null},"Target Release"),(0,n.yg)("th",{parentName:"tr",align:null},"Tracking"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Hudi Reverse streamer"),(0,n.yg)("td",{parentName:"tr",align:null},"1.0.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/9040"},"RFC-70"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Partition TTL management"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/8062"},"RFC-65"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Diagnostic Reporter"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/6600"},"RFC-62"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Hudi integration with Snowflake"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://github.com/apache/hudi/pull/4074"},"RFC-41"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-2832"},"HUDI-2832"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Support for reliable, event based ingestion from cloud stores - GCS, Azure and the others"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-1896"},"HUDI-1896"))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},"Mutable, Transactional caching for Hudi Tables (could be accelerated based on community feedback)"),(0,n.yg)("td",{parentName:"tr",align:null},"1.1.0"),(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"https://docs.google.com/presentation/d/1QBgLw11TM2Qf1KUESofGrQDb63EuggNCpPaxc82Kldo/edit#slide=id.gf7e0551254_0_5"},"Strawman design"),", ",(0,n.yg)("a",{parentName:"td",href:"https://issues.apache.org/jira/browse/HUDI-6489"},"HUDI-6489"))))))}m.isMDXComponent=!0}}]);