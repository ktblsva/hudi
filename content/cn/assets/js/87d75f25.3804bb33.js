"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[70953],{40061:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"writing_tables_streaming_writes","title":"Streaming Writes","description":"Spark Streaming","source":"@site/versioned_docs/version-1.0.0/writing_tables_streaming_writes.md","sourceDirName":".","slug":"/writing_tables_streaming_writes","permalink":"/cn/docs/writing_tables_streaming_writes","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/writing_tables_streaming_writes.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Streaming Writes","keywords":["hudi","spark","flink","streaming","processing"],"last_modified_at":"2024-03-13T19:59:57.000Z"},"sidebar":"docs","previous":{"title":"\u5199\u5165 Hudi \u6570\u636e\u96c6","permalink":"/cn/docs/writing_data"},"next":{"title":"SQL Queries","permalink":"/cn/docs/sql_queries"}}');var r=a(74848),i=a(28453),s=a(11470),o=a(19365);const l={title:"Streaming Writes",keywords:["hudi","spark","flink","streaming","processing"],last_modified_at:new Date("2024-03-13T19:59:57.000Z")},u=void 0,c={},d=[{value:"Spark Streaming",id:"spark-streaming",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"spark-streaming",children:"Spark Streaming"}),"\n",(0,r.jsx)(t.p,{children:"You can write Hudi tables using spark's structured streaming."}),"\n",(0,r.jsxs)(s.A,{groupId:"programming-language",defaultValue:"python",values:[{label:"Scala",value:"scala"},{label:"Python",value:"python"}],children:[(0,r.jsx)(o.A,{value:"scala",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-scala",children:'// spark-shell\n// prepare to stream write to new table\nimport org.apache.spark.sql.streaming.Trigger\n\nval streamingTableName = "hudi_trips_cow_streaming"\nval baseStreamingPath = "file:///tmp/hudi_trips_cow_streaming"\nval checkpointLocation = "file:///tmp/checkpoints/hudi_trips_cow_streaming"\n\n// create streaming df\nval df = spark.readStream.\n        format("hudi").\n        load(basePath)\n\n// write stream to new hudi table\ndf.writeStream.format("hudi").\n  options(getQuickstartWriteConfigs).\n  option("hoodie.datasource.write.precombine.field", "ts").\n  option("hoodie.datasource.write.recordkey.field", "uuid").\n  option("hoodie.datasource.write.partitionpath.field", "partitionpath").\n  option("hoodie.table.name", streamingTableName).\n  outputMode("append").\n  option("path", baseStreamingPath).\n  option("checkpointLocation", checkpointLocation).\n  trigger(Trigger.Once()).\n  start()\n\n'})})}),(0,r.jsx)(o.A,{value:"python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"# pyspark\n# prepare to stream write to new table\nstreamingTableName = \"hudi_trips_cow_streaming\"\nbaseStreamingPath = \"file:///tmp/hudi_trips_cow_streaming\"\ncheckpointLocation = \"file:///tmp/checkpoints/hudi_trips_cow_streaming\"\n\nhudi_streaming_options = {\n    'hoodie.table.name': streamingTableName,\n    'hoodie.datasource.write.recordkey.field': 'uuid',\n    'hoodie.datasource.write.partitionpath.field': 'partitionpath',\n    'hoodie.datasource.write.table.name': streamingTableName,\n    'hoodie.datasource.write.operation': 'upsert',\n    'hoodie.datasource.write.precombine.field': 'ts',\n    'hoodie.upsert.shuffle.parallelism': 2,\n    'hoodie.insert.shuffle.parallelism': 2\n}\n\n# create streaming df\ndf = spark.readStream \n    .format(\"hudi\") \n    .load(basePath)\n\n# write stream to new hudi table\ndf.writeStream.format(\"hudi\") \n    .options(**hudi_streaming_options) \n    .outputMode(\"append\") \n    .option(\"path\", baseStreamingPath) \n    .option(\"checkpointLocation\", checkpointLocation) \n    .trigger(once=True) \n    .start()\n\n"})})})]})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},19365:(e,t,a)=>{a.d(t,{A:()=>s});a(96540);var n=a(34164);const r={tabItem:"tabItem_Ymn6"};var i=a(74848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:t})}},11470:(e,t,a)=>{a.d(t,{A:()=>y});var n=a(96540),r=a(34164),i=a(23104),s=a(56347),o=a(205),l=a(57485),u=a(31682),c=a(70679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=h({queryString:a,groupId:r}),[f,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),b=(()=>{const e=u??f;return m({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(74848);function w(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function _(e){let{lazy:t,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function k(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(_,{...t,...e})]})}function y(e){const t=(0,g.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},28453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(96540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);