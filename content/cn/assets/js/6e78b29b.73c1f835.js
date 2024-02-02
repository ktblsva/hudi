"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37168],{95788:(e,n,a)=>{a.d(n,{Iu:()=>u,yg:()=>d});var t=a(11504);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},g="mdxType",y={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(a),p=r,d=g["".concat(c,".").concat(p)]||g[p]||y[p]||o;return a?t.createElement(d,l(l({ref:n},u),{},{components:a})):t.createElement(d,l({ref:n},u))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[g]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}p.displayName="MDXCreateElement"},41744:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=a(45072),r=(a(11504),a(95788));const o={title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},l=void 0,i={unversionedId:"syncing_aws_glue_data_catalog",id:"version-0.12.3/syncing_aws_glue_data_catalog",title:"AWS Glue Data Catalog",description:"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on HiveSyncTool",source:"@site/versioned_docs/version-0.12.3/syncing_aws_glue_data_catalog.md",sourceDirName:".",slug:"/syncing_aws_glue_data_catalog",permalink:"/cn/docs/0.12.3/syncing_aws_glue_data_catalog",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/syncing_aws_glue_data_catalog.md",tags:[],version:"0.12.3",frontMatter:{title:"AWS Glue Data Catalog",keywords:["hudi","aws","glue","sync"]},sidebar:"docs",previous:{title:"Flink Setup",permalink:"/cn/docs/0.12.3/flink_configuration"},next:{title:"DataHub",permalink:"/cn/docs/0.12.3/syncing_datahub"}},c=[{value:"Configurations",id:"configurations",children:[{value:"Running AWS Glue Catalog Sync for Spark DataSource",id:"running-aws-glue-catalog-sync-for-spark-datasource",children:[],level:4},{value:"Running AWS Glue Catalog Sync from EMR",id:"running-aws-glue-catalog-sync-from-emr",children:[],level:4}],level:3}],s={toc:c},u="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(u,(0,t.c)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Hudi tables can sync to AWS Glue Data Catalog directly via AWS SDK. Piggyback on ",(0,r.yg)("inlineCode",{parentName:"p"},"HiveSyncTool"),"\n, ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool")," makes use of all the configurations that are taken by ",(0,r.yg)("inlineCode",{parentName:"p"},"HiveSyncTool"),"\nand send them to AWS Glue."),(0,r.yg)("h3",{id:"configurations"},"Configurations"),(0,r.yg)("p",null,"There is no additional configuration for using ",(0,r.yg)("inlineCode",{parentName:"p"},"AwsGlueCatalogSyncTool"),"; you just need to set it as one of the sync tool\nclasses for ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," and everything configured as shown in ",(0,r.yg)("a",{parentName:"p",href:"syncing_metastore"},"Sync to Hive Metastore")," will\nbe passed along."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"--sync-tool-classes org.apache.hudi.aws.sync.AwsGlueCatalogSyncTool\n")),(0,r.yg)("h4",{id:"running-aws-glue-catalog-sync-for-spark-datasource"},"Running AWS Glue Catalog Sync for Spark DataSource"),(0,r.yg)("p",null,"To write a Hudi table to Amazon S3 and catalog it in AWS Glue Data Catalog, you can use the options mentioned in the\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-format-hudi.html#aws-glue-programming-etl-format-hudi-write"},"AWS documentation")),(0,r.yg)("h4",{id:"running-aws-glue-catalog-sync-from-emr"},"Running AWS Glue Catalog Sync from EMR"),(0,r.yg)("p",null,"If you're running HiveSyncTool on an EMR cluster backed by Glue Data Catalog as external metastore, you can simply run the sync from command line like below:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"cd /usr/lib/hudi/bin\n\n./run_sync_tool.sh --base-path s3://<bucket_name>/<prefix>/<table_name> --database <database_name> --table <table_name> --partitioned-by <column_name>\n")))}g.isMDXComponent=!0}}]);