"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8848],{95788:(e,t,r)=>{r.d(t,{Iu:()=>p,yg:()=>f});var n=r(11504);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),g=a,f=u["".concat(s,".").concat(g)]||u[g]||m[g]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},31444:(e,t,r)=>{r.d(t,{c:()=>o});var n=r(11504),a=r(93664);function o(e){let{children:t,url:o}=e;return(0,a.c)()&&(r.g.window.location.href=o),n.createElement("span",null,t,"or click ",n.createElement("a",{href:o},"here"))}},41952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(45072),a=(r(11504),r(95788)),o=r(31444);const i={title:"Time travel operations in Hopsworks Feature Store",category:"blog",image:"/assets/images/blog/2021-02-24-featurestore_incremental_pull.png",tags:["use-case","incremental processing","feature store","time travel query","hopsworks"]},l=void 0,s={permalink:"/blog/2021/02/24/Time-travel-operations-in-Hopsworks-Feature-Store",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-02-24-Time-travel-operations-in-Hopsworks-Feature-Store.mdx",source:"@site/blog/2021-02-24-Time-travel-operations-in-Hopsworks-Feature-Store.mdx",title:"Time travel operations in Hopsworks Feature Store",description:"Redirecting... please wait!!",date:"2021-02-24T00:00:00.000Z",formattedDate:"February 24, 2021",tags:[{label:"use-case",permalink:"/blog/tags/use-case"},{label:"incremental processing",permalink:"/blog/tags/incremental-processing"},{label:"feature store",permalink:"/blog/tags/feature-store"},{label:"time travel query",permalink:"/blog/tags/time-travel-query"},{label:"hopsworks",permalink:"/blog/tags/hopsworks"}],readingTime:.045,truncated:!1,authors:[],prevItem:{title:"Data Lakehouse: Building the Next Generation of Data Lakes using Apache Hudi",permalink:"/blog/2021/03/01/Data-Lakehouse-Building-the-Next-Generation-of-Data-Lakes-using-Apache-Hudi"},nextItem:{title:"Apache Hudi Key Generators",permalink:"/blog/2021/02/13/hudi-key-generators"}},c={authorsImageUrls:[]},p=[],u={toc:p},m="wrapper";function g(e){let{components:t,...r}=e;return(0,a.yg)(m,(0,n.c)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.c,{url:"https://examples.hopsworks.ai/master/featurestore/hsfs/time_travel/time_travel_scala/",mdxType:"Redirect"},"Redirecting... please wait!! "))}g.isMDXComponent=!0}}]);