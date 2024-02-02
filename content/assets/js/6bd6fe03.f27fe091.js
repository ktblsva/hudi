"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[140],{95788:(e,r,t)=>{t.d(r,{Iu:()=>d,yg:()=>g});var o=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=o.createContext({}),c=function(e){var r=o.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=c(e.components);return o.createElement(u.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(t),f=n,g=s["".concat(u,".").concat(f)]||s[f]||p[f]||i;return t?o.createElement(g,a(a({ref:r},d),{},{components:t})):o.createElement(g,a({ref:r},d))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[s]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},79656:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=t(45072),n=(t(11504),t(95788));const i={version:"0.6.0",title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2019-06-17T01:59:57.000Z")},a=void 0,l={unversionedId:"cloud",id:"version-0.6.0/cloud",title:"Cloud Storage",description:"Talking to Cloud Storage",source:"@site/versioned_docs/version-0.6.0/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/docs/0.6.0/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.6.0/cloud.md",tags:[],version:"0.6.0",frontMatter:{version:"0.6.0",title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2019-06-17T01:59:57.000Z"},sidebar:"version-0.6.0/docs",previous:{title:"Deployment Guide",permalink:"/docs/0.6.0/deployment"},next:{title:"S3 Filesystem",permalink:"/docs/0.6.0/s3_hoodie"}},u=[{value:"Talking to Cloud Storage",id:"talking-to-cloud-storage",children:[],level:2}],c={toc:u},d="wrapper";function s(e){let{components:r,...t}=e;return(0,n.yg)(d,(0,o.c)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"talking-to-cloud-storage"},"Talking to Cloud Storage"),(0,n.yg)("p",null,"Immaterial of whether RDD/WriteClient APIs or Datasource is used, the following information helps configure access\nto cloud stores."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/s3_hoodie"},"AWS S3")," ",(0,n.yg)("br",null),"\nConfigurations required for S3 and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for GCS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,n.yg)("br",null),"\nConfigurations required for OSS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/azure_hoodie"},"Microsoft Azure")," ",(0,n.yg)("br",null),"\nConfigurations required for Azure and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/cos_hoodie"},"Tencent Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for COS and Hudi co-operability.")))}s.isMDXComponent=!0}}]);