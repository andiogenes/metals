"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4801"],{5162:function(e,t,o){o.r(t),o.d(t,{metadata:()=>l,contentTitle:()=>r,default:()=>u,assets:()=>c,toc:()=>a,frontMatter:()=>s});var l=JSON.parse('{"id":"build-tools/bloop","title":"Bloop","description":"Bloop is a compile server for Scala that","source":"@site/target/docs/build-tools/bloop.md","sourceDirName":"build-tools","slug":"/build-tools/bloop","permalink":"/metals/docs/build-tools/bloop","draft":false,"unlisted":false,"editUrl":"https://github.com/scalameta/metals/edit/main/docs/build-tools/bloop.md","tags":[],"version":"current","frontMatter":{"id":"bloop","title":"Bloop"},"sidebar":"docs","previous":{"title":"Bazel","permalink":"/metals/docs/build-tools/bazel"},"next":{"title":"Gradle","permalink":"/metals/docs/build-tools/gradle"}}'),n=o("5893"),i=o("65");let s={id:"bloop",title:"Bloop"},r=void 0,c={},a=[{value:"Installing Bloop CLI",id:"installing-bloop-cli",level:2},{value:"Customizing build import",id:"customizing-build-import",level:2}];function d(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://scalacenter.github.io/bloop",children:"Bloop"})," is a compile server for Scala that\nworks with sbt and has support for other build tools like Maven, Gradle, Mill,\nFury and Seed. If your workspace contains a ",(0,n.jsx)(t.code,{children:".bloop/"})," directory with Bloop JSON\nfiles then Metals will automatically connect to it."]}),"\n",(0,n.jsxs)(t.p,{children:['To manually tell Metals to connect with Bloop, run the "Connect to build server"\n(id: ',(0,n.jsx)(t.code,{children:"build.connect"}),') command. In VS Code, open the "Command palette"\n(',(0,n.jsx)(t.code,{children:"Cmd + Shift + P"}),') and search "connect to build server".']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/mIR0WTe.png",alt:"Import connect to build server command"})}),"\n",(0,n.jsxs)(t.p,{children:["In case of any issues, it's also possible to restart a running Bloop server\nusing the ",(0,n.jsx)(t.code,{children:"Restart Bloop server"})," command (id: ",(0,n.jsx)(t.code,{children:"build-restart"}),")."]}),"\n",(0,n.jsx)(t.h2,{id:"installing-bloop-cli",children:"Installing Bloop CLI"}),"\n",(0,n.jsxs)(t.p,{children:["To compile, test and run from your terminal install the ",(0,n.jsx)(t.code,{children:"bloop"})," command-line\ninterface with the instructions here: ",(0,n.jsx)(t.a,{href:"https://scalacenter.github.io/bloop/setup",children:"https://scalacenter.github.io/bloop/setup"})]}),"\n",(0,n.jsx)(t.h2,{id:"customizing-build-import",children:"Customizing build import"}),"\n",(0,n.jsxs)(t.p,{children:["Consult the Bloop docs for customizing build import for sbt:\n",(0,n.jsx)(t.a,{href:"https://scalacenter.github.io/bloop/docs/build-tools/sbt",children:"https://scalacenter.github.io/bloop/docs/build-tools/sbt"})]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Enable ",(0,n.jsx)(t.code,{children:"IntegrationTest"})," and other custom configurations"]}),"\n",(0,n.jsx)(t.li,{children:"Speed up build import"}),"\n",(0,n.jsx)(t.li,{children:"Enable sbt project references (source dependencies)"}),"\n",(0,n.jsx)(t.li,{children:"Export main class"}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},65:function(e,t,o){o.d(t,{Z:function(){return r},a:function(){return s}});var l=o(7294);let n={},i=l.createContext(n);function s(e){let t=l.useContext(i);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),l.createElement(i.Provider,{value:t},e.children)}}}]);