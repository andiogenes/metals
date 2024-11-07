"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1097"],{5840:function(e,t,s){s.r(t),s.d(t,{assets:function(){return h},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return r},metadata:function(){return n},toc:function(){return c}});var n=s(9011),i=s(5893),l=s(65);let r={author:"Jakub Ciesluk",title:"Metals v1.2.2 - Bismuth",authorURL:"https://github.com/jkciesluk",authorImageURL:"https://github.com/jkciesluk.png"},a=void 0,h={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Fix sbt builds on Windows",id:"fix-sbt-builds-on-windows",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v1.2.2 (2024-02-15)",id:"v122-2024-02-15",level:2}];function o(e){let t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"We're happy to announce the release of Metals v1.2.2, which fixes broken sbt builds on Windows."}),"\n",(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Commits since last release"}),(0,i.jsx)("td",{align:"center",children:"9"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Merged PRs"}),(0,i.jsx)("td",{align:"center",children:"9"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Contributors"}),(0,i.jsx)("td",{align:"center",children:"4"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Closed issues"}),(0,i.jsx)("td",{align:"center",children:"4"})]})]})}),"\n",(0,i.jsxs)(t.p,{children:["For full details: ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/64?closed=1",children:"https://github.com/scalameta/metals/milestone/64?closed=1"})]}),"\n",(0,i.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the\n",(0,i.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,i.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from contributors from the community."]}),"\n",(0,i.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,i.jsxs)(t.p,{children:["Check out ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"#fix-sbt-builds-on-windows",children:"Fix sbt builds on Windows"})}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"fix-sbt-builds-on-windows",children:"Fix sbt builds on Windows"}),"\n",(0,i.jsx)(t.p,{children:"Previous release unintentionally stopped some sbt projects on Windows from importing. In this release we revert the breaking changes."}),"\n",(0,i.jsx)(t.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["bugfix: Deduplicate references results. ",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Don't rename package when it did not change. ",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: properly resolve build targets for references search. ",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Allow Scala 2.11 to be run on newer JVMs. ",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"})]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,i.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v1.2.1..v1.2.2\n5	Katarzyna Marek\n     2	Scalameta Bot\n     1	Jakub Ciesluk\n     1	Tomasz Godzik\n"})}),"\n",(0,i.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,i.jsxs)(t.h2,{id:"v122-2024-02-15",children:[(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v1.2.2",children:"v1.2.2"})," (2024-02-15)"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v1.2.1...v1.2.2",children:"Full Changelog"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["bugfix: deduplicate references results\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6116",children:"#6116"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: don't rename package when it did not change\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6115",children:"#6115"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["chore: Fix CI after changes in dotty\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6113",children:"#6113"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/jkciesluk",children:"jkciesluk"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: properly resolve build targets for references search\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6103",children:"#6103"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: revert back to using embedded ",(0,i.jsx)(t.code,{children:"sbt"})," launcher for Windows\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6111",children:"#6111"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update coursier, ... from 2.1.8 to 2.1.9\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6106",children:"#6106"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["build(deps): Update mill-contrib-testng from 0.11.6 to 0.11.7\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6105",children:"#6105"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["bugfix: Allow Scala 2.11 to be run on newer JVMs\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6092",children:"#6092"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["release notes 1.2.1\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6091",children:"#6091"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n"]})]})}function u(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},65:function(e,t,s){s.d(t,{Z:function(){return a},a:function(){return r}});var n=s(7294);let i={},l=n.createContext(i);function r(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:t},e.children)}},9011:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2024/02/15/bismuth","source":"@site/blog/2024-02-15-bismuth.md","title":"Metals v1.2.2 - Bismuth","description":"We\'re happy to announce the release of Metals v1.2.2, which fixes broken sbt builds on Windows.","date":"2024-02-15T00:00:00.000Z","tags":[],"readingTime":1.52,"hasTruncateMarker":false,"authors":[{"name":"Jakub Ciesluk","url":"https://github.com/jkciesluk","imageURL":"https://github.com/jkciesluk.png","key":null,"page":null}],"frontMatter":{"author":"Jakub Ciesluk","title":"Metals v1.2.2 - Bismuth","authorURL":"https://github.com/jkciesluk","authorImageURL":"https://github.com/jkciesluk.png"},"unlisted":false,"prevItem":{"title":"Metals v1.3.0 - Thallium","permalink":"/metals/blog/2024/04/15/thalium"},"nextItem":{"title":"Metals v1.2.1 - Bismuth","permalink":"/metals/blog/2024/02/07/bismuth"}}')}}]);