"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37656],{95788:(e,a,t)=>{t.d(a,{Iu:()=>u,yg:()=>h});var n=t(11504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},u=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=i,h=d["".concat(s,".").concat(p)]||d[p]||g[p]||r;return t?n.createElement(h,o(o({ref:a},u),{},{components:t})):n.createElement(h,o({ref:a},u))}));function h(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},80332:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=t(45072),i=(t(11504),t(95788));const r={title:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",excerpt:"How T3Go\u2019s high-performance data lake using Apache Hudi and Alluxio shortened the time for data ingestion into the lake by up to a factor of 2. Data analysts using Presto, Hudi, and Alluxio in conjunction to query data on the lake saw queries speed up by 10 times faster.",author:"t3go",category:"blog",image:"/assets/images/blog/2020-12-01-t3go-architecture.png",tags:["use-case","near real-time analytics","incremental processing","caching","apache hudi"]},o=void 0,l={permalink:"/cn/blog/2020/12/01/high-perf-data-lake-with-hudi-and-alluxio-t3go",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2020-12-01-high-perf-data-lake-with-hudi-and-alluxio-t3go.md",source:"@site/blog/2020-12-01-high-perf-data-lake-with-hudi-and-alluxio-t3go.md",title:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",description:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",date:"2020-12-01T00:00:00.000Z",formattedDate:"December 1, 2020",tags:[{label:"use-case",permalink:"/cn/blog/tags/use-case"},{label:"near real-time analytics",permalink:"/cn/blog/tags/near-real-time-analytics"},{label:"incremental processing",permalink:"/cn/blog/tags/incremental-processing"},{label:"caching",permalink:"/cn/blog/tags/caching"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:7.975,truncated:!0,authors:[{name:"t3go"}],prevItem:{title:"Optimize Data lake layout using Clustering in Apache Hudi",permalink:"/cn/blog/2021/01/27/hudi-clustering-intro"},nextItem:{title:"Can Big Data Solutions Be Affordable?",permalink:"/cn/blog/2020/11/29/Can-Big-Data-Solutions-Be-Affordable"}},s={authorsImageUrls:[void 0]},c=[{value:"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go",id:"building-high-performance-data-lake-using-apache-hudi-and-alluxio-at-t3go",children:[],level:2}],u={toc:c},d="wrapper";function g(e){let{components:a,...t}=e;return(0,i.yg)(d,(0,n.c)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"building-high-performance-data-lake-using-apache-hudi-and-alluxio-at-t3go"},"Building High-Performance Data Lake Using Apache Hudi and Alluxio at T3Go"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://www.t3go.cn/"},"T3Go"),"  is China\u2019s first platform for smart travel based on the Internet of Vehicles. In this article, Trevor Zhang and Vino Yang from T3Go describe the evolution of their data lake architecture, built on cloud-native or open-source technologies including Alibaba OSS, Apache Hudi, and Alluxio. Today, their data lake stores petabytes of data, supporting hundreds of pipelines and tens of thousands of tasks daily. It is essential for business units at T3Go including Data Warehouse, Internet of Vehicles, Order Dispatching, Machine Learning, and self-service query analysis."),(0,i.yg)("p",null,"In this blog, you will see how we slashed data ingestion time by half using Hudi and Alluxio. Furthermore, data analysts using Presto, Hudi, and Alluxio saw the queries speed up by 10 times. We built our data lake based on data orchestration for multiple stages of our data pipeline, including ingestion and analytics."))}g.isMDXComponent=!0}}]);