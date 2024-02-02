"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[98344],{95788:(e,a,t)=>{t.d(a,{Iu:()=>m,yg:()=>f});var r=t(11504);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=r.createContext({}),s=function(e){var a=r.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=s(e.components);return r.createElement(c.Provider,{value:a},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},p=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),p=n,f=u["".concat(c,".").concat(p)]||u[p]||d[p]||o;return t?r.createElement(f,l(l({ref:a},m),{},{components:t})):r.createElement(f,l({ref:a},m))}));function f(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},31444:(e,a,t)=>{t.d(a,{c:()=>o});var r=t(11504),n=t(93664);function o(e){let{children:a,url:o}=e;return(0,n.c)()&&(t.g.window.location.href=o),r.createElement("span",null,a,"or click ",r.createElement("a",{href:o},"here"))}},57993:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=t(45072),n=(t(11504),t(95788)),o=t(31444);const l={title:"Load data incrementally from transactional data lakes to data warehouses",excerpt:"Load data incrementally from Apache Hudi table to Amazon Redshift using a Hudi incremental query",author:"Noritaka Sekiyama",category:"blog",image:"/assets/images/blog/2023-10-19-load-data-incrementally-from-transactional-data-lakes-to-data-warehouses.png",tags:["incremental updates","amazon","how to","querying","aws","amazon redshift","apache hudi"]},i=void 0,c={permalink:"/cn/blog/2023/10/19/load-data-incrementally-from-transactional-data-lakes-to-data-warehouses",editUrl:"https://github.com/apache/hudi/edit/asf-site/website/blog/blog/2023-10-19-load-data-incrementally-from-transactional-data-lakes-to-data-warehouses.mdx",source:"@site/blog/2023-10-19-load-data-incrementally-from-transactional-data-lakes-to-data-warehouses.mdx",title:"Load data incrementally from transactional data lakes to data warehouses",description:"Redirecting... please wait!!",date:"2023-10-19T00:00:00.000Z",formattedDate:"October 19, 2023",tags:[{label:"incremental updates",permalink:"/cn/blog/tags/incremental-updates"},{label:"amazon",permalink:"/cn/blog/tags/amazon"},{label:"how to",permalink:"/cn/blog/tags/how-to"},{label:"querying",permalink:"/cn/blog/tags/querying"},{label:"aws",permalink:"/cn/blog/tags/aws"},{label:"amazon redshift",permalink:"/cn/blog/tags/amazon-redshift"},{label:"apache hudi",permalink:"/cn/blog/tags/apache-hudi"}],readingTime:.045,truncated:!1,authors:[{name:"Noritaka Sekiyama"}],prevItem:{title:"It's Time for the Universal Data Lakehouse",permalink:"/cn/blog/2023/10/20/Its-Time-for-the-Universal-Data-Lakehouse"},nextItem:{title:"Apache Hudi: From Zero To One (5/10)",permalink:"/cn/blog/2023/10/18/Apache-Hudi-From-Zero-To-One-blog-5"}},s={authorsImageUrls:[void 0]},m=[],u={toc:m},d="wrapper";function p(e){let{components:a,...t}=e;return(0,n.yg)(d,(0,r.c)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)(o.c,{url:"https://aws.amazon.com/blogs/big-data/load-data-incrementally-from-transactional-data-lakes-to-data-warehouses/",mdxType:"Redirect"},"Redirecting... please wait!! "))}p.isMDXComponent=!0}}]);