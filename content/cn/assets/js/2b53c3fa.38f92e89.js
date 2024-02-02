"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[5585],{95788:(e,o,r)=>{r.d(o,{Iu:()=>u,yg:()=>m});var t=r(11504);function n(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function i(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?i(Object(r),!0).forEach((function(o){n(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function l(e,o){if(null==e)return{};var r,t,n=function(e,o){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||(n[r]=e[r]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=t.createContext({}),c=function(e){var o=t.useContext(s),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},u=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},g=t.forwardRef((function(e,o){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),g=n,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return r?t.createElement(m,a(a({ref:o},u),{},{components:r})):t.createElement(m,a({ref:o},u))}));function m(e,o){var r=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=g;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}g.displayName="MDXCreateElement"},15884:(e,o,r)=>{r.r(o),r.d(o,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=r(45072),n=(r(11504),r(95788));const i={title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:new Date("2019-12-30T19:59:57.000Z")},a=void 0,l={unversionedId:"gcs_hoodie",id:"version-0.10.0/gcs_hoodie",title:"Google Cloud",description:"For Hudi storage on GCS, regional buckets provide an DFS API with strong consistency.",source:"@site/versioned_docs/version-0.10.0/gcs_hoodie.md",sourceDirName:".",slug:"/gcs_hoodie",permalink:"/cn/docs/0.10.0/gcs_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/gcs_hoodie.md",tags:[],version:"0.10.0",frontMatter:{title:"Google Cloud",keywords:["hudi","hive","google cloud","storage","spark","presto"],summary:"In this page, we go over how to configure hudi with Google Cloud Storage.",last_modified_at:"2019-12-30T19:59:57.000Z"},sidebar:"version-0.10.0/docs",previous:{title:"AWS S3",permalink:"/cn/docs/0.10.0/s3_hoodie"},next:{title:"Alibaba Cloud",permalink:"/cn/docs/0.10.0/oss_hoodie"}},s=[{value:"GCS Configs",id:"gcs-configs",children:[{value:"GCS Credentials",id:"gcs-credentials",children:[],level:3},{value:"GCS Libs",id:"gcs-libs",children:[],level:3}],level:2}],c={toc:s},u="wrapper";function p(e){let{components:o,...r}=e;return(0,n.yg)(u,(0,t.c)({},c,r,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"For Hudi storage on GCS, ",(0,n.yg)("strong",{parentName:"p"},"regional")," buckets provide an DFS API with strong consistency."),(0,n.yg)("h2",{id:"gcs-configs"},"GCS Configs"),(0,n.yg)("p",null,"There are two configurations required for Hudi GCS compatibility:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Adding GCS Credentials for Hudi"),(0,n.yg)("li",{parentName:"ul"},"Adding required jars to classpath")),(0,n.yg)("h3",{id:"gcs-credentials"},"GCS Credentials"),(0,n.yg)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your GCS bucket name and Hudi should be able to read/write from the bucket."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"  <property>\n    <name>fs.defaultFS</name>\n    <value>gs://hudi-bucket</value>\n  </property>\n\n  <property>\n    <name>fs.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem</value>\n    <description>The FileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.AbstractFileSystem.gs.impl</name>\n    <value>com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS</value>\n    <description>The AbstractFileSystem for gs: (GCS) uris.</description>\n  </property>\n\n  <property>\n    <name>fs.gs.project.id</name>\n    <value>GCS_PROJECT_ID</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.enable</name>\n    <value>true</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.email</name>\n    <value>GCS_SERVICE_ACCOUNT_EMAIL</value>\n  </property>\n  <property>\n    <name>google.cloud.auth.service.account.keyfile</name>\n    <value>GCS_SERVICE_ACCOUNT_KEYFILE</value>\n  </property>\n")),(0,n.yg)("h3",{id:"gcs-libs"},"GCS Libs"),(0,n.yg)("p",null,"GCS hadoop libraries to add to our classpath"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"com.google.cloud.bigdataoss:gcs-connector:1.6.0-hadoop2")))}p.isMDXComponent=!0}}]);