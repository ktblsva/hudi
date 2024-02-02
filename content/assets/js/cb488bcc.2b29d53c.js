"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[40360],{95788:(e,o,t)=>{t.d(o,{Iu:()=>l,yg:()=>y});var r=t(11504);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function i(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?i(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function s(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=r.createContext({}),u=function(e){var o=r.useContext(d),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},l=function(e){var o=u(e.components);return r.createElement(d.Provider,{value:o},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},b=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=u(t),b=n,y=c["".concat(d,".").concat(b)]||c[b]||p[b]||i;return t?r.createElement(y,a(a({ref:o},l),{},{components:t})):r.createElement(y,a({ref:o},l))}));function y(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s[c]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},93912:(e,o,t)=>{t.r(o),t.d(o,{contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=t(45072),n=(t(11504),t(95788));const i={title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:new Date("2021-06-09T21:38:24.000Z")},a=void 0,s={unversionedId:"bos_hoodie",id:"version-0.10.0/bos_hoodie",title:"Baidu Cloud",description:"In this page, we explain how to get your Hudi job to store into Baidu BOS.",source:"@site/versioned_docs/version-0.10.0/bos_hoodie.md",sourceDirName:".",slug:"/bos_hoodie",permalink:"/docs/0.10.0/bos_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.10.0/bos_hoodie.md",tags:[],version:"0.10.0",frontMatter:{title:"Baidu Cloud",keywords:["hudi","hive","baidu","bos","spark","presto"],summary:"In this page, we go over how to configure Hudi with bos filesystem.",last_modified_at:"2021-06-09T21:38:24.000Z"},sidebar:"version-0.10.0/docs",previous:{title:"IBM Cloud",permalink:"/docs/0.10.0/ibm_cos_hoodie"},next:{title:"JuiceFS",permalink:"/docs/0.10.0/jfs_hoodie"}},d=[{value:"Baidu BOS configs",id:"baidu-bos-configs",children:[{value:"Baidu BOS Credentials",id:"baidu-bos-credentials",children:[],level:3},{value:"Baidu bos Libs",id:"baidu-bos-libs",children:[],level:3}],level:2}],u={toc:d},l="wrapper";function c(e){let{components:o,...t}=e;return(0,n.yg)(l,(0,r.c)({},u,t,{components:o,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"In this page, we explain how to get your Hudi job to store into Baidu BOS."),(0,n.yg)("h2",{id:"baidu-bos-configs"},"Baidu BOS configs"),(0,n.yg)("p",null,"There are two configurations required for Hudi-BOS compatibility:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Adding Baidu BOS Credentials for Hudi"),(0,n.yg)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,n.yg)("h3",{id:"baidu-bos-credentials"},"Baidu BOS Credentials"),(0,n.yg)("p",null,"Add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,n.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your BOS bucket name, replace ",(0,n.yg)("inlineCode",{parentName:"p"},"fs.bos.endpoint")," with your bos endpoint, replace ",(0,n.yg)("inlineCode",{parentName:"p"},"fs.bos.access.key")," with your bos key, replace ",(0,n.yg)("inlineCode",{parentName:"p"},"fs.bos.secret.access.key")," with your bos secret key. Hudi should be able to read/write from the bucket."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-xml"},"<property>\n  <name>fs.defaultFS</name>\n  <value>bos://bucketname/</value>\n</property>\n\n<property>\n  <name>fs.bos.endpoint</name>\n  <value>bos-endpoint-address</value>\n  <description>Baidu bos endpoint to connect to,for example : http://bj.bcebos.com</description>\n</property>\n\n<property>\n  <name>fs.bos.access.key</name>\n  <value>bos-key</value>\n  <description>Baidu access key</description>\n</property>\n\n<property>\n  <name>fs.bos.secret.access.key</name>\n  <value>bos-secret-key</value>\n  <description>Baidu secret key.</description>\n</property>\n\n<property>\n  <name>fs.bos.impl</name>\n  <value>org.apache.hadoop.fs.bos.BaiduBosFileSystem</value>\n</property>\n")),(0,n.yg)("h3",{id:"baidu-bos-libs"},"Baidu bos Libs"),(0,n.yg)("p",null,"Baidu hadoop libraries jars to add to our classpath"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"com.baidubce:bce-java-sdk:0.10.165"),(0,n.yg)("li",{parentName:"ul"},"bos-hdfs-sdk-1.0.2-community.jar ")),(0,n.yg)("p",null,"You can  download the bos-hdfs-sdk jar from ",(0,n.yg)("a",{parentName:"p",href:"https://sdk.bce.baidu.com/console-sdk/bos-hdfs-sdk-1.0.2-community.jar.zip"},"here")," , and then unzip it."))}c.isMDXComponent=!0}}]);