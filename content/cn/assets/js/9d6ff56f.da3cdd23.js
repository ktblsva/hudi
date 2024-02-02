"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[79624],{95788:(e,r,t)=>{t.d(r,{Iu:()=>d,yg:()=>g});var n=t(11504);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=u(t),y=o,g=s["".concat(c,".").concat(y)]||s[y]||p[y]||a;return t?n.createElement(g,i(i({ref:r},d),{},{components:t})):n.createElement(g,i({ref:r},d))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=y;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},44372:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(45072),o=(t(11504),t(95788));const a={title:"\u4e91\u50a8\u5b58",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2019-06-17T01:59:57.000Z"),language:"cn"},i=void 0,l={unversionedId:"cloud",id:"cloud",title:"\u4e91\u50a8\u5b58",description:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",source:"@site/i18n/cn/docusaurus-plugin-content-docs/current/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/cn/docs/next/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/docs/cloud.md",tags:[],version:"current",frontMatter:{title:"\u4e91\u50a8\u5b58",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2019-06-17T01:59:57.000Z",language:"cn"},sidebar:"docs",previous:{title:"\u914d\u7f6e",permalink:"/cn/docs/next/configurations"},next:{title:"S3 \u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/docs/next/s3_hoodie"}},c=[{value:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",id:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5",children:[],level:2}],u={toc:c},d="wrapper";function s(e){let{components:r,...t}=e;return(0,o.yg)(d,(0,n.c)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h2",{id:"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5"},"\u4e0e\u4e91\u5b58\u50a8\u8fde\u63a5"),(0,o.yg)("p",null,"\u65e0\u8bba\u4f7f\u7528RDD/WriteClient API\u8fd8\u662f\u6570\u636e\u6e90\uff0c\u4ee5\u4e0b\u4fe1\u606f\u90fd\u6709\u52a9\u4e8e\u914d\u7f6e\u5bf9\u4e91\u5b58\u50a8\u7684\u8bbf\u95ee\u3002"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cn/docs/s3_hoodie"},"AWS S3")," ",(0,o.yg)("br",null),"\nS3\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cn/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,o.yg)("br",null),"\nGCS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cn/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,o.yg)("br",null),"\n\u963f\u91cc\u4e91\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cn/docs/azure_hoodie"},"Microsoft Azure")," ",(0,o.yg)("br",null),"\nAzure\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cn/docs/cos_hoodie"},"Tencent Cloud Object Storage")," ",(0,o.yg)("br",null),"\nCOS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"/cn/docs/ibm_cos_hoodie"},"IBM Cloud Object Storage")," ",(0,o.yg)("br",null),"\nIBM Cloud Object Storage\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002"),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("a",{parentName:"li",href:"bos_hoodie"},"Baidu Cloud Object Storage")," ",(0,o.yg)("br",null),"\n\u767e\u5ea6BOS\u548cHudi\u534f\u540c\u5de5\u4f5c\u6240\u9700\u7684\u914d\u7f6e\u3002")))}s.isMDXComponent=!0}}]);