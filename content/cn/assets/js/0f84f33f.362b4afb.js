"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[40486],{95788:(e,r,t)=>{t.d(r,{Iu:()=>m,yg:()=>u});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),c=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=c(e.components);return a.createElement(l.Provider,{value:r},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),p=n,u=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return t?a.createElement(u,o(o({ref:r},m),{},{components:t})):a.createElement(u,o({ref:r},m))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[d]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},47500:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(45072),n=(t(11504),t(95788));const i={title:"Marker Mechanism",toc:!0},o=void 0,s={unversionedId:"markers",id:"version-0.12.3/markers",title:"Marker Mechanism",description:"Purpose of Markers",source:"@site/versioned_docs/version-0.12.3/markers.md",sourceDirName:".",slug:"/markers",permalink:"/cn/docs/0.12.3/markers",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/markers.md",tags:[],version:"0.12.3",frontMatter:{title:"Marker Mechanism",toc:!0},sidebar:"docs",previous:{title:"Transformers",permalink:"/cn/docs/0.12.3/transforms"},next:{title:"File Sizing",permalink:"/cn/docs/0.12.3/file_sizing"}},l=[{value:"Purpose of Markers",id:"purpose-of-markers",children:[],level:2},{value:"Marker structure",id:"marker-structure",children:[],level:2},{value:"Marker Writing Options",id:"marker-writing-options",children:[{value:"Direct Write Markers",id:"direct-write-markers",children:[],level:3},{value:"Timeline Server Markers (Default)",id:"timeline-server-markers-default",children:[],level:3}],level:2},{value:"Marker Configuration Parameters",id:"marker-configuration-parameters",children:[],level:2}],c={toc:l},m="wrapper";function d(e){let{components:r,...i}=e;return(0,n.yg)(m,(0,a.c)({},c,i,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"purpose-of-markers"},"Purpose of Markers"),(0,n.yg)("p",null,"A write operation can fail before it completes, leaving partial or corrupt data files on storage. Markers are used to track\nand cleanup any partial or failed write operations. As a write operation begins, a marker is created indicating\nthat a file write is in progress. When the write commit succeeds, the marker is deleted. If a write operation fails part\nway through, a marker is left behind which indicates that the file is incomplete. Two important operations that use markers include: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Removing duplicate/partial data files"),": ",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"In Spark, the Hudi write client delegates the data file writing to multiple executors. One executor can fail the task,\nleaving partial data files written, and Spark retries the task in this case until it succeeds. "),(0,n.yg)("li",{parentName:"ul"},"When speculative execution is enabled, there can also be multiple successful attempts at writing out the same data\ninto different files, only one of which is finally handed to the Spark driver process for committing.\nThe markers help efficiently identify the partial data files written, which contain duplicate data compared to the data\nfiles written by the successful trial later, and these duplicate data files are cleaned up when the commit is finalized."))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Rolling back failed commits"),": If a write operation fails, the next write client will roll back the failed commit before proceeding with the new write. The rollback is done with the help of markers to identify the data files written as part of the failed commit.")),(0,n.yg)("p",null,"If we did not have markers to track the per-commit data files, we would have to list all files in the file system,\ncorrelate that with the files seen in timeline and then delete the ones that belong to partial write failures.\nAs you could imagine, this would be very costly in a very large installation of a datalake."),(0,n.yg)("h2",{id:"marker-structure"},"Marker structure"),(0,n.yg)("p",null,"Each marker entry is composed of three parts, the data file name,\nthe marker extension (",(0,n.yg)("inlineCode",{parentName:"p"},".marker"),"), and the I/O operation created the file (",(0,n.yg)("inlineCode",{parentName:"p"},"CREATE")," - inserts, ",(0,n.yg)("inlineCode",{parentName:"p"},"MERGE")," - updates/deletes,\nor ",(0,n.yg)("inlineCode",{parentName:"p"},"APPEND")," - either). For example, the marker ",(0,n.yg)("inlineCode",{parentName:"p"},"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet.marker.CREATE")," indicates\nthat the corresponding data file is ",(0,n.yg)("inlineCode",{parentName:"p"},"91245ce3-bb82-4f9f-969e-343364159174-0_140-579-0_20210820173605.parquet")," and the I/O type is ",(0,n.yg)("inlineCode",{parentName:"p"},"CREATE"),"."),(0,n.yg)("h2",{id:"marker-writing-options"},"Marker Writing Options"),(0,n.yg)("p",null,"There are two ways to write Markers: "),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Directly writing markers to storage, which is a legacy configuration."),(0,n.yg)("li",{parentName:"ul"},"Writing markers to the Timeline Server which batches marker requests before writing them to storage (Default). This option improves write performance of large files as described below.")),(0,n.yg)("h3",{id:"direct-write-markers"},"Direct Write Markers"),(0,n.yg)("p",null,"Directly writing to storage creates a new marker file corresponding to each data file, with the marker filename as described above.\nThe marker file does not have any content, i.e., empty. Each marker file is written to storage in the same directory\nhierarchy, i.e., commit instant and partition path, under a temporary folder ",(0,n.yg)("inlineCode",{parentName:"p"},".hoodie/.temp")," under the base path of the Hudi table.\nFor example, the figure below shows one example of the marker files created and the corresponding data files when writing\ndata to the Hudi table.  When getting or deleting all the marker file paths, the mechanism first lists all the paths\nunder the temporary folder, ",(0,n.yg)("inlineCode",{parentName:"p"},".hoodie/.temp/<commit_instant>"),", and then does the operation."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"An example of marker and data files in direct marker file mechanism",src:t(30436).c})),(0,n.yg)("p",null,"While it's much efficient over scanning the entire table for uncommitted data files, as the number of data files to write\nincreases, so does the number of marker files to create. For large writes which need to write significant number of data\nfiles, e.g., 10K or more, this can create performance bottlenecks for cloud storage such as AWS S3. In AWS S3, each\nfile create and delete call triggers an HTTP request and there is ",(0,n.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/optimizing-performance.html"},"rate-limiting"),"\non how many requests can be processed per second per prefix in a bucket. When the number of data files to write concurrently\nand the number of marker files is huge, the marker file operations could take up non-trivial time during the write operation,\nsometimes on the order of a few minutes or more. "),(0,n.yg)("h3",{id:"timeline-server-markers-default"},"Timeline Server Markers (Default)"),(0,n.yg)("p",null,"To address the performance bottleneck due to rate-limiting of AWS S3 explained above, we introduce a new marker mechanism\nleveraging the timeline server, which optimizes the marker-related latency for storage with non-trivial file I/O latency.\nIn the diagram below you can see the timeline-server-based marker mechanism delegates the marker creation and other marker-related\noperations from individual executors to the timeline server for centralized processing. The timeline server batches the\nmarker creation requests and writes the markers to a bounded set of files in the file system at configurable batch intervals (default 50ms).\nIn this way, the number of actual file operations and latency related to markers can be significantly reduced even with\na huge number of data files, leading to improved performance of large writes."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Timeline-server-based marker mechanism",src:t(41824).c})),(0,n.yg)("p",null,"Each marker creation request is handled asynchronously in the Javalin timeline server and queued before processing.\nFor every batch interval, the timeline server pulls the pending marker creation requests from the queue and\nwrites all markers to the next file in a round robin fashion. Inside the timeline server, such batch processing is\nmulti-threaded, designed and implemented to guarantee consistency and correctness. Both the batch interval and the batch\nconcurrency can be configured through the write options."),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"Batched processing of marker creation requests",src:t(77916).c})),(0,n.yg)("p",null,"Note that the worker thread always checks whether the marker has already been created by comparing the marker name from\nthe request with the memory copy of all markers maintained at the timeline server. The underlying files storing the\nmarkers are only read upon the first marker request (lazy loading). The responses of requests are only sent back once the\nnew markers are flushed to the files, so that in the case of the timeline server failure, the timeline server can recover\nthe already created markers. These ensure consistency between storage and the in-memory copy, and improve the performance\nof processing marker requests."),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"NOTE:")," Timeline based markers are not yet supported for HDFS, however, users may barely notice performance challenges\nwith direct markers because the file system metadata is efficiently cached in memory and doesn't face the same rate-limiting as S3."),(0,n.yg)("h2",{id:"marker-configuration-parameters"},"Marker Configuration Parameters"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Property Name"),(0,n.yg)("th",{parentName:"tr",align:null},"Default"),(0,n.yg)("th",{parentName:"tr",align:"center"},"Meaning"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"hoodie.write.markers.type")),(0,n.yg)("td",{parentName:"tr",align:null},"timeline_server_based"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Marker type to use.  Two modes are supported: (1) ",(0,n.yg)("inlineCode",{parentName:"td"},"direct"),": individual marker file corresponding to each data file is directly created by the executor; (2) ",(0,n.yg)("inlineCode",{parentName:"td"},"timeline_server_based"),": marker operations are all handled at the timeline service which serves as a proxy.  New marker entries are batch processed and stored in a limited number of underlying files for efficiency.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"hoodie.markers.timeline_server_based.batch.num_threads")),(0,n.yg)("td",{parentName:"tr",align:null},"20"),(0,n.yg)("td",{parentName:"tr",align:"center"},"Number of threads to use for batch processing marker creation requests at the timeline server.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("inlineCode",{parentName:"td"},"hoodie.markers.timeline_server_based.batch.interval_ms")),(0,n.yg)("td",{parentName:"tr",align:null},"50"),(0,n.yg)("td",{parentName:"tr",align:"center"},"The batch interval in milliseconds for marker creation batch processing.")))))}d.isMDXComponent=!0},77916:(e,r,t)=>{t.d(r,{c:()=>a});const a=t.p+"assets/images/batched-marker-creation-e8455c544f3b11ceed810b663df59f7f.png"},30436:(e,r,t)=>{t.d(r,{c:()=>a});const a=t.p+"assets/images/direct-marker-file-mechanism-b97b82f80430598f1d6a9b96521bb1a0.png"},41824:(e,r,t)=>{t.d(r,{c:()=>a});const a=t.p+"assets/images/timeline-server-based-marker-mechanism-11d616800a7a241382c8a4ed647515a6.png"}}]);