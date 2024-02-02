"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[14072],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>d});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||g[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31444:(e,t,n)=>{n.d(t,{c:()=>o});var r=n(11504),a=n(93664);function o(e){let{children:t,url:o}=e;return(0,a.c)()&&(n.g.window.location.href=o),r.createElement("span",null,t,"or click ",r.createElement("a",{href:o},"here"))}},83676:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(45072),a=(n(11504),n(95788)),o=n(31444);const i={title:"Ingesting data to Apache Hudi using Spark sql",authors:[{name:"Sivabalan Narayanan"}],category:"blog",tags:["how-to","spark-sql","medium"]},c=void 0,l={permalink:"/cn/blog/2023/05/12/ingesting-data-to-apache-hudi-using-spark-sql",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-05-12-ingesting-data-to-apache-hudi-using-spark-sql.mdx",source:"@site/blog/2023-05-12-ingesting-data-to-apache-hudi-using-spark-sql.mdx",title:"Ingesting data to Apache Hudi using Spark sql",description:"Redirecting... please wait!!",date:"2023-05-12T00:00:00.000Z",formattedDate:"May 12, 2023",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"spark-sql",permalink:"/cn/blog/tags/spark-sql"},{label:"medium",permalink:"/cn/blog/tags/medium"}],readingTime:.045,truncated:!1,authors:[{name:"Sivabalan Narayanan"}],prevItem:{title:"How Zoom implemented streaming log ingestion and efficient GDPR deletes using Apache Hudi on Amazon EMR",permalink:"/cn/blog/2023/05/16/how-zoom-implemented-streaming-log-ingestion-and-efficient-gdpr-deletes-using-apache-hudi-on-amazon-emr"},nextItem:{title:"Top 3 Things You Can Do to Get Fast Upsert Performance in Apache Hudi",permalink:"/cn/blog/2023/05/10/top-3-things-you-can-do-to-get-fast-upsert-performance-in-apache-hudi"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,a.yg)(g,(0,r.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)(o.c,{url:"https://medium.com/@simpsons/ingesting-data-to-apache-hudi-using-spark-sql-36d9815423b3",mdxType:"Redirect"},"Redirecting... please wait!! "))}m.isMDXComponent=!0}}]);