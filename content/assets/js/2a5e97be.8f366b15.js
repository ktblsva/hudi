"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[4e4],{95788:(e,t,n)=>{n.d(t,{Iu:()=>u,yg:()=>g});var o=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),d=r,g=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15912:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=n(45072),r=(n(11504),n(95788));const i={sidebar_position:2,title:"How to Contribute",toc:!0,last_modified_at:new Date("2020-09-01T19:59:57.000Z")},a=void 0,c={unversionedId:"how-to-contribute",id:"how-to-contribute",title:"How to Contribute",description:"Apache Hudi community welcomes contributions from anyone!",source:"@site/contribute/how-to-contribute.md",sourceDirName:".",slug:"/how-to-contribute",permalink:"/contribute/how-to-contribute",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"How to Contribute",toc:!0,last_modified_at:"2020-09-01T19:59:57.000Z"},sidebar:"contribute",next:{title:"RFC Process",permalink:"/contribute/rfc-process"}},l=[{value:"Become a Committer",id:"become-a-committer",children:[],level:2},{value:"Code Contributions",id:"code-contributions",children:[],level:2},{value:"Accounts",id:"accounts",children:[],level:2}],s={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.c)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Apache Hudi community welcomes contributions from anyone!"),(0,r.yg)("p",null,"Here are few ways, you can get involved."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Ask (and/or) answer questions on our support channels listed above."),(0,r.yg)("li",{parentName:"ul"},"Review code or RFCs"),(0,r.yg)("li",{parentName:"ul"},"Help improve documentation"),(0,r.yg)("li",{parentName:"ul"},"Author blogs on our wiki"),(0,r.yg)("li",{parentName:"ul"},"Testing; Improving out-of-box experience by reporting bugs"),(0,r.yg)("li",{parentName:"ul"},"Share new ideas/directions to pursue or propose a new RFC"),(0,r.yg)("li",{parentName:"ul"},"Contributing code to the project (",(0,r.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/issues/?jql=project+%3D+HUDI+AND+component+%3D+newbie"},"newbie JIRAs"),")")),(0,r.yg)("h2",{id:"become-a-committer"},"Become a Committer"),(0,r.yg)("p",null,"We are always looking for strong contributors, who can become ",(0,r.yg)("a",{parentName:"p",href:"https://www.apache.org/dev/committers"},"committers")," on the project.\nCommitters are chosen by a majority vote of the Apache Hudi ",(0,r.yg)("a",{parentName:"p",href:"https://www.apache.org/foundation/how-it-works#pmc-members"},"PMC"),", after a discussion on their candidacy based on the following criteria (not exclusive/comprehensive)."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Embodies the ASF model code of ",(0,r.yg)("a",{parentName:"li",href:"https://www.apache.org/foundation/policies/conduct"},"conduct")),(0,r.yg)("li",{parentName:"ul"},"Has made significant technical contributions such as submitting PRs, filing bugs, testing, benchmarking, authoring RFCs, providing feedback/code reviews (+ more)."),(0,r.yg)("li",{parentName:"ul"},"Has helped the community over a few months, by answering questions on support channels above and triaging issues/jiras."),(0,r.yg)("li",{parentName:"ul"},"Demonstrates clear code/design ownership of a component or code area (eg: Delta Streamer, Hive/Presto Integration etc)."),(0,r.yg)("li",{parentName:"ul"},"Brought thought leadership and new ideas into the project and evangelized them with the community via conference talks, blog posts."),(0,r.yg)("li",{parentName:"ul"},"Great citizenship in helping with all peripheral (but very critical) work like site maintenance, wiki/jira cleanups and so on."),(0,r.yg)("li",{parentName:"ul"},"Proven commitment to the project by way of upholding all agreed upon processes, conventions and principles of the community.")),(0,r.yg)("h2",{id:"code-contributions"},"Code Contributions"),(0,r.yg)("p",null,'Useful resources for contributing can be found under the "Quick Links" left menu.\nSpecifically, please refer to the detailed ',(0,r.yg)("a",{parentName:"p",href:"/contribute/developer-setup"},"contribution guide"),"."),(0,r.yg)("h2",{id:"accounts"},"Accounts"),(0,r.yg)("p",null,"It's useful to obtain few accounts to be able to effectively contribute to Hudi."),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Github account is needed to send pull requests to Hudi"),(0,r.yg)("li",{parentName:"ul"},"Sign-up/in to the Apache ",(0,r.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira"},"JIRA"),". Then please email the dev mailing list with your username, asking to be added as a contributor to the project. This enables you to assign/be-assigned tickets and comment on them. "),(0,r.yg)("li",{parentName:"ul"},"Sign-up/in to the Apache ",(0,r.yg)("a",{parentName:"li",href:"https://cwiki.apache.org/confluence/signup.action"},"cWiki"),", to be able to contribute to the wiki pages/RFCs.")))}p.isMDXComponent=!0}}]);