"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[28608],{95788:(e,r,t)=>{t.d(r,{Iu:()=>c,yg:()=>d});var a=t(11504);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),m=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=m(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},f=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=m(t),f=n,d=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return t?a.createElement(d,s(s({ref:r},c),{},{components:t})):a.createElement(d,s({ref:r},c))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:n,s[1]=i;for(var m=2;m<o;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},72628:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(45072),n=(t(11504),t(95788));const o={title:"Transformers",toc:!0},s=void 0,i={unversionedId:"transforms",id:"version-0.12.3/transforms",title:"Transformers",description:"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.",source:"@site/versioned_docs/version-0.12.3/transforms.md",sourceDirName:".",slug:"/transforms",permalink:"/docs/0.12.3/transforms",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.3/transforms.md",tags:[],version:"0.12.3",frontMatter:{title:"Transformers",toc:!0},sidebar:"docs",previous:{title:"Cleaning",permalink:"/docs/0.12.3/hoodie_cleaner"},next:{title:"Marker Mechanism",permalink:"/docs/0.12.3/markers"}},l=[{value:"SQL Query Transformer",id:"sql-query-transformer",children:[],level:3},{value:"SQL File Transformer",id:"sql-file-transformer",children:[],level:3},{value:"Flattening Transformer",id:"flattening-transformer",children:[],level:3},{value:"Chained Transformer",id:"chained-transformer",children:[],level:3},{value:"AWS DMS Transformer",id:"aws-dms-transformer",children:[],level:3},{value:"Custom Transformer Implementation",id:"custom-transformer-implementation",children:[],level:3}],m={toc:l},c="wrapper";function u(e){let{components:r,...t}=e;return(0,n.yg)(c,(0,a.c)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Apache Hudi provides a HoodieTransformer Utility that allows you to perform transformations the source data before writing it to a Hudi table.\nThere are several ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform"},"out-of-the-box"),"\ntransformers available and you can build your own custom transformer class as well."),(0,n.yg)("h3",{id:"sql-query-transformer"},"SQL Query Transformer"),(0,n.yg)("p",null,"You can pass a SQL Query to be executed during write."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.SqlQueryBasedTransformer\n--hoodie-conf hoodie.deltastreamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n")),(0,n.yg)("h3",{id:"sql-file-transformer"},"SQL File Transformer"),(0,n.yg)("p",null,"You can specify a File with a SQL script to be executed during write. The SQL file is configured with this hoodie property:\nhoodie.deltastreamer.transformer.sql.file"),(0,n.yg)("p",null,'The query should reference the source as a table named "\\<SRC',">",'"'),(0,n.yg)("p",null,"The final sql statement result is used as the write payload."),(0,n.yg)("p",null,"Example Spark SQL Query:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-sql"},"CACHE TABLE tmp_personal_trips AS\nSELECT * FROM <SRC> WHERE trip_type='personal_trips';\n\nSELECT * FROM tmp_personal_trips;\n")),(0,n.yg)("h3",{id:"flattening-transformer"},"Flattening Transformer"),(0,n.yg)("p",null,"This transformer can flatten nested objects. It flattens the nested fields in the incoming records by prefixing\ninner-fields with outer-field and _ in a nested fashion. Currently flattening of arrays is not supported."),(0,n.yg)("p",null,"An example schema may look something like the below where name is a nested field of StructType in the original source"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"age as intColumn,address as stringColumn,name.first as name_first,name.last as name_last, name.middle as name_middle\n")),(0,n.yg)("p",null,"Set the config as:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer\n")),(0,n.yg)("h3",{id:"chained-transformer"},"Chained Transformer"),(0,n.yg)("p",null,"If you wish to use multiple transformers together, you can use the Chained transformers to pass multiple to be executed sequentially."),(0,n.yg)("p",null,"Example below first flattens the incoming records and then does sql projection based on the query specified:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.FlatteningTransformer,org.apache.hudi.utilities.transform.SqlQueryBasedTransformer   \n--hoodie-conf hoodie.deltastreamer.transformer.sql=SELECT a.col1, a.col3, a.col4 FROM <SRC> a\n")),(0,n.yg)("h3",{id:"aws-dms-transformer"},"AWS DMS Transformer"),(0,n.yg)("p",null,"This transformer is specific for AWS DMS data. It adds ",(0,n.yg)("inlineCode",{parentName:"p"},"Op")," field with value ",(0,n.yg)("inlineCode",{parentName:"p"},"I")," if the field is not present."),(0,n.yg)("p",null,"Set the config as:"),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-scala"},"--transformer-class org.apache.hudi.utilities.transform.AWSDmsTransformer\n")),(0,n.yg)("h3",{id:"custom-transformer-implementation"},"Custom Transformer Implementation"),(0,n.yg)("p",null,"You can write your own custom transformer by extending ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/tree/master/hudi-utilities/src/main/java/org/apache/hudi/utilities/transform"},"this class")))}u.isMDXComponent=!0}}]);