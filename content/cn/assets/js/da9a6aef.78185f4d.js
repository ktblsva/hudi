"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[2456],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>g});var n=t(11504);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},m=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=c(t),p=r,g=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return t?n.createElement(g,o(o({ref:a},m),{},{components:t})):n.createElement(g,o({ref:a},m))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},31444:(e,a,t)=>{t.d(a,{c:()=>i});var n=t(11504),r=t(93664);function i(e){let{children:a,url:i}=e;return(0,r.c)()&&(t.g.window.location.href=i),n.createElement("span",null,a,"or click ",n.createElement("a",{href:i},"here"))}},16068:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var n=t(45072),r=(t(11504),t(95788)),i=t(31444);const o={title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",authors:[{name:"Dhiraj Thakur"},{name:"Dylan Qu"},{name:"Saurabh Shrivastava"}],category:"blog",image:"/assets/images/blog/2021-03-04-build-data-lake-using-amazon-kinesis-for-amazon-dynamodb-and-apache-hudi.jpeg",tags:["how-to","streaming ingestion","amazon"]},l=void 0,s={permalink:"/cn/blog/2021/03/04/Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2021-03-04-Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi.mdx",source:"@site/blog/2021-03-04-Build-a-data-lake-using-amazon-kinesis-data-stream-for-amazon-dynamodb-and-apache-hudi.mdx",title:"Build a data lake using amazon kinesis data stream for amazon dynamodb and apache hudi",description:"Redirecting... please wait!!",date:"2021-03-04T00:00:00.000Z",formattedDate:"March 4, 2021",tags:[{label:"how-to",permalink:"/cn/blog/tags/how-to"},{label:"streaming ingestion",permalink:"/cn/blog/tags/streaming-ingestion"},{label:"amazon",permalink:"/cn/blog/tags/amazon"}],readingTime:.045,truncated:!1,authors:[{name:"Dhiraj Thakur"},{name:"Dylan Qu"},{name:"Saurabh Shrivastava"}],prevItem:{title:"New features from Apache hudi in Amazon EMR",permalink:"/cn/blog/2021/03/11/New-features-from-Apache-hudi-in-Amazon-EMR"},nextItem:{title:"Streaming Responsibly - How Apache Hudi maintains optimum sized files",permalink:"/cn/blog/2021/03/01/hudi-file-sizing"}},c={authorsImageUrls:[void 0,void 0,void 0]},m=[],d={toc:m},u="wrapper";function p(e){let{components:a,...t}=e;return(0,r.yg)(u,(0,n.c)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)(i.c,{url:"https://aws.amazon.com/blogs/big-data/build-a-data-lake-using-amazon-kinesis-data-streams-for-amazon-dynamodb-and-apache-hudi/",mdxType:"Redirect"},"Redirecting... please wait!! "))}p.isMDXComponent=!0}}]);