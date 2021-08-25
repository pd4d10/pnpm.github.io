"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5673],{9848:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7689);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=c(n),v=o,m=s["".concat(p,".").concat(v)]||s[v]||u[v]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},143:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>p,metadata:()=>c,toc:()=>d,default:()=>s});var r=n(2951),o=n(9877),i=(n(7689),n(9848)),a=["components"],l={id:"remove",title:"pnpm remove"},p=void 0,c={unversionedId:"cli/remove",id:"version-6.x/cli/remove",isDocsHomePage:!1,title:"pnpm remove",description:"Alias: rm, uninstall, un",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/remove.md",sourceDirName:"cli",slug:"/cli/remove",permalink:"/it/cli/remove",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",frontMatter:{id:"remove",title:"pnpm remove"},sidebar:"version-6.x/docs",previous:{title:"pnpm update",permalink:"/it/cli/update"},next:{title:"pnpm link",permalink:"/it/cli/link"}},d=[{value:"Opzioni",id:"opzioni",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--global",id:"--global",children:[]},{value:"--save-dev, -D",id:"--save-dev--d",children:[]},{value:"--save-optional, -O",id:"--save-optional--o",children:[]},{value:"--save-prod, -P",id:"--save-prod--p",children:[]},{value:"--filter &lt;selettore_pacchetto&gt;",id:"--filter-selettore_pacchetto",children:[]}]}],u={toc:d};function s(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Alias: rm, uninstall, un"),(0,i.kt)("p",null,"Rimuove i pacchetti da ",(0,i.kt)("inlineCode",{parentName:"p"},"node_modules")," e dal ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," del progetto."),(0,i.kt)("h2",{id:"opzioni"},"Opzioni"),(0,i.kt)("h3",{id:"--recursive--r"},"--recursive, -r"),(0,i.kt)("p",null,"Quando usato in uno ",(0,i.kt)("a",{parentName:"p",href:"/it/workspaces"},"spazio di lavoro"),", rimuove una dipendenza (o un gruppo di dipendenze) da ogni pacchetto nello spazio di lavoro."),(0,i.kt)("p",null,"Quando non \xe8 usato in uno spazio di lavoro, rimuove una dipendenza (o un gruppo di dipendenze) da ogni pacchetto trovato nelle sottocartelle."),(0,i.kt)("h3",{id:"--global"},"--global"),(0,i.kt)("p",null,"Rimuove un pacchetto installato globalmente."),(0,i.kt)("h3",{id:"--save-dev--d"},"--save-dev, -D"),(0,i.kt)("p",null,"Rimuove la dipendenza solo dalle dipendenze di sviluppo (",(0,i.kt)("inlineCode",{parentName:"p"},"devDependencies"),")."),(0,i.kt)("h3",{id:"--save-optional--o"},"--save-optional, -O"),(0,i.kt)("p",null,"Rimuove la dipendenza solo dalle dipendenze opzionali (",(0,i.kt)("inlineCode",{parentName:"p"},"optionalDependencies"),")."),(0,i.kt)("h3",{id:"--save-prod--p"},"--save-prod, -P"),(0,i.kt)("p",null,"Rimuove la dipendenza solo dalle dipendenze (",(0,i.kt)("inlineCode",{parentName:"p"},"dependencies"),")."),(0,i.kt)("h3",{id:"--filter-selettore_pacchetto"},"--filter ","<","selettore_pacchetto",">"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/it/filtering"},"Ulteriori informazioni sui filtri.")))}s.isMDXComponent=!0}}]);