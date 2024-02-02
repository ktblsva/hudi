"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[89432],{95788:(e,t,o)=>{o.d(t,{Iu:()=>s,yg:()=>p});var n=o(11504);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=l(o),y=r,p=u["".concat(c,".").concat(y)]||u[y]||g[y]||i;return o?n.createElement(p,a(a({ref:t},s),{},{components:o})):n.createElement(p,a({ref:t},s))}));function p(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=y;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[u]="string"==typeof e?e:r,a[1]=d;for(var l=2;l<i;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},54784:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var n=o(45072),r=(o(11504),o(95788));const i={title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},a=void 0,d={unversionedId:"gcp_bigquery",id:"version-0.13.1/gcp_bigquery",title:"Google BigQuery",description:"Hudi tables can be queried from Google Cloud BigQuery as external tables. As of",source:"@site/versioned_docs/version-0.13.1/gcp_bigquery.md",sourceDirName:".",slug:"/gcp_bigquery",permalink:"/cn/docs/0.13.1/gcp_bigquery",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.13.1/gcp_bigquery.md",tags:[],version:"0.13.1",frontMatter:{title:"Google BigQuery",keywords:["hudi","gcp","bigquery"],summary:"Introduce BigQuery integration in Hudi."},sidebar:"docs",previous:{title:"Hive Metastore",permalink:"/cn/docs/0.13.1/syncing_metastore"},next:{title:"Bootstrapping",permalink:"/cn/docs/0.13.1/migration_guide"}},c=[{value:"Configurations",id:"configurations",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],l={toc:c},s="wrapper";function u(e){let{components:t,...o}=e;return(0,r.yg)(s,(0,n.c)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Hudi tables can be queried from ",(0,r.yg)("a",{parentName:"p",href:"https://cloud.google.com/bigquery"},"Google Cloud BigQuery")," as external tables. As of\nnow, the Hudi-BigQuery integration only works for hive-style partitioned Copy-On-Write tables."),(0,r.yg)("h2",{id:"configurations"},"Configurations"),(0,r.yg)("p",null,"Hudi uses ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncTool")," to sync tables. It works with ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer")," via\nsetting sync tool class. A few BigQuery-specific configurations are required."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:"left"},"Config"),(0,r.yg)("th",{parentName:"tr",align:"left"},"Notes"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.project_id")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The target Google Cloud project")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.dataset_name")),(0,r.yg)("td",{parentName:"tr",align:"left"},"BigQuery dataset name; create before running the sync tool")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.dataset_location")),(0,r.yg)("td",{parentName:"tr",align:"left"},"Region info of the dataset; same as the GCS bucket that stores the Hudi table")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.source_uri")),(0,r.yg)("td",{parentName:"tr",align:"left"},"A wildcard path pattern pointing to the first level partition; make sure to include the partition key.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.source_uri_prefix")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The common prefix of the ",(0,r.yg)("inlineCode",{parentName:"td"},"source_uri"),", usually it's the path to the Hudi table, trailing slash does not matter.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:"left"},(0,r.yg)("inlineCode",{parentName:"td"},"hoodie.gcp.bigquery.sync.base_path")),(0,r.yg)("td",{parentName:"tr",align:"left"},"The usual basepath config for Hudi table.")))),(0,r.yg)("p",null,"Refer to ",(0,r.yg)("inlineCode",{parentName:"p"},"org.apache.hudi.gcp.bigquery.BigQuerySyncConfig")," for the complete configuration list."),(0,r.yg)("p",null,"In addition to the BigQuery-specific configs, set the following Hudi configs to write the Hudi table in the desired way."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"hoodie.datasource.write.hive_style_partitioning = 'true'\nhoodie.datasource.write.drop.partition.columns  = 'true'\nhoodie.partition.metafile.use.base.format       = 'true'\n")),(0,r.yg)("h2",{id:"example"},"Example"),(0,r.yg)("p",null,"Below shows an example for running ",(0,r.yg)("inlineCode",{parentName:"p"},"BigQuerySyncTool")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"HoodieDeltaStreamer"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-shell"},"spark-submit --master yarn \\\n--packages com.google.cloud:google-cloud-bigquery:2.10.4 \\\n--jars /opt/hudi-gcp-bundle-0.13.1.jar \\\n--class org.apache.hudi.utilities.deltastreamer.HoodieDeltaStreamer \\\n/opt/hudi-utilities-bundle_2.12-0.13.1.jar \\\n--target-base-path gs://my-hoodie-table/path \\\n--target-table mytable \\\n--table-type COPY_ON_WRITE \\\n--base-file-format PARQUET \\\n# ... other deltastreamer options\n--enable-sync \\\n--sync-tool-classes org.apache.hudi.gcp.bigquery.BigQuerySyncTool \\\n--hoodie-conf hoodie.deltastreamer.source.dfs.root=gs://my-source-data/path \\\n--hoodie-conf hoodie.gcp.bigquery.sync.project_id=hudi-bq \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_name=rxusandbox \\\n--hoodie-conf hoodie.gcp.bigquery.sync.dataset_location=asia-southeast1 \\\n--hoodie-conf hoodie.gcp.bigquery.sync.table_name=mytable \\\n--hoodie-conf hoodie.gcp.bigquery.sync.base_path=gs://rxusandbox/testcases/stocks/data/target/${NOW} \\\n--hoodie-conf hoodie.gcp.bigquery.sync.partition_fields=year,month,day \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri=gs://my-hoodie-table/path/year=* \\\n--hoodie-conf hoodie.gcp.bigquery.sync.source_uri_prefix=gs://my-hoodie-table/path/ \\\n--hoodie-conf hoodie.gcp.bigquery.sync.use_file_listing_from_metadata=true \\\n--hoodie-conf hoodie.gcp.bigquery.sync.assume_date_partitioning=false \\\n--hoodie-conf hoodie.datasource.hive_sync.mode=jdbc \\\n--hoodie-conf hoodie.datasource.hive_sync.jdbcurl=jdbc:hive2://localhost:10000 \\\n--hoodie-conf hoodie.datasource.hive_sync.skip_ro_suffix=true \\\n--hoodie-conf hoodie.datasource.hive_sync.ignore_exceptions=false \\\n--hoodie-conf hoodie.datasource.hive_sync.database=mydataset \\\n--hoodie-conf hoodie.datasource.hive_sync.table=mytable \\\n--hoodie-conf hoodie.datasource.write.recordkey.field=mykey \\\n--hoodie-conf hoodie.datasource.write.partitionpath.field=year,month,day \\\n--hoodie-conf hoodie.datasource.write.precombine.field=ts \\\n--hoodie-conf hoodie.datasource.write.keygenerator.type=COMPLEX \\\n--hoodie-conf hoodie.datasource.write.hive_style_partitioning=true \\\n--hoodie-conf hoodie.datasource.write.drop.partition.columns=true \\\n--hoodie-conf hoodie.partition.metafile.use.base.format=true \\\n--hoodie-conf hoodie.metadata.enable=true \\\n")),(0,r.yg)("p",null,"After run, the sync tool will create 2 tables and 1 view in the target dataset in BigQuery. The tables and the view\nshare the same name prefix, which is taken from the Hudi table name. Query the view for the same results as querying the\nCopy-on-Write Hudi table."))}u.isMDXComponent=!0}}]);