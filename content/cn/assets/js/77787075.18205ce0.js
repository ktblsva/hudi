"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[94088],{95788:(e,r,o)=>{o.d(r,{Iu:()=>d,yg:()=>f});var t=o(11504);function n(e,r,o){return r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e}function i(e,r){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),o.push.apply(o,t)}return o}function a(e){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?i(Object(o),!0).forEach((function(r){n(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(e,r){if(null==e)return{};var o,t,n=function(e,r){if(null==e)return{};var o,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||(n[o]=e[o]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)o=i[t],r.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=t.createContext({}),c=function(e){var r=t.useContext(u),o=r;return e&&(o="function"==typeof e?e(r):a(a({},r),e)),o},d=function(e){var r=c(e.components);return t.createElement(u.Provider,{value:r},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},g=t.forwardRef((function(e,r){var o=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(o),g=n,f=s["".concat(u,".").concat(g)]||s[g]||p[g]||i;return o?t.createElement(f,a(a({ref:r},d),{},{components:o})):t.createElement(f,a({ref:r},d))}));function f(e,r){var o=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=g;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l[s]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,o)}g.displayName="MDXCreateElement"},63136:(e,r,o)=>{o.r(r),o.d(r,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=o(45072),n=(o(11504),o(95788));const i={title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:new Date("2021-10-12T02:50:00.000Z")},a=void 0,l={unversionedId:"cloud",id:"version-0.12.0/cloud",title:"Cloud Storage",description:"Talking to Cloud Storage",source:"@site/versioned_docs/version-0.12.0/cloud.md",sourceDirName:".",slug:"/cloud",permalink:"/cn/docs/0.12.0/cloud",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.0/cloud.md",tags:[],version:"0.12.0",frontMatter:{title:"Cloud Storage",keywords:["hudi","aws","gcp","oss","azure","cloud","juicefs"],summary:"In this page, we introduce how Hudi work with different Cloud providers.",toc:!0,last_modified_at:"2021-10-12T02:50:00.000Z"},sidebar:"docs",previous:{title:"Tuning Guide",permalink:"/cn/docs/0.12.0/tuning-guide"},next:{title:"AWS S3",permalink:"/cn/docs/0.12.0/s3_hoodie"}},u=[{value:"Talking to Cloud Storage",id:"talking-to-cloud-storage",children:[],level:2}],c={toc:u},d="wrapper";function s(e){let{components:r,...o}=e;return(0,n.yg)(d,(0,t.c)({},c,o,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("h2",{id:"talking-to-cloud-storage"},"Talking to Cloud Storage"),(0,n.yg)("p",null,"Immaterial of whether RDD/WriteClient APIs or Datasource is used, the following information helps configure access\nto cloud stores."),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/s3_hoodie"},"AWS S3")," ",(0,n.yg)("br",null),"\nConfigurations required for S3 and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/gcs_hoodie"},"Google Cloud Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for GCS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/oss_hoodie"},"Alibaba Cloud OSS")," ",(0,n.yg)("br",null),"\nConfigurations required for OSS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/azure_hoodie"},"Microsoft Azure")," ",(0,n.yg)("br",null),"\nConfigurations required for Azure and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/cos_hoodie"},"Tencent Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for COS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"/docs/ibm_cos_hoodie"},"IBM Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for IBM Cloud Object Storage and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"bos_hoodie"},"Baidu Cloud Object Storage")," ",(0,n.yg)("br",null),"\nConfigurations required for BOS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"jfs_hoodie"},"JuiceFS")," ",(0,n.yg)("br",null),"\nConfigurations required for JuiceFS and Hudi co-operability."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("a",{parentName:"li",href:"oci_hoodie"},"Oracle Cloud Infrastructure")," ",(0,n.yg)("br",null),"\nConfigurations required for OCI and Hudi co-operability.")))}s.isMDXComponent=!0}}]);