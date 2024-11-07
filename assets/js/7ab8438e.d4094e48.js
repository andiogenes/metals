"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1412"],{5794:function(e,t,s){s.r(t),s.d(t,{assets:function(){return h},contentTitle:function(){return n},default:function(){return d},frontMatter:function(){return r},metadata:function(){return a},toc:function(){return c}});var a=s(369),l=s(5893),i=s(65);let r={author:"Katarzyna Marek",title:"Metals v1.3.4 - Thallium",authorImageURL:"https://github.com/kasiaMarek.png"},n=void 0,h={authorsImageUrls:[void 0]},c=[{value:"TL;DR",id:"tldr",level:2},{value:"Scala 3 best effort compilation",id:"scala-3-best-effort-compilation",level:2},{value:"Sort workspace members with the same name by frequency",id:"sort-workspace-members-with-the-same-name-by-frequency",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v1.3.4 (2024-07-24)",id:"v134-2024-07-24",level:2}];function o(e){let t={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.p,{children:"We're happy to announce the release of Metals v1.3.4, which above all improves the experience of working with non-compiling Scala 3 projects."}),"\n",(0,l.jsx)("table",{children:(0,l.jsxs)("tbody",{children:[(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Commits since last release"}),(0,l.jsx)("td",{align:"center",children:"31"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Merged PRs"}),(0,l.jsx)("td",{align:"center",children:"21"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Contributors"}),(0,l.jsx)("td",{align:"center",children:"6"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"Closed issues"}),(0,l.jsx)("td",{align:"center",children:"12"})]}),(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:"New features"}),(0,l.jsx)("td",{align:"center",children:"2"})]})]})}),"\n",(0,l.jsxs)(t.p,{children:["For full details: ",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/70?closed=1",children:"https://github.com/scalameta/metals/milestone/70?closed=1"})]}),"\n",(0,l.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs, Zed,\nHelix and Sublime Text. Metals is developed at the\n",(0,l.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,l.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from contributors from the community."]}),"\n",(0,l.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,l.jsxs)(t.p,{children:["Check out ",(0,l.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#scala-3-best-effort-compilation",children:"Scala 3 best effort compilation"})}),"\n",(0,l.jsx)(t.li,{children:(0,l.jsx)(t.a,{href:"#sort-workspace-members-with-the-same-name-by-frequency",children:"Sort workspace members with the same name by frequency"})}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"scala-3-best-effort-compilation",children:"Scala 3 best effort compilation"}),"\n",(0,l.jsxs)(t.p,{children:["Starting with this release Metals will take advantage of Scala 3 best effort compilation. This should greatly improve the IDE experience of working with non-compiling code. With best effort compilation Scala 3 compiler will produce a tasty-like format files that can also include partially broken trees even when a module does not compile. Those files, similarly to normal tasty files, will be later consumed by the presentation compiler providing most up to date information about the project. This great feature has been delivered by ",(0,l.jsx)(t.a,{href:"https://github.com/jchyb",children:"jchyb"})," and will be available starting with Scala ",(0,l.jsx)(t.code,{children:"3.5.0"}),"."]}),"\n",(0,l.jsx)(t.h2,{id:"sort-workspace-members-with-the-same-name-by-frequency",children:"Sort workspace members with the same name by frequency"}),"\n",(0,l.jsxs)(t.p,{children:["Workspace member completions with the same name are now sorted by their usage frequency, so the symbols more often referenced in project appear higher on the list of completions. This cool feature was added by ",(0,l.jsx)(t.a,{href:"https://github.com/Temurlock",children:"Temurlock"}),"."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{src:"https://i.imgur.com/lAOeVCZ.gif",alt:"sort-by-freq"})}),"\n",(0,l.jsx)(t.h1,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsx)(t.li,{children:"fix: show zero extent references for implicits when using pc"}),"\n",(0,l.jsxs)(t.li,{children:["fix: correctly handle ",(0,l.jsx)(t.code,{children:".scala"})," files with shebang"]}),"\n",(0,l.jsxs)(t.li,{children:["fix: suggest import for maven/gradle when ",(0,l.jsx)(t.code,{children:"defaultBspToBuildTool = true"})]}),"\n",(0,l.jsxs)(t.li,{children:["fix: only detect 100% sure test names ",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"})]}),"\n",(0,l.jsx)(t.li,{children:"fix: correctly prefix scope completions when conflicting for Scala 2"}),"\n"]}),"\n",(0,l.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,l.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,l.jsx)(t.pre,{children:(0,l.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v1.3.3..v1.3.4\n     11	Simon Parten\n     7	Katarzyna Marek\n     7	Tomasz Godzik\n     4	Scalameta Bot\n     1	Jan Chyb\n     1	temurlock\n"})}),"\n",(0,l.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,l.jsxs)(t.h2,{id:"v134-2024-07-24",children:[(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v1.3.4",children:"v1.3.4"})," (2024-07-24)"]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v1.3.3...v1.3.4",children:"Full Changelog"})}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,l.jsxs)(t.ul,{children:["\n",(0,l.jsxs)(t.li,{children:["fix: correctly prefix scope completions when conflicting for Scala 2\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6615",children:"#6615"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["bugfix: Only detect 100% sure test names\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6618",children:"#6618"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["bugfix: Retry deleting Bloop folders\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6614",children:"#6614"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["fix: suggest import for maven/gradle when ",(0,l.jsx)(t.code,{children:"defaultBspToBuildTool = true"}),"\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6603",children:"#6603"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["fix: correctly handle ",(0,l.jsx)(t.code,{children:".scala"})," with shebang\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6602",children:"#6602"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["fix: by-max on empty\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6610",children:"#6610"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["build(deps): Update h2 from 2.2.224 to 2.3.230\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6605",children:"#6605"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["build(deps): Update cli_3, scala-cli-bsp from 1.4.0 to 1.4.1\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6609",children:"#6609"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["build(deps): Update ammonite-util from 3.0.0-M2-13-23a8ef64 to 3.0.0-M2-15-9bed9700\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6606",children:"#6606"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["feature: Add support for Scala 3's Best Effort compilation\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/5219",children:"#5219"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/jchyb",children:"jchyb"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["chore: remove some deprecations\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6600",children:"#6600"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["test: fix ",(0,l.jsx)(t.code,{children:"implicit-args-3"})," test\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6596",children:"#6596"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["improvement: sorting workspace members with same name by frequency\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6393",children:"#6393"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/Temurlock",children:"Temurlock"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["Range selection for scala 3\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6485",children:"#6485"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/Quafadas",children:"Quafadas"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["fix: show zero extent references when using pc\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6583",children:"#6583"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["improvement: Add supported by section\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6520",children:"#6520"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["chore: Add support for Scala 3.3.4-RC1\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6591",children:"#6591"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["build(deps): Update jsoup from 1.17.2 to 1.18.1\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6585",children:"#6585"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["chore: Update mdoc to 2.5.4\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6523",children:"#6523"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["bugfix: Fix release title\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6590",children:"#6590"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,l.jsxs)(t.li,{children:["docs: Add release notes for Metals 1.3.3\n",(0,l.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/6578",children:"#6578"}),"\n(",(0,l.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},65:function(e,t,s){s.d(t,{Z:function(){return n},a:function(){return r}});var a=s(7294);let l={},i=a.createContext(l);function r(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),a.createElement(i.Provider,{value:t},e.children)}},369:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2024/07/24/thallium","source":"@site/blog/2024-07-24-thallium.md","title":"Metals v1.3.4 - Thallium","description":"We\'re happy to announce the release of Metals v1.3.4, which above all improves the experience of working with non-compiling Scala 3 projects.","date":"2024-07-24T00:00:00.000Z","tags":[],"readingTime":2.85,"hasTruncateMarker":false,"authors":[{"name":"Katarzyna Marek","imageURL":"https://github.com/kasiaMarek.png","key":null,"page":null}],"frontMatter":{"author":"Katarzyna Marek","title":"Metals v1.3.4 - Thallium","authorImageURL":"https://github.com/kasiaMarek.png"},"unlisted":false,"prevItem":{"title":"Metals v1.3.5 - Thallium","permalink":"/metals/blog/2024/08/01/thallium"},"nextItem":{"title":"Metals v1.3.3 - Thallium","permalink":"/metals/blog/2024/07/12/thallium"}}')}}]);