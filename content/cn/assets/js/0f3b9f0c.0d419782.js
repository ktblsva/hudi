"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[93136],{95788:(e,i,t)=>{t.d(i,{Iu:()=>u,yg:()=>p});var n=t(11504);function r(e,i,t){return i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t,e}function o(e,i){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);i&&(n=n.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var i=1;i<arguments.length;i++){var t=null!=arguments[i]?arguments[i]:{};i%2?o(Object(t),!0).forEach((function(i){r(e,i,t[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))}))}return e}function s(e,i){if(null==e)return{};var t,n,r=function(e,i){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||(r[t]=e[t]);return r}(e,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],i.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),c=function(e){var i=n.useContext(l),t=i;return e&&(t="function"==typeof e?e(i):a(a({},i),e)),t},u=function(e){var i=c(e.components);return n.createElement(l.Provider,{value:i},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var i=e.children;return n.createElement(n.Fragment,{},i)}},g=n.forwardRef((function(e,i){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),g=r,p=d["".concat(l,".").concat(g)]||d[g]||f[g]||o;return t?n.createElement(p,a(a({ref:i},u),{},{components:t})):n.createElement(p,a({ref:i},u))}));function p(e,i){var t=arguments,r=i&&i.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=g;var s={};for(var l in i)hasOwnProperty.call(i,l)&&(s[l]=i[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},36644:(e,i,t)=>{t.r(i),t.d(i,{contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(45072),r=(t(11504),t(95788));const o={title:"File Sizing",toc:!0},a=void 0,s={unversionedId:"file_sizing",id:"version-0.10.0/file_sizing",title:"File Sizing",description:"This doc will show you how Apache Hudi overcomes the dreaded small files problem. A key design decision in Hudi was to",source:"@site/versioned_docs/version-0.10.0/file_sizing.md",sourceDirName:".",slug:"/file_sizing",permalink:"/cn/docs/0.10.0/file_sizing",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/file_sizing.md",tags:[],version:"0.10.0",frontMatter:{title:"File Sizing",toc:!0},sidebar:"version-0.10.0/docs",previous:{title:"Marker Mechanism",permalink:"/cn/docs/0.10.0/markers"},next:{title:"Exporter",permalink:"/cn/docs/0.10.0/snapshot_exporter"}},l=[{value:"Auto-Size During ingestion",id:"auto-size-during-ingestion",children:[{value:"For Copy-On-Write",id:"for-copy-on-write",children:[],level:3},{value:"For Merge-On-Read",id:"for-merge-on-read",children:[],level:3}],level:2},{value:"Auto-Size With Clustering",id:"auto-size-with-clustering",children:[],level:2}],c={toc:l},u="wrapper";function d(e){let{components:i,...t}=e;return(0,r.yg)(u,(0,n.c)({},c,t,{components:i,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This doc will show you how Apache Hudi overcomes the dreaded small files problem. A key design decision in Hudi was to\navoid creating small files in the first place and always write properly sized files.\nThere are 2 ways to manage small files in Hudi and below will describe the advantages and trade-offs of each."),(0,r.yg)("h2",{id:"auto-size-during-ingestion"},"Auto-Size During ingestion"),(0,r.yg)("p",null,"You can automatically manage size of files during ingestion. This solution adds a little latency during ingestion, but\nit ensures that read queries are always efficient as soon as a write is committed. If you don't\nmanage file sizing as you write and instead try to periodically run a file-sizing clean-up, your queries will be slow until that resize cleanup is periodically performed."),(0,r.yg)("p",null,"(Note: ",(0,r.yg)("a",{parentName:"p",href:"/docs/write_operations"},"bulk_insert")," write operation does not provide auto-sizing during ingestion)"),(0,r.yg)("h3",{id:"for-copy-on-write"},"For Copy-On-Write"),(0,r.yg)("p",null,"This is as simple as configuring the ",(0,r.yg)("a",{parentName:"p",href:"/docs/configurations#hoodieparquetmaxfilesize"},"maximum size for a base/parquet file"),"\nand the ",(0,r.yg)("a",{parentName:"p",href:"/docs/configurations#hoodieparquetsmallfilelimit"},"soft limit")," below which a file should\nbe considered a small file. For the initial bootstrap of a Hudi table, tuning record size estimate is also important to\nensure sufficient records are bin-packed in a parquet file. For subsequent writes, Hudi automatically uses average\nrecord size based on previous commit. Hudi will try to add enough records to a small file at write time to get it to the\nconfigured maximum limit. For e.g , with ",(0,r.yg)("inlineCode",{parentName:"p"},"compactionSmallFileSize=100MB")," and limitFileSize=120MB, Hudi will pick all\nfiles < 100MB and try to get them upto 120MB."),(0,r.yg)("h3",{id:"for-merge-on-read"},"For Merge-On-Read"),(0,r.yg)("p",null,"MergeOnRead works differently for different INDEX choices so there are few more configs to set:  "),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Indexes with ",(0,r.yg)("strong",{parentName:"li"},"canIndexLogFiles = true")," : Inserts of new data go directly to log files. In this case, you can\nconfigure the ",(0,r.yg)("a",{parentName:"li",href:"/docs/configurations#hoodielogfilemaxsize"},"maximum log size")," and a\n",(0,r.yg)("a",{parentName:"li",href:"/docs/configurations#hoodielogfiletoparquetcompressionratio"},"factor")," that denotes reduction in\nsize when data moves from avro to parquet files."),(0,r.yg)("li",{parentName:"ul"},"Indexes with ",(0,r.yg)("strong",{parentName:"li"},"canIndexLogFiles = false")," : Inserts of new data go only to parquet files. In this case, the\nsame configurations as above for the COPY_ON_WRITE case applies.")),(0,r.yg)("p",null,"NOTE : In either case, small files will be auto sized only if there is no PENDING compaction or associated log file for\nthat particular file slice. For example, for case 1: If you had a log file and a compaction C1 was scheduled to convert\nthat log file to parquet, no more inserts can go into that log file. For case 2: If you had a parquet file and an update\nended up creating an associated delta log file, no more inserts can go into that parquet file. Only after the compaction\nhas been performed and there are NO log files associated with the base parquet file, can new inserts be sent to auto size that parquet file."),(0,r.yg)("h2",{id:"auto-size-with-clustering"},"Auto-Size With Clustering"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"/docs/clustering"},"Clustering"))," is a feature in Hudi to group\nsmall files into larger ones either synchronously or asynchronously. Since first solution of auto-sizing small files has\na tradeoff on ingestion speed (since the small files are sized during ingestion), if your use-case is very sensitive to\ningestion latency where you don't want to compromise on ingestion speed which may end up creating a lot of small files,\nclustering comes to the rescue. Clustering can be scheduled through the ingestion job and an asynchronus job can stitch\nsmall files together in the background to generate larger files. NOTE that during this, ingestion can continue to run concurrently."),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Please note that Hudi always creates immutable files on disk. To be able to do auto-sizing or clustering, Hudi will\nalways create a newer version of the smaller file, resulting in 2 versions of the same file.\nThe ",(0,r.yg)("a",{parentName:"em",href:"/docs/hoodie_cleaner"},"cleaner service")," will later kick in and delete the older version small file and keep the latest one.")))}d.isMDXComponent=!0}}]);