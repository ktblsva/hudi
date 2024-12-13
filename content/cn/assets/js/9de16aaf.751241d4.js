"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[20428],{47574:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});const o=JSON.parse('{"id":"oss_hoodie","title":"OSS Filesystem","description":"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002","source":"@site/i18n/cn/docusaurus-plugin-content-docs/version-1.0.0/oss_hoodie.md","sourceDirName":".","slug":"/oss_hoodie","permalink":"/cn/docs/oss_hoodie","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/oss_hoodie.md","tags":[],"version":"1.0.0","frontMatter":{"title":"OSS Filesystem","keywords":["hudi","hive","aliyun","oss","spark","presto"],"summary":"In this page, we go over how to configure Hudi with OSS filesystem.","last_modified_at":"2020-04-21T22:50:50.000Z","language":"cn"},"sidebar":"docs","previous":{"title":"GCS \u6587\u4ef6\u7cfb\u7edf","permalink":"/cn/docs/gcs_hoodie"},"next":{"title":"Azure \u6587\u4ef6\u7cfb\u7edf","permalink":"/cn/docs/azure_hoodie"}}');var i=s(74848),t=s(28453);const r={title:"OSS Filesystem",keywords:["hudi","hive","aliyun","oss","spark","presto"],summary:"In this page, we go over how to configure Hudi with OSS filesystem.",last_modified_at:new Date("2020-04-21T22:50:50.000Z"),language:"cn"},d=void 0,a={},c=[{value:"Aliyun OSS \u90e8\u7f72",id:"aliyun-oss-\u90e8\u7f72",level:2},{value:"Aliyun OSS \u76f8\u5173\u7684\u914d\u7f6e",id:"aliyun-oss-\u76f8\u5173\u7684\u914d\u7f6e",level:3},{value:"Aliyun OSS Libs",id:"aliyun-oss-libs",level:3}];function l(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"\u8fd9\u4e2a\u9875\u9762\u63cf\u8ff0\u4e86\u5982\u4f55\u8ba9\u4f60\u7684Hudi spark\u4efb\u52a1\u4f7f\u7528Aliyun OSS\u5b58\u50a8\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"aliyun-oss-\u90e8\u7f72",children:"Aliyun OSS \u90e8\u7f72"}),"\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4e86\u8ba9Hudi\u4f7f\u7528OSS\uff0c\u9700\u8981\u589e\u52a0\u4e24\u90e8\u5206\u7684\u914d\u7f6e:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u4e3aHudi\u589e\u52a0Aliyun OSS\u7684\u76f8\u5173\u914d\u7f6e"}),"\n",(0,i.jsx)(n.li,{children:"\u589e\u52a0Jar\u5305\u7684MVN\u4f9d\u8d56"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"aliyun-oss-\u76f8\u5173\u7684\u914d\u7f6e",children:"Aliyun OSS \u76f8\u5173\u7684\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.p,{children:["\u65b0\u589e\u4e0b\u9762\u7684\u914d\u7f6e\u5230\u4f60\u7684Hudi\u80fd\u8bbf\u95ee\u7684core-site.xml\u6587\u4ef6\u3002\u4f7f\u7528\u4f60\u7684OSS bucket name\u66ff\u6362\u6389",(0,i.jsx)(n.code,{children:"fs.defaultFS"}),"\uff0c\u4f7f\u7528OSS endpoint\u5730\u5740\u66ff\u6362",(0,i.jsx)(n.code,{children:"fs.oss.endpoint"}),"\uff0c\u4f7f\u7528OSS\u7684key\u548csecret\u5206\u522b\u66ff\u6362",(0,i.jsx)(n.code,{children:"fs.oss.accessKeyId"}),"\u548c",(0,i.jsx)(n.code,{children:"fs.oss.accessKeySecret"}),"\u3002\u8fd9\u6837Hudi\u5c31\u80fd\u8bfb\u5199\u76f8\u5e94\u7684bucket\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"    <property>\n        <name>fs.defaultFS</name>\n        <value>oss://bucketname/</value>\n    </property>\n\n    <property>\n      <name>fs.oss.endpoint</name>\n      <value>oss-endpoint-address</value>\n      <description>Aliyun OSS endpoint to connect to.</description>\n    </property>\n\n    <property>\n      <name>fs.oss.accessKeyId</name>\n      <value>oss_key</value>\n      <description>Aliyun access key ID</description>\n    </property>\n\n    <property>\n      <name>fs.oss.accessKeySecret</name>\n      <value>oss-secret</value>\n      <description>Aliyun access key secret</description>\n    </property>\n\n    <property>\n      <name>fs.oss.impl</name>\n      <value>org.apache.hadoop.fs.aliyun.oss.AliyunOSSFileSystem</value>\n    </property>\n"})}),"\n",(0,i.jsx)(n.h3,{id:"aliyun-oss-libs",children:"Aliyun OSS Libs"}),"\n",(0,i.jsx)(n.p,{children:"\u65b0\u589eAliyun hadoop\u7684jar\u5305\u7684MVN\u4f9d\u8d56\u5230pom.xml\u6587\u4ef6\u3002\u7531\u4e8ehadoop-aliyun\u4f9d\u8d56hadoop 2.9.1+\uff0c\u56e0\u6b64\u4f60\u9700\u8981\u4f7f\u7528hadoop 2.9.1\u6216\u66f4\u65b0\u7684\u7248\u672c\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:"<dependency>\n    <groupId>org.apache.hadoop</groupId>\n    <artifactId>hadoop-aliyun</artifactId>\n    <version>3.2.1</version>\n</dependency>\n<dependency>\n    <groupId>com.aliyun.oss</groupId>\n    <artifactId>aliyun-sdk-oss</artifactId>\n    <version>3.8.1</version>\n</dependency>\n<dependency>\n    <groupId>org.jdom</groupId>\n    <artifactId>jdom</artifactId>\n    <version>1.1</version>\n</dependency>\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>d});var o=s(96540);const i={},t=o.createContext(i);function r(e){const n=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);