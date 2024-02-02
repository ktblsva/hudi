"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[13460],{95788:(e,t,n)=>{n.d(t,{Iu:()=>p,yg:()=>m});var r=n(11504);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),y=a,m=u["".concat(l,".").concat(y)]||u[y]||d[y]||s;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},83804:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(45072),a=(n(11504),n(95788));const s={version:"0.5.0",title:"S3 Filesystem",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:new Date("2019-12-30T19:59:57.000Z"),language:"cn"},o=void 0,i={unversionedId:"s3_hoodie",id:"version-0.5.0/s3_hoodie",title:"S3 Filesystem",description:"In this page, we explain how to get your Hudi spark job to store into AWS S3.",source:"@site/i18n/cn/docusaurus-plugin-content-docs/version-0.5.0/s3_hoodie.md",sourceDirName:".",slug:"/s3_hoodie",permalink:"/cn/docs/0.5.0/s3_hoodie",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.5.0/s3_hoodie.md",tags:[],version:"0.5.0",frontMatter:{version:"0.5.0",title:"S3 Filesystem",keywords:["hudi","hive","aws","s3","spark","presto"],summary:"In this page, we go over how to configure Hudi with S3 filesystem.",last_modified_at:"2019-12-30T19:59:57.000Z",language:"cn"},sidebar:"version-0.5.0/docs",previous:{title:"\u6027\u80fd",permalink:"/cn/docs/0.5.0/performance"},next:{title:"GCS Filesystem",permalink:"/cn/docs/0.5.0/gcs_hoodie"}},l=[{value:"AWS configs",id:"aws-configs",children:[{value:"AWS Credentials",id:"aws-credentials",children:[],level:3},{value:"AWS Libs",id:"aws-libs",children:[],level:3}],level:2}],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"In this page, we explain how to get your Hudi spark job to store into AWS S3."),(0,a.yg)("h2",{id:"aws-configs"},"AWS configs"),(0,a.yg)("p",null,"There are two configurations required for Hudi-S3 compatibility:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Adding AWS Credentials for Hudi"),(0,a.yg)("li",{parentName:"ul"},"Adding required Jars to classpath")),(0,a.yg)("h3",{id:"aws-credentials"},"AWS Credentials"),(0,a.yg)("p",null,"Simplest way to use Hudi with S3, is to configure your ",(0,a.yg)("inlineCode",{parentName:"p"},"SparkSession")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"SparkContext")," with S3 credentials. Hudi will automatically pick this up and talk to S3."),(0,a.yg)("p",null,"Alternatively, add the required configs in your core-site.xml from where Hudi can fetch them. Replace the ",(0,a.yg)("inlineCode",{parentName:"p"},"fs.defaultFS")," with your S3 bucket name and Hudi should be able to read/write from the bucket."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-xml"},"  <property>\n      <name>fs.defaultFS</name>\n      <value>s3://ysharma</value>\n  </property>\n\n  <property>\n      <name>fs.s3.impl</name>\n      <value>org.apache.hadoop.fs.s3native.NativeS3FileSystem</value>\n  </property>\n\n  <property>\n      <name>fs.s3.awsAccessKeyId</name>\n      <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsAccessKeyId</name>\n       <value>AWS_KEY</value>\n  </property>\n\n  <property>\n       <name>fs.s3n.awsSecretAccessKey</name>\n       <value>AWS_SECRET</value>\n  </property>\n")),(0,a.yg)("p",null,"Utilities such as hudi-cli or deltastreamer tool, can pick up s3 creds via environmental variable prefixed with ",(0,a.yg)("inlineCode",{parentName:"p"},"HOODIE_ENV_"),". For e.g below is a bash snippet to setup\nsuch variables and then have cli be able to work on datasets stored in s3"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-java"},"export HOODIE_ENV_fs_DOT_s3a_DOT_access_DOT_key=$accessKey\nexport HOODIE_ENV_fs_DOT_s3a_DOT_secret_DOT_key=$secretKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsAccessKeyId=$accessKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_awsSecretAccessKey=$secretKey\nexport HOODIE_ENV_fs_DOT_s3n_DOT_impl=org.apache.hadoop.fs.s3a.S3AFileSystem\n")),(0,a.yg)("h3",{id:"aws-libs"},"AWS Libs"),(0,a.yg)("p",null,"AWS hadoop libraries to add to our classpath"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk:1.10.34"),(0,a.yg)("li",{parentName:"ul"},"org.apache.hadoop:hadoop-aws:2.7.3")),(0,a.yg)("p",null,"AWS glue data libraries are needed if AWS glue data is used"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"com.amazonaws.glue:aws-glue-datacatalog-hive2-client:1.11.0"),(0,a.yg)("li",{parentName:"ul"},"com.amazonaws:aws-java-sdk-glue:1.11.475")))}u.isMDXComponent=!0}}]);