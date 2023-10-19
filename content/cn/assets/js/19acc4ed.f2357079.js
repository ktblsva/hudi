"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[65665],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,f=p["".concat(o,".").concat(m)]||p[m]||d[m]||l;return a?r.createElement(f,s(s({ref:t},c),{},{components:a})):r.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,s=new Array(l);s[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:n,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4950:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));a(26396),a(58215);const l={title:"Release 0.13.1",sidebar_position:2,layout:"releases",toc:!0,last_modified_at:new Date("2023-05-25T21:00:00.000Z")},s=void 0,i={unversionedId:"release-0.13.1",id:"release-0.13.1",title:"Release 0.13.1",description:"Release 0.13.1 (docs)",source:"@site/releases/release-0.13.1.md",sourceDirName:".",slug:"/release-0.13.1",permalink:"/cn/releases/release-0.13.1",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Release 0.13.1",sidebar_position:2,layout:"releases",toc:!0,last_modified_at:"2023-05-25T21:00:00.000Z"},sidebar:"releases",previous:{title:"Release 0.14.0",permalink:"/cn/releases/release-0.14.0"},next:{title:"Release 0.12.3",permalink:"/cn/releases/release-0.12.3"}},o=[{value:"Release 0.13.1 (docs)",id:"release-0131-docs",children:[],level:2},{value:"Migration Guide",id:"migration-guide",children:[{value:"Bug fixes",id:"bug-fixes",children:[],level:3}],level:2},{value:"Raw Release Notes",id:"raw-release-notes",children:[],level:2}],u={toc:o},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"release-0131-docs"},(0,n.kt)("a",{parentName:"h2",href:"https://github.com/apache/hudi/releases/tag/release-0.13.1"},"Release 0.13.1")," (",(0,n.kt)("a",{parentName:"h2",href:"/docs/quick-start-guide"},"docs"),")"),(0,n.kt)("h2",{id:"migration-guide"},"Migration Guide"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This release (0.13.1) does not introduce any new table version, thus no migration is needed if you are on 0.13.0."),(0,n.kt)("li",{parentName:"ul"},"If migrating from an older release, please check the migration guide from the previous release notes, specifically\nthe upgrade instructions in ",(0,n.kt)("a",{parentName:"li",href:"/releases/release-0.6.0"},"0.6.0"),",\n",(0,n.kt)("a",{parentName:"li",href:"/releases/release-0.9.0"},"0.9.0"),", ",(0,n.kt)("a",{parentName:"li",href:"/releases/release-0.10.0"},"0.10.0"),",\n",(0,n.kt)("a",{parentName:"li",href:"/releases/release-0.11.0"},"0.11.0"),", and ",(0,n.kt)("a",{parentName:"li",href:"/releases/release-0.12.0"},"0.12.0"),".")),(0,n.kt)("h3",{id:"bug-fixes"},"Bug fixes"),(0,n.kt)("p",null,"0.13.1 release is mainly intended for bug fixes and stability. The fixes span across many components, including"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DeltaStreamer"),(0,n.kt)("li",{parentName:"ul"},"Metadata table and timeline server out of sync issue"),(0,n.kt)("li",{parentName:"ul"},"Table services"),(0,n.kt)("li",{parentName:"ul"},"Spark SQL"),(0,n.kt)("li",{parentName:"ul"},"Presto stability/pref fixes"),(0,n.kt)("li",{parentName:"ul"},"Trino stability/perf fixes"),(0,n.kt)("li",{parentName:"ul"},"Meta Syncs"),(0,n.kt)("li",{parentName:"ul"},"Flink engine"),(0,n.kt)("li",{parentName:"ul"},"Unit, functional, integration tests and CI")),(0,n.kt)("h2",{id:"raw-release-notes"},"Raw Release Notes"),(0,n.kt)("p",null,"The raw release notes are available ",(0,n.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/secure/ReleaseNote.jspa?projectId=12322822&version=12352250"},"here")),(0,n.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"0.13.1 release also contains all the new features and bug fixes from 0.13.0, of which the release notes are ",(0,n.kt)("a",{parentName:"p",href:"/releases/release-0.13.0"},"here")))))}p.isMDXComponent=!0},58215:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294);const n=function(e){let{children:t,hidden:a,className:n}=e;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},26396:(e,t,a)=>{a.d(t,{Z:()=>d});var r=a(87462),n=a(67294),l=a(72389),s=a(79443);const i=function(){const e=(0,n.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var o=a(53810),u=a(86010);const c={tabItem:"tabItem_vU9c"};function p(e){const{lazy:t,block:a,defaultValue:l,values:s,groupId:p,className:d}=e,m=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=s??m.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,o.lx)(f,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===l?l:l??m.find((e=>e.props.default))?.props.value??m[0]?.props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=i(),[y,k]=(0,n.useState)(v),N=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.o5)();if(null!=p){const e=b[p];null!=e&&e!==y&&f.some((t=>t.value===e))&&k(e)}const O=e=>{const t=e.currentTarget,a=N.indexOf(t),r=f[a].value;r!==y&&(w(t),k(r),null!=p&&g(p,r))},x=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]||N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]||N[N.length-1];break}}t?.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":a},d)},f.map((e=>{let{value:t,label:a,attributes:l}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>N.push(e),onKeyDown:x,onFocus:O,onClick:O},l,{className:(0,u.Z)("tabs__item",c.tabItem,l?.className,{"tabs__item--active":y===t})}),a??t)}))),t?(0,n.cloneElement)(m.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},m.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return n.createElement(p,(0,r.Z)({key:String(t)},e))}}}]);