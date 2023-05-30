"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[9091],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));n(8209);const i={},o="CI/CD according to Truss",l={unversionedId:"infrasec/ci_cd",id:"infrasec/ci_cd",title:"CI/CD according to Truss",description:"Basics",source:"@site/docs/infrasec/ci_cd.md",sourceDirName:"infrasec",slug:"/infrasec/ci_cd",permalink:"/docs/infrasec/ci_cd",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/infrasec/ci_cd.md",tags:[],version:"current",frontMatter:{},sidebar:"practices",previous:{title:"InfraSec Practice Charter",permalink:"/docs/infrasec/charter"},next:{title:"Standard Delivery Pipeline",permalink:"/docs/infrasec/delivery-pipeline"}},s={},u=[{value:"Basics",id:"basics",level:2},{value:"What is this? Is this for me?",id:"what-is-this-is-this-for-me",level:2},{value:"Embrace your constraints",id:"embrace-your-constraints",level:3},{value:"Treat these points as a guiding star",id:"treat-these-points-as-a-guiding-star",level:3},{value:"Platform",id:"platform",level:2},{value:"Run time",id:"run-time",level:2},{value:"Runners",id:"runners",level:2},{value:"Builds",id:"builds",level:2},{value:"Versioning the containers",id:"versioning-the-containers",level:3},{value:"Artifact storage",id:"artifact-storage",level:2},{value:"Alerting",id:"alerting",level:2},{value:"Running tests",id:"running-tests",level:2},{value:"Deployments",id:"deployments",level:2},{value:"Other",id:"other",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cicd-according-to-truss"},"CI/CD according to Truss"),(0,r.kt)("h2",{id:"basics"},"Basics"),(0,r.kt)("p",null,"Continuous integration (CI) is a software development practice that automates\nthe integration of code changes from multiple contributors into a single\nproject. This process involves frequently merging code changes into a central\nrepository, followed by automated builds and tests to detect errors early in\nthe development process."),(0,r.kt)("p",null,"Continuous deployment (CD) is a software development approach that\nautomatically deploys all code changes to production after passing automated\ntests, without requiring human intervention. By releasing code changes to\nproduction more frequently, continuous deployment enables developers to find\nand fix bugs more quickly, while also speeding up the feedback loop with\ncustomers."),(0,r.kt)("p",null,"There are usually four conceptual steps in a delivery pipeline:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Build"),": Where you build the code into a binary or other artifacts to\neventually distribute."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Test"),": Where you validate or test the artifacts built in the previous step."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Deploy"),": Where you configure and deploy the artifacts to an environment.\nCould be a pre-prod or prod."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"Release"),": Where you finally allow users access to that version of code\nyou've configured and built.")),(0,r.kt)("p",null,"In many cases you can merge or swap the steps ",(0,r.kt)("inlineCode",{parentName:"p"},"Release")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Deploy"),"."),(0,r.kt)("h2",{id:"what-is-this-is-this-for-me"},"What is this? Is this for me?"),(0,r.kt)("p",null,"You just started on a brand-new project. It's day 1, and everything is\ngreenfield; there is no existing software, let alone anything to continuously\nintegrate or deploy. You are tasked to build CI/CD for the project. How do you\ndesign toward your requirements? How do you set yourself up for success when\nyou don't even know what your requirements are going to be?"),(0,r.kt)("p",null,'Or maybe you inherited a CI/CD system that the client already has. It\'s in bad\nshape, and you are tasked to get it into good shape. But what is "good shape"\nfor CI/CD? What needs to be handled first?'),(0,r.kt)("p",null,"If any of that feels familiar, this document is for you."),(0,r.kt)("h3",{id:"embrace-your-constraints"},"Embrace your constraints"),(0,r.kt)("p",null,"Working with constraints is a fact of life that we accept to deliver value to\nour clients. We expect you will make strategic compromises in engineering\narchitecture where it is necessary or expedient, rather than unthinkingly\nconforming to rules handed down from outside the project."),(0,r.kt)("p",null,"Truss leadership knows that there is no one better equipped and informed to\nmake those compromises than the people working with the project's requirements\nday to day, and we trust you to make those decisions."),(0,r.kt)("p",null,"Also, good documentation is hard. Keeping it up to date is even harder. Some of\nwhat you are about to read is out of date. Use your judgment, absorb what is\nuseful, and disregard what is not."),(0,r.kt)("h3",{id:"treat-these-points-as-a-guiding-star"},"Treat these points as a guiding star"),(0,r.kt)("p",null,"Follow the star if you are lost and need direction. Ask questions. If you know\nbetter than what's written here, update it to help those who will come after\nyou."),(0,r.kt)("h2",{id:"platform"},"Platform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Use ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/features/actions"},"Github Actions")," (GHA).")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Especially")," on FedGov projects, due to the FedRAMP status (or lack thereof)\nfor the alternatives."),(0,r.kt)("p",null,"GHA has good documentation, and a rich ecosystem for shared Actions. Deployment\norchestration is solid. Support for self-hosted runners is there.\nParallelization is good."),(0,r.kt)("p",null,"Using the same service for source control and CI/CD makes for a clearer access\ncontrol story."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Use ",(0,r.kt)("a",{parentName:"li",href:"https://circleci.com"},"CircleCI")," on Federal government projects.")),(0,r.kt)("p",null,"CircleCI is not FedRAMP'd. That means you must use their self-hosted offering,\nwhich always lags far behind on features and documentation."),(0,r.kt)("p",null,"We have had good experiences with CircleCI's cloud service. If a commercial\nclient wants it, then we should consider it."),(0,r.kt)("p",null,"However, using GHA means you have a smaller stack, so lean that way anyhow."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Use ",(0,r.kt)("a",{parentName:"li",href:"https://bitbucket.org/product/features/pipelines"},"Bitbucket Pipelines"),", at all.")),(0,r.kt)("p",null,"Documentation is wholly inadequate."),(0,r.kt)("p",null,"It does not have feature parity with GHA or CircleCI, by a long shot."),(0,r.kt)("p",null,"The API is poorly implemented."),(0,r.kt)("h2",{id:"run-time"},"Run time"),(0,r.kt)("p",null,"CI/CD systems are classic accumulators of tech debt. Maintaining the\nreliability and run time of these processes requires setting boundaries up\nfront and then doggedly sticking to them."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Maintain focus on how the run time for build and deploy workflows impacts\ndeveloper effectiveness iterating on the app.")),(0,r.kt)("p",null,"If a workflow increases the overhead on developers trying to iterate on the\nsoftware, it should be ",(0,r.kt)("em",{parentName:"p"},"removed")," until it can be fixed."),(0,r.kt)("p",null,"This often shows up as: \"We don't know how to make it faster, but that's on our\nroadmap.\" No. Make the time now, or get rid of the slow thing until you can do\nit right."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Lose sight of how long build and deploy workflows ",(0,r.kt)("em",{parentName:"li"},"will")," inhibit fixes\nduring an incident. Slow CI/CD is a security and availability risk to your\nproject!")),(0,r.kt)("p",null,"See above."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Tolerate flaky tests in CI.")),(0,r.kt)("p",null,"Flaky tests in CI are even worse than a slow build because they add routine\ntoil for developers monitoring and re-running their builds."),(0,r.kt)("p",null,'"That test is flaky, just re-run it!" No. Remove the flaky test, or configure\nit to run locally only. If it can be re-engineered later to fix the flakiness,\n',(0,r.kt)("em",{parentName:"p"},"then")," it can be restored to CI."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Get buy-in from product management on these points early.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Norm early and often on what is an acceptable duration for builds and\ndeployments, and then ",(0,r.kt)("em",{parentName:"p"},"stick to the norm"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Parallelize as much as you can."))),(0,r.kt)("p",null,"Include parallelization as part of the acceptance criteria for planned\nexpansions to CI/CD workflows."),(0,r.kt)("p",null,"Routinely revisit the overall architecture to look for what else could be\nparallelized."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Gate deploy steps on any kind of human intervention.")),(0,r.kt)("p",null,"A merge to the main branch should be the final human action required to deploy\nto production."),(0,r.kt)("p",null,"If you need blue/green deploys or such to avoid unplanned downtime with this\nmodel, then you need blue/green deploys."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Accept the introduction of manual testing.")),(0,r.kt)("p",null,"Manual tests are time consuming and tedious. They are a drag on the development\ncycle like flaky or slow tests, except far worse."),(0,r.kt)("p",null,"It is not temporary, no matter what anyone says. Our experience shows clearly\nthat once there are any manual tests, you are on a slippery slope."),(0,r.kt)("h2",{id:"runners"},"Runners"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Use self-hosted runners if CD can deploy into production.")),(0,r.kt)("p",null,"This avoids complex credential management solutions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Have separate runners following the principle of least privilege.")),(0,r.kt)("p",null,"For example, a runner that only runs pre-commit doesn't need to have the same\naccess as a runner that deploys to a test environment, which doesn't need the\nsame access as a runner that deploys to production."),(0,r.kt)("p",null,"If you are dealing with an ATO process, your security officer will appreciate\nthis. If you don't have one, it's still best practice."),(0,r.kt)("h2",{id:"builds"},"Builds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Ensure builds are repeatable. This means you should be able to check out\nthe code from your project at that same commit hash and build it again and\nget the same artifact(s).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Ensure builds are hermetic. This means that the build should be isolated\nfrom other builds. In CI, the build shouldn't share the same workspace or\nfiles from a previous build or from a build of a different project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Output immutable artifacts from your build. Artifact outputs should not\nbe rewritten or altered by subsequent builds. This allows you to distribute\nor redeploy from these unaltered artifacts for different points in code.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Use distroless base images in docker, and build everything on top of\nthose."))),(0,r.kt)("h3",{id:"versioning-the-containers"},"Versioning the containers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Pin the version of everything using deterministic, calculated tags, like\nthe git commit digest, a Unix timestamp, or a combination.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DON'T: Tag anything with ","`",":latest","`",", ","`",":staging","`"," or anything of such.",(0,r.kt)("sup",{parentName:"p",id:"fnref-2"},(0,r.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Combine CalVer and the git commit digest in your tags to get the best of\nall worlds. (see below)"))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"CalVer plus git digest"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"See also: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/trussworks/template-tech-challenge/blob/main/docs/adr/0005-define-image-tag-schema.md"},"ADR on CalVer tags"))),(0,r.kt)("p",null,"A combination of a calendar date plus the long git digest achieves the aims of\na good tagging scheme:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tags should be unique, immutable, and kept in a monotonically increasing\nsequence."),(0,r.kt)("li",{parentName:"ul"},"Humans reading the tag need to quickly and easily determine which builds are\nnewer or older than others."),(0,r.kt)("li",{parentName:"ul"},"Both humans and the build system need to be able to identify where in the\nsource tree the container was built from.")),(0,r.kt)("p",null,"The combined schema looks like this:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<%Y-%m-%d_%H.%M.%S>_<long git digest>")),(0,r.kt)("p",null,"Finally, you can add a schema version prefix. This way, if you decide to add\n(or remove) information from the schema later, your parsing logic can be\nmaintained to parse all tags since the beginning."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"v01_<%Y-%m-%d_%H.%M.%S>_<long git digest>")),(0,r.kt)("p",null,"This yields human-readable, unique, monotonically increasing tags. A\n",(0,r.kt)("a",{parentName:"p",href:"https://regex101.com/r/iP6tUn/2"},"regular expression")," can both validate and\nparse the tags.")),(0,r.kt)("p",null,"If your images are dependencies for other applications, you may need to track\nwhich versions have new features or breaking changes. In that case, we\nrecommend semantic versioning."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Semantic versioning"),(0,r.kt)("p",null,"Why semver? It tells you and your customer how much has changed since the last\nreleased code and sets expectations accordingly. If you are tagging at mainline\nwhere you are building from, you can rebuild the artifact from the same point."),(0,r.kt)("p",null,"From ",(0,r.kt)("a",{parentName:"p",href:"https://semver.org"},"semver.org"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Given a version number MAJOR.MINOR.PATCH, increment the:\n\nMAJOR version when you make incompatible API changes,\nMINOR version when you add functionality in a backwards compatible manner, and\nPATCH version when you make backwards compatible bug fixes.\nAdditional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.\n"))),(0,r.kt)("p",null,"These are other versioning strategies we've seen. We do not recommend them."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Don't do this"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("em",{parentName:"li"},"commit hash")," is unique (with extremely few collisions) and is easily linked\nback to history in code. However, how much has changed is opaque and it is\ndifficult to determine how old this version is in comparison to other\nversions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Feature branch related names.")," These should be short lived and maintained\nfor no more than a few days. Most users will not find these useful."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Build id related names.")," These are opaque to a user and harder to dig up\nhistory on when debugging."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Build date related names.")," These are also opaque to a user and difficult to\ndig up history on when debugging. You at least get a sense of when these\nchanges went in but are hard to tie to a commit in mainline."))),(0,r.kt)("h2",{id:"artifact-storage"},"Artifact storage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Get money for ",(0,r.kt)("a",{parentName:"li",href:"https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts"},"artifact storage")," into the budget ASAP.")),(0,r.kt)("p",null,"Budget amendments are hard, especially if they require contract modifications.\nSo get the paperwork in line well before you want artifact storage (and you'll\nwant artifact storage early)."),(0,r.kt)("p",null,"Artifact storage is extremely cheap compared to the engineering time you will\nbill the client later trying to work around not having it."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Set up artifact storage for caching builds.")),(0,r.kt)("p",null,"Whether it's uploading a zip file to S3 or pushing a built image to ECR,\nartifact caching and storage enables later optimizations for automated\nvulnerability scanning, build promotion, sharing artifacts (e.g. docker layers)\nbetween builds to accelerate build and deploy times, getting visibility into\nfailed builds, and more."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DON'T: Fragment your artifact storage repositories.")),(0,r.kt)("p",null,"For example, you need ",(0,r.kt)("em",{parentName:"p"},"one")," ECR repo shared across AWS accounts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\x3c!--  TODO: Explain why. --\x3e\n")),(0,r.kt)("h2",{id:"alerting"},"Alerting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Alert on build failures from the main branch.")),(0,r.kt)("p",null,"A broken main branch is a fire drill."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Control ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Alarm_fatigue"},"alert fatigue"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DON'T: Alert on successful builds.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DON'T: Put alerts in their own Slack channel."))),(0,r.kt)("p",null,"If there are so many alerts from CI/CD that you feel tempted to put them in a\nseparate channel, then you have too many alerts."),(0,r.kt)("h2",{id:"running-tests"},"Running tests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Keep test runs hermetic. Ideally, multiple CI runs should be able to run\nat the same time without affecting each other.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Require that tests be idempotent. Tests in CI should be able to run\nseveral times over without producing inconsistent effects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DO: Ensure tests can be reproduced locally, so developers can troubleshoot\nand debug them more easily.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"DON'T: Wait for tests to finish before reporting failures. In CI you will\nwant to give the waiting devloper signal on whether their work can be merged\nor requires changes as quickly as possible."))),(0,r.kt)("h2",{id:"deployments"},"Deployments"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Use the exact same deployment process for each environment. This allows\nyou to use dev and staging deployments as tests for the deployment process\nitself."),(0,r.kt)("li",{parentName:"ul"},"DO: Keep deployments repeatable. The same code and configuration should be\ndeployable again and again.")),(0,r.kt)("h2",{id:"other"},"Other"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DO: Apply the ",(0,r.kt)("a",{parentName:"li",href:"https://playbook.truss.works/docs/01-how-we-execute/06-steel-cable/"},"steel cable")," approach to building CI/CD.")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},(0,r.kt)("a",{parentName:"li",href:"https://vsupalov.com/docker-better-image-tags/"},"https://vsupalov.com/docker-better-image-tags/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,r.kt)("li",{parentName:"ol",id:"fn-2"},(0,r.kt)("a",{parentName:"li",href:"https://vsupalov.com/docker-latest-tag/"},"https://vsupalov.com/docker-latest-tag/"),(0,r.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0},8209:(e,t,n)=>{n(7294)}}]);