"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8433"],{1222:function(e,t,s){s.r(t),s.d(t,{assets:function(){return o},contentTitle:function(){return r},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return h}});var l=s(7361),i=s(5893),n=s(65);let a={author:"\xd3lafur P\xe1ll Geirsson",title:"Metals v0.4.0 - Tin",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},r=void 0,o={authorsImageUrls:[void 0]},h=[{value:"Metals server",id:"metals-server",level:2},{value:"Upgraded Bloop",id:"upgraded-bloop",level:3},{value:"Syntax errors as you type",id:"syntax-errors-as-you-type",level:3},{value:"Faster and more reliable clearing of fixed compile errors",id:"faster-and-more-reliable-clearing-of-fixed-compile-errors",level:3},{value:"More detailed compilation progress",id:"more-detailed-compilation-progress",level:3},{value:"Cascade compile command",id:"cascade-compile-command",level:3},{value:"Formatting with Scalafmt",id:"formatting-with-scalafmt",level:3},{value:"Symbol outline",id:"symbol-outline",level:3},{value:"Find symbol references",id:"find-symbol-references",level:3},{value:"Fuzzy symbol search",id:"fuzzy-symbol-search",level:3},{value:"Blog post on low-memory symbol indexing with Bloom filters",id:"blog-post-on-low-memory-symbol-indexing-with-bloom-filters",level:3},{value:"Visual Studio Code",id:"visual-studio-code",level:2},{value:"Lower default memory settings",id:"lower-default-memory-settings",level:3},{value:"Improved Java home detection",id:"improved-java-home-detection",level:3},{value:".jvmopts detection",id:"jvmopts-detection",level:3},{value:"Vim",id:"vim",level:2},{value:"Update log_level setting",id:"update-log_level-setting",level:3},{value:"View multi-line error messages",id:"view-multi-line-error-messages",level:3},{value:"Sublime Text",id:"sublime-text",level:2},{value:"Built-in &quot;import build&quot; dialogue",id:"built-in-import-build-dialogue",level:3},{value:"Manual &quot;import build&quot; command",id:"manual-import-build-command",level:3},{value:"Emacs",id:"emacs",level:2},{value:"Merged PRs",id:"merged-prs",level:2}];function c(e){let t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:['We are excited to announce the release of Metals v0.4, codename "Tin" \uD83C\uDF89 Metals\nis a language server for Scala that works with VS Code, Atom, Vim, Sublime Text\nand Emacs. Metals is developed at the ',(0,i.jsx)(t.a,{href:"https://scala.epfl.ch/",children:"Scala Center"}),"\nwith contributors from the community."]}),"\n",(0,i.jsx)(t.h2,{id:"metals-server",children:"Metals server"}),"\n",(0,i.jsxs)(t.p,{children:["In this release we merged 50 PRs and closed 21 issues, full details:\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/milestone/4?closed=1",children:"https://github.com/scalameta/metals/milestone/4?closed=1"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"upgraded-bloop",children:"Upgraded Bloop"}),"\n",(0,i.jsx)(t.p,{children:"This release upgrades from Bloop v1.1.2 to v1.2.5, which includes several\nimprovements to diagnostics and compilation performance. See release notes for\nmore details and upgrade guide."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/releases/tag/v1.2.5",children:"v1.2.5"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/releases/tag/v1.2.4",children:"v1.2.4"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/releases/tag/v1.2.3",children:"v1.2.3"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/releases/tag/v1.2.1",children:"v1.2.1"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalacenter/bloop/releases/tag/v1.2.0",children:"v1.2.0"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Major props to ",(0,i.jsx)(t.a,{href:"https://github.com/jvican",children:"@jvican"})," for his great work on Bloop.\nBloop does the heavy lifting around build import and compilation for Metals."]}),"\n",(0,i.jsx)(t.h3,{id:"syntax-errors-as-you-type",children:"Syntax errors as you type"}),"\n",(0,i.jsx)(t.p,{children:"Previously, Metals only published compile errors from the build on file save.\nNow, a syntax error is also published as you type making it easier to catch\ncommon errors like unclosed string literals and missing parentheses."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/2nzeSQv.gif",alt:"Syntax errors as you type"})}),"\n",(0,i.jsx)(t.p,{children:"This change has an additional benefit in editors like Vim where compile errors\nwould previously disappear if you for example inserted a newline above an error.\nNow, Metals updates the positions of errors as you type."}),"\n",(0,i.jsx)(t.h3,{id:"faster-and-more-reliable-clearing-of-fixed-compile-errors",children:"Faster and more reliable clearing of fixed compile errors"}),"\n",(0,i.jsx)(t.p,{children:"A bug where red squiggles for fixed errors would occasionally not be cleared has\nnow been fixed."}),"\n",(0,i.jsx)(t.p,{children:"Also red squiggles for fixed errors disappear faster thanks to an improvement in\nBloop. Previously, diagnostics were cleared after the bytecode generation phase\nin the compiler and now they are cleared after the typer phase."}),"\n",(0,i.jsx)(t.h3,{id:"more-detailed-compilation-progress",children:"More detailed compilation progress"}),"\n",(0,i.jsx)(t.p,{children:"The status bar now includes information which individual build targets are being\ncompiled along with a percentage estimate for how much remains of the\ncompilation."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/fbQysxW.gif",alt:"Detailed compile progress"})}),"\n",(0,i.jsx)(t.h3,{id:"cascade-compile-command",children:"Cascade compile command"}),"\n",(0,i.jsx)(t.p,{children:'Use the new "Cascade compile" command to trigger compilation in downstream build\ntargets in the workspace. For example, if you have made changes in the main\nsources of you project you can run cascade compile to trigger compilation in the\ntest sources.'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/EbKPn6g.png",alt:"Cascade compile"})}),"\n",(0,i.jsx)(t.h3,{id:"formatting-with-scalafmt",children:"Formatting with Scalafmt"}),"\n",(0,i.jsxs)(t.p,{children:["It's now possible to format code with\n",(0,i.jsx)(t.a,{href:"https://scalameta.org/scalafmt/",children:"Scalafmt"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/50635748-b0894880-0f53-11e9-913b-acfd5f505351.gif",alt:"Formatting with scalafmt"})}),"\n",(0,i.jsxs)(t.p,{children:["It's possible to use different version of Scalafmt between different workspaces.\nTo configure which Scalafmt version to use for a given workspace update the\n",(0,i.jsx)(t.code,{children:"version"})," setting in ",(0,i.jsx)(t.code,{children:".scalafmt.conf"}),"."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-conf",children:'# .scalafmt.conf\nversion = "1.5.1"\n'})}),"\n",(0,i.jsx)(t.h3,{id:"symbol-outline",children:"Symbol outline"}),"\n",(0,i.jsx)(t.p,{children:"It's now possible to browse the symbol outline of a source file."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/50635569-014c7180-0f53-11e9-8898-62803898781c.gif",alt:"Document Symbols"})}),"\n",(0,i.jsx)(t.p,{children:"Metals returns a hierarchical outline for editor that support it (like Visual\nStudio Code, Atom, Emacs) and otherwise returns a flat outline."}),"\n",(0,i.jsx)(t.h3,{id:"find-symbol-references",children:"Find symbol references"}),"\n",(0,i.jsx)(t.p,{children:"It's now possible to look up all usages of a given symbol in the workspace."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/51531254-3a368280-1e3d-11e9-8df2-4560c6294e35.gif",alt:"Find symbol references"})}),"\n",(0,i.jsx)(t.h3,{id:"fuzzy-symbol-search",children:"Fuzzy symbol search"}),"\n",(0,i.jsx)(t.p,{children:"It's now possible to look up a symbol definition in the workspace or library\ndependencies by typing its name. All-lowercase queries are treated as\ncase-insensitive searches."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://user-images.githubusercontent.com/1408093/51537603-44fa1300-1e4f-11e9-84f2-eb7d4c6fc7ef.gif",alt:"Fuzzy symbol search example"})}),"\n",(0,i.jsx)(t.p,{children:"This feature is not supported yet in Sublime Text."}),"\n",(0,i.jsx)(t.h3,{id:"blog-post-on-low-memory-symbol-indexing-with-bloom-filters",children:"Blog post on low-memory symbol indexing with Bloom filters"}),"\n",(0,i.jsxs)(t.p,{children:["Read the post\n",(0,i.jsx)(t.a,{href:"https://olafurpg.github.io/metals/blog/2019/01/22/bloom-filters.html",children:'"Low-memory symbol indexing with bloom filters"'}),'\nto learn how Metals implements indexing for the features "fuzzy symbol search"\nand "find symbol references".']}),"\n",(0,i.jsx)(t.h2,{id:"visual-studio-code",children:"Visual Studio Code"}),"\n",(0,i.jsxs)(t.p,{children:["Full changelog:\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-vscode/blob/master/CHANGELOG.md",children:"https://github.com/scalameta/metals-vscode/blob/master/CHANGELOG.md"})]}),"\n",(0,i.jsx)(t.h3,{id:"lower-default-memory-settings",children:"Lower default memory settings"}),"\n",(0,i.jsxs)(t.p,{children:["The extension now starts Metals with the JVM option ",(0,i.jsx)(t.code,{children:"-Xms100M"})," instead of\n",(0,i.jsx)(t.code,{children:"-Xms1G"}),". The exact memory usage of Metals depends on the size of the project\nand whether Bloop is installed on the computer or not, but only 50-100Mb can be\nsufficient memory for Metals in many cases."]}),"\n",(0,i.jsx)(t.h3,{id:"improved-java-home-detection",children:"Improved Java home detection"}),"\n",(0,i.jsx)(t.p,{children:"The extension now chooses the latest available JDK home for Java 8. Previously,\nthe extension sometimes picked the JRE over JDK or an older version of Java 8\nwhen newer security updates were installed on the computer."}),"\n",(0,i.jsx)(t.h3,{id:"jvmopts-detection",children:".jvmopts detection"}),"\n",(0,i.jsxs)(t.p,{children:["The extension now uses JVM options from ",(0,i.jsx)(t.code,{children:".jvmopts"})," when launching Metals so it's\npossible to configure HTTP proxy settings without custom configuration. Memory\noptions like ",(0,i.jsx)(t.code,{children:"-Xms100M"})," are ignored in ",(0,i.jsx)(t.code,{children:".jvmopts"}),', use the "Server Properties"\nsetting to customize memory settings.']}),"\n",(0,i.jsx)(t.h2,{id:"vim",children:"Vim"}),"\n",(0,i.jsxs)(t.p,{children:["It's recommended to update vim-lsc to the latest version, full changelog:\n",(0,i.jsx)(t.a,{href:"https://github.com/natebosch/vim-lsc/blob/master/CHANGELOG.md",children:"https://github.com/natebosch/vim-lsc/blob/master/CHANGELOG.md"})]}),"\n",(0,i.jsx)(t.h3,{id:"update-log_level-setting",children:"Update log_level setting"}),"\n",(0,i.jsxs)(t.p,{children:["A recent change in how log messages are displayed makes the status bar updates\nfrom Metals disappear unless you set the default ",(0,i.jsx)(t.code,{children:"log_level"})," setting to ",(0,i.jsx)(t.code,{children:"Log"}),".\nUpdate ",(0,i.jsx)(t.code,{children:".vimrc"})," as follows:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-diff",children:" let g:lsc_server_commands = {\n-  \\  'scala': 'metals-vim'\n+  \\  'scala': {\n+  \\    'command': 'metals-vim',\n+  \\    'log_level': 'Log'\n+  \\  }\n+  \\}\n"})}),"\n",(0,i.jsx)(t.h3,{id:"view-multi-line-error-messages",children:"View multi-line error messages"}),"\n",(0,i.jsxs)(t.p,{children:["Run the new ",(0,i.jsx)(t.code,{children:":LSClientLineDiagnostics"})," command to display all diagnostics on the\ncurrent line and to un-truncate multi-line error messages. Big thanks to\n",(0,i.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"@ayoub-benali"})," for contributing several\n",(0,i.jsx)(t.a,{href:"https://github.com/tomv564/LSP/pulls?q=is%3Apr+author%3Aayoub-benali+sort%3Aupdated-desc",children:"improvements to LSP"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"sublime-text",children:"Sublime Text"}),"\n",(0,i.jsx)(t.p,{children:"It's recommended to upgrade to LSP v0.8.1, full changelogs:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/tomv564/LSP/releases/tag/0.8.1",children:"https://github.com/tomv564/LSP/releases/tag/0.8.1"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/tomv564/LSP/releases/tag/0.8.0",children:"https://github.com/tomv564/LSP/releases/tag/0.8.0"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"built-in-import-build-dialogue",children:'Built-in "import build" dialogue'}),"\n",(0,i.jsx)(t.p,{children:'It\'s now possible to respond to the "Import build" dialogue from Sublime Text\nwithout using the HTTP server.'}),"\n",(0,i.jsx)(t.h3,{id:"manual-import-build-command",children:'Manual "import build" command'}),"\n",(0,i.jsx)(t.p,{children:"It's now possible to manually trigger a build import from the command palette."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/LViPc95.png",alt:"Import build command"})}),"\n",(0,i.jsxs)(t.p,{children:["See\n",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/sublime#manually-trigger-build-import",children:"manually trigger build import"}),"\nfor instructions how to configure this command."]}),"\n",(0,i.jsx)(t.h2,{id:"emacs",children:"Emacs"}),"\n",(0,i.jsxs)(t.p,{children:["The\n",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/editors/emacs.html",children:"Emacs installation instructions"}),"\nhave been improved thanks to ",(0,i.jsx)(t.a,{href:"https://github.com/JesusMtnez",children:"@JesusMtnez"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"merged-prs",children:"Merged PRs"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Trigger didFocus when current compile may affect focused buffer.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/500",children:"#500"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Several polish improvements to workspace symbols\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/498",children:"#498"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Update sublime doc for manual build import trigger\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/495",children:"#495"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"ayoub-benali"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Handle sbt pluginsDirectory as symbolic link\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/417",children:"#417"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Update feature_request.md\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/491",children:"#491"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Avoid redundant didFocus compiles, fixes #483.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/488",children:"#488"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Polish before v0.4 release.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/485",children:"#485"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Update Emacs docs ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/484",children:"#484"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/JesusMtnez",children:"JesusMtnez"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Upgrade to Bloop v1.2.4 ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/481",children:"#481"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Clean up indexing pipeline.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/480",children:"#480"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Avoid duplicate classpath indexing.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/477",children:"#477"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Support navigation for visited dependency sources via workspace/symbol.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/476",children:"#476"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Limit classpath search to jars.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/475",children:"#475"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Small fixes to workspace symbol\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/472",children:"#472"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Implement workspace/symbol to search symbol by name.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/471",children:"#471"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Implement fast, low-overhead and synthetics-aware find references.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/469",children:"#469"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:['Add "Cascade compile" and "Cancel compile" tasks.\n',(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/467",children:"#467"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:['Improve "No SemanticDB" error message\n',(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/466",children:"#466"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Improve the status bar redirection to window/logMessage\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/465",children:"#465"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Lower recommended memory settings.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/464",children:"#464"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Disable SbtSlowSuite in Appveyor CI.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/460",children:"#460"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Improve diagnostic reporting.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/459",children:"#459"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:['Add test case for "missing scalafmt version"\n',(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/458",children:"#458"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Use scalafmt-dynamic module to simplify formatting implementation.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/452",children:"#452"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Improve compilation tracking in the status bar.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/451",children:"#451"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Improve eglot documentation\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/450",children:"#450"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/JesusMtnez",children:"JesusMtnez"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Feature/appveyor memory limits\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/449",children:"#449"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/PanAeon",children:"PanAeon"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Preinit sbt on appveyor, because it usually fails the first time\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/448",children:"#448"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/PanAeon",children:"PanAeon"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Add note to Emacs docs about Eglot usage\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/446",children:"#446"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Removed ansi colors & fixed TimerSuite for non standard locales\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/445",children:"#445"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/entangled90",children:"entangled90"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Update sublime doc to reflect the changes in the LSP plugin\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/443",children:"#443"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/ayoub-benali",children:"ayoub-benali"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Upgrade to mdoc v1.0.0 ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/442",children:"#442"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Add snapshot resolver since we're publishing snapshots\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/441",children:"#441"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/mpollmeier",children:"mpollmeier"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Document textDocument/documentSymbol and textDocument/formatting\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/440",children:"#440"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Remove -Dmetals.documentSymbol in favor of client capabilities\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/439",children:"#439"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fix wrong log ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/437",children:"#437"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Add log when skipping formatting of a file due to Scalafmt configuration\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/436",children:"#436"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Don't attempt build import if sbt version is < 0.13.17\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/434",children:"#434"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Implement textDocument/formatting using Scalafmt\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/429",children:"#429"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Move critical file watching in-house.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/427",children:"#427"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Implement textDocument/documentSymbols\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/424",children:"#424"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Add test to CreateDirectoriesSuite\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/421",children:"#421"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/gabro",children:"gabro"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Improve Emacs docs ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/419",children:"#419"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/JesusMtnez",children:"JesusMtnez"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Fix incorrect docs ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/418",children:"#418"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n",(0,i.jsxs)(t.li,{children:["Add more steps to release process.\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/414",children:"#414"}),"\n(",(0,i.jsx)(t.a,{href:"https://github.com/olafurpg",children:"olafurpg"}),")"]}),"\n"]})]})}function m(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},65:function(e,t,s){s.d(t,{Z:function(){return r},a:function(){return a}});var l=s(7294);let i={},n=l.createContext(i);function a(e){let t=l.useContext(n);return l.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),l.createElement(n.Provider,{value:t},e.children)}},7361:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2019/01/24/tin","source":"@site/blog/2019-01-24-tin.md","title":"Metals v0.4.0 - Tin","description":"We are excited to announce the release of Metals v0.4, codename \\"Tin\\" \uD83C\uDF89 Metals","date":"2019-01-24T00:00:00.000Z","tags":[],"readingTime":6.37,"hasTruncateMarker":true,"authors":[{"name":"\xd3lafur P\xe1ll Geirsson","url":"https://twitter.com/olafurpg","imageURL":"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4","key":null,"page":null}],"frontMatter":{"author":"\xd3lafur P\xe1ll Geirsson","title":"Metals v0.4.0 - Tin","authorURL":"https://twitter.com/olafurpg","authorImageURL":"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},"unlisted":false,"prevItem":{"title":"Metals v0.4.4 - Tin","permalink":"/metals/blog/2019/02/01/tin"},"nextItem":{"title":"Low-memory symbol indexing with bloom filters","permalink":"/metals/blog/2019/01/22/bloom-filters"}}')}}]);