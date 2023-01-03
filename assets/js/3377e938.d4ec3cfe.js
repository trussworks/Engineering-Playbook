"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[4473],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>v});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),v=o,m=d["".concat(p,".").concat(v)]||d[v]||u[v]||i;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6709:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));t(8209);const i={},a="Installation",l={unversionedId:"developing/languages/python/installation",id:"developing/languages/python/installation",title:"Installation",description:"Python",source:"@site/docs/developing/languages/python/installation.md",sourceDirName:"developing/languages/python",slug:"/developing/languages/python/installation",permalink:"/docs/developing/languages/python/installation",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/languages/python/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Python",permalink:"/docs/developing/languages/python/"},next:{title:"Linters and Checkers",permalink:"/docs/developing/languages/python/linters_and_checkers"}},p={},s=[{value:"Python",id:"python",level:2},{value:"Pipenv",id:"pipenv",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("h2",{id:"python"},"Python"),(0,o.kt)("p",null,"Use Python 3."),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"brew")," in order to keep Python up to date. Install the latest version like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install python\n")),(0,o.kt)("h2",{id:"pipenv"},"Pipenv"),(0,o.kt)("p",null,"If you also need a local Python development environment, we recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv")," to provide a virtual environment. Install it using homebrew:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew install pipenv\n")),(0,o.kt)("p",null,"To create a local development environment and a ",(0,o.kt)("inlineCode",{parentName:"p"},"Pipfile"),", specify the specific python interpreter to use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ pipenv --python 3.7.6\nCreating a virtualenv for this project\u2026\nPipfile: /Users/jimb/code/Engineering-Playbook/Pipfile\nUsing /usr/local/opt/python/libexec/bin/python (3.7.6) to create virtualenv\u2026\n\u2839 Creating virtual environment...Already using interpreter /usr/local/opt/python/bin/python3.7\nUsing base prefix '/usr/local/Cellar/python/3.7.6_1/Frameworks/Python.framework/Versions/3.7'\nNew python executable in /Users/jimb/.local/share/virtualenvs/Engineering-Playbook-7M1kEMMv/bin/python3.7\nAlso creating executable in /Users/jimb/.local/share/virtualenvs/Engineering-Playbook-7M1kEMMv/bin/python\nInstalling setuptools, pip, wheel...\ndone.\nRunning virtualenv with interpreter /usr/local/opt/python/libexec/bin/python\n\n\u2714 Successfully created virtual environment!\n")),(0,o.kt)("p",null,"To work within the development environment, use ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv shell"),"."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Further Reading: ",(0,o.kt)("a",{parentName:"em",href:"https://pipenv.kennethreitz.org/en/latest/basics/#example-pipenv-workflow"},"Example Pipenv Workflow"))),(0,o.kt)("p",null,"To install additional dependencies for the project, use ",(0,o.kt)("inlineCode",{parentName:"p"},"pipenv")," and ",(0,o.kt)("strong",{parentName:"p"},"not")," ",(0,o.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pipenv install flask\npipenv install pytest --dev # install a dependency only needed for development\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Further Reading: ",(0,o.kt)("a",{parentName:"em",href:"https://pipenv.kennethreitz.org/en/latest/basics/#environment-management-with-pipenv"},"Environment Management with Pipenv"))))}u.isMDXComponent=!0},8209:(e,n,t)=>{t(7294)}}]);