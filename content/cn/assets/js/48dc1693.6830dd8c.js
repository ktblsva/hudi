"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[1040],{95788:(e,r,t)=>{t.d(r,{Iu:()=>d,yg:()=>f});var n=t(11504);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return t?n.createElement(f,l(l({ref:r},d),{},{components:t})):n.createElement(f,l({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},31444:(e,r,t)=>{t.d(r,{c:()=>o});var n=t(11504),a=t(93664);function o(e){let{children:r,url:o}=e;return(0,a.c)()&&(t.g.window.location.href=o),n.createElement("span",null,r,"or click ",n.createElement("a",{href:o},"here"))}},36248:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=t(45072),a=(t(11504),t(95788)),o=t(31444);const l={title:"UPSERT Performance Evaluation of Hudi 0.14 and Spark 3.4.1: Record Level Index vs. Global Bloom & Global Simple Indexes",excerpt:"Record Level Index Performance",author:"Soumil Shah",category:"blog",image:"/assets/images/blog/2023-10-29-UPSERT-Performance-Evaluation-of-Hudi-0-14-and-Spark-3-4-1-Record-Level-Index-Global-Bloom-Global-Simple-Indexes.png",tags:["linkedin","apache hudi","querying","indexing","performance"]},i=void 0,c={permalink:"/cn/blog/2023/10/29/UPSERT-Performance-Evaluation-of-Hudi-0-14-and-Spark-3-4-1-Record-Level-Index-Global-Bloom-Global-Simple-Indexes",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-10-29-UPSERT-Performance-Evaluation-of-Hudi-0-14-and-Spark-3-4-1-Record-Level-Index-Global-Bloom-Global-Simple-Indexes.mdx",source:"@site/blog/2023-10-29-UPSERT-Performance-Evaluation-of-Hudi-0-14-and-Spark-3-4-1-Record-Level-Index-Global-Bloom-Global-Simple-Indexes.mdx",title:"UPSERT Performance Evaluation of Hudi 0.14 and Spark 3.4.1: Record Level Index vs. Global Bloom & Global Simple Indexes",description:"Redirecting... please wait!!",date:"2023-10-29T00:00:00.000Z",formattedDate:"October 29, 2023",tags:[{label:"linkedin",permalink:"/cn/blog/tags/linkedin"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"},{label:"querying",permalink:"/cn/blog/tags/querying"},{label:"indexing",permalink:"/cn/blog/tags/indexing"},{label:"performance",permalink:"/cn/blog/tags/performance"}],readingTime:.045,truncated:!1,authors:[{name:"Soumil Shah"}],prevItem:{title:"Record Level Index: Hudi's blazing fast indexing for large-scale datasets",permalink:"/cn/blog/2023/11/01/record-level-index"},nextItem:{title:"Tipico Facilitates Faster Data Access with a Modern Data Strategy on AWS",permalink:"/cn/blog/2023/10/22/Tipico-Facilitates-Faster-Data-Access-with-a-Modern-Data-Strategy-on-AWS"}},p={authorsImageUrls:[void 0]},d=[],u={toc:d},s="wrapper";function m(e){let{components:r,...t}=e;return(0,a.yg)(s,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)(o.c,{url:"https://www.linkedin.com/pulse/upsert-performance-evaluation-hudi-014-spark-341-record-soumil-shah-oupre/?utm_source=share&utm_medium=member_ios&utm_campaign=share_via",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);