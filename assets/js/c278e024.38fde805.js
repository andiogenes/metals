"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["231"],{4779:function(e,t,s){s.r(t),s.d(t,{assets:function(){return o},contentTitle:function(){return r},default:function(){return d},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return h}});var a=s(2482),n=s(5893),i=s(65);let l={author:"Tomasz Godzik",title:"Metals v0.9.0 - Lithium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},r=void 0,o={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",level:2},{value:"Basic Scala 3 support",id:"basic-scala-3-support",level:2},{value:"Improvements related to Bloop/Metals integration",id:"improvements-related-to-bloopmetals-integration",level:2},{value:"Automatically add &#39;+&#39; on newline inside a string",id:"automatically-add--on-newline-inside-a-string",level:2},{value:"Code action to import all missing symbols",id:"code-action-to-import-all-missing-symbols",level:2},{value:"Miscellaneous improvements",id:"miscellaneous-improvements",level:2},{value:"Contributors",id:"contributors",level:2},{value:"Merged PRs",id:"merged-prs",level:2},{value:"v0.9.0 (2020-05-04)",id:"v090-2020-05-04",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:'We are happy to announce the release of Metals v0.9.0, codename "Lithium", which\nmain focus is introducing support for Scala 3 starting with versions 0.23.0 and\n0.24.0-RC1. We also added support for Scala 2.13.2 and a number of other useful\nimprovements.'}),"\n",(0,n.jsx)("table",{children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Commits since last release"}),(0,n.jsx)("td",{align:"center",children:"140"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Merged PRs"}),(0,n.jsx)("td",{align:"center",children:"45"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Contributors"}),(0,n.jsx)("td",{align:"center",children:"14"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"Closed issues"}),(0,n.jsx)("td",{align:"center",children:"9"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:"New features"}),(0,n.jsx)("td",{align:"center",children:"3"})]})]})}),"\n",(0,n.jsxs)(t.p,{children:["For full details: ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/13?closed=1",children:"https://github.com/scalameta/metals/milestone/13?closed=1"})]}),"\n",(0,n.jsxs)(t.p,{children:["Metals is a language server for Scala that works with VS Code, Vim, Emacs,\nSublime Text, Atom and Eclipse. Metals is developed at the\n",(0,n.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"})," and ",(0,n.jsx)(t.a,{href:"https://virtuslab.com",children:"VirtusLab"}),"\nwith the help from ",(0,n.jsx)(t.a,{href:"https://lunatech.com",children:"Lunatech"})," along with contributors from\nthe community."]}),"\n",(0,n.jsx)(t.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,n.jsxs)(t.p,{children:["Check out ",(0,n.jsx)(t.a,{href:"https://scalameta.org/metals/",children:"https://scalameta.org/metals/"}),", and\ngive Metals a try!"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Scala 2.13.2 and basic Scala 3 support"}),"\n",(0,n.jsx)(t.li,{children:"Improvements to the Bloop integration"}),"\n",(0,n.jsx)(t.li,{children:"Automatically add '+' on newline when inside a string"}),"\n",(0,n.jsx)(t.li,{children:'New Code action: "Import all missing symbols"'}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"basic-scala-3-support",children:"Basic Scala 3 support"}),"\n",(0,n.jsxs)(t.p,{children:["For a couple of the last months we have been working on making Metals work with\nthe Dotty compiler, which will become the new Scala 3. This effort included\ncontributions to Metals, Bloop as well as to Dotty. Thanks to the great help\nfrom the Dotty compiler team, we now have an option to generate semanticDB files\nused for our internal indexes, which allowed some features to work without any\nchanges to the core code. It is also important to mention that without\n",(0,n.jsx)(t.a,{href:"https://github.com/jvican",children:"jvican"})," and his Bloop project, which already\nsupports Scala 3, all this would have taken a much longer time."]}),"\n",(0,n.jsx)(t.p,{children:"That said, there are some issues that are lacking in the Scala 3 support that\nare available for 2.x versions. Most notably, we are still missing all of the\nmore advanced completions, filtering and sorting of completion items or auto\nimports. There are also some possible issues connected to optional braces and\ntop level methods features. In the upcoming months we are planning to address\nmost of these issues and implement the lacking features."}),"\n",(0,n.jsxs)(t.p,{children:["You can find missing features in the\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals-feature-requests/issues?q=is%3Aissue+is%3Aopen+label%3Ascala3",children:"feature requests repository"}),"\nand currently known bugs in the\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/issues?q=is%3Aissue+is%3Aopen+label%3A%22Scala+3%22",children:"main Metals repo."})]}),"\n",(0,n.jsxs)(t.p,{children:["The first supported versions will be ",(0,n.jsx)(t.code,{children:"0.23.0"})," and ",(0,n.jsx)(t.code,{children:"0.24.0-RC1"}),", which are the\nlatest stable and the latest release candidate respectably. We plan to always\nsupport the latest stable and release candidate until there is a more stable\nrelease cycle for Scala 3."]}),"\n",(0,n.jsx)(t.p,{children:"Please do report any issues you encounter, especially connected to some new\nScala 3 features, which will be an immense help to the team."}),"\n",(0,n.jsx)(t.h2,{id:"improvements-related-to-bloopmetals-integration",children:"Improvements related to Bloop/Metals integration"}),"\n",(0,n.jsxs)(t.p,{children:["There have been multiple reported issues in the last weeks about hanging\ncompilation, which can make the Metals workspace hard to use. Our top priority\nhas been figuring out all the possible issues both in Metals as well as in\nBloop. Thanks to some fixes done by ",(0,n.jsx)(t.a,{href:"https://github.com/jvican",children:"jvican"}),", and\nsome work on the Metals side on the Bloop integration we're hopeful that some of\nthe issues are becoming less frequent. These fixes are included in this release."]}),"\n",(0,n.jsx)(t.p,{children:"We also reworked the Metals tree view to highlight some commands that a user can\nuse to fix their workspace as well as added two new commands:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Clean compile workspace"})," - clean compile the whole workspace - might be\nneeded in case of broken compiler caches."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"Restart Bloop server"})," - restart the Bloop build server, which should help\nwith the cases where compilation would hang."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/PERfNqt.png",alt:"reworked-tree-view"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Even if those commands help, do not hesitate to report any issues. We are also\nmonitoring the situation ourselves and investigating all problems encountered."}),"\n",(0,n.jsx)(t.h2,{id:"automatically-add--on-newline-inside-a-string",children:"Automatically add '+' on newline inside a string"}),"\n",(0,n.jsxs)(t.p,{children:["The Metals team was recently joined by ",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar"}),",\nan engineer from the Scala Center, who already contributed a number of features\nand bug fixes to the project. Thanks to her, we can now easily enter a newline\ninside a single line string and that string will be correctly split with an\nadditional ",(0,n.jsx)(t.code,{children:"+"}),"."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/uhF0MOx.gif",alt:"split-line"})}),"\n",(0,n.jsx)(t.h2,{id:"code-action-to-import-all-missing-symbols",children:"Code action to import all missing symbols"}),"\n",(0,n.jsxs)(t.p,{children:["Previously, it was only available to import one symbol at a time in case of\nmissing imports. Thanks to ",(0,n.jsx)(t.a,{href:"https://github.com/colineto",children:"colineto"})," we now have\nthe ability to import everything in bulk for every unambiguous import available.\nUnambiguous in this case meaning that there is only one possible import to\nchoose from."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:"https://i.imgur.com/mmzgJs7.gif",alt:"import-all"})}),"\n",(0,n.jsx)(t.h2,{id:"miscellaneous-improvements",children:"Miscellaneous improvements"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Added an option to ignore .scalafmt.conf creation message."}),"\n",(0,n.jsx)(t.li,{children:"Fixed hanging while debugging if workspace had errors."}),"\n",(0,n.jsx)(t.li,{children:"Fixed issue with folding in non 2.12.11 workspaces."}),"\n",(0,n.jsx)(t.li,{children:'Turn off "Go to parent" code lenses by default due to performance problems in\nlarge workspaces.'}),"\n",(0,n.jsx)(t.li,{children:"Fixed false parsing errors in 2.13.x workspaces."}),"\n",(0,n.jsx)(t.li,{children:"Added date string to metals logs."}),"\n",(0,n.jsx)(t.li,{children:"Fixed issue with additional src directories being created automatically."}),"\n",(0,n.jsx)(t.li,{children:'Fixed "Go to implementation" to work with local aliases.'}),"\n",(0,n.jsx)(t.li,{children:"Fixed auto-import issue in package objects."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"contributors",children:"Contributors"}),"\n",(0,n.jsx)(t.p,{children:"Big thanks to everybody who contributed to this release! We had a lot of new\ncontributors doing some really exemplary work."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"$ git shortlog -sn --no-merges v0.8.4..v0.9.0\nAyoub Benali\nTomasz Godzik\nScala Steward\nChris Kipp\nColine Thomas\nMeriam Lachkar\nWin Wang\nElie Poussou\nKrzysztof Bochenek\nOlafur Pall Geirsson\nAleksei Alefirov\nNaoki Takezoe\nNathaniel Fischer\nTomasz Pasternak\n\n"})}),"\n",(0,n.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,n.jsxs)(t.h2,{id:"v090-2020-05-04",children:[(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/tree/v0.9.0",children:"v0.9.0"})," (2020-05-04)"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/compare/v0.8.4...v0.9.0",children:"Full Changelog"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Merged pull requests:"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Reworked Bloop connection and Tree View\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1677",children:"#1677"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["fix auto import position when package object inside package\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1686",children:"#1686"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/colineto",children:"colineto"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Move additional settings to InitializationOptions\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1684",children:"#1684"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Improve code lens generation time\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1679",children:"#1679"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/kpbochenek",children:"kpbochenek"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Don't ask .scalafmt.conf creation again\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1607",children:"#1607"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/takezoe",children:"takezoe"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Create a ",(0,n.jsx)(t.code,{children:"ClientConfig"})," to contain all configuration\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1674",children:"#1674"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Handle return to line in strings in OnTypeFormatting\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1611",children:"#1611"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Bump Bloop version to check if it solves issues with hanging compilation\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1680",children:"#1680"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Improve rendering of Pants command errors.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1681",children:"#1681"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Allow amending without editor prompt\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1676",children:"#1676"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tpasternak",children:"tpasternak"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add Bloop zipkin trace debug and verbose settings\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1678",children:"#1678"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/wiwa",children:"wiwa"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update Scala 3 version to 0.23.0\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1671",children:"#1671"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Make sure that the workspace contains no errors when running\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1658",children:"#1658"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Turn off go to parent code lenses by default\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1666",children:"#1666"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Use DefinitionProvider instead of index in RenameProvider\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1637",children:"#1637"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Feature : Code action Import all missing symbols\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1652",children:"#1652"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/coline-lunatech",children:"coline-lunatech"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add support for Scala 2.13.2\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1659",children:"#1659"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Properly set the arguments field in server commands documentation\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1606",children:"#1606"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"ayoub-benali"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Handle initialization options\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1626",children:"#1626"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"ayoub-benali"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Remove optimisation to reuse semanticdb jar from the classpath\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1657",children:"#1657"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["update dialect of worksheet to scala213\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1656",children:"#1656"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add in updated documentation for vim\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1651",children:"#1651"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ckipp01",children:"ckipp01"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Dynamically read fastpass zipkin properties from fastpass/fastpass.properties\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1655",children:"#1655"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/wiwa",children:"wiwa"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Detect Scala 3 main outer methods to create code lenses\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1640",children:"#1640"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Delete all created folders created for the FileWatcher\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1629",children:"#1629"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["goto Implementations with local alias types\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1598",children:"#1598"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/eilite",children:"eilite"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Fix NewFileLspSuite on Windows\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1624",children:"#1624"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update Sublime in the editors overview doc\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1631",children:"#1631"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"ayoub-benali"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Show date in logs ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1630",children:"#1630"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/mlachkar",children:"mlachkar"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add support for Scala 3\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1523",children:"#1523"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update bloop-config, bloop-frontend, ... to 1.4.0-RC1-192-72a856b6\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1615",children:"#1615"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update guava to 29.0-jre\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1618",children:"#1618"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update flyway-core to 6.3.3\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1619",children:"#1619"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update ipcsocket to 1.0.1\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1621",children:"#1621"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update scalameta, semanticdb-scalac, ... to 4.3.8\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1623",children:"#1623"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update sbt, scripted-plugin to 1.3.9\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1620",children:"#1620"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update metaconfig-core to 0.9.10\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1617",children:"#1617"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update sbt-scalafix to 0.9.14\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1616",children:"#1616"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update munit, sbt-munit to 0.7.2\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1622",children:"#1622"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/scala-steward",children:"scala-steward"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Don't generate timestamp in ",(0,n.jsx)(t.code,{children:".bsp/bloop.json"})," file.\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1612",children:"#1612"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Http client delegates ",(0,n.jsx)(t.code,{children:"metalsInputBox"})," to the underlying client\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1613",children:"#1613"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/alekseiAlefirov",children:"alekseiAlefirov"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add properties for bloop zipkin tracing to fastpass\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1582",children:"#1582"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/wiwa",children:"wiwa"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update millw.bat ",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1602",children:"#1602"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/kag0",children:"kag0"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Update installation guide for Sublime\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1597",children:"#1597"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"ayoub-benali"}),")"]}),"\n",(0,n.jsxs)(t.li,{children:["Add release notes for 0.8.4 version\n",(0,n.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/1596",children:"#1596"}),"\n(",(0,n.jsx)(t.a,{href:"https://github.com/tgodzik",children:"tgodzik"}),")"]}),"\n"]})]})}function d(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},65:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return l}});var a=s(7294);let n={},i=a.createContext(n);function l(e){let t=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),a.createElement(i.Provider,{value:t},e.children)}},2482:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2020/05/04/lithium","source":"@site/blog/2020-05-04-lithium.md","title":"Metals v0.9.0 - Lithium","description":"We are happy to announce the release of Metals v0.9.0, codename \\"Lithium\\", which","date":"2020-05-04T00:00:00.000Z","tags":[],"readingTime":6.505,"hasTruncateMarker":false,"authors":[{"name":"Tomasz Godzik","url":"https://twitter.com/TomekGodzik","imageURL":"https://github.com/tgodzik.png","key":null,"page":null}],"frontMatter":{"author":"Tomasz Godzik","title":"Metals v0.9.0 - Lithium","authorURL":"https://twitter.com/TomekGodzik","authorImageURL":"https://github.com/tgodzik.png"},"unlisted":false,"prevItem":{"title":"Metals v0.9.1 - Lithium","permalink":"/metals/blog/2020/07/01/lithium"},"nextItem":{"title":"Metals v0.8.4 - Cobalt","permalink":"/metals/blog/2020/04/10/cobalt"}}')}}]);