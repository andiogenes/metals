/*! For license information please see e64a7c83.3a2efc2a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1498],{390:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>a});var i=t(4848),s=t(8453);const r={id:"helix",sidebar_label:"Helix",title:"Helix"},l=void 0,o={id:"editors/helix",title:"Helix",description:"helix demo",source:"@site/target/docs/editors/helix.md",sourceDirName:"editors",slug:"/editors/helix",permalink:"/metals/docs/editors/helix",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/editors/helix.md",tags:[],version:"current",frontMatter:{id:"helix",sidebar_label:"Helix",title:"Helix"},sidebar:"docs",previous:{title:"Emacs",permalink:"/metals/docs/editors/emacs"},next:{title:"Online IDEs",permalink:"/metals/docs/editors/online-ides"}},d={},a=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Importing builds",id:"importing-builds",level:2},{value:"Files and Directories to include in your Gitignore",id:"files-and-directories-to-include-in-your-gitignore",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.imgur.com/b0sETIY.gif",alt:"helix demo"})}),"\n",(0,i.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Java 11, 17 provided by OpenJDK or Oracle"}),". Eclipse OpenJ9 is not\nsupported, please make sure the ",(0,i.jsx)(n.code,{children:"JAVA_HOME"})," environment variable\npoints to a valid Java 11 or 17 installation."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"macOS, Linux or Windows"}),". Metals is developed on many operating systems and\nevery PR is tested on Ubuntu, Windows and MacOS."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.13, 2.12, 2.11 and Scala 3"}),". Metals supports these Scala versions:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.11"}),":\n2.11.12"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.12"}),":\n2.12.16, 2.12.17, 2.12.18, 2.12.19"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 2.13"}),":\n2.13.11, 2.13.12, 2.13.13, 2.13.14"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Scala 3"}),":\n3.3.1, 3.2.2, 3.3.2, 3.3.3"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Scala 3 versions from 3.3.4 are automatically supported by Metals."}),"\n",(0,i.jsx)(n.p,{children:"Any older Scala versions will no longer get bugfixes, but should still\nwork properly with newest Metals."}),"\n",(0,i.jsx)(n.p,{children:"Note that 2.11.x support is deprecated and it will be removed in future releases.\nIt's recommended to upgrade to Scala 2.12 or Scala 2.13"}),"\n",(0,i.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Helix requires ",(0,i.jsx)(n.code,{children:"metals"})," to be on the user's path, it should then be\nautomatically detected and enabled. Installing metals in this manner is most\nreadily achieved via ",(0,i.jsx)(n.a,{href:"https://get-coursier.io/",children:"Coursier"}),", running\n",(0,i.jsx)(n.code,{children:"coursier install metals"})," should be sufficient. To check that Helix is able to\ndetect metals after this run ",(0,i.jsx)(n.code,{children:"hx --health scala"})]}),"\n",(0,i.jsx)(n.h2,{id:"importing-builds",children:"Importing builds"}),"\n",(0,i.jsxs)(n.p,{children:["At present Helix does not support the\n",(0,i.jsx)(n.a,{href:"https://github.com/helix-editor/helix/issues/4699",children:"LSP features"})," to have metals\nprompt the user to import the build as it does in other editors and therefore\nthe responsibility falls to the user to import manually whenever the build is\nupdated."]}),"\n",(0,i.jsxs)(n.p,{children:["To manually import a build run the ",(0,i.jsx)(n.code,{children:":lsp-workspace-command"})," command and then\nselect ",(0,i.jsx)(n.code,{children:"build-import"})," from the list."]}),"\n",(0,i.jsx)(n.h2,{id:"files-and-directories-to-include-in-your-gitignore",children:"Files and Directories to include in your Gitignore"}),"\n",(0,i.jsxs)(n.p,{children:["The Metals server places logs and other files in the ",(0,i.jsx)(n.code,{children:".metals"})," directory. The\nBloop compile server places logs and compilation artifacts in the ",(0,i.jsx)(n.code,{children:".bloop"}),"\ndirectory. The Bloop plugin that generates Bloop configuration is added in the\n",(0,i.jsx)(n.code,{children:"metals.sbt"})," file, which is added at ",(0,i.jsx)(n.code,{children:"project/metals.sbt"})," as well as further\n",(0,i.jsx)(n.code,{children:"project"})," directories depending on how deep ",(0,i.jsx)(n.code,{children:"*.sbt"})," files need to be supported.\nTo support each ",(0,i.jsx)(n.code,{children:"*.sbt"})," file Metals needs to create an additional file at\n",(0,i.jsx)(n.code,{children:"./project/project/metals.sbt"})," relative to the sbt file.\nWorking with Ammonite scripts will place compiled scripts into the ",(0,i.jsx)(n.code,{children:".ammonite"})," directory.\nIt's recommended to exclude these directories and files\nfrom version control systems like git."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# ~/.gitignore\n.metals/\n.bloop/\n.ammonite/\nmetals.sbt\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1020:(e,n,t)=>{var i=t(6540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,r={},a=null,c=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,i)&&!d.hasOwnProperty(i)&&(r[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===r[i]&&(r[i]=n[i]);return{$$typeof:s,type:e,key:a,ref:c,props:r,_owner:o.current}}n.Fragment=r,n.jsx=a,n.jsxs=a},4848:(e,n,t)=>{e.exports=t(1020)},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var i=t(6540);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);