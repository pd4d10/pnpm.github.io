(self.webpackChunk=self.webpackChunk||[]).push([[1800],{9848:(e,n,r)=>{"use strict";r.d(n,{Zo:()=>d,kt:()=>m});var t=r(7689);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),c=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(r),m=o,f=s["".concat(l,".").concat(m)]||s[m]||u[m]||a;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4625:(e,n,r)=>{"use strict";r.r(n),r.d(n,{frontMatter:()=>p,contentTitle:()=>l,metadata:()=>c,toc:()=>d,default:()=>s});var t=r(2791),o=r(9698),a=(r(7689),r(9848)),i=["components"],p={id:"prune",title:"pnpm prune"},l=void 0,c={unversionedId:"cli/prune",id:"version-6.x/cli/prune",isDocsHomePage:!1,title:"pnpm prune",description:"Y\xfckl\xfc ve gereksiz paketleri/k\xfct\xfcphaneleri kald\u0131r\u0131r.",source:"@site/i18n/tr/docusaurus-plugin-content-docs/version-6.x/cli/prune.md",sourceDirName:"cli",slug:"/cli/prune",permalink:"/tr/cli/prune",editUrl:"https://crowdin.com/project/pnpm/tr",version:"6.x",frontMatter:{id:"prune",title:"pnpm prune"},sidebar:"version-6.x/docs",previous:{title:"pnpm rebuild",permalink:"/tr/cli/rebuild"},next:{title:"pnpm fetch",permalink:"/tr/cli/fetch"}},d=[{value:"Parametreler",id:"parametreler",children:[{value:"--prod",id:"--prod",children:[]},{value:"--no-optional",id:"--no-optional",children:[]}]}],u={toc:d};function s(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Y\xfckl\xfc ve gereksiz paketleri/k\xfct\xfcphaneleri kald\u0131r\u0131r."),(0,a.kt)("h2",{id:"parametreler"},"Parametreler"),(0,a.kt)("h3",{id:"--prod"},"--prod"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"devDependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131 olan y\xfckl\xfc paketleri kald\u0131r\u0131r."),(0,a.kt)("h3",{id:"--no-optional"},"--no-optional"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"optionalDependencies")," k\u0131sm\u0131nda tan\u0131ml\u0131 olan y\xfckl\xfc paketleri kald\u0131r\u0131r."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The prune command does not support recursive execution on a monorepo currently. To only install production-dependencies in a monorepo ",(0,a.kt)("inlineCode",{parentName:"p"},"node_modules")," folders can be deleted and then re-installed with ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install --prod"),"."))))}s.isMDXComponent=!0}}]);