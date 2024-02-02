"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[59800],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>g});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(45072),a=(r(11504),r(95788));const i={title:"Adding support for Virtual Keys in Hudi",excerpt:"Supporting Virtual keys in Hudi for reducing storage overhead",author:"shivnarayan",category:"blog",tags:["design","metadata","apache hudi"]},o=void 0,l={permalink:"/blog/2021/08/18/virtual-keys",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-08-18-virtual-keys.md",source:"@site/blog/2021-08-18-virtual-keys.md",title:"Adding support for Virtual Keys in Hudi",description:"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.",date:"2021-08-18T00:00:00.000Z",formattedDate:"August 18, 2021",tags:[{label:"design",permalink:"/blog/tags/design"},{label:"metadata",permalink:"/blog/tags/metadata"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:4.95,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Improving Marker Mechanism in Apache Hudi",permalink:"/blog/2021/08/18/improving-marker-mechanism"},nextItem:{title:"Schema evolution with DeltaStreamer using KafkaSource",permalink:"/blog/2021/08/16/kafka-custom-deserializer"}},s={authorsImageUrls:[void 0]},c=[],p={toc:c},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.c)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"Apache Hudi helps you build and manage data lakes with different table types, config knobs to cater to everyone's need.\nHudi adds per record metadata fields like ",(0,a.yg)("inlineCode",{parentName:"p"},"_hoodie_record_key"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"_hoodie_partition path"),", ",(0,a.yg)("inlineCode",{parentName:"p"},"_hoodie_commit_time")," which serves multiple purposes.\nThey assist in avoiding re-computing the record key, partition path during merges, compaction and other table operations\nand also assists in supporting ",(0,a.yg)("a",{parentName:"p",href:"/blog/2021/07/21/streaming-data-lake-platform#readers"},"record-level")," incremental queries (in comparison to other table formats, that merely track files).\nIn addition, it ensures data quality by ensuring unique key constraints are enforced even if the key field changes for a given table, during its lifetime.\nBut one of the repeated asks from the community is to leverage existing fields and not to add additional meta fields, for simple use-cases where such benefits are not desired or key changes are very rare."))}d.isMDXComponent=!0}}]);