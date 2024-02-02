"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[86916],{95788:(e,n,a)=>{a.d(n,{Iu:()=>u,yg:()=>g});var t=a(11504);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},u=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,g=p["".concat(s,".").concat(h)]||p[h]||d[h]||o;return a?t.createElement(g,r(r({ref:n},u),{},{components:a})):t.createElement(g,r({ref:n},u))}));function g(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},10112:(e,n,a)=>{a.r(n),a.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var t=a(45072),i=(a(11504),a(95788));const o={title:"Cleaning",toc:!0},r=void 0,l={unversionedId:"hoodie_cleaner",id:"version-0.12.1/hoodie_cleaner",title:"Cleaning",description:"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides",source:"@site/versioned_docs/version-0.12.1/hoodie_cleaner.md",sourceDirName:".",slug:"/hoodie_cleaner",permalink:"/cn/docs/0.12.1/hoodie_cleaner",editUrl:"https://github.com/apache/hudi/tree/asf-site/website/versioned_docs/version-0.12.1/hoodie_cleaner.md",tags:[],version:"0.12.1",frontMatter:{title:"Cleaning",toc:!0},sidebar:"docs",previous:{title:"Metadata Indexing",permalink:"/cn/docs/0.12.1/metadata_indexing"},next:{title:"Transformers",permalink:"/cn/docs/0.12.1/transforms"}},s=[{value:"Cleaning Retention Policies",id:"cleaning-retention-policies",children:[],level:3},{value:"Configurations",id:"configurations",children:[],level:3},{value:"Run Independently",id:"run-independently",children:[],level:3},{value:"Run Asynchronously",id:"run-asynchronously",children:[],level:3},{value:"CLI",id:"cli",children:[],level:3}],c={toc:s},u="wrapper";function p(e){let{components:n,...a}=e;return(0,i.yg)(u,(0,t.c)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Hoodie Cleaner is a utility that helps you reclaim space and keep your storage costs in check. Apache Hudi provides\nsnapshot isolation between writers and readers by managing multiple files with MVCC concurrency. These file versions\nprovide history and enable time travel and rollbacks, but it is important to manage how much history you keep to balance your costs."),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"/docs/configurations/#hoodiecleanautomatic"},"Automatic Hudi cleaning")," is enabled by default. Cleaning is invoked immediately after\neach commit, to delete older file slices. It's recommended to leave this enabled to ensure metadata and data storage growth is bounded. "),(0,i.yg)("h3",{id:"cleaning-retention-policies"},"Cleaning Retention Policies"),(0,i.yg)("p",null,"When cleaning old files, you should be careful not to remove files that are being actively used by long running queries.\nHudi cleaner currently supports the below cleaning policies to keep a certain number of commits or file versions:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"KEEP_LATEST_COMMITS"),": This is the default policy. This is a temporal cleaning policy that ensures the effect of\nhaving lookback into all the changes that happened in the last X commits. Suppose a writer is ingesting data\ninto a Hudi dataset every 30 minutes and the longest running query can take 5 hours to finish, then the user should\nretain atleast the last 10 commits. With such a configuration, we ensure that the oldest version of a file is kept on\ndisk for at least 5 hours, thereby preventing the longest running query from failing at any point in time. Incremental cleaning is also possible using this policy.\nNumber of commits to retain can be configured by ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.cleaner.commits.retained"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"KEEP_LATEST_FILE_VERSIONS"),": This policy has the effect of keeping N number of file versions irrespective of time.\nThis policy is useful when it is known how many MAX versions of the file does one want to keep at any given time.\nTo achieve the same behaviour as before of preventing long running queries from failing, one should do their calculations\nbased on data patterns. Alternatively, this policy is also useful if a user just wants to maintain 1 latest version of the file.\nNumber of file versions to retain can be configured by ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.cleaner.fileversions.retained"),".")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("p",{parentName:"li"},(0,i.yg)("strong",{parentName:"p"},"KEEP_LATEST_BY_HOURS"),": This policy clean up based on hours.It is simple and useful when knowing that you want to keep files at any given time.\nCorresponding to commits with commit times older than the configured number of hours to be retained are cleaned.\nCurrently you can configure by parameter ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.cleaner.hours.retained"),"."))),(0,i.yg)("h3",{id:"configurations"},"Configurations"),(0,i.yg)("p",null,"For details about all possible configurations and their default values see the ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#Compaction-Configs"},"configuration docs"),"."),(0,i.yg)("h3",{id:"run-independently"},"Run Independently"),(0,i.yg)("p",null,"Hoodie Cleaner can be run as a separate process or along with your data ingestion. In case you want to run it along with\ningesting data, configs are available which enable you to run it ",(0,i.yg)("a",{parentName:"p",href:"https://hudi.apache.org/docs/configurations#hoodiecleanasync"},"synchronously or asynchronously"),"."),(0,i.yg)("p",null,"You can use this command for running the cleaner independently:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar` --help\n        Usage: <main class> [options]\n        Options:\n        --help, -h\n\n        --hoodie-conf\n        Any configuration that can be set in the properties file (using the CLI\n        parameter "--props") can also be passed command line using this\n        parameter. This can be repeated\n        Default: []\n        --props\n        path to properties file on localfs or dfs, with configurations for\n        hoodie client for cleaning\n        --spark-master\n        spark master to use.\n        Default: local[2]\n        * --target-base-path\n        base path for the hoodie table to be cleaner.\n')),(0,i.yg)("p",null,"Some examples to run the cleaner.",(0,i.yg)("br",{parentName:"p"}),"\n","Keep the latest 10 commits"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_COMMITS \\\n  --hoodie-conf hoodie.cleaner.commits.retained=10 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"Keep the latest 3 file versions"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_FILE_VERSIONS \\\n  --hoodie-conf hoodie.cleaner.fileversions.retained=3 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"Clean commits older than 24 hours"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"spark-submit --master local --class org.apache.hudi.utilities.HoodieCleaner `ls packaging/hudi-utilities-bundle/target/hudi-utilities-bundle-*.jar`\\\n  --target-base-path /path/to/hoodie_table \\\n  --hoodie-conf hoodie.cleaner.policy=KEEP_LATEST_BY_HOURS \\\n  --hoodie-conf hoodie.cleaner.hours.retained=24 \\\n  --hoodie-conf hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"Note: The parallelism takes the min value of number of partitions to clean and ",(0,i.yg)("inlineCode",{parentName:"p"},"hoodie.cleaner.parallelism"),"."),(0,i.yg)("h3",{id:"run-asynchronously"},"Run Asynchronously"),(0,i.yg)("p",null,"In case you wish to run the cleaner service asynchronously with writing, please configure the below:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-java"},"hoodie.clean.automatic=true\nhoodie.clean.async=true\n")),(0,i.yg)("h3",{id:"cli"},"CLI"),(0,i.yg)("p",null,"You can also use ",(0,i.yg)("a",{parentName:"p",href:"/docs/cli"},"Hudi CLI")," to run Hoodie Cleaner."),(0,i.yg)("p",null,"CLI provides the below commands for cleaner service:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cleans show")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"clean showpartitions")),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"cleans run"))),(0,i.yg)("p",null,"Example of cleaner keeping the latest 10 commits"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"cleans run --sparkMaster local --hoodieConfigs hoodie.cleaner.policy=KEEP_LATEST_COMMITS hoodie.cleaner.commits.retained=3 hoodie.cleaner.parallelism=200\n")),(0,i.yg)("p",null,"You can find more details and the relevant code for these commands in ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/apache/hudi/blob/master/hudi-cli/src/main/java/org/apache/hudi/cli/commands/CleansCommand.java"},(0,i.yg)("inlineCode",{parentName:"a"},"org.apache.hudi.cli.commands.CleansCommand"))," class."))}p.isMDXComponent=!0}}]);