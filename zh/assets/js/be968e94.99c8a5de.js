(self.webpackChunk=self.webpackChunk||[]).push([[5369],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var a=t(7689);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,m=u["".concat(l,".").concat(d)]||u[d]||k[d]||o;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8690:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>u});var a=t(2791),r=t(9698),o=(t(7689),t(9848)),i=["components"],p={id:"workspaces",title:"Workspaces",original_id:"workspaces"},l=void 0,s={unversionedId:"workspaces",id:"version-4.x/workspaces",isDocsHomePage:!1,title:"Workspaces",description:"pnpm has built-in support for monorepos (a.k.a. multi-package repositories, multi-project repositories or monolithic repositories). \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a \u5de5\u4f5c\u533a\u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/workspaces.md",sourceDirName:".",slug:"/workspaces",permalink:"/zh/4.x/workspaces",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"workspaces",title:"Workspaces",original_id:"workspaces"},sidebar:"version-4.x/docs",previous:{title:"pnpmfile.js",permalink:"/zh/4.x/pnpmfile"},next:{title:"\u522b\u540d",permalink:"/zh/4.x/aliases"}},c=[{value:"Workspace ranges (workspace:)",id:"workspace-ranges-workspace",children:[]},{value:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305",id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305",children:[]},{value:"Options",id:"options",children:[{value:"link-workspace-packages",id:"link-workspace-packages",children:[]},{value:"shared-workspace-lockfile",id:"shared-workspace-lockfile",children:[]},{value:"save-workspace-protocol",id:"save-workspace-protocol",children:[]}]}],k={toc:c};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"pnpm has built-in support for monorepos (a.k.a. multi-package repositories, multi-project repositories or monolithic repositories). \u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a \u5de5\u4f5c\u533a\u4ee5\u5c06\u591a\u4e2a\u9879\u76ee\u5408\u5e76\u5230\u4e00\u4e2a\u5b58\u50a8\u5e93\u4e2d\u3002"),(0,o.kt)("p",null,"A workspace must have a ",(0,o.kt)("a",{parentName:"p",href:"/zh/4.x/pnpm-workspace_yaml"},"pnpm-workspace.yaml")," file in its root. A workspace also may have a ",(0,o.kt)("a",{parentName:"p",href:"/zh/4.x/npmrc"},".npmrc")," in its root."),(0,o.kt)("h2",{id:"workspace-ranges-workspace"},"Workspace ranges (workspace:)"),(0,o.kt)("p",null,"Supported since v3.7.0."),(0,o.kt)("p",null,"By default, pnpm will link packages from the workspace if the available packages match the declared ranges. For instance, ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@1.0.0")," is linked into ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "^1.0.0"')," in dependencies. But if ",(0,o.kt)("inlineCode",{parentName:"p"},"bar")," has ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "2.0.0"')," in dependencies and ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," is not in the workspace then ",(0,o.kt)("inlineCode",{parentName:"p"},"foo@2.0.0")," will be installed from the registry. This behavior introduces some uncertainty."),(0,o.kt)("p",null,"Luckily, pnpm supports the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol (same as in Yarn v2). When this protocol is used pnpm will refuse to resolve to anything else than a local workspace package. So if you set ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo": "workspace:2.0.0"')," installation will fail telling that no ",(0,o.kt)("inlineCode",{parentName:"p"},'"foo@2.0.0"')," is present in the workspace."),(0,o.kt)("p",null,"This protocol is especially useful when the ",(0,o.kt)("a",{parentName:"p",href:"#link-workspace-packages"},"link-workspace-packages")," config is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),". In that case, pnpm will only link packages from the workspace if the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," protocol is used."),(0,o.kt)("h2",{id:"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305"},"\u53d1\u5e03\u5de5\u4f5c\u7a7a\u95f4\u5305"),(0,o.kt)("p",null,"When a workspace package is packed into an archive (whether it's through ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm pack")," or one of the publish commands like ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm publish"),"), we dynamically replace any ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," dependency by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The corresponding version in the target workspace (if you use ",(0,o.kt)("inlineCode",{parentName:"li"},"*"),")"),(0,o.kt)("li",{parentName:"ul"},"\u76f8\u5173\u7684 semver \u8303\u56f4\uff08\u5bf9\u4e8e\u4efb\u4f55\u5176\u4ed6\u8303\u56f4\u7c7b\u578b\uff09")),(0,o.kt)("p",null,"So for example, if we assume we have three workspace packages whose current version is ",(0,o.kt)("inlineCode",{parentName:"p"},"1.5.0"),", the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "workspace:*",\n    "bar": "workspace:^1.2.3"\n  }\n}\n')),(0,o.kt)("p",null,"\u5c06\u8f6c\u5316\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "dependencies": {\n    "foo": "1.5.0",\n    "bar": "^1.2.3"\n  }\n}\n')),(0,o.kt)("p",null,"This feature allows you to not have to depend on something else than your local workspace packages, while still being able to publish the resulting packages to the remote registry without having to run intermediary publish steps - your consumers will be able to use your published workspaces as any other package, still benefiting from the guarantees semver offers."),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"link-workspace-packages"},"link-workspace-packages"),(0,o.kt)("p",null,"Added in: v2.14.0"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", locally available packages are linked to ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," instead of being downloaded from the registry. This is very convenient in a monorepo."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", packages are downloaded and installed from the registry. However, workspace packages can still be linked by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"workspace:")," range protocol. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm add batman@workspace:*")),(0,o.kt)("h4",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},".npmrc")," file in the root of your monorepo with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"link-workspace-packages = true\n")),(0,o.kt)("p",null,"Create a ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file with the following content:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"packages:\n  - '**'\n")),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm recursive install"),"."),(0,o.kt)("h3",{id:"shared-workspace-lockfile"},"shared-workspace-lockfile"),(0,o.kt)("p",null,"Added in: v2.17.0 (initially named ",(0,o.kt)("inlineCode",{parentName:"p"},"shared-workspace-shrinkwrap"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", pnpm creates a single ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file in the root of the workspace (in the directory that contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file). A shared lockfile also means that all dependencies of all workspace packages will be in a single ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),"."),(0,o.kt)("p",null,"Advantages of this option:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"every dependency is a singleton"),(0,o.kt)("li",{parentName:"ul"},"faster installations in a monorepo"),(0,o.kt)("li",{parentName:"ul"},"fewer changes in code reviews")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE:")," even though all the dependencies will be hard linked into the root ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules"),", packages will have access only to those dependencies that are declared in their ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),". So pnpm's strictness is preserved."),(0,o.kt)("h3",{id:"save-workspace-protocol"},"save-workspace-protocol"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Default: ",(0,o.kt)("strong",{parentName:"li"},"true")),(0,o.kt)("li",{parentName:"ul"},"Type: ",(0,o.kt)("strong",{parentName:"li"},"Boolean"))),(0,o.kt)("p",null,"When true, new dependencies will be added with the workspace protocol, if they are present in the workspace."),(0,o.kt)("p",null,"You might want to change this setting to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", if the tooling in your repository does not understand the workspace protocol."))}u.isMDXComponent=!0}}]);