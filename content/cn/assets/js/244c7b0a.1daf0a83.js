"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[34112],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>m});var n=a(11504);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),g=i,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||r;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},99408:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(45072),i=(a(11504),a(95788));const r={title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",excerpt:"Maintaining well-sized files can improve query performance significantly",author:"shivnarayan",category:"blog",image:"/assets/images/blog/2021-03-01-hudi-file-sizing.png",tags:["design","file sizing","apache hudi"]},o=void 0,l={permalink:"/cn/blog/2021/03/01/hudi-file-sizing",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-01-hudi-file-sizing.md",source:"@site/blog/2021-03-01-hudi-file-sizing.md",title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",description:"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.",date:"2021-03-01T00:00:00.000Z",formattedDate:"March 1, 2021",tags:[{label:"design",permalink:"/cn/blog/tags/design"},{label:"file sizing",permalink:"/cn/blog/tags/file-sizing"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:4.33,truncated:!0,authors:[{name:"shivnarayan"}],prevItem:{title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",permalink:"/cn/blog/2021/03/04/Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi"},nextItem:{title:"Data Lakehouse: Building the Next Generation of Data Lakes using Apache Hudi",permalink:"/cn/blog/2021/03/01/Data-Lakehouse-Building-the-Next-Generation-of-Data-Lakes-using-Apache-Hudi"}},s={authorsImageUrls:[void 0]},c=[],u={toc:c},d="wrapper";function p(e){let{components:t,...a}=e;return(0,i.yg)(d,(0,n.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Apache Hudi is a data lake platform technology that provides several functionalities needed to build and manage data lakes.\nOne such key feature that hudi provides is self-managing file sizing so that users don\u2019t need to worry about\nmanual table maintenance. Having a lot of small files will make it harder to achieve good query performance, due to query engines\nhaving to open/read/close files way too many times, to plan and execute queries. But for streaming data lake use-cases,\ninherently ingests are going to end up having smaller volume of writes, which might result in lot of small files if no special handling is done."))}p.isMDXComponent=!0}}]);