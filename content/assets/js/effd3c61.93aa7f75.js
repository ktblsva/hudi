"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[92060],{95788:(e,t,n)=>{n.d(t,{Iu:()=>m,yg:()=>h});var i=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,h=d["".concat(s,".").concat(p)]||d[p]||g[p]||r;return n?i.createElement(h,l(l({ref:t},m),{},{components:n})):i.createElement(h,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},69628:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var i=n(45072),a=(n(11504),n(95788));const r={title:"Timeline",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},l=void 0,o={unversionedId:"timeline",id:"timeline",title:"Timeline",description:"At its core, Hudi maintains a timeline which is a log of all actions performed on the table at different instants of time that helps provide instantaneous views of the table,",source:"@site/docs/timeline.md",sourceDirName:".",slug:"/timeline",permalink:"/docs/next/timeline",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/timeline.md",tags:[],version:"current",frontMatter:{title:"Timeline",toc:!0,toc_min_heading_level:2,toc_max_heading_level:4},sidebar:"docs",previous:{title:"Use Cases",permalink:"/docs/next/use_cases"},next:{title:"File Layouts",permalink:"/docs/next/file_layouts"}},s=[{value:"Actions",id:"actions",children:[],level:3},{value:"States",id:"states",children:[],level:3},{value:"Active and Archived timeline",id:"active-and-archived-timeline",children:[{value:"LSM Timeline",id:"lsm-timeline",children:[],level:4}],level:3},{value:"Archival Configs",id:"archival-configs",children:[{value:"Spark write client configs",id:"spark-write-client-configs",children:[],level:4},{value:"Flink Options",id:"flink-options",children:[],level:4}],level:3}],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,i.c)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"At its core, Hudi maintains a ",(0,a.yg)("inlineCode",{parentName:"p"},"timeline")," which is a log of all actions performed on the table at different ",(0,a.yg)("inlineCode",{parentName:"p"},"instants")," of time that helps provide instantaneous views of the table,\nwhile also efficiently supporting retrieval of data in the order of arrival. A Hudi instant consists of the following components"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Instant action")," : Type of action performed on the table"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"Instant time")," : Instant time is typically a timestamp (e.g: 20190117010349), which monotonically increases in the order of action's begin time."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"state")," : current state of the instant")),(0,a.yg)("p",null,"Hudi guarantees that the actions performed on the timeline are atomic & timeline consistent based on the instant time.\nAtomicity is achieved by relying on the atomic puts to the underlying storage to move the write operations through various states in the timeline.\nThis is achieved on the underlying DFS (in the case of S3/Cloud Storage, by an atomic PUT operation) and can be observed by files of the pattern ",(0,a.yg)("inlineCode",{parentName:"p"},"<instant>.<action>.<state>")," in Hudi\u2019s timeline."),(0,a.yg)("h3",{id:"actions"},"Actions"),(0,a.yg)("p",null,"Key actions performed include"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"COMMITS")," - A commit denotes an ",(0,a.yg)("strong",{parentName:"li"},"atomic write")," of a batch of records into a table."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"CLEANS")," - Background activity that gets rid of older versions of files in the table, that are no longer needed."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"DELTA_COMMIT")," - A delta commit refers to an ",(0,a.yg)("strong",{parentName:"li"},"atomic write")," of a batch of records into a  MergeOnRead type table, where some/all of the data could be just written to delta logs."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"COMPACTION")," - Background activity to reconcile differential data structures within Hudi e.g: moving updates from row based log files to columnar formats. Internally, compaction manifests as a special commit on the timeline"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"ROLLBACK")," - Indicates that a commit/delta commit was unsuccessful & rolled back, removing any partial files produced during such a write"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"SAVEPOINT"),' - Marks certain file groups as "saved", such that cleaner will not delete them. It helps restore the table to a point on the timeline, in case of disaster/data recovery scenarios.')),(0,a.yg)("h3",{id:"states"},"States"),(0,a.yg)("p",null,"Any given instant can be\nin one of the following states"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"REQUESTED")," - Denotes an action has been scheduled, but has not initiated"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"INFLIGHT")," - Denotes that the action is currently being performed"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"COMPLETED")," - Denotes completion of an action on the timeline")),(0,a.yg)("p",null,"All the actions in requested/inflight states are stored in the active timeline as files named *\n",(0,a.yg)("em",{parentName:"p"},(0,a.yg)("em",{parentName:"em"},"<begin","_","instant","_","time>.<action","_","type>.<requested|inflight>"),"**. Completed actions are stored along with a time that\ndenotes when the action was completed, in a file named "),"\n*",(0,a.yg)("em",{parentName:"p"},"<begin","_","instant","_","time>","_","<completion","_","instant","_","time>.<action","_","type>."),"**"),(0,a.yg)("figure",null,(0,a.yg)("img",{className:"docimage",src:n(13311).c,alt:"hudi_timeline.png"})),(0,a.yg)("p",null,"Example above shows upserts happenings between 10:00 and 10:20 on a Hudi table, roughly every 5 mins, leaving commit metadata on the Hudi timeline, along\nwith other background cleaning/compactions. One key observation to make is that the commit time indicates the ",(0,a.yg)("inlineCode",{parentName:"p"},"arrival time")," of the data (10:20AM), while the actual data\norganization reflects the actual time or ",(0,a.yg)("inlineCode",{parentName:"p"},"event time"),", the data was intended for (hourly buckets from 07:00). These are two key concepts when reasoning about tradeoffs between latency and completeness of data."),(0,a.yg)("p",null,"When there is late arriving data (data intended for 9:00 arriving >1 hr late at 10:20), we can see the upsert producing new data into even older time buckets/folders.\nWith the help of the timeline, an incremental query attempting to get all new data that was committed successfully since 10:00 hours, is able to very efficiently consume\nonly the changed files without say scanning all the time buckets > 07:00."),(0,a.yg)("h3",{id:"active-and-archived-timeline"},"Active and Archived timeline"),(0,a.yg)("p",null,"Hudi divides the entire timeline into active and archived timeline. As the name suggests active timeline is consulted all\nthe time to serve metadata on valid data files and to ensure reads on the timeline does not incur unnecessary latencies\nas timeline grows, the active timeline needs to be bounded on the metadata (timeline instants) it can serve. To ensure this,\nafter certain thresholds the archival kicks in to move older timeline events to the archived timeline. In general, archival\ntimeline is never contacted for regular operations of the table and is merely used for book-keeping and debugging purposes.\nAny instants seen under \u201c.hoodie\u201d directory refers to active timeline and those archived goes into \u201c.hoodie/archived\u201d folder."),(0,a.yg)("h4",{id:"lsm-timeline"},"LSM Timeline"),(0,a.yg)("p",null,"As mentioned above, active timeline has limited log history to be fast, while archived timeline is expensive to access\nduring reads or writes, especially with high write throughput. To overcome this limitation, Hudi introduced the LSM (\nlog-structured merge) tree based timeline. Completed actions, their plans and completion metadata are stored in a more\nscalable LSM tree based archived timeline organized in an ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("em",{parentName:"strong"},"archived"))," storage location under the ",(0,a.yg)("inlineCode",{parentName:"p"},".hoodie")," metadata\npath. The new timeline format is enabled by default and going forward, we will refer to the archived timeline as LSM\ntimeline. It consists of Apache Parquet files with action instant data and bookkeeping metadata files, in the following\nmanner."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-bash"},"/.hoodie/archived/                  \n\u251c\u2500\u2500 _version_                               <-- stores the manifest version that is current\n\u251c\u2500\u2500 manifest_1                              <-- manifests store list of files in timeline\n\u251c\u2500\u2500 manifest_2                              <-- compactions, cleaning, writes produce new manifest files\n\u251c\u2500\u2500 ...                                      \n\u251c\u2500\u2500 manifest_<N>                            <-- there can be many manifest files at any given time\n\u251c\u2500\u2500 <min_time>_<max_time>_<level>.parquet   <-- files storing actual action details\n")),(0,a.yg)("p",null,"One can read more about the details of LSM timeline in Hudi 1.0 specs. To understand it better, here is an example."),(0,a.yg)("figure",null,(0,a.yg)("img",{className:"docimage",src:n(84516).c,alt:"lsm_tree.png"})),(0,a.yg)("p",null,"In the above figure, each level is a tree sorted by instant times. We can see that for a bunch of commits the metadata\nis stored in a parquet file. As and when more commits are accumulated, they get compacted and pushed down to lower level\nof the tree. Each new operation to the timeline yields a new snapshot version. The advantage of such a structure is that\nwe can keep the top level in memory, and still load the remaining levels efficiently from the disk if we need to walk\nback longer history. The LSM timeline compaction frequency is controlled by",(0,a.yg)("inlineCode",{parentName:"p"},"hoodie.timeline.compaction.batch.size")," i.e.\nfor every ",(0,a.yg)("em",{parentName:"p"},"N")," parquet files in the current level, they are merged and flush as a compacted file in the next level."),(0,a.yg)("h3",{id:"archival-configs"},"Archival Configs"),(0,a.yg)("p",null,"Basic configurations that control archival."),(0,a.yg)("h4",{id:"spark-write-client-configs"},"Spark write client configs"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hoodie.keep.max.commits"),(0,a.yg)("td",{parentName:"tr",align:null},"30 (Optional)"),(0,a.yg)("td",{parentName:"tr",align:null},"Archiving service moves older entries from timeline into an archived log after each write, to keep the metadata overhead constant, even as the table size grows. This config controls the maximum number of instants to retain in the active timeline.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hoodie.keep.min.commits"),(0,a.yg)("td",{parentName:"tr",align:null},"20 (Optional)"),(0,a.yg)("td",{parentName:"tr",align:null},"Similar to hoodie.keep.max.commits, but controls the minimum number of instants to retain in the active timeline.")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hoodie.timeline.compaction.batch.size"),(0,a.yg)("td",{parentName:"tr",align:null},"10 (Optional)"),(0,a.yg)("td",{parentName:"tr",align:null},"Controls the number of parquet files to compact in a single compaction run at the current level of the LSM tree.")))),(0,a.yg)("p",null,"For more advanced configs refer ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Archival-Configs-advanced-configs"},"here"),"."),(0,a.yg)("h4",{id:"flink-options"},"Flink Options"),(0,a.yg)("p",null,"Flink jobs using the SQL can be configured through the options in WITH clause. The actual datasource level configs are listed below."),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Config Name"),(0,a.yg)("th",{parentName:"tr",align:null},"Default"),(0,a.yg)("th",{parentName:"tr",align:null},"Description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"archive.max_commits"),(0,a.yg)("td",{parentName:"tr",align:null},"50 (Optional)"),(0,a.yg)("td",{parentName:"tr",align:null},"Max number of commits to keep before archiving older commits into a sequential log, default 50",(0,a.yg)("br",null),(0,a.yg)("br",null)," ",(0,a.yg)("inlineCode",{parentName:"td"},"Config Param: ARCHIVE_MAX_COMMITS"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"archive.min_commits"),(0,a.yg)("td",{parentName:"tr",align:null},"40 (Optional)"),(0,a.yg)("td",{parentName:"tr",align:null},"Min number of commits to keep before archiving older commits into a sequential log, default 40",(0,a.yg)("br",null),(0,a.yg)("br",null)," ",(0,a.yg)("inlineCode",{parentName:"td"},"Config Param: ARCHIVE_MIN_COMMITS"))),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"hoodie.timeline.compaction.batch.size"),(0,a.yg)("td",{parentName:"tr",align:null},"10 (Optional)"),(0,a.yg)("td",{parentName:"tr",align:null},"Controls the number of parquet files to compact in a single compaction run at the current level of the LSM tree.")))),(0,a.yg)("p",null,"Refer ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations#Flink-Options"},"here")," for more details."))}d.isMDXComponent=!0},13311:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/hudi_timeline-bf5d8c5e59180434796d82af2b783e6c.png"},84516:(e,t,n)=>{n.d(t,{c:()=>i});const i=n.p+"assets/images/lsm_tree-0a069798a1196c1c71330abcb7ff3581.png"}}]);