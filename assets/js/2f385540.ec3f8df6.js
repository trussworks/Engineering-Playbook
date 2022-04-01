"use strict";(self.webpackChunkengineering_playbook=self.webpackChunkengineering_playbook||[]).push([[9126],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),p=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return t?i.createElement(m,l(l({ref:n},c),{},{components:t})):i.createElement(m,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2987:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return c},toc:function(){return d},default:function(){return h}});var i=t(7462),a=t(3366),o=(t(7294),t(3905)),l=["components"],r={},s="[Tools and Practice](/docs/developing/) / nix",p={unversionedId:"developing/nix/README",id:"developing/nix/README",title:"[Tools and Practice](../README.md) / nix",description:"EXPERIMENT",source:"@site/docs/developing/nix/README.md",sourceDirName:"developing/nix",slug:"/developing/nix/",permalink:"/docs/developing/nix/",editUrl:"https://github.com/trussworks/Engineering-Playbook/edit/main/docs/developing/nix/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:'[Learning Resources](./README.md) / "The Effective Engineer"',permalink:"/docs/developing/learning/the_effective_engineer"},next:{title:"NIX HOWTO",permalink:"/docs/developing/nix/HOWTO"}},c={},d=[{value:"EXPERIMENT",id:"experiment",level:2},{value:"Overview",id:"overview",level:2},{value:"Why Nix? Why not Docker?",id:"why-nix-why-not-docker",level:2},{value:"Advantages of Docker",id:"advantages-of-docker",level:3},{value:"Advantages of Nix",id:"advantages-of-nix",level:3},{value:"Differences with homebrew",id:"differences-with-homebrew",level:3},{value:"Installation",id:"installation",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Quick HOWTO",id:"quick-howto",level:3},{value:"Extra Setup (Only Fish Shell Users)",id:"extra-setup-only-fish-shell-users",level:3},{value:"Working With Packages",id:"working-with-packages",level:3},{value:"Installing New Packages",id:"installing-new-packages",level:4},{value:"Seeing Installed Packages",id:"seeing-installed-packages",level:4},{value:"Looking for Packages",id:"looking-for-packages",level:4},{value:"Uninstalling a Package",id:"uninstalling-a-package",level:4},{value:"Profiles",id:"profiles",level:3},{value:"Default",id:"default",level:4},{value:"Repo Profiles",id:"repo-profiles",level:4},{value:"Working with Existing Nix Expressions",id:"working-with-existing-nix-expressions",level:3},{value:"Learn More About Nix",id:"learn-more-about-nix",level:2},{value:"Advanced Usage",id:"advanced-usage",level:2},{value:"Profiles: Advanced",id:"profiles-advanced",level:3},{value:"Creating a Profile",id:"creating-a-profile",level:4},{value:"Switching Profiles",id:"switching-profiles",level:4},{value:"More Profile Info",id:"more-profile-info",level:4},{value:"Uninstalling",id:"uninstalling",level:2}],u={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tools-and-practice--nix"},(0,o.kt)("a",{parentName:"h1",href:"/docs/developing/"},"Tools and Practice")," / nix"),(0,o.kt)("h2",{id:"experiment"},"EXPERIMENT"),(0,o.kt)("p",null,"We are experimenting with using Nix for developer environments."),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/"},"nix package manager"),' is a\n"purely functional package manager". From that manual:'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This means that it treats packages like values in purely functional\nprogramming languages such as Haskell \u2014 they are built by functions\nthat don\u2019t have side-effects, and they never change after they have\nbeen built.\n...\nYou can have multiple versions or variants of a package installed at\nthe same time. This is especially important when different\napplications have dependencies on different versions of the same\npackage\n...\nAn important consequence is that operations like upgrading or\nuninstalling an application cannot break other applications, since\nthese operations never \u201cdestructively\u201d update or delete files that\nare used by other packages.")),(0,o.kt)("p",null,"Nix is used to manage the dependencies of a project to ensure that\neveryone is using the same version of all tools."),(0,o.kt)("h2",{id:"why-nix-why-not-docker"},"Why Nix? Why not Docker?"),(0,o.kt)("p",null,"Docker for local development provides many of the same advantages of\nnix: reproducible environments with strict versioning. However, docker\nfor development, while awesome in many ways, also has some downsides."),(0,o.kt)("h3",{id:"advantages-of-docker"},"Advantages of Docker"),(0,o.kt)("p",null,"The biggest downside of native development is that our deployments are\non Linux and it is possible for libraries and code paths to behave\ndifferently on macOS than on Linux. We currently use native\ndevelopment environments and haven't really hit something severe yet,\nso this is more of a theoretical concern for Truss projects right now."),(0,o.kt)("h3",{id:"advantages-of-nix"},"Advantages of Nix"),(0,o.kt)("p",null,"When doing local development using docker, you need to share your\nmac filesystem with the docker container. Docker for mac has to keep\nthe files in sync between your mac and the docker container. That\nsynchronization has historically had poor performance. This means that\noperations that access the filesystem inside docker are slow AND use\nsignificant CPU. Running the same code outside the container is\nsometimes 25-50% faster and that penalty is hard to swallow."),(0,o.kt)("p",null,"Using Docker for development also complicates committing code. When\nusing ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing/vcs/tools"},"pre-commit")," you need access to the development\nenvironment when committing code. This means either running git inside\ndocker or trying to find a way to run your pre-commit hooks inside\ndocker."),(0,o.kt)("p",null,"Running git inside docker has problems because it makes using a hardware\ndevice for code signing like a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/infrasec/tutorials/yubikey-configuration"},"yubikey")," much more\ncomplicated and difficult."),(0,o.kt)("p",null,"Running pre-commit inside docker is not a supported configuration by\npre-commit which takes us even farther away from the well worn path."),(0,o.kt)("p",null,"Finally, configuring local tooling like editors to use the docker\ndevelopment environment is generally much more complicated that\nconfiguring it to use a native development environment."),(0,o.kt)("p",null,"For all of these reasons, a native development environment seems like\na less risky path forward."),(0,o.kt)("p",null,"Using Nix seems like a way to get almost all of the advantages of\ndocker and a native development environment."),(0,o.kt)("h3",{id:"differences-with-homebrew"},"Differences with homebrew"),(0,o.kt)("p",null,"Homebrew has more packages than ",(0,o.kt)("inlineCode",{parentName:"p"},"nix"),", and installs them globally. For\ncertain things, that might work great. However, that doesn't give\nprojects reproducible installs."),(0,o.kt)("p",null,"One other difference is that versions of particular packages may be more\nup to date in one or the other. E.g. as of this writing, homebrew's\n",(0,o.kt)("inlineCode",{parentName:"p"},"watchman")," version is ",(0,o.kt)("inlineCode",{parentName:"p"},"2021.06.07.00")," but ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," is on ",(0,o.kt)("inlineCode",{parentName:"p"},"4.9.0"),", which is\nfrom sometime in 2017 or 2018."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("p",null,"MacOS requires that we add an argument to the installation command. We also want to\ndo the single user installation. So to install, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sh <(curl -L https://nixos.org/nix/install)\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/#sect-macos-installation"},"macOS installation"),"\ninstructions for more details."),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"After installing ",(0,o.kt)("inlineCode",{parentName:"p"},"nix"),", you should have ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.nix-profile/bin")," in your\nPATH."),(0,o.kt)("h3",{id:"quick-howto"},"Quick HOWTO"),(0,o.kt)("p",null,"For a template for how to set up a project see ",(0,o.kt)("a",{parentName:"p",href:"/docs/developing/nix/HOWTO"},".//docs/developing/nix/HOWTO"),"."),(0,o.kt)("h3",{id:"extra-setup-only-fish-shell-users"},"Extra Setup (Only Fish Shell Users)"),(0,o.kt)("p",null,"If you're using the fish shell, check out\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lilyball/nix-env.fish"},"nix-env.fish"),"."),(0,o.kt)("p",null,"Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"~/.config/fish/config.sh")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'set -g fish_user_paths "/Users/[your_os_username]/.nix-profile/bin" $fish_user_paths\n')),(0,o.kt)("h3",{id:"working-with-packages"},"Working With Packages"),(0,o.kt)("p",null,"This is more of a quick overview, but more details can be found in the\n",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/#ch-basic-package-mgmt"},"nix basic package management docs"),"."),(0,o.kt)("h4",{id:"installing-new-packages"},"Installing New Packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -i <package>\n")),(0,o.kt)("p",null,"E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -i direnv\n")),(0,o.kt)("h4",{id:"seeing-installed-packages"},"Seeing Installed Packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -q\n")),(0,o.kt)("h4",{id:"looking-for-packages"},"Looking for Packages"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -qa <package name>\n")),(0,o.kt)("p",null,"E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -qa python3\n")),(0,o.kt)("h4",{id:"uninstalling-a-package"},"Uninstalling a Package"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -e <package>\n")),(0,o.kt)("p",null,"E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -e chamber\n")),(0,o.kt)("h3",{id:"profiles"},"Profiles"),(0,o.kt)("p",null,"Profiles can be used at a global level and on a per-repo basis."),(0,o.kt)("h4",{id:"default"},"Default"),(0,o.kt)("p",null,"When it's installed, ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," creates a profile which will store all the\npackages you install by default. It will initially only contain the\npackages needed for ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," itself to work properly."),(0,o.kt)("p",null,"If you want, you could tell it to use a different profile. Either on a\none-off command or by switching the active profile. This is covered\nmore in the ",(0,o.kt)("a",{parentName:"p",href:"#profiles:-advanced"},"Profiles: Advanced section"),"."),(0,o.kt)("p",null,"Default profile is in: ",(0,o.kt)("inlineCode",{parentName:"p"},"/nix/var/nix/profiles/per-user/<username>/profile/"),"\nE.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"/nix/var/nix/profiles/per-user/felipe/profile/")),(0,o.kt)("h4",{id:"repo-profiles"},"Repo Profiles"),(0,o.kt)("p",null,"Ideally you'll have a profile defined at a repo level that will house\nyour repo's dependencies."),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"NIX_PROFILE")," environment variable when working with this\ntype of profile so that ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," commands know to use that profile, e.g.\nwhen installing repo dependencies. E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"export NIX_PROFILE=/nix/var/nix/profiles/myproject\n")),(0,o.kt)("p",null,"Then you can pre-pend this repo profile to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," when you're working\nwith the repo, while keeping your default profile in the ",(0,o.kt)("inlineCode",{parentName:"p"},"PATH")," behind the\nrepo profile to still have access to ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," commands."),(0,o.kt)("p",null,"See\n",(0,o.kt)("a",{parentName:"p",href:"#working-with-existing-nix-expressions"},"Working with Existing Nix Expressions"),"\nfor more details on how to set this up."),(0,o.kt)("h3",{id:"working-with-existing-nix-expressions"},"Working with Existing Nix Expressions"),(0,o.kt)("p",null,"For more info see the\n",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/#chap-writing-nix-expressions"},"nix expressions docs"),"."),(0,o.kt)("p",null,"If you have a project or directory with a pre-defined ",(0,o.kt)("inlineCode",{parentName:"p"},"default.nix")," file,\nyou can install have ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," install the packages defined in it. Usually\nthis file lives in a ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," directory, and you can use it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -p /nix/var/nix/profiles/<profile name> -f ./nix -i\n")),(0,o.kt)("p",null,"Create an ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc")," file in a directory with some environment variables\nyour project needs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cat <<ENVRC > .envrc\nexport NIX_PROFILE=/nix/var/nix/profiles/myproject\n\nPATH_add ${NIX_PROFILE}/bin\nENVRC\n")),(0,o.kt)("p",null,"On first run, you should get a message indicating that you will have to\nexplicitly authorize ",(0,o.kt)("inlineCode",{parentName:"p"},"direnv")," to load the file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"direnv: error .envrc is blocked. Run `direnv allow` to approve its content.\n")),(0,o.kt)("p",null,"Running this should fix it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\n$ direnv allow\ndirenv: loading .envrc\ndirenv: export +DB_HOST +DB_NAME +DB_PASSWORD +DB_PORT +DB_USER -PS2\n")),(0,o.kt)("p",null,"Your local environment variables should be updated now. Any time the ",(0,o.kt)("inlineCode",{parentName:"p"},".envrc"),"\nfile has changes, you will need to re-approve the file, but it will load\nautomatically otherwise."),(0,o.kt)("p",null,"Nix installations are immutable, so by default you cannot make changes\nlike installing additional global software via ",(0,o.kt)("inlineCode",{parentName:"p"},"go get")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install -g"),"."),(0,o.kt)("p",null,"To use a local directory for installing go binaries, add to your\n",(0,o.kt)("inlineCode",{parentName:"p"},".envrc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export GOPATH=$PWD/.gopath\nPATH_add ./.gopath/bin\n")),(0,o.kt)("p",null,"To use a local directory for installing npm binaries:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"export NPM_CONFIG_PREFIX=$PWD/.npmglobal\nPATH_add ./.npmglobal/bin\n")),(0,o.kt)("h2",{id:"learn-more-about-nix"},"Learn More About Nix"),(0,o.kt)("p",null,"There are several ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/learn.html"},"nix guides"),"\nthat you may find helpful in learning more about how ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," works\nif you are curious."),(0,o.kt)("h2",{id:"advanced-usage"},"Advanced Usage"),(0,o.kt)("h3",{id:"profiles-advanced"},"Profiles: Advanced"),(0,o.kt)("p",null,"In the main profiles section we mention having profiles at a global and\nrepo level. You can also have profiles on a per-project basis."),(0,o.kt)("p",null,"E.g. for MilMove, you might want a profile that contains things like\n",(0,o.kt)("inlineCode",{parentName:"p"},"aws-vault"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"chamber"),", etc. which spans more than just the ",(0,o.kt)("inlineCode",{parentName:"p"},"mymove"),"\nrepo. On the other hand, you may not want to use a global profile\n(like the default one mentioned in the next section) because you may\nneed different versions of ",(0,o.kt)("inlineCode",{parentName:"p"},"aws-vault")," for different projects."),(0,o.kt)("h4",{id:"creating-a-profile"},"Creating a Profile"),(0,o.kt)("p",null,"You can create a new profile wherever you want, though convention seems\nto be to do so in\n",(0,o.kt)("inlineCode",{parentName:"p"},"/nix/var/nix/profiles/"),"\nor\n",(0,o.kt)("inlineCode",{parentName:"p"},"/nix/var/nix/profiles/per-user/<username>/")),(0,o.kt)("p",null,"To create a new profile, you can run the command below. Note that this\nwon't actually set this new profile as the active one, that's in the\nnext section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -p /nix/var/nix/profiles/<profile name> -i nix nss-cacert\n")),(0,o.kt)("p",null,"E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -p /nix/var/nix/profiles/milmove -i nix nss-cacert\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"-p")," is telling it the path to the profile you want to use for\nthis ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," command. This can be used to work with profiles that aren't\nthe active profile. It can also be used with profiles that don't yet\nexist (like here) or with exising profiles."),(0,o.kt)("p",null,"You may remember the ",(0,o.kt)("inlineCode",{parentName:"p"},"-i")," is used for installing, so we're installing\n",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"nss-cacert")," into our new profile."),(0,o.kt)("p",null,"This is needed because of an issue if you just switch to a new profile.\nIf you don't install ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," itself, you lose access to ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," commands.\nAnd without ",(0,o.kt)("inlineCode",{parentName:"p"},"nss-cacert"),", you can't install packages because ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," will\nget SSL cert errors."),(0,o.kt)("p",null,"For more info see the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NixOS/nix/issues/1396"},"nix github issue")),(0,o.kt)("h4",{id:"switching-profiles"},"Switching Profiles"),(0,o.kt)("p",null,"To switch profiles, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -S <path to profile>\n")),(0,o.kt)("p",null,"E.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"nix-env -S /nix/var/nix/profiles/milmove\n")),(0,o.kt)("p",null,"Note that it is possible to switch to a profile that doesn't exist yet\nand break ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," commands. See creating profiles section for more info."),(0,o.kt)("h4",{id:"more-profile-info"},"More Profile Info"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"https://nixos.org/manual/nix/stable/#sec-profiles"},"nix profiles docs"),"\nfor more info."),(0,o.kt)("h2",{id:"uninstalling"},"Uninstalling"),(0,o.kt)("p",null,"Uninstalling ",(0,o.kt)("inlineCode",{parentName:"p"},"nix")," takes a few steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," entry from ",(0,o.kt)("inlineCode",{parentName:"li"},"fstab")," using ",(0,o.kt)("inlineCode",{parentName:"li"},"sudo vifs")),(0,o.kt)("li",{parentName:"ol"},"Destroy the data volume using ",(0,o.kt)("inlineCode",{parentName:"li"},"diskutil apfs deleteVolume 'Nix Store'")),(0,o.kt)("li",{parentName:"ol"},"Remove the ",(0,o.kt)("inlineCode",{parentName:"li"},"nix")," line from ",(0,o.kt)("inlineCode",{parentName:"li"},"/etc/synthetic.conf")," (w/",(0,o.kt)("inlineCode",{parentName:"li"},"sudo"),")")))}h.isMDXComponent=!0}}]);