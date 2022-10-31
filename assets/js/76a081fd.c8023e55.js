"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8660],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),p=i,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(f,o(o({ref:t},h),{},{components:n})):a.createElement(f,o({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2101:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));n(8209);const r={},o="InfraSec Practice Charter",s={unversionedId:"infrasec/charter",id:"infrasec/charter",title:"InfraSec Practice Charter",description:"At Truss, we have a single practice combining infrastructure and security",source:"@site/docs/infrasec/charter.md",sourceDirName:"infrasec",slug:"/infrasec/charter",permalink:"/docs/infrasec/charter",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/charter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSL Certificates",permalink:"/docs/infrasec/certs"},next:{title:"Good Infrastructure - A Philosophy",permalink:"/docs/infrasec/good-infra"}},l={},c=[{value:"How We Got Here",id:"how-we-got-here",level:2},{value:"What the InfraSec Practice Is",id:"what-the-infrasec-practice-is",level:2},{value:"What the InfraSec Practice Isn&#39;t",id:"what-the-infrasec-practice-isnt",level:2},{value:"The Challenge of InfraSec",id:"the-challenge-of-infrasec",level:2}],h={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"infrasec-practice-charter"},"InfraSec Practice Charter"),(0,i.kt)("p",null,"At Truss, we have a single practice combining infrastructure and security\npractices, which is a pattern that is becoming more prevalent in the\nindustry as it becomes more clear that they are closely related in\nbuilding confidence in the services we run. This is part of an evolution\nof the infrastructure practice that has been ongoing since computing\n(and especially the Internet) became increasingly core to most businesses."),(0,i.kt)("h2",{id:"how-we-got-here"},"How We Got Here"),(0,i.kt)("p",null,"At Truss, the InfraSec practice covers both infrastructure engineering\nand security engineering, two fields that provide the foundation for\nthe user-facing work that our application engineering practice focuses\non building. This is a practice that has been evolving in its modern\nform since the advent of the web and consumer-facing network services\nin the 1990s."),(0,i.kt)("p",null,"Both infrastructure and security originate in the late 1980s and 1990s\nas computing became more and more prevalent; originally, infrastructure\nand security were mostly the domain of \u201csystem administrators\u201d, people\nwho would run computer and network systems for users like researchers\nor internal developers. Many of these people did not think of themselves\nas \u201cprogrammers,\u201d though some level of shell scripting and other kinds\nof programming have always been part of the job description. Instead,\nthey were more like skilled technicians who had a strong grasp of the\nintricacies of Linux (or other OSes), specific software like webservers\nand databases, and/or networking gear like switches and routers. This\nwas a change from the previous period, where the people writing the\nsoftware and running the computers were largely the same people."),(0,i.kt)("p",null,"As the dot-com boom began in the late 1990s and the internet became\nubiquitous, the need for secure and stable networked computer systems\nincreased radically. Web services were no longer adjuncts to \u201creal\nbusiness,\u201d they ",(0,i.kt)("em",{parentName:"p"},"were")," the business. Outages, breaches, and data leaks\ncould cost organizations thousands or millions of dollars. The scale\nof these services was also increasing rapidly. Maintaining a dozen\nhosts by hand might have been feasible, but a hundred or a thousand\nhosts was not."),(0,i.kt)("p",null,'System and network administrators -- now usually grouped together under\nthe moniker of "Operations" -- attempted to solve this problem with\n',(0,i.kt)("em",{parentName:"p"},"infrastructure as code"),", where you could describe the state a system\nshould be in via some kind of code, then hand that to a processor which\nwould change the machine state to match what was described.\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/CFEngine"},"CFEngine")," was one of the first\nof these, but a number of other alternatives emerged during the 2000s,\nall with roughly the same idea, if not the same manner of execution, and\nmany homegrown versions of similar products were in use as well."),(0,i.kt)("p",null,"Security in this era also began evolving from the host-specific tasks of\nkeeping patches up to date, locking down open ports, antivirus software,\nand other similar measures to looking at the whole network as a single\necosystem. This is when we see wider development and implementation of\nthings like intrusion detection systems, email scanning, and firewalls.\nThis is also when security begins to come into its own as a practice,\noften with representation at the C-level."),(0,i.kt)("p",null,"The infrastructure as code movement culminated in the advent of the\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/DevOps"},'"DevOps"')," paradigm (usually placed\naround the debut of John Allspaw and Paul Hammond\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=LdOe18KhtT4"},'"10 Deploys Per Day\nat Flickr"')," talk at Velocity\n2009). This was an effort to break down the wall that had grown up between\ndevelopers and operations folks in order to make the process of deploying\napplication code both faster and more reliable through stronger\ncooperation and knowledge sharing. While this is often seen as getting\noperations to do more programming and build more tools, the other side\nof the coin was encouraging developers to own their code in production\nand internalize many of the values that had traditionally been the\ndomain of operations."),(0,i.kt)("p",null,"At the same time, it became clear that trying to add security to software\nand architecture after the fact was a losing battle; it was better to\nincorporate security into the design of software systems from the\nbeginning, to reduce the attack surface and prevent potential security\nproblems in the future, even those we cannot yet anticipate."),(0,i.kt)("p",null,"In the 2010s, Google established and publicized ",(0,i.kt)("a",{parentName:"p",href:"https://landing.google.com/sre/books/"},'"site reliability\nengineering" as a practice'),', an\neffort to quantify the constraints around reliability and create a\nsoftware engineering practice specifically to improve it; many other\norganizations did something similar at the same time or soon after\n(sometimes with different names, such as \u201cproduction engineering\u201d.)\nAt the same time, there has been a move to integrate security into the\ndevelopment and operational pipeline (with a move to change "DevOps" to\n"DevSecOps") so that it is built into applications from the beginning,\nrather than something bolted on after or enforced from outside. It\u2019s\nhere that we find the Truss InfraSec practice.'),(0,i.kt)("h2",{id:"what-the-infrasec-practice-is"},"What the InfraSec Practice Is"),(0,i.kt)("p",null,"At Truss, the InfraSec practice is built around the idea that\ninfrastructure and security are intimately linked around the idea of\ncreating a stable, secure, and yet responsive environment for applications,\nand building security and robustness into those applications. This comes\ndown to a number of different responsibilities on a project:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be an advocate for reliability and security as features.")," Regardless\nof whatever else you\u2019re doing, your job is to highlight the importance\nof treating reliability and security as necessary components of the\nsoftware product. If no one can use the application, no one is going to\ncare about any other features, and if users can\u2019t feel like their data\nis safe when using the application, they will be far less likely to use\nit. In a perfect world, these would be values that everyone has\ninternalized, but sadly, this is not a perfect world."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Quantify reliability and security risks.")," That being said, it is up\nto the business (client and product managers) to ultimately decide what\nto prioritize. No system can be 100% reliable or secure; every decision\nis about tradeoffs. Sometimes, they will need to take a back seat to\nfeature development for whatever reason -- client demands, staffing\nchanges, etc. In order to help the team make good decisions about these\ntradeoffs, we need to be able to tell them what the risks are of not\nprioritizing reliability or security tasks. If we decide not to have a\nwarm database replica, what does that mean for our recovery times if\nthe DB fails? What is the tradeoff of incorporating one authentication\nmethod over another? This also means getting Product Management to\ndefine their reliability goals and holding them to it."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Be a subject matter expert for reliability and security.")," When the\nquestion comes up about the most cost-effective ways to increase\nreliability and security, infrasec team members should be helping\napplication developers to answer those questions. This can include\nactually writing application code which enhances the reliability or\nsecurity of the system, or developing processes like incident response."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Build the infrastructure foundations for the application."),' In\npractical terms, this also means building out the parts of the\nenvironment that the application developers will deploy their code on\ntop of. At Truss, this usually means AWS infrastructure, CI/CD pipelines,\nand other tools which support the application; however, it does not mean\nthat application developers cannot make changes to these systems too,\njust that we "own" that part of the system. It\u2019s important to note\nthat while it may not be directly visible to the end user, everything\nelse depends on it working right, like the foundations of a building.\nHowever, without the building on top of it, the foundation is just a\nbig hole in the ground.'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Lead the security review process.")," Many of our clients require the\ncreation of documentation around security and infrastructure practices\nin order to meet some level of certification. While it is not the\nresponsibility of the infrasec team to take care of this exclusively,\nthey should lead the process and bring in other members of the project\nas necessary.")),(0,i.kt)("h2",{id:"what-the-infrasec-practice-isnt"},"What the InfraSec Practice Isn't"),(0,i.kt)("p",null,"In contrast to the above list, here\u2019s some things that are not part\nof the infrasec practice."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Being on-call.")," In ye olde days of the Internet, there was a\nparadigm where the application developers would throw their code over\nthe wall to the operations folks, who would deploy it and then be\non-call if the code blew up. We no longer live in ye olde days of the\nInternet; if you write application code, you should be the owner of\nthat code in production. Being on-call isn\u2019t just a job for\ninfrastructure engineers, it\u2019s for everyone. That being said, part of\nthe infrasec practice is to make sure everyone has the tools they need\nto actually understand what is going on so that they can make smart\ndecisions about alerting on and diagnosing issues with all aspects of\nthe system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Saying no reflexively.")," There is a ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bastard_Operator_From_Hell"},"particularly toxic\nreputation"),"\nthat both operations and security used to have (and still have in\nmany cases) where there was no trust of developers and they existed to\nbe the team that pushed back on every change. This is corrosive to\nmorale, effectiveness, and productivity. The infrasec team\u2019s job\nisn\u2019t to just say no, it\u2019s to figure out what the real need is\n(remember, even if someone asks for X, sometimes what they really want\nis Y, they just think X is the best way to get it) and find the best\nway to do that in a reliable fashion. If you get the reputation for\njust saying no all the time, people will try to work around you --\nmaking them even less likely to incorporate good reliability and\nsecurity practices."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Being the IT group.")," There are a lot of functions that usually fall\nto the infrasec team that are similar to traditional IT work. That can\ninclude provisioning accounts, working with email, setting up new\nauthentication methods, etc. But infrasec is more of a superset of IT\nand focuses on a much broader set of problems. It is important to make\nsure that infrasec is included in estimating engineering tasks so that\nthis work isn\u2019t invisible.")),(0,i.kt)("h2",{id:"the-challenge-of-infrasec"},"The Challenge of InfraSec"),(0,i.kt)("p",null,'One of the challenges of the infrasec practice is that it\u2019s a field\nwhere someone just entering the workforce straight from college or\nanother field will often be unprepared for the types of challenges we\nsee. This isn\u2019t always the case; internships, self-guided learning, and\ncode camps or the like can certainly teach valuable skills and specific\ntools, but both infrastructure and security have traditionally been\nsomething that is usually learned in an apprenticeship-like manner, where\nexperience often outweighs "book learning" (for lack of a better term).\nAlice Goldfuss gave a ',(0,i.kt)("a",{parentName:"p",href:"https://www.usenix.org/conference/lisa16/conference-program/presentation/goldfuss"},"great\ntalk"),"\nabout this from the infrastructure side a few years ago at LISA."),(0,i.kt)("p",null,"As software engineering has become more and more integrated with\ntraditional operations and security tasks, the value of programming\nknowledge has certainly helped get people into the field, but it can\nstill be slow going. As members of the infrasec practice, part of our\njob is to help all software engineers internalize the accumulated\nknowledge of the field to help them incorporate reliability and security\ninto their own work -- and in turn, it\u2019s in our best interests to learn\nsoftware engineering methodologies from people who have more experience\nbuilding complicated software projects. We should encourage knowledge\nsharing and cross-training between both practices, and also promote the\nvalue of cooperation as a core value of our practice. Rick Smith\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://www.usenix.org/conference/lisa19/presentation/smith"},"LISA\n2019"),"\nkeynote highlighted the value of this cooperation, specifically for the\nsecurity practice."))}u.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);