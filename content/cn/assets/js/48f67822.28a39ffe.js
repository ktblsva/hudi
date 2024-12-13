"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[98094],{61959:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"faq_reading_tables","title":"Reading Tables","description":"Does deleted records appear in Hudi\'s incremental query results?","source":"@site/versioned_docs/version-1.0.0/faq_reading_tables.md","sourceDirName":".","slug":"/faq_reading_tables","permalink":"/cn/docs/faq_reading_tables","draft":false,"unlisted":false,"editUrl":"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-1.0.0/faq_reading_tables.md","tags":[],"version":"1.0.0","frontMatter":{"title":"Reading Tables","keywords":["hudi","writing","reading"]},"sidebar":"docs","previous":{"title":"Writing Tables","permalink":"/cn/docs/faq_writing_tables"},"next":{"title":"Table Services","permalink":"/cn/docs/faq_table_services"}}');var a=i(74848),r=i(28453);const o={title:"Reading Tables",keywords:["hudi","writing","reading"]},n="Reading Tables FAQ",d={},l=[{value:"Does deleted records appear in Hudi&#39;s incremental query results?",id:"does-deleted-records-appear-in-hudis-incremental-query-results",level:3},{value:"How do I pass hudi configurations to my beeline Hive queries?",id:"how-do-i-pass-hudi-configurations-to-my-beeline-hive-queries",level:3},{value:"Does Hudi guarantee consistent reads? How to think about read optimized queries?",id:"does-hudi-guarantee-consistent-reads-how-to-think-about-read-optimized-queries",level:3}];function u(e){const t={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"reading-tables-faq",children:"Reading Tables FAQ"})}),"\n",(0,a.jsx)(t.h3,{id:"does-deleted-records-appear-in-hudis-incremental-query-results",children:"Does deleted records appear in Hudi's incremental query results?"}),"\n",(0,a.jsx)(t.p,{children:"Soft Deletes (unlike hard deletes) do appear in the incremental pull query results. So, if you need a mechanism to propagate deletes to downstream tables, you can use Soft deletes."}),"\n",(0,a.jsx)(t.h3,{id:"how-do-i-pass-hudi-configurations-to-my-beeline-hive-queries",children:"How do I pass hudi configurations to my beeline Hive queries?"}),"\n",(0,a.jsxs)(t.p,{children:["If Hudi's input format is not picked the returned results may be incorrect. To ensure correct inputformat is picked, please use ",(0,a.jsx)(t.code,{children:"org.apache.hadoop.hive.ql.io.HiveInputFormat"})," or ",(0,a.jsx)(t.code,{children:"org.apache.hudi.hadoop.hive.HoodieCombineHiveInputFormat"})," for ",(0,a.jsx)(t.code,{children:"hive.input.format"})," config. This can be set like shown below:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",children:"set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat\n"})}),"\n",(0,a.jsx)(t.p,{children:"or"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-plain",children:"set hive.input.format=org.apache.hudi.hadoop.hive.HoodieCombineHiveInputFormat\n"})}),"\n",(0,a.jsx)(t.h3,{id:"does-hudi-guarantee-consistent-reads-how-to-think-about-read-optimized-queries",children:"Does Hudi guarantee consistent reads? How to think about read optimized queries?"}),"\n",(0,a.jsxs)(t.p,{children:["Hudi does offer consistent reads. To read the latest snapshot of a MOR table, a user should use snapshot query. The ",(0,a.jsx)(t.a,{href:"/docs/table_types#query-types",children:"read-optimized queries"})," (targeted for the MOR table ONLY) are an add on benefit to provides users with a practical tradeoff of decoupling writer performance vs query performance, leveraging the fact that most queries query say the most recent data in the table."]}),"\n",(0,a.jsx)(t.p,{children:"Hudi\u2019s read-optimized query is targeted for the MOR table only, with guidance around how compaction should be run to achieve predictable results. In the MOR table, the compaction, which runs every few commits (or \u201cdeltacommit\u201d to be exact for the MOR table) by default, merges the base (parquet) file and corresponding change log files to a new base file within each file group, so that the snapshot query serving the latest data immediately after compaction reads the base files only.\xa0 Similarly, the read-optimized query always reads the base files only as of the latest compaction commit, usually a few commits before the latest commit, which is still a valid table state."}),"\n",(0,a.jsxs)(t.p,{children:["Users must use snapshot queries to read the latest snapshot of a MOR table.\xa0 Popular engines including Spark, Presto, and Hive already support snapshot queries on MOR table and the snapshot query support in Trino is in progress (the ",(0,a.jsx)(t.a,{href:"https://github.com/trinodb/trino/pull/14786",children:"PR"})," is under review).\xa0 Note that the read-optimized query does not apply to the COW table."]})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},28453:(e,t,i)=>{i.d(t,{R:()=>o,x:()=>n});var s=i(96540);const a={},r=s.createContext(a);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);