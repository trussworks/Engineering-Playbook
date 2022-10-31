"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[15],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,v=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return t?r.createElement(v,i(i({ref:n},d),{},{components:t})):r.createElement(v,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8417:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));t(8209);const a={},i="direnv",l={unversionedId:"developing/direnv/README",id:"developing/direnv/README",title:"direnv",description:"Overview",source:"@site/docs/developing/direnv/README.md",sourceDirName:"developing/direnv",slug:"/developing/direnv/",permalink:"/docs/developing/direnv/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/direnv/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"[Development Cycle](./README.md) / Pivotal Tracker",permalink:"/docs/developing/cycle/tracker"},next:{title:"Docker",permalink:"/docs/developing/docker/"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Usage example: Changing the git committer email",id:"usage-example-changing-the-git-committer-email",level:3},{value:"Language-specific settings",id:"language-specific-settings",level:3},{value:"direnv and golang",id:"direnv-and-golang",level:4},{value:"direnv and Docker Machine",id:"direnv-and-docker-machine",level:4},{value:"direnv and python",id:"direnv-and-python",level:4},{value:"Storing secrets with direnv",id:"storing-secrets-with-direnv",level:3},{value:"Other examples",id:"other-examples",level:3}],d={toc:p};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"direnv"},"direnv"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://direnv.net/"},"direnv")," is an MIT-licensed command-line tool that addresses the hassle of setting per-project environment variables."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"Via homebrew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"brew install direnv\n")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")," file in a directory with some environment variables your project needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cat <<ENVRC > .envrc\nexport DB_HOST=localhost\nexport DB_PORT=5432\nexport DB_USER=postgres\nexport DB_PASSWORD=mysecretpassword\nexport DB_NAME=dev_db\nCLIENT_AUTH_SECRET_KEY=$(<client_auth_secret.key)\nENVRC\n$\n")),(0,o.kt)("p",null,"On first run, you should get a message indicating that you will have to explicitly authorize ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," to load the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"$ cd ./projectdir\ndirenv: error .envrc is blocked. Run `direnv allow` to approve its content.\n$ direnv allow\ndirenv: loading .envrc\ndirenv: export +DB_HOST +DB_NAME +DB_PASSWORD +DB_PORT +DB_USER -PS2\n$\n")),(0,o.kt)("p",null,"Your local environment variables should be updated now. Any time the ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")," file is changed, you will need to re-approve the file, but it will load automatically otherwise."),(0,o.kt)("h3",{id:"usage-example-changing-the-git-committer-email"},"Usage example: Changing the git committer email"),(0,o.kt)("p",null,"Some Trussels develop on projects where they must use a client email address. ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," can automate the process of changing the email address displayed in your git commits appropriately. For example, consider the following directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ pwd\n/User/trussel/src/\n$ tree -n -L 2\n.\n\u251c\u2500\u2500 me\n\u2502\xa0\xa0 \u251c\u2500\u2500 personal_toy_project_1\n\u2502\xa0\xa0 \u2514\u2500\u2500 personal_toy_project_2\n\u251c\u2500\u2500 client\n\u2502\xa0\xa0 \u2514\u2500\u2500 client_project\n\u2514\u2500\u2500 truss\n    \u2514\u2500\u2500 Engineering-Playbook\n$ cat me/.envrc\nexport GIT_AUTHOR_EMAIL="ryan.delaney@gmail.com"\nexport GIT_COMITTER_EMAIL="ryan.delaney@gmail.com"\n$ cat client/.envrc\nexport GIT_AUTHOR_EMAIL="ryan.delaney@clientdomain.com"\nexport GIT_COMITTER_EMAIL="ryan.delaney@clientdomain.com"\n$ cat truss/.envrc\nexport GIT_AUTHOR_EMAIL="ryan@truss.works"\nexport GIT_COMITTER_EMAIL="ryan@truss.works"\n$\n')),(0,o.kt)("h3",{id:"language-specific-settings"},"Language-specific settings"),(0,o.kt)("h4",{id:"direnv-and-golang"},"direnv and golang"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"From the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/direnv/direnv/wiki/golang"},"direnv wiki"),":")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're using ",(0,o.kt)("a",{parentName:"p",href:"http://getgb.io/"},"the gb build tool")," for Go projects, you may find this layout useful for helping many ",(0,o.kt)("inlineCode",{parentName:"p"},"GOPATH"),"-dependent ecosystem tools work seamlessly in your projects:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},'# Usage: layout golang\n#\n# Sets up environment for a Go project using the alternative gb build tool. Also\n# works with the official dep package.In addition to project executables on\n# PATH, this includes an exclusive, project- local GOPATH which enables many\n# tools like gocode and oracle to "just work".\n#\n# http://getgb.io/\n# https://golang.github.io/dep/\n#\n\nlayout_golang() {\n  export GOPATH="$PWD/vendor:$PWD"\n  PATH_add "$PWD/vendor/bin"\n  PATH_add bin\n}\n')),(0,o.kt)("p",{parentName:"blockquote"},"Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.direnvrc")," and then use ",(0,o.kt)("inlineCode",{parentName:"p"},"layout golang")," in your project ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc"),"s. With this loaded, the support for many tools like ",(0,o.kt)("inlineCode",{parentName:"p"},"gocode"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"oracle"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"godoc"),', etc. in editor plugins like vim-go and GoSublime will usually "just work". This layout may also be completely applicable if you are using the Go 1.5 "vendor experiment" with the official ',(0,o.kt)("inlineCode",{parentName:"p"},"go")," tool on your project."),(0,o.kt)("p",{parentName:"blockquote"},"See ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/direnv/direnv/pull/188"},"this pull request")," for some background discussion.")),(0,o.kt)("h4",{id:"direnv-and-docker-machine"},"direnv and Docker Machine"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"From the ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/direnv/direnv/wiki/Docker-Machine"},"direnv wiki"),":")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When using Docker Machine on OS X, there's an incantation that needs to be run in every shell where you want to run Docker. Direnv can help mitigate that annoyance:"),(0,o.kt)("p",{parentName:"blockquote"},"Add to ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.direnvrc")),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"use_docker-machine(){\n  local env=${1:-default}\n  echo Docker machine: $env\n  local machine_cmd=$(docker-machine env --shell bash $env)\n\n  eval $(docker-machine env --shell bash $env)\n}\n")),(0,o.kt)("p",{parentName:"blockquote"},"Any project that's using docker, add to ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc"),":"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"use docker-machine\n")),(0,o.kt)("p",{parentName:"blockquote"},"One nice feature to this is that you can have different Docker machine VMs per project, if needed by saying ",(0,o.kt)("inlineCode",{parentName:"p"},"use docker-machine special"),", for instance."),(0,o.kt)("p",{parentName:"blockquote"},"Note that when using this pattern, when docker-machine warns you to ",(0,o.kt)("inlineCode",{parentName:"p"},"eval (docker-machine env)"),", you'll want instead to ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv reload"),".")),(0,o.kt)("h4",{id:"direnv-and-python"},"direnv and python"),(0,o.kt)("p",null,"If using ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv"),", add ",(0,o.kt)("inlineCode",{parentName:"p"},"layout_pipenv")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")," and the virtualenv will be loaded automatically when you enter the project directory."),(0,o.kt)("h3",{id:"storing-secrets-with-direnv"},"Storing secrets with direnv"),(0,o.kt)("p",null,"Sometimes, we want to put the ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")," in source control but also use direnv to store secrets that should not be source controlled. With this bit of code, we can separate local secrets into ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.local"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'$ cat << EOF >> .envrc\nif [[ -s .envrc.local ]] ; then\n  source_env .envrc.local\nfi\nEOF\n$ echo ".envrc.local" >> .gitignore\n')),(0,o.kt)("p",null,"Commands in ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc.local")," will be loaded by direnv, but ignored by git."),(0,o.kt)("h3",{id:"other-examples"},"Other examples"),(0,o.kt)("p",null,"Trussels have thoroughly exploited ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/transcom/mymove/blob/master/.envrc"},"TransCom/mymove")," GitHub repository."))}s.isMDXComponent=!0},8209:(e,n,t)=>{t(7294)}}]);