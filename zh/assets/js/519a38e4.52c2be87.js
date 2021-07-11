(self.webpackChunk=self.webpackChunk||[]).push([[3502],{9848:(e,n,t)=>{"use strict";t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7689);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(t),d=o,y=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8696:(e,n,t)=>{"use strict";t.r(n),t.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>s,toc:()=>c,default:()=>m});var r=t(2791),o=t(9698),a=(t(7689),t(9848)),i=["components"],p={id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210",original_id:"continuous-integration"},l=void 0,s={unversionedId:"continuous-integration",id:"version-4.x/continuous-integration",isDocsHomePage:!1,title:"\u6301\u7eed\u96c6\u6210",description:"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-4.x/continuous-integration.md",sourceDirName:".",slug:"/continuous-integration",permalink:"/zh/4.x/continuous-integration",editUrl:"https://crowdin.com/project/pnpm/zh-CN",version:"4.x",frontMatter:{id:"continuous-integration",title:"\u6301\u7eed\u96c6\u6210",original_id:"continuous-integration"},sidebar:"version-4.x/docs",previous:{title:"\u547d\u4ee4\u884c tab \u81ea\u52a8\u8865\u5168\u3002",permalink:"/zh/4.x/completion"},next:{title:"Only allow pnpm",permalink:"/zh/4.x/only-allow-pnpm"}},c=[{value:"Travis",id:"travis",children:[]},{value:"Semaphore",id:"semaphore",children:[]},{value:"AppVeyor",id:"appveyor",children:[]},{value:"Sail CI",id:"sail-ci",children:[]}],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"pnpm \u53ef\u4ee5\u5f88\u5bb9\u6613\u5730\u7528\u4e8e\u5404\u79cd\u6301\u7eed\u96c6\u6210\u7cfb\u7edf\u3002"),(0,a.kt)("h2",{id:"travis"},"Travis"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://travis-ci.org/"},"Travis CI"),", you can use pnpm for installing your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},".travis.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'cache:\n  npm: false\n  directories:\n    - "~/.pnpm-store"\nbefore_install:\n  - curl -L https://unpkg.com/@pnpm/self-installer | node\n  - pnpm config set store-dir ~/.pnpm-store\ninstall:\n  - pnpm install\n')),(0,a.kt)("h2",{id:"semaphore"},"Semaphore"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://semaphoreci.com"},"Semaphore"),", you can use pnpm for installing and caching your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},".semaphore/semaphore.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: v1.0\nname: Semaphore CI pnpm example\nagent:\n  machine:\n    type: e1-standard-2\n    os_image: ubuntu1804\nblocks:\n  - name: Install dependencies\n    task:\n      jobs:\n        - name: pnpm install\n          commands:\n            - curl -L https://unpkg.com/@pnpm/self-installer | node\n            - checkout\n            - cache restore node-modules-$SEMAPHORE_GIT_BRANCH-$(checksum package-lock.json),node-modules-$SEMAPHORE_GIT_BRANCH,node-modules-master\n            - pnpm install\n            - cache store node-modules-$SEMAPHORE_GIT_BRANCH-$(checksum package-lock.json) node_modules\n")),(0,a.kt)("h2",{id:"appveyor"},"AppVeyor"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://www.appveyor.com/"},"AppVeyor"),", you can use pnpm for installing your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},"appveyor.yml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  - ps: Install-Product node $env:nodejs_version\n  - curl -L https://unpkg.com/@pnpm/self-installer | node\n  - pnpm install\n")),(0,a.kt)("h2",{id:"sail-ci"},"Sail CI"),(0,a.kt)("p",null,"On ",(0,a.kt)("a",{parentName:"p",href:"https://sail.ci/"},"Sail CI"),", you can use pnpm for installing your dependencies by adding this to your ",(0,a.kt)("inlineCode",{parentName:"p"},".sail.yml")," file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  image: znck/pnpm:latest\n  command:\n    - pnpm\n  args:\n    - install\n")),(0,a.kt)("p",null,"To get the exact Node version and pnpm version you require you can always make your own Docker image and push to ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/"},"Docker Hub"),"."))}m.isMDXComponent=!0}}]);