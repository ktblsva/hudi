"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[41748],{95788:(e,t,r)=>{r.d(t,{Iu:()=>u,yg:()=>y});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,y=p["".concat(s,".").concat(d)]||p[d]||f[d]||i;return r?n.createElement(y,o(o({ref:t},u),{},{components:r})):n.createElement(y,o({ref:t},u))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50956:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(45072),a=(r(11504),r(95788));const i={title:"File Layouts",toc:!1},o=void 0,l={unversionedId:"file_layouts",id:"file_layouts",title:"File Layouts",description:"The following describes the general file layout structure for Apache Hudi. Please refer the * tech spec * for a more detailed description of the file layouts.",source:"@site/docs/file_layouts.md",sourceDirName:".",slug:"/file_layouts",permalink:"/docs/next/file_layouts",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/file_layouts.md",tags:[],version:"current",frontMatter:{title:"File Layouts",toc:!1},sidebar:"docs",previous:{title:"Timeline",permalink:"/docs/next/timeline"},next:{title:"Table & Query Types",permalink:"/docs/next/table_types"}},s=[{value:"Configs",id:"configs",children:[],level:3}],c={toc:s},u="wrapper";function p(e){let{components:t,...i}=e;return(0,a.yg)(u,(0,n.c)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"The following describes the general file layout structure for Apache Hudi. Please refer the ",(0,a.yg)("strong",{parentName:"p"}," ",(0,a.yg)("a",{parentName:"strong",href:"https://hudi.apache.org/tech-specs#file-layout-hierarchy"},"tech spec")," ")," for a more detailed description of the file layouts."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Hudi organizes data tables into a directory structure under a base path on a distributed file system"),(0,a.yg)("li",{parentName:"ul"},"Tables are broken up into partitions"),(0,a.yg)("li",{parentName:"ul"},"Within each partition, files are organized into file groups, uniquely identified by a file ID"),(0,a.yg)("li",{parentName:"ul"},"Each file group contains several file slices "),(0,a.yg)("li",{parentName:"ul"},"Each slice contains a base file (",(0,a.yg)("em",{parentName:"li"},".parquet/"),".orc) (defined by the config - ",(0,a.yg)("a",{parentName:"li",href:"https://hudi.apache.org/docs/next/configurations/#hoodietablebasefileformat"},"hoodie.table.base.file.format")," ) produced at a certain commit/compaction instant time, along with set of log files (",(0,a.yg)("em",{parentName:"li"},".log."),") that contain inserts/updates to the base file since the base file was produced. ")),(0,a.yg)("p",null,"Hudi adopts Multiversion Concurrency Control (MVCC), where ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/compaction"},"compaction")," action merges logs and base files to produce new\nfile slices and ",(0,a.yg)("a",{parentName:"p",href:"/docs/next/hoodie_cleaner"},"cleaning")," action gets rid of unused/older file slices to reclaim space on the file system."),(0,a.yg)("p",null,(0,a.yg)("img",{alt:"Partition On HDFS",src:r(29576).c})),(0,a.yg)("h3",{id:"configs"},"Configs"),(0,a.yg)("p",null,"Please refer ",(0,a.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/next/configurations/#Layout-Configs"},"here")," for additional configs that control storage layout and data distribution, which defines how the files are organized within a table."))}p.isMDXComponent=!0},29576:(e,t,r)=>{r.d(t,{c:()=>n});const n=r.p+"assets/images/MOR_new-aa806492cc5034a48039f9d8a392b9d8.png"}}]);