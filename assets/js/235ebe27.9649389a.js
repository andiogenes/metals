"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6198],{1811:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>h,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var a=t(4848),i=t(8453);const l={author:"Tomasz Godzik",title:"Metals v1.3.3 - Thallium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},n=void 0,r={permalink:"/metals/blog/2024/07/12/thallium",source:"@site/blog/2024-07-12-thallium.md",title:"Metals v1.3.3 - Thallium",description:"We're happy to announce the release of Metals v1.3.3, which brings a number of",date:"2024-07-12T00:00:00.000Z",tags:[],readingTime:4.925,hasTruncateMarker:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v1.3.3 - Thallium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},unlisted:!1,prevItem:{title:"Metals v1.3.4 - Thallium",permalink:"/metals/blog/2024/07/24/thallium"},nextItem:{title:"Metals v1.3.2 - Thallium",permalink:"/metals/blog/2024/06/19/thallium"}},h={authorsImageUrls:[void 0]},o=[{value:"TL;DR",id:"tldr",level:2},{value:"Index implementations in JDK sources",id:"index-implementations-in-jdk-sources",level:2},{value:"Value completions for union types",id:"value-completions-for-union-types",level:2},{value:"Allow debugging for all build servers",id:"allow-debugging-for-all-build-servers",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v1.3.3 (2024-07-12)",id:"v133-2024-07-12",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"We're happy to announce the release of Metals v1.3.3, which brings a number of\nlong awaited bugfixes and some new features."}),"\n",(0,a.jsx)("table",{children:(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Commits since last release"}),(0,a.jsx)("td",{align:"center",children:"41"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Merged PRs"}),(0,a.jsx)("td",{align:"center",children:"37"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Contributors"}),(0,a.jsx)("td",{align:"center",children:"3"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"Closed issues"}),(0,a.jsx)("td",{align:"center",children:"15"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{children:"New features"}),(0,a.jsx)("td",{align:"center",children:"3"})]})]})}),"\n",(0,a.jsxs)(s.p,{children:["For full details:\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/milestone/69?closed=1",children:"https://github.com/scalameta/metals/milestone/69?closed=1"})]}),"\n",(0,a.jsxs)(s.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs, Zed,\nHelix and Sublime Text. Metals is developed at the\n",(0,a.jsx)(s.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,a.jsx)(s.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from contributors from the community."]}),"\n",(0,a.jsx)(s.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,a.jsxs)(s.p,{children:["Check out ",(0,a.jsx)(s.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#index-implementations-in-jdk-sources",children:"Index implementations in JDK sources"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#value-completions-for-union-types",children:"Value completions for union types"})}),"\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"#allow-debugging-for-all-build-servers",children:"Allow debugging for all build servers"})}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"index-implementations-in-jdk-sources",children:"Index implementations in JDK sources"}),"\n",(0,a.jsx)(s.p,{children:"Since Metals v1.3.0 it's possible to search for implementations of classes or\nclasses' members inside the dependency sources. However, this wasn't enabled for\nJDK sources as it added a substantial amount of indexing time even in smaller\nprojects."}),"\n",(0,a.jsxs)(s.p,{children:["In this version of Metals we added a central database that can be found under\nthe ",(0,a.jsx)(s.code,{children:".metals"})," directory in user home, which contains shared indexes of JDK\nsources thus avoiding a need to index them more than once on any given machine."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://i.imgur.com/lTMmhD8.gif",alt:"jdk-sources"})}),"\n",(0,a.jsxs)(s.p,{children:["This great improvement was added by ",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsx)(s.h2,{id:"value-completions-for-union-types",children:"Value completions for union types"}),"\n",(0,a.jsx)(s.p,{children:"Union types are a new feature in Scala 3 that allows types to be combined when\nwe need to specify that certain value can be of more than one type."}),"\n",(0,a.jsx)(s.p,{children:"For example we can have:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-scala",children:'val a: Int | String = "Hello!"\nval b: Int | String = 123\n'})}),"\n",(0,a.jsxs)(s.p,{children:["In this version of Metals ",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})," added\nsupport for value completions where union types are unions of specific literal\ntypes. If used together with intersection types it will still work as expected."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:"https://i.imgur.com/FKrytqC.png",alt:"example"})}),"\n",(0,a.jsx)(s.p,{children:"The feature will work on latest LTS and Next Scala versions as it required some\nwork upstream in the compiler itself."}),"\n",(0,a.jsx)(s.h2,{id:"allow-debugging-for-all-build-servers",children:"Allow debugging for all build servers"}),"\n",(0,a.jsx)(s.p,{children:"For a long while it was possible to debug your code only when using Metals with\nBloop or sbt server. This was caused by the fact that debugging was implemented\nin a separate library and would require additional data from the build tools."}),"\n",(0,a.jsx)(s.p,{children:"In this version we were able to work around that and bring debugging\ncapabilities to Metals in case a server doesn't provide debugging by itself.\nUnfortunately, in those cases hot code reload will not be available."}),"\n",(0,a.jsx)(s.p,{children:"This should work both for main classes and tests."}),"\n",(0,a.jsx)(s.p,{children:"Since this is quite a new feature please do let us know about any issues."}),"\n",(0,a.jsxs)(s.p,{children:["This is another great feature was brought by\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),"."]}),"\n",(0,a.jsx)(s.h2,{id:"miscellaneous",children:"Miscellaneous"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["bugfix: correctly resolve project's java in doctor and problem resolver\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Don't use -X options in .jvmopts for tests\n",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: auto import for really long names\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Queue references calls to prevent OOM\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: MAke convert to named args for ",(0,a.jsx)(s.code,{children:"extends"}),"\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Show errors for Scala 3 in Bazel correctly\n",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: change project ref setting to support VSCode workspace folder reload\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: use already imported package aliases for auto import\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: clear diagnostics after close for single file\n",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"})]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"contributors",children:"Contributors"}),"\n",(0,a.jsx)(s.p,{children:"Big thanks to everybody who contributed to this release or reported an issue!"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{children:"$ git shortlog -sn --no-merges v1.3.2..v1.3.3\n    16\tKatarzyna Marek\n    16\tTomasz Godzik\n     7\tScalameta Bot\n"})}),"\n",(0,a.jsx)(s.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,a.jsxs)(s.h2,{id:"v133-2024-07-12",children:[(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/tree/v1.3.3",children:"v1.3.3"})," (2024-07-12)"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/compare/v1.3.2...v1.3.3",children:"Full Changelog"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Merged pull requests:"})}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["fix: clear diagnostics after close for single file\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6576",children:"#6576"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: correctly get build target deps for DAP\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6580",children:"#6580"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["chore: Try to use intransitive instead\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6573",children:"#6573"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["chore: Bump Bloop to 1.6.0\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6574",children:"#6574"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: use already imported package aliases for auto import\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6575",children:"#6575"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Bump scala debug adapter\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6568",children:"#6568"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Don't search for stacktrace line if at word is not present\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6555",children:"#6555"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Don't calculate digest every time build tool is used\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6561",children:"#6561"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: change project ref setting to support VSCode workspace folder reload\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6563",children:"#6563"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Use latest stable mill version\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6566",children:"#6566"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["feat: run DAP for test suites in Metals\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6551",children:"#6551"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["chore: move mill test to newest mill version\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6562",children:"#6562"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Fix tests after circe released version for 0.5\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6560",children:"#6560"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update bloop-config from 1.5.5 to 2.0.2\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6534",children:"#6534"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Show errors for Scala 3 in Bazel correctly\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6556",children:"#6556"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["chore: Bump local search to fix it\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6554",children:"#6554"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["improvement: Don't query database on each format\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6550",children:"#6550"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["add test for ",(0,a.jsx)(s.code,{children:"@"})," in path for Windows\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6545",children:"#6545"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update protobuf-java from 4.27.1 to 4.27.2\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6546",children:"#6546"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update ammonite-util from 3.0.0-M2-12-951bbc1e to\n3.0.0-M2-13-23a8ef64 ",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6547",children:"#6547"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update cli_3, scala-cli-bsp from 1.3.2 to 1.4.0\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6548",children:"#6548"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["improvement: add debug adapter for running main class to metals\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6383",children:"#6383"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: convert to named args for ",(0,a.jsx)(s.code,{children:"extends"}),"\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6537",children:"#6537"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["Queue pc references calls to prevent OOM\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6539",children:"#6539"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: cover additional cases for singleton types\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6541",children:"#6541"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["chore: update ",(0,a.jsx)(s.code,{children:"MillVersionSuite"})," in ",(0,a.jsx)(s.code,{children:"TestGroups"}),"\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6543",children:"#6543"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: don't pass mill version as arg to command line\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6542",children:"#6542"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: auto import for really long names\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6531",children:"#6531"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update semanticdb-java from 0.9.10 to 0.10.0\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6536",children:"#6536"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Always require _ to calculate scala version from jar\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6538",children:"#6538"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["bugfix: Don't use everything in .jvmopts for tests\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6526",children:"#6526"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["feat: add value completions for union types\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6498",children:"#6498"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update scalameta, semanticdb-scalac, ... from 4.9.6 to 4.9.7\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6530",children:"#6530"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["build(deps): Update ammonite-util from 3.0.0-M2-11-713b6963 to\n3.0.0-M2-12-951bbc1e ",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6528",children:"#6528"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/scalameta-bot",children:"scalameta-bot"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["improvement: add jdk indexing\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6481",children:"#6481"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["fix: correctly resolve project's java in doctor and problem resolver\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6517",children:"#6517"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n",(0,a.jsxs)(s.li,{children:["docs: release notes v1.3.2\n",(0,a.jsx)(s.a,{href:"https://github.com/scalameta/metals/pull/6518",children:"#6518"}),"\n(",(0,a.jsx)(s.a,{href:"https://github.com/kasiaMarek",children:"kasiaMarek"}),")"]}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,s,t)=>{t.d(s,{R:()=>n,x:()=>r});var a=t(6540);const i={},l=a.createContext(i);function n(e){const s=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),a.createElement(l.Provider,{value:s},e.children)}}}]);