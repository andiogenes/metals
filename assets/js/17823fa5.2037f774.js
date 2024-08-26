/*! For license information please see 17823fa5.2037f774.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7460],{7318:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var i=l(4848),o=l(8453);const n={id:"mill",title:"Mill"},s=void 0,r={id:"build-tools/mill",title:"Mill",description:"Mill is a build tool initially developed by Li Haoyi in order to create something simpler",source:"@site/target/docs/build-tools/mill.md",sourceDirName:"build-tools",slug:"/build-tools/mill",permalink:"/metals/docs/build-tools/mill",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/build-tools/mill.md",tags:[],version:"current",frontMatter:{id:"mill",title:"Mill"},sidebar:"docs",previous:{title:"Maven",permalink:"/metals/docs/build-tools/maven"},next:{title:"sbt",permalink:"/metals/docs/build-tools/sbt"}},a={},c=[{value:"Automatic installation",id:"automatic-installation",level:2},{value:"Manual installation",id:"manual-installation",level:2},{value:"Bloop",id:"bloop",level:3},{value:"Mill BSP",id:"mill-bsp",level:3}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Mill is a build tool initially developed by Li Haoyi in order to create something simpler\nand more intuitive than most of the other build tools today.  There is extensive\ndocumentation on the ",(0,i.jsx)(t.a,{href:"https://com-lihaoyi.github.io/mill/",children:"Mill website"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"automatic-installation",children:"Automatic installation"}),"\n",(0,i.jsx)(t.p,{children:'The first time you open Metals in a new Mill workspace you will be\nprompted to import the build. Select "Import Build" to start the\nautomatic installation. This will create all the needed Bloop config\nfiles. You should then be able to edit and compile your code utilizing\nall of the features.'}),"\n",(0,i.jsxs)(t.p,{children:["To force a Mill version you can write it to a file named ",(0,i.jsx)(t.code,{children:".mill-version"}),"\nin the workspace directory."]}),"\n",(0,i.jsx)(t.h2,{id:"manual-installation",children:"Manual installation"}),"\n",(0,i.jsx)(t.p,{children:"Manual installation is not recommended by Metals, but it's pretty easy to do.\nYou can choose between two server implementations."}),"\n",(0,i.jsx)(t.h3,{id:"bloop",children:"Bloop"}),"\n",(0,i.jsx)(t.p,{children:"Using Mill with Bloop is the current preferred way by Metals."}),"\n",(0,i.jsx)(t.p,{children:"Metals requires the Bloop config files, which you can generate with the following command:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'mill --import "ivy:com.lihaoyi::mill-contrib-bloop:" mill.contrib.bloop.Bloop/install'})}),"\n",(0,i.jsx)(t.p,{children:"Afterwards, you can just open Metals and start working on your code."}),"\n",(0,i.jsx)(t.h3,{id:"mill-bsp",children:"Mill BSP"}),"\n",(0,i.jsx)(t.p,{children:"Mill also provides a built-in BSP server. To generate the BSP connection discovery files, run the following command:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"mill mill.bsp.BSP/install"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1020:(e,t,l)=>{var i=l(6540),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,r=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,l){var i,n={},c=null,d=null;for(i in void 0!==l&&(c=""+l),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!a.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:o,type:e,key:c,ref:d,props:n,_owner:r.current}}t.Fragment=n,t.jsx=c,t.jsxs=c},4848:(e,t,l)=>{e.exports=l(1020)},8453:(e,t,l)=>{l.d(t,{R:()=>s,x:()=>r});var i=l(6540);const o={},n=i.createContext(o);function s(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);