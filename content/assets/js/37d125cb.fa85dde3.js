"use strict";(self.webpackChunkhudi=self.webpackChunkhudi||[]).push([[9040],{95788:(e,t,n)=>{n.d(t,{Iu:()=>d,yg:()=>g});var a=n(11504);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,g=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95956:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(45072),r=(n(11504),n(95788));const i={sidebar_position:3,title:"RFC Process",toc:!0,last_modified_at:new Date("2020-09-01T19:59:57.000Z")},o=void 0,l={unversionedId:"rfc-process",id:"rfc-process",title:"RFC Process",description:"This page describes a Request For Comments (RFC) process for proposing any major change to Hudi or even just sharing designs/vision for the project to get early feedback.",source:"@site/contribute/rfc-process.md",sourceDirName:".",slug:"/rfc-process",permalink:"/contribute/rfc-process",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"RFC Process",toc:!0,last_modified_at:"2020-09-01T19:59:57.000Z"},sidebar:"contribute",previous:{title:"How to Contribute",permalink:"/contribute/how-to-contribute"},next:{title:"Developer Setup",permalink:"/contribute/developer-setup"}},s=[{value:"When do I need an RFC ?",id:"when-do-i-need-an-rfc-",children:[],level:2},{value:"Who can initiate the RFC ?",id:"who-can-initiate-the-rfc-",children:[],level:2},{value:"How do I author an RFC ?",id:"how-do-i-author-an-rfc-",children:[{value:"Proposing the RFC",id:"proposing-the-rfc",children:[],level:3},{value:"Writing the RFC",id:"writing-the-rfc",children:[],level:3},{value:"Keeping it upto date",id:"keeping-it-upto-date",children:[],level:3}],level:2}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(d,(0,a.c)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"This page describes a Request For Comments (RFC) process for proposing any major change to Hudi or even just sharing designs/vision for the project to get early feedback."),(0,r.yg)("h2",{id:"when-do-i-need-an-rfc-"},"When do I need an RFC ?"),(0,r.yg)("p",null,"Whenever a feature is considered to be causing a \u201cmajor change\u201d in the project, such a feature requires an RFC.\nAny of the following can be considered a major change:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Any new component, module or code that introduces a new concept into the project or alters the behavior of an existing one"),(0,r.yg)("li",{parentName:"ul"},"Any large code refactor to address general code re-usability and structure. There is no strong definition for \u201cLarge\u201d and whether or not the refactor requires an RFC can be discussed on the @dev mailing list."),(0,r.yg)("li",{parentName:"ul"},"Any change that impacts the underlying storage layout/format. e.g changes to the HoodieLogFormat, timeline layout version."),(0,r.yg)("li",{parentName:"ul"},"New indexing schemes, New deltastreamer sources, New platform services."),(0,r.yg)("li",{parentName:"ul"},"Any change that impacts the public interfaces of the project.")),(0,r.yg)("p",null,"It can also be used to describe large direction shifts to the project (e.g. Flink support) or new green field ideas (e.g. Hudi for ML flows)\nNot all RFCs require the same effort and detail. For critical changes such as the File Format and Index, we need to deeply discuss the trade-offs of\nmaking such a change and how it impacts current and new users. Any changes to such components affect the correctness of a dataset (backwards and forward versions supported).\nOther changes such as code refactor might require more details around abstractions but as long as there is good test coverage, a migration plan section can be avoided.\nIt may happen that you are making a bunch of changes across many components to enable an already existing feature. For example, introducing a new config along with reporting metrics,\nenhancing a tool and also improving documentation and the on-boarding experience. If all of these changes are linked to a general feature/idea, these can be grouped together under a single RFC."),(0,r.yg)("h2",{id:"who-can-initiate-the-rfc-"},"Who can initiate the RFC ?"),(0,r.yg)("p",null,"Anyone can initiate an RFC. Please note that if you are unsure of whether a feature already exists or if there is a plan already to implement a similar one, always start a discussion thread on the dev mailing list before initiating a RFC. This will help everyone get the right context and optimize everyone\u2019s usage of time."),(0,r.yg)("h2",{id:"how-do-i-author-an-rfc-"},"How do I author an RFC ?"),(0,r.yg)("h3",{id:"proposing-the-rfc"},"Proposing the RFC"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"First, start a discussion thread on the Apache Hudi dev mailing list, by sending an email to ",(0,r.yg)("inlineCode",{parentName:"li"},"dev@hudi.apache.org")," with subject line ",(0,r.yg)("inlineCode",{parentName:"li"},"DISCUSS <proposed idea>"),".\nUse this discussion thread to get an agreement from people on the mailing list that your proposed idea necessitates an RFC."),(0,r.yg)("li",{parentName:"ol"},"File an umbrella JIRA for the RFC with the label ",(0,r.yg)("inlineCode",{parentName:"li"},"hudi-umbrellas")," added to it. See an ",(0,r.yg)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/HUDI-1292"},"example JIRA"),"."),(0,r.yg)("li",{parentName:"ol"},"Raise a PR, adding an entry to the table at ",(0,r.yg)("inlineCode",{parentName:"li"},"rfc/README.md"),", picking the next available RFC number. Hudi committers will help land that.")),(0,r.yg)("h3",{id:"writing-the-rfc"},"Writing the RFC"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Create a folder ",(0,r.yg)("inlineCode",{parentName:"li"},"rfc-<number>")," under ",(0,r.yg)("inlineCode",{parentName:"li"},"rfc")," folder, where ",(0,r.yg)("inlineCode",{parentName:"li"},"<number>")," is replaced by the actual RFC number used."),(0,r.yg)("li",{parentName:"ol"},"Copy the rfc template file ",(0,r.yg)("inlineCode",{parentName:"li"},"rfc/template.md")," to ",(0,r.yg)("inlineCode",{parentName:"li"},"rfc/rfc-<number>/rfc-<number>.md")," and proceed to draft your design document."),(0,r.yg)("li",{parentName:"ol"},"[Optional]"," Place any images used by the same directory using the ",(0,r.yg)("inlineCode",{parentName:"li"},"![alt text](./image.png)")," markdown syntax."),(0,r.yg)("li",{parentName:"ol"},"Add at least 2 PMC members as approvers (you can find their github usernames ",(0,r.yg)("a",{parentName:"li",href:"/contribute/team"},"here"),"). You are free to add any number of dev members to your reviewers list."),(0,r.yg)("li",{parentName:"ol"},"Raise a PR against the master branch with ",(0,r.yg)("inlineCode",{parentName:"li"},"[RFC-<number>]")," in the title and work through feedback, until the RFC approved (by approving the Github PR itself)"),(0,r.yg)("li",{parentName:"ol"},'Before landing the PR, please change the status to "IN PROGRESS" under ',(0,r.yg)("inlineCode",{parentName:"li"},"rfc/README.md")," and keep it maintained as you go about implementing, completing or even abandoning.")),(0,r.yg)("h3",{id:"keeping-it-upto-date"},"Keeping it upto date"),(0,r.yg)("p",null,'RFC process is by no-means is an attempt at the "waterfall" software development process.\nWe recognize that design can be an iterative process as well, often evolving together with implementation. '),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Please ensure your code PRs are labelled with a ",(0,r.yg)("inlineCode",{parentName:"li"},"[RFC-<number>]")," title, in addition to the JIRA number."),(0,r.yg)("li",{parentName:"ol"},"As your implementation changes over time, you will update the RFCs and keep them in-sync. Project maintainers could point out these opportunities during code reviews."),(0,r.yg)("li",{parentName:"ol"},'During the final landing of all goals of the RFC, the status changes to "COMPLETED"')))}p.isMDXComponent=!0}}]);