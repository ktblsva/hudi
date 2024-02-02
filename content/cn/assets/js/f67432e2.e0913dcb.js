"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[8400],{95788:(e,n,r)=>{r.d(n,{Iu:()=>u,yg:()=>m});var t=r(11504);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=p(r),y=o,m=c["".concat(l,".").concat(y)]||c[y]||d[y]||i;return r?t.createElement(m,s(s({ref:n},u),{},{components:r})):t.createElement(m,s({ref:n},u))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=y;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},99892:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var t=r(45072),o=(r(11504),r(95788));const i={version:"0.8.0",title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:new Date("2020-04-21T22:50:50.000Z"),language:"cn"},s=void 0,a={unversionedId:"oss_hoodie",id:"version-0.8.0/oss_hoodie",title:"OSS Filesystem",description:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.8.0/oss_hoodie.md",sourceDirName:".",slug:"/oss_hoodie",permalink:"/cn/docs/0.8.0/oss_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.8.0/oss_hoodie.md",tags:[],version:"0.8.0",frontMatter:{version:"0.8.0",title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:"2020-04-21T22:50:50.000Z",language:"cn"},sidebar:"version-0.8.0/docs",previous:{title:"GCS Filesystem",permalink:"/cn/docs/0.8.0/gcs_hoodie"},next:{title:"Azure \u6587\u4ef6\u7cfb\u7edf",permalink:"/cn/docs/0.8.0/azure_hoodie"}},l=[{value:"Aliyun OSS \u90e8\u7f72",id:"aliyun-oss-\u90e8\u7f72",children:[{value:"Aliyun OSS \u76f8\u5173\u7684\u914d\u7f6e",id:"aliyun-oss-\u76f8\u5173\u7684\u914d\u7f6e",children:[],level:3},{value:"Aliyun OSS Libs",id:"aliyun-oss-libs",children:[],level:3}],level:2}],p={toc:l},u="wrapper";function c(e){let{components:n,...r}=e;return(0,o.yg)(u,(0,t.c)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002"),(0,o.yg)("h2",{id:"aliyun-oss-\u90e8\u7f72"},"Aliyun OSS \u90e8\u7f72"),(0,o.yg)("p",null,"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528OSS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"\u4e3aHidi\u589e\u52a0Aliyun OSS\u7684\u76f8\u5173\u914d\u7f6e"),(0,o.yg)("li",{parentName:"ul"},"\u589e\u52a0Jar\u5305\u7684MVN\u4f9d\u8d56")),(0,o.yg)("h3",{id:"aliyun-oss-\u76f8\u5173\u7684\u914d\u7f6e"},"Aliyun OSS \u76f8\u5173\u7684\u914d\u7f6e"),(0,o.yg)("p",null,"\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684OSS bucket name\u66ff\u6362\u6389",(0,o.yg)("inlineCode",{parentName:"p"},"fs.defaultFS"),"\uff0c\u4f7f\u7528OSS endpoint\u5730\u5740\u66ff\u6362",(0,o.yg)("inlineCode",{parentName:"p"},"fs.oss.endpoint"),"\uff0c\u4f7f\u7528OSS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,o.yg)("inlineCode",{parentName:"p"},"fs.oss.accessKeyId"),"\u548c",(0,o.yg)("inlineCode",{parentName:"p"},"fs.oss.accessKeySecret"),"\u3002\u4e3b\u8981Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"    <property>\n        <name>fs.defaultFS</name>\n        <value>oss://bucketname/</value>\n    </property>\n\n    <property>\n      <name>fs.oss.endpoint</name>\n      <value>oss-endpoint-address</value>\n      <description>Aliyun OSS endpoint to connect to.</description>\n    </property>\n\n    <property>\n      <name>fs.oss.accessKeyId</name>\n      <value>oss_key</value>\n      <description>Aliyun access key ID</description>\n    </property>\n\n    <property>\n      <name>fs.oss.accessKeySecret</name>\n      <value>oss-secret</value>\n      <description>Aliyun access key secret</description>\n    </property>\n\n    <property>\n      <name>fs.oss.impl</name>\n      <value>org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem</value>\n    </property>\n")),(0,o.yg)("h3",{id:"aliyun-oss-libs"},"Aliyun OSS Libs"),(0,o.yg)("p",null,"\u65b0\u589eAliyun hadoop\u7684jar\u5305\u7684MVN\u4f9d\u8d56\u5230pom.xml\u6587\u4ef6\u3002\u7531\u4e8ehadoop-aliyun\u4f9d\u8d56hadoop 2.9.1+\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528hadoop 2.9.1\u6216\u66f4\u65b0\u7684\u7248\u672c\u3002"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-aliyun</artifactId>\n    <version>3.2.1</version>\n</dependency>\n<dependency>\n    <groupId>com.aliyun.oss</groupId>\n    <artifactId>aliyun-sdk-oss</artifactId>\n    <version>3.8.1</version>\n</dependency>\n<dependency>\n    <groupId>org.jdom</groupId>\n    <artifactId>jdom</artifactId>\n    <version>1.1</version>\n</dependency>\n")))}c.isMDXComponent=!0}}]);