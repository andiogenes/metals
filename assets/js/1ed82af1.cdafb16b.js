/*! For license information please see 1ed82af1.cdafb16b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5173],{9660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(4848),o=n(8453);const a={id:"codeactions",title:"Code Actions"},r=void 0,s={id:"features/codeactions",title:"Code Actions",description:"Code Actions are used to provide automatic refactoring or rewriting of your current code in order to enhance its readability or save users' time.",source:"@site/target/docs/features/code-actions.md",sourceDirName:"features",slug:"/features/codeactions",permalink:"/metals/docs/features/codeactions",draft:!1,unlisted:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/features/code-actions.md",tags:[],version:"current",frontMatter:{id:"codeactions",title:"Code Actions"},sidebar:"docs",previous:{title:"User Configuration",permalink:"/metals/docs/editors/user-configuration"},next:{title:"Scripts support",permalink:"/metals/docs/features/scripts"}},c={},d=[{value:"Convert To Named Arguments",id:"convert-to-named-arguments",level:2},{value:"Create Companion Object",id:"create-companion-object",level:2},{value:"Create New Symbol",id:"create-new-symbol",level:2},{value:"Extract Member",id:"extract-member",level:2},{value:"Rename File",id:"rename-file",level:2},{value:"Extract Value",id:"extract-value",level:2},{value:"map, flatMap, withFilter to For Yield",id:"map-flatmap-withfilter-to-for-yield",level:2},{value:"Implement Abstract Members of the Parent Type",id:"implement-abstract-members-of-the-parent-type",level:2},{value:"Import Missing Symbol",id:"import-missing-symbol",level:2},{value:"Insert Inferred Type",id:"insert-inferred-type",level:2},{value:"Organize Imports",id:"organize-imports",level:2},{value:"Pattern Match On <code>_</code> To Partial Function",id:"pattern-match-on-_-to-partial-function",level:2},{value:"String to Multiline and Interpolation",id:"string-to-multiline-and-interpolation",level:2}];function l(e){const t={code:"code",h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Code Actions are used to provide automatic refactoring or rewriting of your current code in order to enhance its readability or save users' time."}),"\n",(0,i.jsxs)(t.p,{children:["In Visual Studio Code, to use them you can click on the yellow light bulb appearing on your code, near the cursor and then, to pick the desired action to perform on the code. Alternatively, you can use the ",(0,i.jsx)(t.code,{children:"editor.action.quickFix"})," shortcut."]}),"\n",(0,i.jsx)(t.p,{children:"For other editors this should also be available via specified shortcut."}),"\n",(0,i.jsx)(t.p,{children:"Here is a list of the code actions supported by Metals."}),"\n",(0,i.jsx)(t.h2,{id:"convert-to-named-arguments",children:"Convert To Named Arguments"}),"\n",(0,i.jsx)(t.p,{children:"This code action adds the name to parameters passed to a method call or a class constructor."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Convert To Named Arguments Code Action",src:n(5910).A+"",width:"484",height:"246"})}),"\n",(0,i.jsx)(t.h2,{id:"create-companion-object",children:"Create Companion Object"}),"\n",(0,i.jsxs)(t.p,{children:["If you have a ",(0,i.jsx)(t.code,{children:"trait"})," or a ",(0,i.jsx)(t.code,{children:"class"})," definition, you can invoke this code action to create its companion object."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create Companion Object Code Action",src:n(3766).A+"",width:"484",height:"246"})}),"\n",(0,i.jsx)(t.h2,{id:"create-new-symbol",children:"Create New Symbol"}),"\n",(0,i.jsx)(t.p,{children:"Used for creating a definition for a symbol which is used in your code, but not defined anywhere."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Create New Symbol Code Action",src:n(967).A+"",width:"535",height:"289"})}),"\n",(0,i.jsx)(t.h2,{id:"extract-member",children:"Extract Member"}),"\n",(0,i.jsx)(t.p,{children:"Extract a class, trait, or object definition to a new file."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Extract Member Code Action",src:n(1604).A+"",width:"597",height:"307"})}),"\n",(0,i.jsx)(t.h2,{id:"rename-file",children:"Rename File"}),"\n",(0,i.jsx)(t.p,{children:"Renames a file to match that of the prominent type defined in it."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Rename File",src:n(5527).A+"",width:"443",height:"292"})}),"\n",(0,i.jsx)(t.h2,{id:"extract-value",children:"Extract Value"}),"\n",(0,i.jsxs)(t.p,{children:["If you think your code would look nicer, if the calculation of a value is extracted and assigned to a new ",(0,i.jsx)(t.code,{children:"val"}),"; this code action would come to your aid."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Extract Value",src:n(2465).A+"",width:"462",height:"224"})}),"\n",(0,i.jsx)(t.h2,{id:"map-flatmap-withfilter-to-for-yield",children:"map, flatMap, withFilter to For Yield"}),"\n",(0,i.jsxs)(t.p,{children:["It converts a chain of ",(0,i.jsx)(t.code,{children:"map"}),", ",(0,i.jsx)(t.code,{children:"flatMap"}),", ",(0,i.jsx)(t.code,{children:"filter"})," and ",(0,i.jsx)(t.code,{children:"filterNot"})," methods into a for comprehension."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"To For Comprehension",src:n(5548).A+"",width:"420",height:"230"})}),"\n",(0,i.jsx)(t.h2,{id:"implement-abstract-members-of-the-parent-type",children:"Implement Abstract Members of the Parent Type"}),"\n",(0,i.jsx)(t.p,{children:"Upon inheriting from a type, you also have to implement its abstract members. But manually looking them all up and copying their signature is time consuming, isn't it? You can just use this code action instead."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Implement Abstract Members",src:n(2425).A+"",width:"607",height:"325"})}),"\n",(0,i.jsx)(t.h2,{id:"import-missing-symbol",children:"Import Missing Symbol"}),"\n",(0,i.jsx)(t.p,{children:"Because, of course, you often do not remember the package where it is located, without using this code action. right?"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Import Missing Symbol",src:n(6732).A+"",width:"734",height:"457"})}),"\n",(0,i.jsx)(t.h2,{id:"insert-inferred-type",children:"Insert Inferred Type"}),"\n",(0,i.jsx)(t.p,{children:"This code action infers the type of variables according to the context, and insert them for you."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Insert Inferred Type",src:n(2001).A+"",width:"406",height:"111"})}),"\n",(0,i.jsx)(t.h2,{id:"organize-imports",children:"Organize Imports"}),"\n",(0,i.jsx)(t.p,{children:"Provided that you have enabled the warn unused option for imports of the scala compiler; this code action can tidy up your imports and remove the unused ones. Please note that, in some editors, it is not available under the light bulb, so you would need to access it in other ways."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Organise Imports",src:n(6890).A+"",width:"420",height:"230"})}),"\n",(0,i.jsxs)(t.h2,{id:"pattern-match-on-_-to-partial-function",children:["Pattern Match On ",(0,i.jsx)(t.code,{children:"_"})," To Partial Function"]}),"\n",(0,i.jsxs)(t.p,{children:["When a pattern match is done on a ",(0,i.jsx)(t.code,{children:"_"})," symbol, a partial function on the input would not only be semantically equivalent to it, but also would look cleaner."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Pattern Match To Partial Function",src:n(5198).A+"",width:"379",height:"184"})}),"\n",(0,i.jsx)(t.h2,{id:"string-to-multiline-and-interpolation",children:"String to Multiline and Interpolation"}),"\n",(0,i.jsxs)(t.p,{children:["This one saves you from having to manually type the ",(0,i.jsx)(t.code,{children:"s"})," symbol in the beginning of a string, for creating an interpolation; or the extra quotes at the start and end for turning it into a multiline one."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"String To Multiline and Interpolation",src:n(4390).A+"",width:"504",height:"128"})})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},1020:(e,t,n)=>{var i=n(6540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,a={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,i)&&!c.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=d,t.jsxs=d},4848:(e,t,n)=>{e.exports=n(1020)},5910:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ConvertToNamedArguments-f5ef131703ea51dbaaa5dcaf7de4356b.gif"},3766:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/CreateCompanionObject-1ef56e15c2a3db92822bc72e96059a1d.gif"},967:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/CreateNewSymbol-b260f2bbe6acb0319a6345a37f51bac3.gif"},1604:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ExtractMember-1376d3d8e9434ee2f6f330fc8abbfa6e.gif"},2465:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ExtractValue-40de3d76c7c1a54324fd750f544c25d0.gif"},5548:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/FlatMapToForComprehension-b1bf5217aace1e6f8ad36fd627eeaf2d.gif"},2425:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ImplementAbstractMembers-76a68f39b7d70b8041f271230f96e23c.gif"},6732:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ImportMissingSymbol-c8148531b81abe2149f70bf44686b04f.gif"},2001:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/InsertInferredType-c29adbff0b88ee8781dd7d58c55d85ad.gif"},6890:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/OrganizeImports-5f9a64ae0d342cc900467af955518c95.gif"},5198:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/PatternMatchToPartialFunc-d68256c9df6babcdf2b69779006d3b6c.gif"},5527:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/RenameFile-d85b298304dc55fdd2011c651a71ee30.gif"},4390:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/StringAction-eca3cbbeca72a08051140e9f210f7dfc.gif"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);