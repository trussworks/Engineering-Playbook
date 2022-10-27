"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5764],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),i=n(7294),l=n(6010),r=n(2389),o=n(7392),s=n(7094),p=n(2466);const c="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,n;const{lazy:r,block:u,defaultValue:m,values:h,groupId:g,className:k}=e,y=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,o.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)?t:y[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:N}=(0,s.U)(),[T,D]=(0,i.useState)(f),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,p.o5)();if(null!=g){const e=w[g];null!=e&&e!==T&&v.some((t=>t.value===e))&&D(e)}const M=e=>{const t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==T&&(j(t),D(a),null!=g&&N(g,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var i;const t=x.indexOf(e.currentTarget)-1;n=null!=(i=x[t])?i:x[x.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,l.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},k)},v.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:C,onFocus:M,onClick:M},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),r?(0,i.cloneElement)(y.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,r.Z)();return i.createElement(u,(0,a.Z)({key:String(t)},e))}},4429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var a=n(7462),i=(n(7294),n(3905)),l=n(5488),r=n(5162);const o={title:"0005 - JavaScript dependency management"},s="0005 - JavaScript dependency management",p={unversionedId:"practices/appeng/adrs/javascript-dependency-management",id:"practices/appeng/adrs/javascript-dependency-management",title:"0005 - JavaScript dependency management",description:"Status: Accepted",source:"@site/docs/practices/appeng/adrs/0005-javascript-dependency-management.mdx",sourceDirName:"practices/appeng/adrs",slug:"/practices/appeng/adrs/javascript-dependency-management",permalink:"/docs/practices/appeng/adrs/javascript-dependency-management",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/practices/appeng/adrs/0005-javascript-dependency-management.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"0005 - JavaScript dependency management"},sidebar:"tutorialSidebar",previous:{title:"0004 - Use PostgreSQL as a relational store",permalink:"/docs/practices/appeng/adrs/postgresql-as-relational-store"},next:{title:"Template ADR",permalink:"/docs/practices/appeng/adrs/template"}},c={},d=[{value:"Context",id:"context",level:2},{value:"JavaScript Dependency Management Tool",id:"javascript-dependency-management-tool",level:3},{value:"Decision",id:"decision",level:2},{value:"Dependency resolution",id:"dependency-resolution",level:3},{value:"Dependencies",id:"dependencies",level:4},{value:"Development Dependencies",id:"development-dependencies",level:4},{value:"Peer Dependencies",id:"peer-dependencies",level:4},{value:"Version locking",id:"version-locking",level:4},{value:"Updating dependencies",id:"updating-dependencies",level:3},{value:"What about code changes?",id:"what-about-code-changes",level:4},{value:"Working with files used and generated by JDMT",id:"working-with-files-used-and-generated-by-jdmt",level:3},{value:"Dealing with Lock files as binaries",id:"dealing-with-lock-files-as-binaries",level:4},{value:"Enforcing a particular JDMT",id:"enforcing-a-particular-jdmt",level:4},{value:"Why is this Applicable to the Practice as a Whole",id:"why-is-this-applicable-to-the-practice-as-a-whole",level:2},{value:"When to Not Implement This Decision",id:"when-to-not-implement-this-decision",level:2},{value:"Alternatives Considered",id:"alternatives-considered",level:2},{value:"Links",id:"links",level:2}],u={toc:d};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"0005---javascript-dependency-management"},"0005 - JavaScript dependency management"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Status:")," Accepted"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Date Accepted:")," 07/11/2022"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reviewers:")," #g-frontend"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This ADR uses Tabs to separate specific code or documentation between the\n",(0,i.kt)("inlineCode",{parentName:"p"},"npm-cli")," and the ",(0,i.kt)("inlineCode",{parentName:"p"},"classic yarn-cli"),".")),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,"Truss leverages both ",(0,i.kt)("em",{parentName:"p"},"NPM")," and ",(0,i.kt)("em",{parentName:"p"},"Yarn")," for dependency management for JavaScript\nprojects. While these tools accomplish similar tasks, there are different in\nways they operate. Teams who choose one tool over the other, must have\ndocumentation related to managing dependencies specific for their that team."),(0,i.kt)("p",null,"Truss can provide best practices for how to manage JavaScript dependencies that\ncan be used as a starting point for a team's or project's specific tooling\naround dependency management. This ADR seeks to do just that."),(0,i.kt)("p",null,"The specific areas this ADR covers are the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"dependency resolution",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"version locking"))),(0,i.kt)("li",{parentName:"ul"},"updating dependencies"),(0,i.kt)("li",{parentName:"ul"},"working with files such as: ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"package-lock.json"),", and\n",(0,i.kt)("inlineCode",{parentName:"li"},"yarn.lock"),".")),(0,i.kt)("h3",{id:"javascript-dependency-management-tool"},"JavaScript Dependency Management Tool"),(0,i.kt)("p",null,"Truss recommends that projects use ",(0,i.kt)("em",{parentName:"p"},"NPM")," instead of ",(0,i.kt)("em",{parentName:"p"},"Yarn")," as it is included with\nNode and has commercial support. Projects that leverage ",(0,i.kt)("em",{parentName:"p"},"Yarn")," or any other\n",(0,i.kt)("strong",{parentName:"p"},"JavaScript Dependency Management Tool")," (JDMT from now on) will need to\ndocument this in ways outside of the scope of this ADR."),(0,i.kt)("p",null,"This ADR is not meant to endorse one JDMT over the other and ultimately places the\ndecision on engineering teams using these tools. There are certain ways these\ntools work together and this document will aim to cover those scenarios\nequitably."),(0,i.kt)("h2",{id:"decision"},"Decision"),(0,i.kt)("p",null,"When dealing with JavaScript dependencies and JDMT, there are certain files that\nare always in-play. These files include a package file and a lock file which\nstores the version installed of these packages. This decision covers some of the\nways to do this in either ",(0,i.kt)("em",{parentName:"p"},"Yarn")," or ",(0,i.kt)("em",{parentName:"p"},"NPM"),"."),(0,i.kt)("h3",{id:"dependency-resolution"},"Dependency resolution"),(0,i.kt)("p",null,"Regardless of the JDMT being used, there will always be a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file\nwhich will contain the three different sections for dependencies. When it comes\nto installing dependencies in these sections, ensure that any commands for the\nJDMT leverage the exact version that you are trying to install."),(0,i.kt)(l.Z,{groupID:"JDMT",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="installing all dependencies in NPM"',title:'"installing',all:!0,dependencies:!0,in:!0,'NPM"':!0},">_ npm install\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"classic yarn-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="installing all dependencies in Yarn"',title:'"installing',all:!0,dependencies:!0,in:!0,'Yarn"':!0},">_ yarn\n")))),(0,i.kt)("h4",{id:"dependencies"},"Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listed in ",(0,i.kt)("inlineCode",{parentName:"li"},'"dependencies": {}')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ul"},"needed for the site work"),(0,i.kt)("li",{parentName:"ul"},"example: the site won't work in production without React")),(0,i.kt)(l.Z,{groupID:"JDMT",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="installing react version 1.0.1 exactly using NPM as a dependency"',title:'"installing',react:!0,version:!0,"1.0.1":!0,exactly:!0,using:!0,NPM:!0,as:!0,a:!0,'dependency"':!0},">_ npm install --save-exact react@1.0.1\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"classic yarn-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="installing react version 1.0.1 exactly using Yarn as a dependency"',title:'"installing',react:!0,version:!0,"1.0.1":!0,exactly:!0,using:!0,Yarn:!0,as:!0,a:!0,'dependency"':!0},">_ yarn add react@1.0.1\n")))),(0,i.kt)("h4",{id:"development-dependencies"},"Development Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listed in ",(0,i.kt)("inlineCode",{parentName:"li"},'"devDependencies": {}')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json"),"."),(0,i.kt)("li",{parentName:"ul"},"used in development, but not production"),(0,i.kt)("li",{parentName:"ul"},"example: we use Prettier to format code")),(0,i.kt)(l.Z,{groupID:"JDMT",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="installing prettier version 1.0.1 exactly using NPM as a development dependency"',title:'"installing',prettier:!0,version:!0,"1.0.1":!0,exactly:!0,using:!0,NPM:!0,as:!0,a:!0,development:!0,'dependency"':!0},">_ npm install --save-exact --save-dev prettier@1.0.1\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"classic yarn-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="installing prettier version 1.0.1 exactly using Yarn as a development dependency"',title:'"installing',prettier:!0,version:!0,"1.0.1":!0,exactly:!0,using:!0,Yarn:!0,as:!0,a:!0,development:!0,'dependency"':!0},">_ yarn add --dev prettier@1.0.1\n")))),(0,i.kt)("h4",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"listed in ",(0,i.kt)("inlineCode",{parentName:"li"},'"peerDependencies": {}')," in ",(0,i.kt)("inlineCode",{parentName:"li"},"package.json")),(0,i.kt)("li",{parentName:"ul"},"used to express the compatibility of your package with a host tool or library",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"typically only found in packages intended to be published to ",(0,i.kt)("em",{parentName:"li"},"NPM")))),(0,i.kt)("li",{parentName:"ul"},"works with or alongside another library"),(0,i.kt)("li",{parentName:"ul"},"example: ",(0,i.kt)("inlineCode",{parentName:"li"},"@material-ui/icons")," works with ",(0,i.kt)("inlineCode",{parentName:"li"},"@material-ui/core"))),(0,i.kt)("h4",{id:"version-locking"},"Version locking"),(0,i.kt)("p",null,"You will notice that all of the packages listed are set to specific versions\n(instead of a range using the ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," characters). This is to help ensure\nthat installing dependencies is deterministic and it also means we are in full\ncontrol of all version updates."),(0,i.kt)("p",null,"By default, JDMT will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"^")," caret character for the version which does not\nlead to control of what version get installed when running the JDMT installation\ncommand. Avoid using semantic version ranges when install dependencies by using\nsome of the commands listed above around installation."),(0,i.kt)("h3",{id:"updating-dependencies"},"Updating dependencies"),(0,i.kt)(l.Z,{groupID:"JDMT",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm-cli",mdxType:"TabItem"},(0,i.kt)("p",null,"There is currently no way to accomplish this at the command-line in an\ninteractive manner.")),(0,i.kt)(r.Z,{value:"yarn",label:"classic yarn-cli",mdxType:"TabItem"},(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn upgrade-interactive")," CLI is incredibly useful when updating\ndependencies on a regular basis. Since we are version locking all dependencies,\nrun with the ",(0,i.kt)("inlineCode",{parentName:"p"},"--latest")," flag to update everything to the most recent version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="Using Yarn to upgrade dependencies interactively"',title:'"Using',Yarn:!0,to:!0,upgrade:!0,dependencies:!0,'interactively"':!0},">_ yarn upgrade-interactive --latest\n")),(0,i.kt)("p",null,"This will list all direct dependencies that have new versions, color-coded by\nthe update type (major, minor, patch), as well as a link to the package\nhomepage. You can navigate up/down the list using the up/down arrow keys, select\nwhich packages to update with the SPACE bar, and hit ENTER to install the new\nversions of the selected packages."))),(0,i.kt)("p",null,"It's a good idea to start with low-risk updates and work your way up from there.\nThe goal of doing this on a regular basis is ",(0,i.kt)("em",{parentName:"p"},"not")," to update all packages to\ntheir most recent versions all the time. Most likely you will not be able to do\nthis! The goal should be instead to update as many as possible with as little\neffort as possible. That means starting with packages that are only used during\ndevelopment (",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),"), that have minor or patch updates (which should\nin theory mean no breaking changes), and that can be easily tested with\nautomated checks. This might mean starting with low hanging fruit such as\ntesting tools, linting plugins, type definitions, etc. Gradually work your way\ntowards dependencies used by the application itself & in production."),(0,i.kt)("p",null,"Part of deciding whether or not to update a package should probably involve\nactually looking for the changelog of what the update includes. Depending on the\nlibrary, this can be easy or not to find. Some libraries use GitHub releases to\ntrack versions and changes; others will publish upgrade guides on their\nwebsites; some might stick changes in a ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGELOG.md")," file, and others might\nnot publish changes at all. But knowing ",(0,i.kt)("em",{parentName:"p"},"what")," is actually changing in the code\nwhen you update a package can help immensely with having the confidence that\nnothing will break, as well as knowing what part of the code might be affected\nand what to test."),(0,i.kt)("p",null,"Another tip is to update related packages together. For example, it's often the\ncase that all ",(0,i.kt)("inlineCode",{parentName:"p"},"@storybook")," packages will need to be updated at the same time to\nmaintain compatibility. ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"react-dom")," have the same requirement. This\nis where having a reasonable understanding of ",(0,i.kt)("em",{parentName:"p"},"what")," the packages are and\nhow/why they're used comes into play."),(0,i.kt)("p",null,"An example update path might look like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Update all eslint related packages/plugins",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run the linter to make sure there are no new issues"))),(0,i.kt)("li",{parentName:"ul"},"Update all Jest/testing-library related packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run the tests to make sure there are no new test failures"))),(0,i.kt)("li",{parentName:"ul"},"Update packages related to the compilation/build config (such as Babel,\nTypeScript, etc.)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run the build to make sure it still compiles without errors"))),(0,i.kt)("li",{parentName:"ul"},"Update all Storybook packages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Run Storybook to make sure the build still works"))),(0,i.kt)("li",{parentName:"ul"},"Update production dependencies grouped by feature/function/runtime",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"i.e., ",(0,i.kt)("inlineCode",{parentName:"li"},"next, @opentelemetry, apollo-server"),", etc."),(0,i.kt)("li",{parentName:"ul"},"Run the application in both development & production modes, test manually"),(0,i.kt)("li",{parentName:"ul"},"Run automated tests")))),(0,i.kt)("h4",{id:"what-about-code-changes"},"What about code changes?"),(0,i.kt)("p",null,"What happens when a package update requires code changes? In theory, if\nfollowing strict semantic versioning, patch & minor updates never should.\nHowever, not all packages follow semantic versioning, and also all packages are\n(probably) maintained by humans, who make mistakes. Required changes might fall\nunder any of the following categories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Small, semantic or not functionally different, documented code/API changes"),(0,i.kt)("li",{parentName:"ul"},"More substantial, documented changes that might have a functional impact"),(0,i.kt)("li",{parentName:"ul"},"Undocumented changes needed because of unexpected issues or edge cases")),(0,i.kt)("p",null,"When & how you make these changes can be a gut feeling based on the situation.\nIf an update requires making a small change in a handful of places, that could\nbe easily completed as part of the regular update cadence. If an update requires\nan easy change but one that will cause a diff in many files (such as a renamed\nimport), it might make sense to isolate that on a separate branch. If an update\nrequires upgrading several packages at once, and/or also making substantial code\nchanges, that should probably also be done on its own."),(0,i.kt)("p",null,"Ultimately, the goal is to minimize risk by ensuring that whatever changes you\ndo make can be easily tested, and if an issue is found it's straightforward to\neither debug or roll back from. That all comes down to identifying what\npackage introduced the issue, and how to resolve it. If a change involves\nupdating many packages ",(0,i.kt)("em",{parentName:"p"},"and")," making many code changes at once, that will be\nmuch more difficult."),(0,i.kt)("h3",{id:"working-with-files-used-and-generated-by-jdmt"},"Working with files used and generated by JDMT"),(0,i.kt)("p",null,"When working with either ",(0,i.kt)("em",{parentName:"p"},"Yarn")," or ",(0,i.kt)("em",{parentName:"p"},"NPM"),", there are Lock files that are\ngenerated by the JDMT. These files should be checked into version control. The\nLock files should never be edited directly. If merge conflicts occur, run the\nJDMT command to regenerate the Lock file to resolve conflicts."),(0,i.kt)("p",null,"Lock files prevent updates to both top-level dependencies and the dependencies\nof those dependencies as well. This is one of the main reasons for making sure\nthat these files remain in your version control system."),(0,i.kt)("h4",{id:"dealing-with-lock-files-as-binaries"},"Dealing with Lock files as binaries"),(0,i.kt)("p",null,"Since Lock files should not be edited by hand, it's a good idea to have Git treat them as binary files so that they don't produce any visual diffs. You can achieve this by having a ",(0,i.kt)("inlineCode",{parentName:"p"},".gitattributes")," file define that they are binary files rather than plain text."),(0,i.kt)(l.Z,{groupID:"JDMT",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".gitattributes"',title:'".gitattributes"'},"package-lock.json binary\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"classic yarn-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".gitattributes"',title:'".gitattributes"'},"yarn.lock binary\n")))),(0,i.kt)("h4",{id:"enforcing-a-particular-jdmt"},"Enforcing a particular JDMT"),(0,i.kt)("p",null,"It's important to outline in the project documentation which JDMT is being\nleveraged by the project. Mixing both ",(0,i.kt)("em",{parentName:"p"},"Yarn")," and ",(0,i.kt)("em",{parentName:"p"},"NPM")," is not a good idea. One\nof many ways to enforce one over the other is to have the generated file of the\nJDMT that you want to ignore in the ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," file. This way if someone uses\nthe incorrect JDMT they won't be able to commit the generated Lock file."),(0,i.kt)(l.Z,{groupID:"JDMT",mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"npm",label:"npm-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".gitignore"',title:'".gitignore"'},"# other gitignore directives\n\nyarn.lock\n\n# other gitignore directives\n"))),(0,i.kt)(r.Z,{value:"yarn",label:"classic yarn-cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title=".gitignore"',title:'".gitignore"'},"# other gitignore directives\n\npackage-lock.json\n\n# other gitignore directives\n")))),(0,i.kt)("h2",{id:"why-is-this-applicable-to-the-practice-as-a-whole"},"Why is this Applicable to the Practice as a Whole"),(0,i.kt)("p",null,"This is applicable to the whole practice because JavaScript is a popular\nlanguage with many ways to manage dependencies. With this guidance, Truss teams\nwill be in a much stronger place regarding dependency management and documenting\nthat process within the context of their own projects."),(0,i.kt)("h2",{id:"when-to-not-implement-this-decision"},"When to Not Implement This Decision"),(0,i.kt)("p",null,"There's no need to implement this decision if the project isn't being managed by\na JDMT or doesn't contain any JavaScript."),(0,i.kt)("h2",{id:"alternatives-considered"},"Alternatives Considered"),(0,i.kt)("p",null,"A main option here is to use the defaults that JDMT contain around versioning\nand tooling. This isn't always ideal."),(0,i.kt)("h2",{id:"links"},"Links"),(0,i.kt)("p",null,"This ADR heavily borrows from the following links:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/suzubara/73443debac60ab64c319b7a6ee16aa24"},"Gist by Suz on dependency management using ",(0,i.kt)("em",{parentName:"a"},"Yarn"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://gist.github.com/rswerve/c43d952845b9acc8b7546364aa69cc88"},"Gist by Maz on dependency management using\n",(0,i.kt)("em",{parentName:"a"},"NPM")))))}m.isMDXComponent=!0}}]);