"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[37600],{95788:(e,a,t)=>{t.d(a,{Iu:()=>d,yg:()=>y});var r=t(11504);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function n(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),c=function(e){var a=r.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},d=function(e){var a=c(e.components);return r.createElement(u.Provider,{value:a},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),s=c(t),m=i,y=s["".concat(u,".").concat(m)]||s[m]||p[m]||o;return t?r.createElement(y,l(l({ref:a},d),{},{components:t})):r.createElement(y,l({ref:a},d))}));function y(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=m;var n={};for(var u in a)hasOwnProperty.call(a,u)&&(n[u]=a[u]);n.originalType=e,n[s]="string"==typeof e?e:i,l[1]=n;for(var c=2;c<o;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},15672:(e,a,t)=>{t.r(a),t.d(a,{contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>n,toc:()=>u});var r=t(45072),i=(t(11504),t(95788));const o={title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},l=void 0,n={unversionedId:"precommit_validator",id:"version-0.11.1/precommit_validator",title:"Data Quality",description:"Apache Hudi has what are called Pre-Commit Validators that allow you to validate that your data meets certain data quality",source:"@site/versioned_docs/version-0.11.1/precommit_validator.md",sourceDirName:".",slug:"/precommit_validator",permalink:"/docs/0.11.1/precommit_validator",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.11.1/precommit_validator.md",tags:[],version:"0.11.1",frontMatter:{title:"Data Quality",keywords:["hudi","quality","expectations","pre-commit validator"]},sidebar:"docs",previous:{title:"Exporter",permalink:"/docs/0.11.1/snapshot_exporter"},next:{title:"Basic Configurations",permalink:"/docs/0.11.1/basic_configurations"}},u=[{value:"SQL Query Single Result",id:"sql-query-single-result",children:[],level:2},{value:"SQL Query Equality",id:"sql-query-equality",children:[],level:2},{value:"SQL Query Inequality",id:"sql-query-inequality",children:[],level:2},{value:"Extend Custom Validator",id:"extend-custom-validator",children:[],level:2}],c={toc:u},d="wrapper";function s(e){let{components:a,...t}=e;return(0,i.yg)(d,(0,r.c)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Apache Hudi has what are called ",(0,i.yg)("strong",{parentName:"p"},"Pre-Commit Validators")," that allow you to validate that your data meets certain data quality\nexpectations as you are writing with DeltaStreamer or Spark Datasource writers."),(0,i.yg)("p",null,"To configure pre-commit validators, use this setting ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.precommit.validators=<comma separated list of validator class names>"),"."),(0,i.yg)("p",null,"Example:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'spark.write.format("hudi")\n    .option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator")\n')),(0,i.yg)("p",null,"Today you can use any of these validators and even have the flexibility to extend your own:"),(0,i.yg)("h2",{id:"sql-query-single-result"},"SQL Query Single Result"),(0,i.yg)("p",null,"Can be used to validate that a query on the table results in a specific value."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQuerySingleResultPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator"))),(0,i.yg)("p",null,"Multiple queries separated by ';' delimiter are supported.Expected result is included as part of query separated by '#'. Example query: ",(0,i.yg)("inlineCode",{parentName:"p"},"query1#result1;query2#result2")),(0,i.yg)("p",null,'Example, "expect exactly 0 null rows":'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQuerySingleResultPreCommitValidator").\n  option("hoodie.precommit.validators.single.value.sql.queries", "select count(*) from <TABLE_NAME> where col=null#0").\n  save(basePath)\n')),(0,i.yg)("h2",{id:"sql-query-equality"},"SQL Query Equality"),(0,i.yg)("p",null,"Can be used to validate for equality of rows before and after the commit."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryEqualityPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator"))),(0,i.yg)("p",null,'Example, "expect no change of null rows with this commit":'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryEqualityPreCommitValidator").\n  option("hoodie.precommit.validators.equality.sql.queries", "select count(*) from <TABLE_NAME> where col=null").\n  save(basePath)\n')),(0,i.yg)("h2",{id:"sql-query-inequality"},"SQL Query Inequality"),(0,i.yg)("p",null,"Can be used to validate for inequality of rows before and after the commit."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SqlQueryInequalityPreCommitValidator.java"},"org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator"))),(0,i.yg)("p",null,'Example, "expect there must be a change of null rows with this commit":'),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-scala"},'import org.apache.hudi.config.HoodiePreCommitValidatorConfig._\n\ndf.write.format("hudi").mode(Overwrite).\n  option(TABLE_NAME, tableName).\n  option("hoodie.precommit.validators", "org.apache.hudi.client.validator.SqlQueryInequalityPreCommitValidator").\n  option("hoodie.precommit.validators.inequality.sql.queries", "select count(*) from <TABLE_NAME> where col=null").\n  save(basePath)\n')),(0,i.yg)("h2",{id:"extend-custom-validator"},"Extend Custom Validator"),(0,i.yg)("p",null,"Users can also provide their own implementations by extending the abstract class ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/bf5a52e51bbeaa089995335a0a4c55884792e505/hudi-client/hudi-spark-client/src/main/java/org/apache/hudi/client/validator/SparkPreCommitValidator.java"},"SparkPreCommitValidator"),"\nand overriding this method"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"void validateRecordsBeforeAndAfter(Dataset<Row> before, \n                                   Dataset<Row> after, \n                                   Set<String> partitionsAffected)\n")))}s.isMDXComponent=!0}}]);