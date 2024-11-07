"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2824"],{1008:function(e,t,s){s.r(t),s.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return r},metadata:function(){return n},toc:function(){return h}});var n=s(8847),i=s(5893),a=s(65);let r={author:"Chris Kipp",title:"A Metals Retrospective (Part 1)",authorURL:"https://twitter.com/ckipp01",authorImageURL:"https://avatars2.githubusercontent.com/u/13974112?v=4"},o=void 0,l={authorsImageUrls:[void 0]},h=[{value:"Editor Support",id:"editor-support",level:2},{value:"Will you support IntelliJ?",id:"will-you-support-intellij",level:3},{value:"Why do people start using Metals",id:"why-do-people-start-using-metals",level:2},{value:"Information and Help with Metals",id:"information-and-help-with-metals",level:2},{value:"I wish Metals had... but it does!",id:"i-wish-metals-had-but-it-does",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function d(e){let t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/FYZXteD.png",alt:"metals-banner"})}),"\n",(0,i.jsx)(t.p,{children:"At the end of 2020 the Metals team sent out a survey to gather input from our\nusers in hopes to get a better picture of who you are, what you want out of\nMetals, and any other useful feedback you may have wanted to provide. With just\nunder 400 responses we got a ton of great data, some interesting insights, and\na nice picture of what is currently hindering users, and what common\nfunctionality continually comes up as feature requests. In order to best use this\ndata, and also to share some results, we thought it'd be a good idea to go over\nsome of the sections, address some of the points that came up, and also clear up\nany misconceptions that may have appeared in the survey results. The idea is for\nthis to be a 2 part series. You can expect the following:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Part 1 - Where we discuss some of the initial results and address some common\nmisconceptions and questions."}),"\n",(0,i.jsx)(t.li,{children:"Part 2 - Where we go deeper into the desired features, the biggest pain\npoints, and our plans for this next year."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"editor-support",children:"Editor Support"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"https://i.imgur.com/w67gMGW.png",alt:"editor-results"})}),"\n",(0,i.jsxs)(t.p,{children:["Surprising no one, VS Code came out on top for editors with the most desire for\nMetals support. Our ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-vscode",children:"VS Code\nextension"})," has over 100k downloads\nand it is safe to say that it offers the best support for overall Metals usage.\nThe next most popular of our extensions is probably ",(0,i.jsx)(t.code,{children:"coc-metals"})," which had just\nover 20k downloads in 2020. There are certain features that do only work in VS\nCode mainly due to the robustness of the LSP support and other extra features.\nHere are a few examples of features that we added this past year that work\nextremely well with VS Code with no hardly no extra effort on the users part:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Debugging support - Early on in 2020 Metals v0.8.0 added debugging support.\nNow with the click of a button you can run, test, and debug your code right\nfrom inside VS Code."}),"\n",(0,i.jsx)(t.li,{children:"Preview renames - in Metals v0.8.1 functionality was added so that you can now\npreview the changes after triggering a rename for up to 300 files."}),"\n",(0,i.jsx)(t.li,{children:"Analyze stacktrace functionality - As of Metals v0.9.4 Metals gained the ability\nto take a stack trace and give you a nice view of the entire stack with\nclickable links to go to that part of your code. This is all found in the\nvery useful web view of VS Code."}),"\n",(0,i.jsx)(t.li,{children:"Show implicits and type decorations - As of Metals v0.9.5 Metals gained the\nability to show implicits and type decorations as decorations directly\ninline of your code."}),"\n",(0,i.jsx)(t.li,{children:"Show implicits conversion and classes - As of Metals v0.9.6 Metals gained the\nability to show implicits conversion and classes as decorations directly\ninline of your code."}),"\n",(0,i.jsx)(t.li,{children:"Navigativing stacktrace while debugging - Also in Metals v0.9.6 the ability to\nnavigate stacktraces during a deubugging sesions was added, which re-used\nthe functionality introduced in v0.9.4 to analyze stacktraces."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Now at this point you may be starting to assume that we heavily favor VS Code\nand that Metals is geared towards it. We got a few comments related to this\nthroughout the survey. However, I want to make a specific point that since the\ninception of Metals, the early maintainers did a fantastic job of ensuring that\neverything would work in clients that offered the necessary LSP support, and\nalso extra features to clients that offered support for the Metals specific LSP\nextensions that we use. This has remained core for us a we continue to provide\nnew features. Pretty much any new feature that is added is added in a way that\ncan also be utilized for editors that may not have the same level of support as\nVS Code. Here are a few examples:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Debugging support - Metals actually offers deubugging support for any client\nthat can serve as a DAP client. So for example using ",(0,i.jsx)(t.code,{children:"coc-metals"})," you can\nalso run, test, and debug your code while utilizing\n",(0,i.jsx)(t.a,{href:"https://github.com/puremourning/vimspector",children:(0,i.jsx)(t.code,{children:"vimspector"})}),". The same is true\nfor emacs clients that are utilizing\n",(0,i.jsx)(t.a,{href:"https://github.com/emacs-lsp/lsp-mode",children:(0,i.jsx)(t.code,{children:"lsp-mode"})}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Analyze stacktrace functionality - For clients that don't have a web view,\nthis feature is still supported by producing a file with code lens' in it to\nallow you to navigate to the relevant parts of the stacktrace."}),"\n",(0,i.jsxs)(t.li,{children:["Implicits, type decorations, implicits conversions and classes - VS Code isn't\nthe only extension that actually implements this. There is also\n",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-sublime",children:(0,i.jsx)(t.code,{children:"metals-sublime"})})," that has\ninline decorations. For other editors that may not support inline\ndecorations, this feature is still re-usable and the information is actually\ndisplayed in hover as another section."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"So again, while VS Code is an incredible editor, that offers incredible support\nfor the various Metals features, we work hard to ensure that these features are\nalso usable in our other extensions, even if they look a bit different. While\nthere are varying levels of support in the various editor extensions, much of\nthis is due to the those editors being the editors the current maintainers use.\nWe are always open for more help in any of the current editor extensions and\nthis is actually a great way to get involved. We are also open to help you\ncreate a new extension to maybe support an editor that is yet to have a\nMetals-specific extension! Here are links to the various Metals clients:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-vscode",children:"scalameta/metals-vscode"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/coc-metals",children:"scalameta/coc-metals"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/nvim-metals",children:"scalameta/nvim-metals"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-sublime",children:"scalameta/metals-sublime"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals-eclipse",children:"scalameta/metals-eclipse"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/emacs-lsp/lsp-metals",children:"emacs-lsp/lsp-metals"})}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"will-you-support-intellij",children:"Will you support IntelliJ?"}),"\n",(0,i.jsx)(t.p,{children:"When asked about what editor people wished had Metals support, here were the\nresults:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Editor"}),(0,i.jsx)(t.th,{children:"Votes"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.jetbrains.com/idea/",children:"IntelliJ"})}),(0,i.jsx)(t.td,{children:"19"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"http://notepad-plus-plus.org/",children:"Notepad++"})}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://wiki.gnome.org/Apps/Builder",children:"Gnome Builder"})}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://www.nova.app/",children:"Nova"})}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"http://kakoune.org/",children:"Kakoune"})}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://netbeans.org/",children:"Netbeans"})}),(0,i.jsx)(t.td,{children:"2"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"https://theia-ide.org/",children:"Eclipse Theia"})}),(0,i.jsx)(t.td,{children:"1"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.a,{href:"http://www.jedit.org/",children:"jEdit"})}),(0,i.jsx)(t.td,{children:"1"})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:['Some of these editors will already actually work with Metals, especially if they\nsupport VS Code extensions like Eclipse Theia does. However, one question we\noften get is: "Will you support IntelliJ?" The simple answer to this question is\n',(0,i.jsx)(t.em,{children:"No"}),", but not for the reason people may think. IntelliJ is a fantastic project\nthat is the most widely used editor in Scala. Metals aims to be a language\nserver for clients that implement LSP. Since IntelliJ has no ",(0,i.jsx)(t.em,{children:"official"})," support\nfor LSP, we have no intention on adding support for IntelliJ. Many times the\ntarget audience is different as well."]}),"\n",(0,i.jsx)(t.h2,{id:"why-do-people-start-using-metals",children:"Why do people start using Metals"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Reason"}),(0,i.jsx)(t.th,{children:"Very Important"}),(0,i.jsx)(t.th,{children:"Somewhat important"}),(0,i.jsx)(t.th,{children:"Not important"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"I wanted a lighter alternative to other IDEs."}),(0,i.jsx)(t.td,{children:"245"}),(0,i.jsx)(t.td,{children:"74"}),(0,i.jsx)(t.td,{children:"27"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"I could use my favorite editor."}),(0,i.jsx)(t.td,{children:"223"}),(0,i.jsx)(t.td,{children:"62"}),(0,i.jsx)(t.td,{children:"56"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"I wanted more accurate compiler errors."}),(0,i.jsx)(t.td,{children:"220"}),(0,i.jsx)(t.td,{children:"86"}),(0,i.jsx)(t.td,{children:"36"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"I wanted a fully open source solution."}),(0,i.jsx)(t.td,{children:"133"}),(0,i.jsx)(t.td,{children:"138"}),(0,i.jsx)(t.td,{children:"69"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Metals had features other IDEs didn't"}),(0,i.jsx)(t.td,{children:"56"}),(0,i.jsx)(t.td,{children:"112"}),(0,i.jsx)(t.td,{children:"160"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"information-and-help-with-metals",children:"Information and Help with Metals"}),"\n",(0,i.jsx)(t.p,{children:"Over this past year we've done our best to make sure everyone is aware of all\nthe great stuff that is happening in Metals. We have multiple channels of\ncommunication open with pretty impressive response times if you ever get stuck.\nHere are the results about where people go for question about Metals and also\nwhere they get their news about Metals."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{src:"https://i.imgur.com/6Ijm9Bv.png",alt:"metals info"}),"\n",(0,i.jsx)(t.img,{src:"https://i.imgur.com/2Qysoqe.png",alt:"metals help"})]}),"\n",(0,i.jsxs)(t.p,{children:["Apart from the places that we had listed in the survey, the place mentioned the\nmost for where people hear about Metals related news was ",(0,i.jsx)(t.a,{href:"https://scalatimes.com/",children:"Scala\nTimes"}),"!"]}),"\n",(0,i.jsx)(t.p,{children:"As a reminder, don't ever hesitate to reach out, and if anything is missing in\nthe docs, please lend a helping hand or point it out to us."}),"\n",(0,i.jsx)(t.h2,{id:"i-wish-metals-had-but-it-does",children:"I wish Metals had... but it does!"}),"\n",(0,i.jsx)(t.p,{children:"Below are some things that appeared in the survey as wishes, but that Metals\nalready supports, or has added support for since the survey! Hopefully these\nwill help highlight some lesser known features of Metals or serve as a reminder\nof some of the features we have."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Requested"}),(0,i.jsx)(t.th,{children:"Status"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Renaming symbols"}),(0,i.jsx)(t.td,{children:"Available since v0.8.0 and all supported editors support this."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Better info about Ammonite scripts failing."}),(0,i.jsxs)(t.td,{children:["Actually because of this comment, there was some work done to improve the error messages about why Ammonite may not be starting. You can see this here ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2333",children:"in this pr"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"A check telling me if everything is setup correctly."}),(0,i.jsxs)(t.td,{children:["We recently did some work or the Metals Doctor to help you see what issues are going on. You can trigger Doctor by the ",(0,i.jsx)(t.code,{children:"run-doctor"})," command. It may differ a bit per client. You can see the recent changes made ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/metals/pull/2339",children:"here in this pr"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Seamless install in Vim"}),(0,i.jsxs)(t.td,{children:["There are two Metals-specific Vim and Neovim extensions, both which offer an automated install feature. ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/coc-metals",children:"coc-metals"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/scalameta/nvim-metals",children:"nvim-metals"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Navigating stacktrace feature in emacs."}),(0,i.jsx)(t.td,{children:"This actually should work, since it just needs code lenses to work for clients that don't have a web view. Part of this is just documentation, so if you're an emacs user, please help us with docs!"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Use a specific version of Ammonite"}),(0,i.jsxs)(t.td,{children:["You can currently do this by setting the version in a comment on the top of a file like illustrated ",(0,i.jsx)(t.a,{href:"https://scalameta.org/metals/docs/troubleshooting/faq#how-do-i-use-scala-2xx-for-my-script",children:"here"}),". Also the next release of Metals will have better support for a fallback version of the compiler that is used for standalone scripts. This will give you more control over what version is used in situations like Ammonite scripts."]})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,i.jsx)(t.p,{children:"We want to thank you again for taking the time and filling out our year-end\nsurvey. Keep on the lookout for Part 2 of this, and we'll be discussing the\nbiggest pain points and some of the most desired features that we plan to tackle\nthis next year. We'll also do a further look into build server and build tool\nsupport finishing off with an update on our current Scala 3 support and the\nefforts that are going into it."}),"\n",(0,i.jsx)(t.p,{children:"Cheers,"}),"\n",(0,i.jsx)(t.p,{children:"The Metals team"})]})}function c(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},65:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return r}});var n=s(7294);let i={},a=n.createContext(i);function r(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(a.Provider,{value:t},e.children)}},8847:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2021/02/02/metals-retro-part1","source":"@site/blog/2021-02-02-metals-retro-part1.md","title":"A Metals Retrospective (Part 1)","description":"metals-banner","date":"2021-02-02T00:00:00.000Z","tags":[],"readingTime":8.28,"hasTruncateMarker":false,"authors":[{"name":"Chris Kipp","url":"https://twitter.com/ckipp01","imageURL":"https://avatars2.githubusercontent.com/u/13974112?v=4","key":null,"page":null}],"frontMatter":{"author":"Chris Kipp","title":"A Metals Retrospective (Part 1)","authorURL":"https://twitter.com/ckipp01","authorImageURL":"https://avatars2.githubusercontent.com/u/13974112?v=4"},"unlisted":false,"prevItem":{"title":"Metals v0.10.0 - Tungsten","permalink":"/metals/blog/2021/02/24/tungsten"},"nextItem":{"title":"Metals v0.9.10 - Lithium","permalink":"/metals/blog/2021/01/19/lithium"}}')}}]);