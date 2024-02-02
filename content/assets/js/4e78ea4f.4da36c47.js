"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[65608],{95788:(e,t,a)=>{a.d(t,{Iu:()=>u,yg:()=>m});var n=a(11504);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),y=r,m=d["".concat(l,".").concat(y)]||d[y]||p[y]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},63750:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(45072),r=(a(11504),a(95788));const o={title:"DataHub",keywords:["hudi","datahub","sync"]},i=void 0,s={unversionedId:"syncing_datahub",id:"version-0.12.3/syncing_datahub",title:"DataHub",description:"DataHub is a rich metadata platform that supports features like data discovery, data",source:"@site/versioned_docs/version-0.12.3/syncing_datahub.md",sourceDirName:".",slug:"/syncing_datahub",permalink:"/docs/0.12.3/syncing_datahub",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/syncing_datahub.md",tags:[],version:"0.12.3",frontMatter:{title:"DataHub",keywords:["hudi","datahub","sync"]},sidebar:"docs",previous:{title:"AWS Glue Data Catalog",permalink:"/docs/0.12.3/syncing_aws_glue_data_catalog"},next:{title:"Hive Metastore",permalink:"/docs/0.12.3/syncing_metastore"}},l=[{value:"Configurations",id:"configurations",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],c={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(u,(0,n.c)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("a",{parentName:"p",href:"https://datahubproject.io/"},"DataHub")," is a rich metadata platform that supports features like data discovery, data\nobeservability, federated governance, etc."),(0,r.yg)("p",null,"Since Hudi 0.11.0, you can now sync to a DataHub instance by setting ",(0,r.yg)("inlineCode",{parentName:"p"},"DataHubSyncTool")," as one of the sync tool classes\nfor ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"."),(0,r.yg)("p",null,"The target Hudi table will be sync'ed to DataHub as a ",(0,r.yg)("inlineCode",{parentName:"p"},"Dataset"),". The Hudi table's avro schema will be sync'ed, along\nwith the commit timestamp when running the sync."),(0,r.yg)("h3",{id:"configurations"},"Configurations"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"DataHubSyncTool")," makes use of DataHub's Java Emitter to send the metadata via HTTP REST APIs. It is required to\nset ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.meta.sync.datahub.emitter.server")," to the URL of the DataHub instance for sync."),(0,r.yg)("p",null,"If needs auth token, set ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.meta.sync.datahub.emitter.token"),"."),(0,r.yg)("p",null,"If needs customized creation of the emitter object,\nimplement ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.sync.datahub.config.DataHubEmitterSupplier")," and supply the implementation's FQCN\nto ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.meta.sync.datahub.emitter.supplier.class"),"."),(0,r.yg)("p",null,"By default, the sync config's database name and table name will be used to make the target ",(0,r.yg)("inlineCode",{parentName:"p"},"Dataset"),"'s URN.\nSubclass ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDataHubDatasetIdentifier")," and set it to ",(0,r.yg)("inlineCode",{parentName:"p"},"hoodie.meta.sync.datahub.dataset.identifier.class")," to customize\nthe URN creation."),(0,r.yg)("h3",{id:"example"},"Example"),(0,r.yg)("p",null,"The following shows an example configuration to run ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"DataHubSyncTool"),"."),(0,r.yg)("p",null,"In addition to ",(0,r.yg)("inlineCode",{parentName:"p"},"hudi-utilities-bundle")," that contains ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),", you also add ",(0,r.yg)("inlineCode",{parentName:"p"},"hudi-datahub-sync-bundle")," to\nthe classpath."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"spark-submit --master yarn \\\n--jars /opt/hudi-datahub-sync-bundle-0.12.1.jar \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.12.1.jar \\\n--target-table mytable \\\n# ... other HoodieDeltaStreamer's configs\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.sync.datahub.DataHubSyncTool \\\n--hoodie-conf hoodie.meta.sync.datahub.emitter.server=http://url-to-datahub-instance:8080 \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydb \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n")))}d.isMDXComponent=!0}}]);