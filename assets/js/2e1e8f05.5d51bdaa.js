"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[5887],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>p});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(o),p=i,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||r;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},3701:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=o(7462),i=(o(7294),o(3905));o(8209);const r={},a="Introduction to Documentation",s={unversionedId:"documentation/intro-to-docs",id:"documentation/intro-to-docs",title:"Introduction to Documentation",description:"Documentation is a key part of any software project, but it's often",source:"@site/docs/documentation/intro-to-docs.md",sourceDirName:"documentation",slug:"/documentation/intro-to-docs",permalink:"/docs/documentation/intro-to-docs",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/documentation/intro-to-docs.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"External Resources",permalink:"/docs/documentation/external-resources"},next:{title:"Incident Response",permalink:"/docs/incident-response/"}},l={},u=[{value:"Documentation Tips",id:"documentation-tips",level:2},{value:"Make your documentation easy to find",id:"make-your-documentation-easy-to-find",level:3},{value:"Make documents serve a single purpose",id:"make-documents-serve-a-single-purpose",level:3},{value:"Keep your audience in mind always",id:"keep-your-audience-in-mind-always",level:3},{value:"Avoid going overboard with graphics or video",id:"avoid-going-overboard-with-graphics-or-video",level:3},{value:"Keep individual documents short -- but not too short",id:"keep-individual-documents-short----but-not-too-short",level:3},{value:"Get reviews for your documentation",id:"get-reviews-for-your-documentation",level:3},{value:"Miscellaneous",id:"miscellaneous",level:3}],d={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-to-documentation"},"Introduction to Documentation"),(0,i.kt)("p",null,"Documentation is a key part of any software project, but it's often\nsomething that many engineers struggle with even if we recognize its\nimportance. Writing well is just as difficult whether it is code or\ndocs, and both require deliberate effort in order to hone your skills."),(0,i.kt)("p",null,"Documentation has a positive feedback loop -- if you have documentation\nthat is well-written, provides real value, and is easy to find, you're\nmuch more likely to have people work to keep it accurate and up to date.\nIn contrast, if you have documentation that is inaccurate, hard to read,\nand/or hard to find, then people will tend to discount the value of\ndocumentation entirely -- so they are much less likely to treat it as a\nkey component of your project."),(0,i.kt)("h2",{id:"documentation-tips"},"Documentation Tips"),(0,i.kt)("h3",{id:"make-your-documentation-easy-to-find"},"Make your documentation easy to find"),(0,i.kt)("p",null,"Docs that no one knows about or can't find when they need them are\nessentially docs that don't exist. If we want to encourage people to\nwrite good docs, we need to make sure we can model good behavior. Some\nspecific tips for accomplishing this goal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Establish strong norms (if not hard and fast rules) about where\ndocumentation belongs, preferably in no more than two places")," (eg, a\nGit repo for technical docs and a Google Drive for design docs). If\npeople have to look in too many places to find what they are looking\nfor, they will eventually just give up (and it makes it more likely\nyou'll have many different inconsistent documents for the same thing)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Make it easy to find documents in those repos without needing to play\na guessing game with keywords"),' (especially since a search for something\nlike "terraform" or "docker" is probably going to give you too many\nresults to be useful). Provide good tables of contents (they should\nnot be too long) and put related documents close to each other\ntopologically.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Give documents descriptive, non-generic titles."),' Giving a document a\ntitle like "Docker" or "Alerts" becomes increasingly troublesome the\nlarger your project gets -- if you\'re using Docker for three different\napplications and local development, what does the "Docker" document\nrefer to?'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Keep in mind the specific restrictions of your repositories.")," If you\nare using a wiki with a table of contents in the left margin that only\nshows ~20 characters, keep your titles as close to that limit as\npossible. If you are using a Git repo, make sure the filenames for your\nmarkdown documents are also descriptive.")),(0,i.kt)("h3",{id:"make-documents-serve-a-single-purpose"},"Make documents serve a single purpose"),(0,i.kt)("p",null,"A document that tries to do too many things ends up doing none of them\nwell. If you are writing a step-by-step how-to on a specific process,\navoid going into a deep dive on the involved systems. In addition, keeping\nyour documentation focused will mean individual documents will be kept\nshorter, which is important if you want people to be able to read them\neasily and find the information they are looking for."),(0,i.kt)("p",null,'Consider breaking your documentation into a set of distinct categories,\nand make sure the type of document is very clear in the title (so you\ncould title the document "Runbook: Spacecats DB Alerts," for instance).\nUse an ',(0,i.kt)("a",{parentName:"p",href:"/docs/documentation/adr"},"ADR")," to define what these types are -- such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"How-tos")," are step-by-step guides to common procedures intended for\nexecution under normal operation. A reader should be able to execute\nthese steps safely when following the document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Runbooks")," are documents intended to be used in concert with alerts\nthat guide troubleshooting and mitigation responses and should include\ninformation on issues that users may expect with upstream and downstream\nservices. A reader should be able to perform a quick diagnosis of an\nalert's underlying causes, or at least rule out any common issues, with\nthe information provided in the document."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Topical guides")," provide a deep dive into how a specific system or\nservice works, with references to ADRs that illustrate how technical\ndecisions were made on the project. Readers should come away with a\nstrong understanding of how the system works, as well as how to gather\nmore information about the system and its state on their own.")),(0,i.kt)("p",null,'These aren\'t meant to be prescriptive; define your categories in a way\nthat works best for your project. However, whatever you decide, the\ncategories should be clearly defined and focused; notice the "what the\nreader should get from this document" part of the description -- if you\ncannot adequately summarize what a reader is supposed to get from the\ndocument in a single sentence, it is probably too widely scoped.'),(0,i.kt)("h3",{id:"keep-your-audience-in-mind-always"},"Keep your audience in mind always"),(0,i.kt)("p",null,"The most important thing when writing documentation is to remember that\nyou are writing this ",(0,i.kt)("em",{parentName:"p"},"for")," someone. It may be new engineers, it may\nbe people on-call, it may be stakeholders in the C-suite, but whoever they\nare, you intend for ",(0,i.kt)("em",{parentName:"p"},"someone")," to be reading this at some point in the\nfuture."),(0,i.kt)("p",null,"If you aren't keeping this audience in mind throughout the process of writing\nyour docs, then you are going to miss the mark. Writing a document intended\nfor new engineers and assuming a ton of knowledge will severely limit its\nutility. Similarly, writing something intended for project leads and\nspending pages defining common terms they're already familiar with will\nprobably cause them to lose patience and start to skim things over."),(0,i.kt)("h3",{id:"avoid-going-overboard-with-graphics-or-video"},"Avoid going overboard with graphics or video"),(0,i.kt)("p",null,"Often we'll be tempted to add lots of screenshots, diagrams, or other\ngraphics to documentation to try and make things more clear. A well-placed\ngraphic can help -- but too many will make the upkeep of your documentation\ntoo difficult. It is ",(0,i.kt)("em",{parentName:"p"},"much")," more difficult to edit a graphic (and videos\neven more so) than to edit text, so use them only when they're worth the\nadded cost in maintainability."),(0,i.kt)("p",null,"In addition, adding lots of graphics will make it harder to read the\ntext. If people cannot follow from one paragraph to the next (seeing them\nboth on the screen at the same time), this is especially difficult. If\nyou need to use large graphics, use thumbnails and link to the larger\nversion to prevent them from being too distracting. Graphics can also\nmake your docs less accessible, so captions and alt text are important."),(0,i.kt)("h3",{id:"keep-individual-documents-short----but-not-too-short"},"Keep individual documents short -- but not too short"),(0,i.kt)("p",null,'There\'s nothing worse than trying to find the one paragraph you need from\na 20 page document. In order to avoid this, we should keep individual\ndocuments short and focused. Generally, anything more than 4 "pages" (ie,\nyou would need to scroll four full screens to see the whole thing) is going\nto feel "long" to most readers -- if you go over this length, be aware that\na lot of people will resist reading this documentation in a single sitting.\nThis might be acceptable for a thorough technical document, but it\'s not\ngreat for something you\'re expecting people to refer to regularly.'),(0,i.kt)("p",null,"If your document is something people are going to have to refer to in a\ncrisis, you should consider keeping it even shorter -- no more than two\npages. Following the other tips on this page will help you keep your\ndocuments short and focused."),(0,i.kt)("p",null,"One warning -- if you link to other documents in yours to keep your\ndocument shorter, try to avoid sending people down a Wikipedia-esque\nlink hole. If you can summarize the information you want people to get\nfrom the other document in a sentence or two, you should try to do that\n(in addition to providing the link for further exploration)."),(0,i.kt)("h3",{id:"get-reviews-for-your-documentation"},"Get reviews for your documentation"),(0,i.kt)("p",null,"You wouldn't want to put code in production without a thorough code\nreview and testing -- you shouldn't expect people to use your documentation\nbefore it gets a thorough review either. Some tips for reviewing docs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Junior members of your team are great people to have review your docs,\nsince they will likely be using them the most. They ",(0,i.kt)("em",{parentName:"li"},"aren't")," usually the\nbest people to ",(0,i.kt)("em",{parentName:"li"},"write")," docs though, since they have the least context\nfor them."),(0,i.kt)("li",{parentName:"ul"},"For step-by-step guides, try running the commands. Do they work? Is it\nsafe to run them? They should ",(0,i.kt)("em",{parentName:"li"},"not")," use real people's usernames or\nother problems if someone just cut-and-pastes the command!"),(0,i.kt)("li",{parentName:"ul"},"Try reading paragraphs out loud. Does the language feel awkward or\nambiguous?"),(0,i.kt)("li",{parentName:"ul"},"If you're the writer, have the reviewer tell you what they took away\nfrom the document -- is it what you wanted them to know? Did they come\naway with a good mental model of the system you described?")),(0,i.kt)("h3",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"A few other short pieces of advice you may find useful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you use graphics, write the caption first, then make sure that the\ngraphic represents what you want to convey."),(0,i.kt)("li",{parentName:"ul"},"Lists and tables can be a good way to present information people need\nin a hurry -- they are easier to digest than paragraphs of text (but\nmay not be best for nuanced information)."),(0,i.kt)("li",{parentName:"ul"},'Use active voice instead of passive voice whenever possible ("do this\nthing" not "this thing must be done").'),(0,i.kt)("li",{parentName:"ul"},"Put conditionals ",(0,i.kt)("em",{parentName:"li"},"before"),' imperatives to prevent people from doing\nsomething without realizing when they shouldn\'t ("If not Y, do X", not\n"do X if not Y").')))}c.isMDXComponent=!0},8209:(e,t,o)=>{o(7294)}}]);