(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{224:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return o})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(8),r=(t(0),t(394)),s={id:"using-changesets",title:"Using Changesets with pnpm"},o={unversionedId:"using-changesets",id:"version-5.x/using-changesets",isDocsHomePage:!1,title:"Using Changesets with pnpm",description:"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1.",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-5.x/using-changesets.md",slug:"/using-changesets",permalink:"/zh/using-changesets",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/versioned_docs/version-5.x/using-changesets.md",version:"5.x",sidebar:"version-5.x/docs",previous:{title:"Command line tab-completion",permalink:"/zh/completion"},next:{title:"Continuous Integration",permalink:"/zh/continuous-integration"}},c=[{value:"Setup",id:"setup",children:[]},{value:"Adding new changesets",id:"adding-new-changesets",children:[]},{value:"Releasing changes",id:"releasing-changes",children:[]},{value:"Using GitHub Actions",id:"using-github-actions",children:[]}],p={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"At the time of writing this documentation, the latest pnpm version was v5.17.3. The latest Changesets version was v2.14.1."))),Object(r.b)("h2",{id:"setup"},"Setup"),Object(r.b)("p",null,"To setup changesets on a pnpm workspace, install changesets as a dev dependency in the root of the workspace:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpm add -DW @changesets/cli\n")),Object(r.b)("p",null,"Then changesets' init command:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"pnpx changeset init\n")),Object(r.b)("h2",{id:"adding-new-changesets"},"Adding new changesets"),Object(r.b)("p",null,"To generate a new changeset, run ",Object(r.b)("inlineCode",{parentName:"p"},"pnpx changeset")," in the root of the repository. The generated markdown files in the ",Object(r.b)("inlineCode",{parentName:"p"},".changeset")," directory should be committed to the repository."),Object(r.b)("h2",{id:"releasing-changes"},"Releasing changes"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"pnpx changeset version"),". This will bump the versions of the packages previously specified with ",Object(r.b)("inlineCode",{parentName:"li"},"pnpx changeset")," (and any dependents of those) and update the changelog files."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm install"),". This will update the lockfile and rebuild packages."),Object(r.b)("li",{parentName:"ol"},"Commit the changes."),Object(r.b)("li",{parentName:"ol"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm publish -r"),". This command will publish all packages that have bumped versions not yet present in the registry.")),Object(r.b)("h2",{id:"using-github-actions"},"Using GitHub Actions"),Object(r.b)("p",null,"To automate the process, you can use ",Object(r.b)("inlineCode",{parentName:"p"},"changeset version")," with GitHub actions."),Object(r.b)("p",null,"In a nutshell, the action will detect new changesets on the ",Object(r.b)("inlineCode",{parentName:"p"},"master")," branch, apply them, commit the updated metadata and changelogs, and open a Pull Request. You could also publish your packages automatically."),Object(r.b)("p",null,"More info and documentation regarding this action can be found ",Object(r.b)("a",{parentName:"p",href:"https://github.com/changesets/action"},"here"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-yaml"},"name: Changesets\non:\n  push:\n    branches:\n      - master\nenv:\n  CI: true\n  PNPM_CACHE_FOLDER: .pnpm-store\njobs:\n  version:\n    timeout-minutes: 15\n    runs-on: ubuntu-latest\n    steps:\n      - name: checkout code repository\n        uses: actions/checkout@v2\n        with:\n          fetch-depth: 0\n      - name: setup node.js\n        uses: actions/setup-node@v2\n        with:\n          node-version: 14\n      - name: install pnpm\n        run: npm i pnpm@latest -g\n      - name: setup pnpm config\n        run: pnpm config set store-dir $PNPM_CACHE_FOLDER\n      - name: install dependencies\n        run: pnpm install\n      - name: create versions\n        uses: changesets/action@master\n        with:\n          version: pnpm ci:version\n          commit: 'chore: update versions'\n          title: 'chore: update versions'\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n")))}l.isMDXComponent=!0},394:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),l=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=l(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},h=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?i.a.createElement(m,o(o({ref:n},p),{},{components:t})):i.a.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=h;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<r;p++)s[p]=t[p];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);