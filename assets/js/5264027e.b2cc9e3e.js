"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[6912],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},h=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,m=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return n?r.createElement(m,a(a({ref:t},h),{},{components:n})):r.createElement(m,a({ref:t},h))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={},s="Git Workflow",c={unversionedId:"developing/vcs/git-workflow",id:"developing/vcs/git-workflow",title:"Git Workflow",description:"At Truss, we've tried to come up with some standardized workflows for",source:"@site/docs/developing/vcs/git-workflow.md",sourceDirName:"developing/vcs",slug:"/developing/vcs/git-workflow",permalink:"/docs/developing/vcs/git-workflow",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/vcs/git-workflow.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Git Repos",permalink:"/docs/developing/vcs/git-repos"},next:{title:"Master to Main branch rename",permalink:"/docs/developing/vcs/master-to-main"}},h={},u=[{value:"Branching Strategy",id:"branching-strategy",level:2},{value:"Fork vs Clone",id:"fork-vs-clone",level:2},{value:"Cloning with SSH vs HTTPS",id:"cloning-with-ssh-vs-https",level:2},{value:"Working locally",id:"working-locally",level:2},{value:"PR Size",id:"pr-size",level:2},{value:"After creating a PR in GitHub",id:"after-creating-a-pr-in-github",level:2},{value:"Commit messages",id:"commit-messages",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-workflow"},"Git Workflow"),(0,i.kt)("p",null,"At Truss, we've tried to come up with some standardized workflows for\nworking with Git. This page hopes to capture them so that new Trussels\ncan work cleanly with other developers and minimize friction."),(0,i.kt)("h2",{id:"branching-strategy"},"Branching Strategy"),(0,i.kt)("p",null,"There are several well-established branching strategies and workflows out there.\n",(0,i.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20191115042322/https://medium.com/@patrickporto/4-branching-workflows-for-git-30d0aaee7bf"},"This article")," covers four leading types."),(0,i.kt)("p",null,"Each project will have its own requirements, and sometimes even individual\nprojects might need different approaches, but generally Truss recommends the\n",(0,i.kt)("a",{parentName:"p",href:"https://guides.github.com/introduction/flow/"},'"GitHub Flow"'),", for its\nlightweight process and ease of use with ",(0,i.kt)("a",{parentName:"p",href:"/docs/developing/cicd/"},"CI/CD"),"."),(0,i.kt)("p",null,'However, the "Git Flow" process is useful in scenarios where you have a\nslower release process, e.g. for mobile apps that have a App Store as part\nof its critical release path.'),(0,i.kt)("h2",{id:"fork-vs-clone"},"Fork vs Clone"),(0,i.kt)("p",null,"If it's a repo you have write and push access to, clone it. Otherwise, fork it."),(0,i.kt)("h2",{id:"cloning-with-ssh-vs-https"},"Cloning with SSH vs HTTPS"),(0,i.kt)("p",null,"Use ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository"},"HTTPS")," for read-only repos (where you\u2019re only ever going to clone and pull),\nand use ",(0,i.kt)("a",{parentName:"p",href:"https://help.github.com/en/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"SSH")," for everything else. SSH supports certificates on security keys,\nand HTTPS does not. Therefore, we should not use HTTPS for anything that requires\nauthentication. However, if you\u2019re just pulling a public repo, HTTPS is more\nconvenient since you don\u2019t need to authenticate anything (unlike SSH for\nread-only repos)."),(0,i.kt)("h2",{id:"working-locally"},"Working locally"),(0,i.kt)("p",null,"Pick either ",(0,i.kt)("inlineCode",{parentName:"p"},"rebase")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"merge")," to incorporate changes from the default branch onto your\nlocal branch. Use the same method every time for consistency."),(0,i.kt)("h2",{id:"pr-size"},"PR Size"),(0,i.kt)("p",null,"Pull requests should be small and focused enough to be reviewable in under 15,\nor ideally under 5, minutes. Small PRs have a better chance of being quickly\naccepted. The longer the PR, the more an engineer has to keep in their head, and\nthe more contiguous time they need to schedule for the review. This might lead\nto a less thorough and delayed review, which could block you from your other\nwork. Long-lived PRs also often require more frequent updates with the main\nbranch, which could result in mistakes when conflicts are present."),(0,i.kt)("h2",{id:"after-creating-a-pr-in-github"},"After creating a PR in GitHub"),(0,i.kt)("p",null,"Once a branch has been pushed to GitHub and a PR has been submitted for review,\nany changes should be made via individual new commits. Never force push while\na PR is under review. This avoids issues such as merge conflicts or accidental\noverwriting of code when others are using your branch."),(0,i.kt)("h2",{id:"commit-messages"},"Commit messages"),(0,i.kt)("p",null,"For each meaningful commit, write a\n",(0,i.kt)("a",{parentName:"p",href:"https://chris.beams.io/posts/git-commit/"},"good commit message")," following these\nseven rules:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Separate subject from body with a blank line"),(0,i.kt)("li",{parentName:"ol"},"Limit the subject line to 50 characters"),(0,i.kt)("li",{parentName:"ol"},"Capitalize the subject line"),(0,i.kt)("li",{parentName:"ol"},"Do not end the subject line with a period"),(0,i.kt)("li",{parentName:"ol"},"Use the ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Imperative_mood"},"imperative mood")," in the subject line"),(0,i.kt)("li",{parentName:"ol"},"Wrap the body at 72 characters"),(0,i.kt)("li",{parentName:"ol"},"Use the body to explain what and why vs. how")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Replace chromedriver-helper with webdrivers\n\n`chromedriver-helper` says in bold on their README that they are no\nlonger maintaining it and that people should use `webdrivers` instead.\n\nAdditionally, `webdrivers` has a very useful feature that will\nautomatically use the right version of `chromedriver` based on the\nversion of Chrome that is installed on the machine. This was not\npossible with `chromedriver-helper`, which made it harder to deal with\nversioning locally and in Circle CI.\n\nResolves #123\n")))}d.isMDXComponent=!0}}]);