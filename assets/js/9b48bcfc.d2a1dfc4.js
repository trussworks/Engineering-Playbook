"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[1412],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),k=o,m=p["".concat(s,".").concat(k)]||p[k]||d[k]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8006:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={},i="Docker",l={unversionedId:"developing/docker/README",id:"developing/docker/README",title:"Docker",description:"- Overview",source:"@site/docs/developing/docker/README.md",sourceDirName:"developing/docker",slug:"/developing/docker/",permalink:"/docs/developing/docker/",draft:!1,editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/docker/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"direnv",permalink:"/docs/developing/direnv/"},next:{title:"Editors, IDEs and Debuggers",permalink:"/docs/developing/eid/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration of Shared Folders",id:"configuration-of-shared-folders",level:3},{value:"Configuration of Storage Driver",id:"configuration-of-storage-driver",level:3},{value:"Configuration of Disk Image",id:"configuration-of-disk-image",level:3},{value:"Configuration of Resources",id:"configuration-of-resources",level:3},{value:"Volume Mount Performance",id:"volume-mount-performance",level:2},{value:"Inspecting the Docker Virtual Machine",id:"inspecting-the-docker-virtual-machine",level:2},{value:"Inspecting Container Resources",id:"inspecting-container-resources",level:2},{value:"Cleaning Up",id:"cleaning-up",level:2},{value:"Docker Configuration",id:"docker-configuration",level:2},{value:"Keybindings",id:"keybindings",level:3},{value:"Credentials Store",id:"credentials-store",level:3},{value:"Additional Resources",id:"additional-resources",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker"},"Docker"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#overview"},"Overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#installation"},"Installation"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-of-shared-folders"},"Configuration of Shared Folders")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-of-storage-driver"},"Configuration of Storage Driver")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-of-disk-image"},"Configuration of Disk Image")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configuration-of-resources"},"Configuration of Resources")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#volume-mount-performance"},"Volume Mount Performance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inspecting-the-docker-virtual-machine"},"Inspecting the Docker Virtual Machine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inspecting-container-resources"},"Inspecting Container Resources")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#cleaning-up"},"Cleaning Up")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#docker-configuration"},"Docker Configuration"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#keybindings"},"Keybindings")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#credentials-store"},"Credentials Store")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#additional-resources"},"Additional Resources"))),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Docker is useful because it allows you to both package and run\nsoftware with all its dependencies and configuration in isolation.  It\nalso allows you (in theory) to have the same environment in\ndevelopment as in CI and production."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"You should install via homebrew"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"brew cask install docker\n")),(0,o.kt)("h3",{id:"configuration-of-shared-folders"},"Configuration of Shared Folders"),(0,o.kt)("p",null,'Anecdata suggests that removing some of the default shared folders can\ndecrease CPU usage.  Usually you only need to share volumes under your\nhome directory.  Open the docker for mac preferences, then select\n"File Sharing" and then remove ',(0,o.kt)("inlineCode",{parentName:"p"},"/Volumes")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"/private"),".  You may\nalso find improvements removing ",(0,o.kt)("inlineCode",{parentName:"p"},"/Users")," and replacing it with\n",(0,o.kt)("inlineCode",{parentName:"p"},"/Users/YOUR_USERNAME_GOES_HERE"),"."),(0,o.kt)("h3",{id:"configuration-of-storage-driver"},"Configuration of Storage Driver"),(0,o.kt)("p",null,"If you've been running Docker for Mac for some time, make sure you are\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"overlay2")," storage driver."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ docker info |grep Storage\nStorage Driver: overlay2\n")),(0,o.kt)("p",null,"If you don't see overlay2, upgrading to the latest version will add\nthat support, but you would need to recreate all of your docker data\nto utilize it.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"Reset")," bomb should do it."),(0,o.kt)("h3",{id:"configuration-of-disk-image"},"Configuration of Disk Image"),(0,o.kt)("p",null,"If you've been running Docker for Mac for some time, make sure you are\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"raw")," disk image format and not ",(0,o.kt)("inlineCode",{parentName:"p"},"qcow2"),".  Open Docker for\nMac preferences and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Disk"),".  Make sure the image ends with\n",(0,o.kt)("inlineCode",{parentName:"p"},"Docker.raw"),"."),(0,o.kt)("h3",{id:"configuration-of-resources"},"Configuration of Resources"),(0,o.kt)("p",null,"Because docker uses a Virtual Machine under the hood on macOS, you can\nchoose the maximum number of resources it is allowed to use. In the\npreferences under ",(0,o.kt)("inlineCode",{parentName:"p"},"Advanced"),", you can select how many CPUs to assign,\nhow much memory to assign, and how much swap to give the VM."),(0,o.kt)("p",null,"See also ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/document/d/17ZiQC1Tp9iH320K-uqVLyiJmk4DHJ3c4zgQetJiKYQM/edit"},"Understanding memory usage in Docker Desktop on\nMac"),"\nby the docker developers."),(0,o.kt)("h2",{id:"volume-mount-performance"},"Volume Mount Performance"),(0,o.kt)("p",null,"Synchronizing the data between the host (your Mac) and the container\ncan be resource intensive and/or slow.  Read about the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/docker-for-mac/osxfs-caching/"},"performance\ntuning options"),"\nto see if they might apply to the conditions in your project."),(0,o.kt)("h2",{id:"inspecting-the-docker-virtual-machine"},"Inspecting the Docker Virtual Machine"),(0,o.kt)("p",null,"If you are having performance problems or are just curious, you can\nrun commands inside the Virtual Machine with"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker run --rm=true -it --privileged --pid=host \\\n    justincormack/nsenter1 /usr/bin/top\n")),(0,o.kt)("h2",{id:"inspecting-container-resources"},"Inspecting Container Resources"),(0,o.kt)("p",null,"To get a ",(0,o.kt)("inlineCode",{parentName:"p"},"top")," like report of what your containers are doing"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stats\n")),(0,o.kt)("h2",{id:"cleaning-up"},"Cleaning Up"),(0,o.kt)("p",null,"To see where all your disk space is going:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system df\n")),(0,o.kt)("p",null,"To remove stopped containers, dangling images, the build cache and\nunused networks:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker system prune\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/system_prune/"},"the docker system prune\ndocumentation"),"\nfor more options like pruning volumes"),(0,o.kt)("h2",{id:"docker-configuration"},"Docker Configuration"),(0,o.kt)("p",null,"You can configure all sorts of defaults in the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/cli/#configuration-files"},"docker\nconfig.json"),"."),(0,o.kt)("h3",{id:"keybindings"},"Keybindings"),(0,o.kt)("p",null,"If you dislike the default detach keybindings of ",(0,o.kt)("inlineCode",{parentName:"p"},"CTRL-p CTRL-q"),", you\ncan override it in ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," with something like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "detachKeys": "ctrl-@,ctrl-["\n}\n')),(0,o.kt)("h3",{id:"credentials-store"},"Credentials Store"),(0,o.kt)("p",null,"You can store docker credentials in an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/login/#credentials-store"},"external credentials\nstore"),"."),(0,o.kt)("p",null,"On macOS, the keychain will be used by default, but if you need/want\nto store shared credentials, ",(0,o.kt)("a",{parentName:"p",href:"https://www.passwordstore.org/"},"pass"),"\ncan be used."),(0,o.kt)("h2",{id:"additional-resources"},"Additional Resources"),(0,o.kt)("p",null,"If you would like to dig deeper into how Docker works, how it isolates code from the host machine, and related ramifications a good place to start are the articles listed below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-started/"},"Official Docker Getiting Started Guide")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.linuxjournal.com/content/weekend-reading-containers"},"Linux Journal Weekend Reading Containers"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Particularly the articles ",(0,o.kt)("em",{parentName:"li"},"Everything You Need to Know about Linux Containers Part I and II"))))))}d.isMDXComponent=!0}}]);