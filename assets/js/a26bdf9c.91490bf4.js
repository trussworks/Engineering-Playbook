"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1142],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,g=h["".concat(s,".").concat(m)]||h[m]||p[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},549:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s="[Source Control](/docs/developing/vcs/) / Master to Main branch rename",c={unversionedId:"developing/vcs/master-to-main",id:"developing/vcs/master-to-main",title:"[Source Control](./README.md) / Master to Main branch rename",description:"These instructions will help moving repos from using the default branch name master and modify it to be",source:"@site/docs/developing/vcs/master-to-main.md",sourceDirName:"developing/vcs",slug:"/developing/vcs/master-to-main",permalink:"/docs/developing/vcs/master-to-main",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/vcs/master-to-main.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Source Control](./README.md) / Git Workflow",permalink:"/docs/developing/vcs/git-workflow"},next:{title:"[Source Control](./README.md) / Tools",permalink:"/docs/developing/vcs/tools"}},u={},p=[{value:"Prereqs",id:"prereqs",level:2},{value:"Instructions to change default branch name",id:"instructions-to-change-default-branch-name",level:2},{value:"Future proofing",id:"future-proofing",level:2},{value:"Github",id:"github",level:2},{value:"CircleCI Changes",id:"circleci-changes",level:2},{value:"Terraform Registry",id:"terraform-registry",level:2},{value:"IDE Changes",id:"ide-changes",level:2},{value:"Tooling Changes",id:"tooling-changes",level:2},{value:"References",id:"references",level:2}],h={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"source-control--master-to-main-branch-rename"},(0,i.kt)("a",{parentName:"h1",href:"/docs/developing/vcs/"},"Source Control")," / Master to Main branch rename"),(0,i.kt)("p",null,"These instructions will help moving repos from using the default branch name ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," and modify it to be\n",(0,i.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#prereqs"},"Prereqs")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#instructions-to-change-default-branch-name"},"Instructions to change default branch name")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#future-proofing"},"Future proofing")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#github"},"Github")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#circleci-changes"},"CircleCI Changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#terraform-registry"},"Terraform Registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#ide-changes"},"IDE Changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#tooling-changes"},"Tooling Changes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#references"},"References"))),(0,i.kt)("h2",{id:"prereqs"},"Prereqs"),(0,i.kt)("p",null,"First, ensure that the version of ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," that you have installed is at least v2.28.0. This is important to ensure\nyou have access to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch"},"init.DefaultBranch"),"\nsetting in the git config file."),(0,i.kt)("h2",{id:"instructions-to-change-default-branch-name"},"Instructions to change default branch name"),(0,i.kt)("p",null,"To update the branch name use the npm tool ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/lgarron/main-branch"},"lgarron/main-branch"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g main-branch\nmain-branch trussworks/master-to-main-test replace master main\n")),(0,i.kt)("p",null,"Follow up with local modifications:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd git-repo-name\ngit pull origin main\ngit checkout main\ngit branch --delete master\ngit branch --set-upstream-to=origin/main main\ngit symbolic-ref HEAD refs/heads/main\ngit symbolic-ref refs/remotes/origin/HEAD refs/remotes/origin/main\ngit fetch --all --prune\n")),(0,i.kt)("p",null,"Test that the ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," branch has been removed by running this command and getting a shell error (exit code not ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout master\n")),(0,i.kt)("h2",{id:"future-proofing"},"Future proofing"),(0,i.kt)("p",null,"If you're using ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," v2.28.0 or later you should be able to configure git globally to ensure ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," is now\nyour default branch permanently."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global init.defaultBranch main\n")),(0,i.kt)("p",null,"Now in your ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.gitconfig")," file you'll see this addition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ini"},"[init]\n    defaultBranch = main\n")),(0,i.kt)("p",null,"For older versions of the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," tool you'll have to be careful to not create new repos with ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," as the default\nbranch. First make a new git alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"git config --global alias.main '!git init && git checkout -b main'\ngit main\n")),(0,i.kt)("p",null,"You can add an alias to your ",(0,i.kt)("inlineCode",{parentName:"p"},"bash")," or other shell to help:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"alias git_init='git main'\n")),(0,i.kt)("p",null,"Alternatively use this alias:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"alias git_init='git init && git checkout -b main'\n")),(0,i.kt)("p",null,"Don't forget to source your changes to your shell. For bash you can run: ",(0,i.kt)("inlineCode",{parentName:"p"},"source ~/.bash_profile"),"."),(0,i.kt)("p",null,"Which gives you the ability to run either ",(0,i.kt)("inlineCode",{parentName:"p"},"git main")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"git_init")," to start a new repo with ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," as the default\nbranch."),(0,i.kt)("h2",{id:"github"},"Github"),(0,i.kt)("p",null,"The branch protection rules in Github will need to be modified for each repo that you touch."),(0,i.kt)("h2",{id:"circleci-changes"},"CircleCI Changes"),(0,i.kt)("p",null,"In the UI ensure that the pipeline is filtering for All Branches instead of just master. The new builds should show up\nautomatically. Historical information for old builds is not destroyed in CircleCI during this change. So no changes\nshould be required."),(0,i.kt)("p",null,"When things don't work there are steps to re-sync the project that should be used as a last resort:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://support.circleci.com/hc/en-us/articles/360040969693-VCS-Default-Branch-Isn-t-Reflected-on-CircleCI"},"VCP Default Branch Isn't Reflected on CircleCI")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://discuss.circleci.com/t/circleci-doesnt-notice-when-github-default-branch-is-updated/10469/6"},"CircleCI Doesn't Notice when github default branch is updated"))),(0,i.kt)("h2",{id:"terraform-registry"},"Terraform Registry"),(0,i.kt)("p",null,"Terraform registry uses git tags to pull from github. As long as ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," is a reflection of ",(0,i.kt)("inlineCode",{parentName:"p"},"master")," then no\nchanges are needed for the terraform registry."),(0,i.kt)("h2",{id:"ide-changes"},"IDE Changes"),(0,i.kt)("p",null,"Any ID that handles git integrations should be able to handle this change. Consider adding ",(0,i.kt)("inlineCode",{parentName:"p"},"main")," to the set of protected\nbranches if your editor allows for that."),(0,i.kt)("h2",{id:"tooling-changes"},"Tooling Changes"),(0,i.kt)("p",null,"As a quick reference for some tools that need to be updated here is a non-exhaustive list:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://danger.systems/js/"},"DangerJS")," should be updated to at least ",(0,i.kt)("inlineCode",{parentName:"li"},"v10.3.0")," (see the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/danger/danger-js/issues/1057"},"PR"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")," should be updated to at least ",(0,i.kt)("inlineCode",{parentName:"li"},"v2.28.0")," (see the ",(0,i.kt)("a",{parentName:"li",href:"https://github.blog/2020-07-27-highlights-from-git-2-28/#introducing-init-defaultbranch"},"Release Notes"),")")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"References:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://dev.to/rhymu8354/git-renaming-the-master-branch-137b"},"Git Renaming the master branch"))))}m.isMDXComponent=!0}}]);