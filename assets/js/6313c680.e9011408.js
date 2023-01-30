"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[8098],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,k=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return t?o.createElement(k,a(a({ref:n},d),{},{components:t})):o.createElement(k,a({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3479:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));t(8209);const i={},a="Docker",l={unversionedId:"developing/command-line-tools/docker",id:"developing/command-line-tools/docker",title:"Docker",description:"Overview",source:"@site/docs/developing/command-line-tools/docker.md",sourceDirName:"developing/command-line-tools",slug:"/developing/command-line-tools/docker",permalink:"/docs/developing/command-line-tools/docker",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/command-line-tools/docker.md",tags:[],version:"current",frontMatter:{},sidebar:"about",previous:{title:"direnv",permalink:"/docs/developing/command-line-tools/direnv"},next:{title:"Configuration",permalink:"/docs/developing/configuration/"}},c={},s=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration of Shared Folders",id:"configuration-of-shared-folders",level:3},{value:"Configuration of Storage Driver",id:"configuration-of-storage-driver",level:3},{value:"Configuration of Disk Image",id:"configuration-of-disk-image",level:3},{value:"Configuration of Resources",id:"configuration-of-resources",level:3},{value:"Volume Mount Performance",id:"volume-mount-performance",level:2},{value:"Inspecting the Docker Virtual Machine",id:"inspecting-the-docker-virtual-machine",level:2},{value:"Inspecting Container Resources",id:"inspecting-container-resources",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2},{value:"Docker Configuration",id:"docker-configuration",level:2},{value:"Keybindings",id:"keybindings",level:3},{value:"Credentials Store",id:"credentials-store",level:3},{value:"Additional Resources",id:"additional-resources",level:2}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"docker"},"Docker"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Docker is useful because it allows you to both package and run\nsoftware with all its dependencies and configuration in isolation.  It\nalso allows you (in theory) to have the same environment in\ndevelopment as in CI and production."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You should install via homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"brew cask install docker\n")),(0,r.kt)("h3",{id:"configuration-of-shared-folders"},"Configuration of Shared Folders"),(0,r.kt)("p",null,'Anecdata suggests that removing some of the default shared folders can\ndecrease CPU usage.  Usually you only need to share volumes under your\nhome directory.  Open the docker for mac preferences, then select\n"File Sharing" and then remove ',(0,r.kt)("inlineCode",{parentName:"p"},"/Volumes")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/private"),".  You may\nalso find improvements removing ",(0,r.kt)("inlineCode",{parentName:"p"},"/Users")," and replacing it with\n",(0,r.kt)("inlineCode",{parentName:"p"},"/Users/YOUR_USERNAME_GOES_HERE"),"."),(0,r.kt)("h3",{id:"configuration-of-storage-driver"},"Configuration of Storage Driver"),(0,r.kt)("p",null,"If you've been running Docker for Mac for some time, make sure you are\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"overlay2")," storage driver."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ docker info |grep Storage\nStorage Driver: overlay2\n")),(0,r.kt)("p",null,"If you don't see overlay2, upgrading to the latest version will add\nthat support, but you would need to recreate all of your docker data\nto utilize it.  The ",(0,r.kt)("inlineCode",{parentName:"p"},"Reset")," bomb should do it."),(0,r.kt)("h3",{id:"configuration-of-disk-image"},"Configuration of Disk Image"),(0,r.kt)("p",null,"If you've been running Docker for Mac for some time, make sure you are\nusing the ",(0,r.kt)("inlineCode",{parentName:"p"},"raw")," disk image format and not ",(0,r.kt)("inlineCode",{parentName:"p"},"qcow2"),".  Open Docker for\nMac preferences and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Disk"),".  Make sure the image ends with\n",(0,r.kt)("inlineCode",{parentName:"p"},"Docker.raw"),"."),(0,r.kt)("h3",{id:"configuration-of-resources"},"Configuration of Resources"),(0,r.kt)("p",null,"Because docker uses a Virtual Machine under the hood on macOS, you can\nchoose the maximum number of resources it is allowed to use. In the\npreferences under ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced"),", you can select how many CPUs to assign,\nhow much memory to assign, and how much swap to give the VM."),(0,r.kt)("p",null,"See also ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/17ZiQC1Tp9iH320K-uqVLyiJmk4DHJ3c4zgQetJiKYQM/edit"},"Understanding memory usage in Docker Desktop on\nMac"),"\nby the docker developers."),(0,r.kt)("h2",{id:"volume-mount-performance"},"Volume Mount Performance"),(0,r.kt)("p",null,"Synchronizing the data between the host (your Mac) and the container\ncan be resource intensive and/or slow.  Read about the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/osxfs-caching/"},"performance\ntuning options"),"\nto see if they might apply to the conditions in your project."),(0,r.kt)("h2",{id:"inspecting-the-docker-virtual-machine"},"Inspecting the Docker Virtual Machine"),(0,r.kt)("p",null,"If you are having performance problems or are just curious, you can\nrun commands inside the Virtual Machine with"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run --rm=true -it --privileged --pid=host \\\n    justincormack/nsenter1 /usr/bin/top\n")),(0,r.kt)("h2",{id:"inspecting-container-resources"},"Inspecting Container Resources"),(0,r.kt)("p",null,"To get a ",(0,r.kt)("inlineCode",{parentName:"p"},"top")," like report of what your containers are doing"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker stats\n")),(0,r.kt)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,r.kt)("p",null,"To see where all your disk space is going:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker system df\n")),(0,r.kt)("p",null,"To remove stopped containers, dangling images, the build cache and\nunused networks:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker system prune\n")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/system_prune/"},"the docker system prune\ndocumentation"),"\nfor more options like pruning volumes"),(0,r.kt)("h2",{id:"docker-configuration"},"Docker Configuration"),(0,r.kt)("p",null,"You can configure all sorts of defaults in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cli/#configuration-files"},"docker\nconfig.json"),"."),(0,r.kt)("h3",{id:"keybindings"},"Keybindings"),(0,r.kt)("p",null,"If you dislike the default detach keybindings of ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL-p CTRL-q"),", you\ncan override it in ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," with something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "detachKeys": "ctrl-@,ctrl-["\n}\n')),(0,r.kt)("h3",{id:"credentials-store"},"Credentials Store"),(0,r.kt)("p",null,"You can store docker credentials in an ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/login/#credentials-store"},"external credentials\nstore"),"."),(0,r.kt)("p",null,"On macOS, the keychain will be used by default, but if you need/want\nto store shared credentials, ",(0,r.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"pass"),"\ncan be used."),(0,r.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("p",null,"If you would like to dig deeper into how Docker works, how it isolates code from the host machine, and related ramifications a good place to start are the articles listed below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/"},"Official Docker Getiting Started Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linuxjournal.com/content/weekend-reading-containers"},"Linux Journal Weekend Reading Containers"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Particularly the articles ",(0,r.kt)("em",{parentName:"li"},"Everything You Need to Know about Linux Containers Part I and II"))))))}u.isMDXComponent=!0},8209:(e,n,t)=>{t(7294)}}]);