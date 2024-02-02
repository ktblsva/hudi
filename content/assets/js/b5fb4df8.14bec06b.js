"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[43144],{95788:(e,t,r)=>{r.d(t,{Iu:()=>l,yg:()=>f});var a=r(11504);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(f,i(i({ref:t},l),{},{components:r})):a.createElement(f,i({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:n,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(45072),n=(r(11504),r(95788));const o={title:"Export Hudi datasets as a copy or as different formats",excerpt:"Learn how to copy or export HUDI dataset in various formats.",author:"rxu",category:"blog",tags:["how-to","snapshot exporter","apache hudi"]},i=void 0,p={permalink:"/blog/2020/03/22/exporting-hudi-datasets",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-03-22-exporting-hudi-datasets.md",source:"@site/blog/2020-03-22-exporting-hudi-datasets.md",title:"Export Hudi datasets as a copy or as different formats",description:"Copy to Hudi dataset",date:"2020-03-22T00:00:00.000Z",formattedDate:"March 22, 2020",tags:[{label:"how-to",permalink:"/blog/tags/how-to"},{label:"snapshot exporter",permalink:"/blog/tags/snapshot-exporter"},{label:"apache hudi",permalink:"/blog/tags/apache-hudi"}],readingTime:1.695,truncated:!0,authors:[{name:"rxu"}],prevItem:{title:"Apache Hudi Support on Apache Zeppelin",permalink:"/blog/2020/04/27/apache-hudi-apache-zepplin"},nextItem:{title:"Change Capture Using AWS Database Migration Service and Hudi",permalink:"/blog/2020/01/20/change-capture-using-aws"}},c={authorsImageUrls:[void 0]},s=[{value:"Copy to Hudi dataset",id:"copy-to-hudi-dataset",children:[],level:3}],l={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.yg)(u,(0,a.c)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h3",{id:"copy-to-hudi-dataset"},"Copy to Hudi dataset"),(0,n.yg)("p",null,"Similar to the existing  ",(0,n.yg)("inlineCode",{parentName:"p"},"HoodieSnapshotCopier"),", the Exporter scans the source dataset and then makes a copy of it to the target output path."))}d.isMDXComponent=!0}}]);