"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[517],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var l=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function r(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},i=Object.keys(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(l=0;l<i.length;l++)a=i[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=l.createContext({}),m=function(t){var e=l.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return l.createElement(s.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},u=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),u=m(a),c=n,d=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return a?l.createElement(d,o(o({ref:e},p),{},{components:a})):l.createElement(d,o({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:n,o[1]=r;for(var m=2;m<i;m++)o[m]=a[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6811:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>m,toc:()=>h});var l=a(7462),n=a(3366),i=(a(7294),a(3905)),o=["components"],r={author:"Tomasz Godzik",title:"Metals v0.11.7 - Aluminium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},s=void 0,m={permalink:"/metals/blog/2022/07/04/aluminium",source:"@site/blog/2022-07-04-aluminium.md",title:"Metals v0.11.7 - Aluminium",description:"We're happy to announce the release of Metals v0.11.7, which brings a large",date:"2022-07-04T00:00:00.000Z",formattedDate:"July 4, 2022",tags:[],readingTime:10.45,truncated:!1,authors:[{name:"Tomasz Godzik",url:"https://twitter.com/TomekGodzik",imageURL:"https://github.com/tgodzik.png"}],frontMatter:{author:"Tomasz Godzik",title:"Metals v0.11.7 - Aluminium",authorURL:"https://twitter.com/TomekGodzik",authorImageURL:"https://github.com/tgodzik.png"},nextItem:{title:"Metals v0.11.6 - Aluminium",permalink:"/metals/blog/2022/06/03/aluminium"}},p={authorsImageUrls:[void 0]},h=[{value:"TL;DR",id:"tldr",children:[],level:2},{value:"Release notes now shown in VS Code",id:"release-notes-now-shown-in-vs-code",children:[],level:2},{value:"Improvements to Bloop Java home automation",id:"improvements-to-bloop-java-home-automation",children:[],level:2},{value:"Allow to run all scalafix rules on a file",id:"allow-to-run-all-scalafix-rules-on-a-file",children:[],level:2},{value:"Scala 3 Implement-all abstract members code action.",id:"scala-3-implement-all-abstract-members-code-action",children:[],level:2},{value:"Scala 3 Add file name completions",id:"scala-3-add-file-name-completions",children:[],level:2},{value:"Scala 3 Expression evaluation for debugger.",id:"scala-3-expression-evaluation-for-debugger",children:[],level:2},{value:"Scala 2 Add ConvertToNamedArguments code action",id:"scala-2-add-converttonamedarguments-code-action",children:[],level:2},{value:"New flatMap to for comprehension code action.",id:"new-flatmap-to-for-comprehension-code-action",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2},{value:"Contributors",id:"contributors",children:[],level:2},{value:"Merged PRs",id:"merged-prs",children:[],level:2},{value:"v0.11.7 (2022-07-04)",id:"v0117-2022-07-04",children:[],level:2}],u={toc:h};function c(t){var e=t.components,a=(0,n.Z)(t,o);return(0,i.kt)("wrapper",(0,l.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We're happy to announce the release of Metals v0.11.7, which brings a large\nnumber of Scala 3 improvements as well as a few interesting code actions."),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Commits since last release"),(0,i.kt)("td",{align:"center"},"164")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Merged PRs"),(0,i.kt)("td",{align:"center"},"77")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Contributors"),(0,i.kt)("td",{align:"center"},"14")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Closed issues"),(0,i.kt)("td",{align:"center"},"14")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"New features"),(0,i.kt)("td",{align:"center"},"9")))),(0,i.kt)("p",null,"For full details: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/milestone/51?closed=1"},"https://github.com/scalameta/metals/milestone/51?closed=1")),(0,i.kt)("p",null,"Metals is a language server for Scala that works with VS Code, Vim, Emacs and\nSublime Text. Metals is developed at the ",(0,i.kt)("a",{parentName:"p",href:"https://scala.epfl.ch/"},"Scala Center"),"\nand ",(0,i.kt)("a",{parentName:"p",href:"https://virtuslab.com"},"VirtusLab")," with the help from\n",(0,i.kt)("a",{parentName:"p",href:"https://lunatech.com"},"Lunatech")," along with contributors from the community."),(0,i.kt)("h2",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Check out ",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/"},"https://scalameta.org/metals/"),", and\ngive Metals a try!"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Release notes now shown in VS Code"),(0,i.kt)("li",{parentName:"ul"},"Improvements to Bloop Java home automation."),(0,i.kt)("li",{parentName:"ul"},"Allow to run all scalafix rules on a file"),(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Implement-all abstract members code action."),(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Add snippet completions."),(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Add file name completions."),(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Expression evaluation for debugger."),(0,i.kt)("li",{parentName:"ul"},"[Scala 2]"," Add ConvertToNamedArguments code action."),(0,i.kt)("li",{parentName:"ul"},"New flatMap to for comprehension code action.")),(0,i.kt)("h2",{id:"release-notes-now-shown-in-vs-code"},"Release notes now shown in VS Code"),(0,i.kt)("p",null,"If you are using Visual Studio Code you should see this message right after the\nupdate of the Metals extension has finished. \ud83d\ude80"),(0,i.kt)("p",null,"Starting with the current release we will be showing release notes inside VS\nCode when the version update completes. This way users will know whenever the\nextension was updated and it will not just silently update in the background."),(0,i.kt)("p",null,"Release notes will be shown only once after the update, but can be viewed again\nby executing ",(0,i.kt)("inlineCode",{parentName:"p"},"Metals: Show release notes")),(0,i.kt)("p",null,"This was contributed by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kpodsiad"},"kpodsiad"),", thanks for the\ncontinuous contributions!"),(0,i.kt)("h2",{id:"improvements-to-bloop-java-home-automation"},"Improvements to Bloop Java home automation"),(0,i.kt)("p",null,"From the\n",(0,i.kt)("a",{parentName:"p",href:"https://scalameta.org/metals/blog/2022/06/03/aluminium#automatically-setup-java-home-for-the-bloop-build-server"},"last version of Metals"),"\nwe introduced an automated setup of Java home for your Bloop build server, which\nis used to compile your code under the hood and is the default build server to\nbe used."),(0,i.kt)("p",null,"Your Java Home would be added when starting Metals, before starting the build\nserver, and would also suggest an update when changing the versions in the\nMetals settings. This could result in two possible notifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metals changing Java version:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/BH8AS5c.png",alt:"metals-java-home"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Metals detecting an existing Bloop Java configuration:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/PCyyNVT.png",alt:"metals-java-home-existing"})),(0,i.kt)("p",null,"However, this caused a couple of issues:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In some cases Metals would suggest to change your Java home even if it hasn't\nchanged and it wasn't possible to dismiss the notification forever."),(0,i.kt)("li",{parentName:"ol"},"In case your Java home changed and you missed the notification (or the\nnotification was not shown), Bloop would not start if the old java home was\nremoved. That especially caused issues with usage of Java with Nix."),(0,i.kt)("li",{parentName:"ol"},"Metals would suggest to update your ~/.bloop/bloop.json file even if it was\nreadonly.")),(0,i.kt)("p",null,"To help with that we implemented a number of fixes:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can dismiss the notification forever if Metals mistakenly suggests\nupdating your Bloop configuration and the overall false positives have been\nreduced. To do that you just need to click on the\n",(0,i.kt)("inlineCode",{parentName:"li"},"Use the Global File's JVM...")," button."),(0,i.kt)("li",{parentName:"ol"},"Metals will check before starting if your Java home is correct, and if it's\nnot it will replace it with the current one used by Metals."),(0,i.kt)("li",{parentName:"ol"},"Metals will not show any notifications if it cannot change the file itself.")),(0,i.kt)("p",null,"If you encounter any further issues, you can take a look at Metals output and it\nshould show logs like these:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"2022.07.01 16:14:41 INFO  Bloop uses /usr/lib/jvm/openjdk17 defined at /home/tgodzik/.bloop/bloop.json\n2022.07.01 16:14:41 INFO  Bloop currently uses settings: -Xmx3G\n")),(0,i.kt)("p",null,"You can use them to debug what is happening and report an issue."),(0,i.kt)("h2",{id:"allow-to-run-all-scalafix-rules-on-a-file"},"Allow to run all scalafix rules on a file"),(0,i.kt)("p",null,"Up until the current release Metals would only run scalafix for\n",(0,i.kt)("inlineCode",{parentName:"p"},"organize imports")," and wouldn't allow to use any other rules. Starting with this\nrelease you should be able to apply all currently defined\n",(0,i.kt)("inlineCode",{parentName:"p"},"rules in .scalafix.conf")," you require by running ",(0,i.kt)("inlineCode",{parentName:"p"},"metals.scalafix-run")," command."),(0,i.kt)("p",null,"By default it's bound to ",(0,i.kt)("inlineCode",{parentName:"p"},"alt")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"shift")," + ",(0,i.kt)("inlineCode",{parentName:"p"},"o")," shortcut in Visual\nStudio Code."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/DLe5sYT.gif",alt:"scalafix-run"})),(0,i.kt)("p",null,"One major drawback of the current approach is that we are unable to run some of\nthe custom rules. Only the default rules and the contributed Hygiene rules are\ncurrently available by default. You can see the full list of them\n",(0,i.kt)("a",{parentName:"p",href:"https://scalacenter.github.io/scalafix/docs/rules/community-rules.html#hygiene-rules"},"here"),".\nFor all the rest users will have to use a previously added setting\n",(0,i.kt)("inlineCode",{parentName:"p"},"metals.scalafixRulesDependencies"),", where you can add dependencies following the\n",(0,i.kt)("a",{parentName:"p",href:"https://get-coursier.io/"},"coursier")," convention such as\n",(0,i.kt)("inlineCode",{parentName:"p"},"com.github.liancheng::organize-imports:0.6.0"),"."),(0,i.kt)("p",null,"Let us know if there is another rule we should add to the default ones!"),(0,i.kt)("p",null,"The current situation could be improved by making sure that the dependencies for\nscalafix are listed in the configuration itself. This would allow both Metals\nand scalafix CLI to easily run rules on your workspace. You can find the\ndiscussion on\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scalafix/issues/1625"},"scalafix github page")),(0,i.kt)("h2",{id:"scala-3-implement-all-abstract-members-code-action"},"[Scala 3]"," Implement-all abstract members code action."),(0,i.kt)("p",null,"Implement-all abstract members code action is finally available in Scala 3 \ud83c\udf89"),(0,i.kt)("p",null,"Previously, in Scala3, when you were implementing an abstract member in a\nconcrete class, you could only see the completion to override particular\nmembers. However, you needed to add those members one by one. Now you'll see a\ncode action to implement all the members at once."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/foU3oHL.gif",alt:"implement-all"})),(0,i.kt)("p",null,"Great work by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tanishiking"},"tanishiking"),"."),(0,i.kt)("h2",{id:"scala-3-add-file-name-completions"},"[Scala 3]"," Add file name completions"),(0,i.kt)("p",null,"A file name completion feature has been available only in the Scala 2 project,\nbut thanks to the effort by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/riiswa"},"riiswa"),", Metals 0.11.7\nwill complete class name based on the enclosing file, in Scala3!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/f10pnJ6.gif",alt:"filename-completion"})),(0,i.kt)("h2",{id:"scala-3-expression-evaluation-for-debugger"},"[Scala 3]"," Expression evaluation for debugger."),(0,i.kt)("p",null,"Expression evaluation was already available for use in your Scala 2 code,\nhowever it was still missing for Scala 3. Thanks to the main work by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tdudzik"},"tdudzik")," and later finishing touches and multiple\nbug fixes by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/adpi2"},"adpi2")," it is now possible to to evaluate\nyour code on breakpoints in the Scala 3 code."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/jYs7QdM.gif",alt:"debug"})),(0,i.kt)("p",null,"It was added in the previous 0.11.6 version of Metals, however it was still not\nworking correctly enough to promote it. Now it should be Please report any\nissues you find to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalacenter/scala-debug-adapter"},"scala-debug-adapter"),"."),(0,i.kt)("h2",{id:"scala-2-add-converttonamedarguments-code-action"},"[Scala 2]"," Add ConvertToNamedArguments code action"),(0,i.kt)("p",null,"Metals 0.11.7 allows users to use a new code action that can convert all\narguments to named arguments, which is only available on Scala 2 for the time\nbeing."),(0,i.kt)("p",null,"The new code action will work on method calls with multiple arguments, where",(0,i.kt)("br",{parentName:"p"}),"\n","it's sometimes hard to tell which arguments match which parameters at a glance.\nIn this situation you may want to make them named arguments. Now you will be\nable to automatically convert all those arguments into named arguments."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/SiUYUSY.gif",alt:"convert-to-named-vscode"})),(0,i.kt)("p",null,"We'd like to thank ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/camgraff"},"@camgraff")," for\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/pull/3971"},"implementing this feature")," \ud83e\udd73"),(0,i.kt)("h2",{id:"new-flatmap-to-for-comprehension-code-action"},"New flatMap to for comprehension code action."),(0,i.kt)("p",null,"When working with long chains of map/flatMap/filter it might sometimes be useful\nto replace them with for comprehensions, which can give you a flatter view of\nyour code."),(0,i.kt)("p",null,"This is purely a syntactic sugar which gives us an ability to offer a code\naction to automatically convert any chain of the mentioned methods with a for\ncomprehensions."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.imgur.com/MOZLYi0.gif",alt:"for-comp"})),(0,i.kt)("p",null,"There is currently one known issue with two separate chains being inside one\nanother, which might cause unexpected issues. Please report any other issues you\nfind!"),(0,i.kt)("p",null,"Amazing effort from ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zmerr"},"zmerr")),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Updated Bloop version to 1.5.2, which should allow for a better\n",(0,i.kt)("inlineCode",{parentName:"li"},"clean compile workspace")," behaviour."),(0,i.kt)("li",{parentName:"ul"},"Always print out CFR output if there is any available even if the command\nprinted to the error output."),(0,i.kt)("li",{parentName:"ul"},"Add correct parenthesis when using extension methods completions.\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/riiswa"},"riiswa")),(0,i.kt)("li",{parentName:"ul"},"Properly show links to implicit parameters in decoration hovers inside for\ncomprehensions."),(0,i.kt)("li",{parentName:"ul"},"Run doctor when ",(0,i.kt)("inlineCode",{parentName:"li"},"more information")," button was clicked"),(0,i.kt)("li",{parentName:"ul"},"Fix issues with Metals support for Scala 3.1.x hanging due to infinite loop in\nthe compiler.")),(0,i.kt)("h2",{id:"contributors"},"Contributors"),(0,i.kt)("p",null,"Big thanks to everybody who contributed to this release or reported an issue!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ git shortlog -sn --no-merges v0.11.6..v0.11.7\n27  Tomasz Godzik\n    22  Cam Graff\n    18  Rikito Taniguchi\n    15  Scalameta Bot\n    10  ckipp01\n     5  Waris Radji\n     5  scalameta-bot\n     4  Vadim Chelyshov\n     3  Adrien Piquerez\n     2  Kamil Podsiadlo\n     2  tgodzik\n     1  Chris Kipp\n     1  Kamil Podsiad\u0142o\n     1  zmerr\n")),(0,i.kt)("h2",{id:"merged-prs"},"Merged PRs"),(0,i.kt)("h2",{id:"v0117-2022-07-04"},(0,i.kt)("a",{parentName:"h2",href:"https://github.com/scalameta/metals/tree/v0.11.7"},"v0.11.7")," (2022-07-04)"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/scalameta/metals/compare/v0.11.6...v0.11.7"},"Full Changelog")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merged pull requests:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fix sbt-dependengy-graph workflow again\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4095"},"#","4095"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix sbt-dependency-graph workflow\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4092"},"#","4092"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/adpi2"},"adpi2"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: ConvertToNamedArgument code action: register the server command / hide in\nScala3 projects ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4090"},"#","4090"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: (scala3) insert correct position for implement-all code action on class\nwith type parameters ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4081"},"#","4081"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Bump Bloop to newest version\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4078"},"#","4077"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Change Java home on startup if broken\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4079"},"#","4077"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"feature: Add known scalafix rules' dependencies\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4077"},"#","4077"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: ","[Scala 3]"," Adjust changes for the most recent compiler version\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4071"},"#","4071"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Don't cache Java for nix and additionally use JAVA_HOME\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4075"},"#","4075"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Make sure that the Scala 3 compiler always retries properly\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4074"},"#","4074"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Uncomment HKSignatureHelpSuite\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4072"},"#","4072"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: handle memory footprint errors on JDK17\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4064"},"#","4064"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: lsif-java -> scip-java\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3972"},"#","3972"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"feature: Don't update readonly bloop.json and allow to dismiss notifications\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4049"},"#","4049"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"feat: OverrideCompletion can handle symbolPrefix\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4037"},"#","4037"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"docs: Add Rikito Taniguchi to maintainers\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4058"},"#","4058"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Fix wrong type shown when type alias is used\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4046"},"#","4046"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"docs: Update release documentation\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4051"},"#","4051"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: support tab indent in implement-all code action\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4042"},"#","4042"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"flatMap to For Comprehension\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3885"},"#","3885"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/zmerr"},"zmerr"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Fix wrong flag for default methods\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4045"},"#","4045"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: remove improper javaOptions initialization\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4047"},"#","4047"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: do not fail when stripping ansi codes\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4048"},"#","4048"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,i.kt)("li",{parentName:"ul"},"Add ConvertToNamedArguments code action\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3971"},"#","3971"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/camgraff"},"camgraff"),")"),(0,i.kt)("li",{parentName:"ul"},"add scala 3.1.3 and 3.2.0-RC1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4041"},"#","4041"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"Adjust to signature help changes in scala3 compiler\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4026"},"#","4026"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"feat(mill): also check default version in mill file\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4039"},"#","4039"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"fix(worksheets): filter out NonUnitStatements wartremover in worksheets\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4038"},"#","4038"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update munit from 1.0.0-M3 to 1.0.0-M5\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4033"},"#","4033"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update scribe, scribe-file, scribe-slf4j from 3.8.3 to 3.9.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4031"},"#","4031"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"[Scala 3]"," Add file name completions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4018"},"#","4018"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/riiswa"},"riiswa"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update undertow-core from 2.2.17.Final to 2.2.18.Final\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4032"},"#","4032"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update requests from 0.7.0 to 0.7.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4030"},"#","4030"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update h2 from 2.1.212 to 2.1.214\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4029"},"#","4029"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update sbt-scalafix, scalafix-interfaces from 0.10.0 to 0.10.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4028"},"#","4028"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"feat: Implement-all abstract members code action for Scala3\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3960"},"#","3960"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Properly send back experimental capabilities\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4007"},"#","4007"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"chore(maven): update the maven wrapper\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4024"},"#","4024"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: run doctor when ",(0,i.kt)("inlineCode",{parentName:"li"},"more information")," button was clicked\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4019"},"#","4019"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kpodsiad"},"kpodsiad"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Fix errors for kind projector\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4015"},"#","4015"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Reset diagnostics before connecting to new server\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4017"},"#","4017"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Properly show links to implicit parameters in decoration hovers\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4014"},"#","4014"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"feature: Allow to run all scalafix rules on a file\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3996"},"#","3996"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix extension methods completion\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4013"},"#","4013"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/riiswa"},"riiswa"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Add support for Scala 2.12.16\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4010"},"#","4010"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Always print out CFR output if there is any available\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4012"},"#","4012"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Add support for Scala 3.1.3-RC5\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4011"},"#","4011"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"Fix auto implement abstract members for self-types\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4009"},"#","4009"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/riiswa"},"riiswa"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: only compare Bloop JavaHome with Metals JavaHome if set\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/4002"},"#","4002"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: add checkout to steward job\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3999"},"#","3999"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"chore(deps): add in other scalameta repos to steward job\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3995"},"#","3995"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: switch mtags release on a branch with backports\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3998"},"#","3998"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dos65"},"dos65"),")"),(0,i.kt)("li",{parentName:"ul"},"bugfix: Fix failing tests after refactor\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3993"},"#","3993"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update ammonite-util from 2.5.3 to 2.5.4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3983"},"#","3983"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update scalameta, semanticdb-scalac, ... from 4.5.6 to 4.5.9\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3991"},"#","3991"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Update lsp4j to 0.14.0\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3958"},"#","3958"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update munit from 1.0.0-M3 to 1.0.0-M4\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3990"},"#","3990"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update jsoup from 1.14.3 to 1.15.1\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3989"},"#","3989"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update flyway-core from 8.5.10 to 8.5.12\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3988"},"#","3988"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update interface from 1.0.6 to 1.0.7\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3986"},"#","3986"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update coursier from 2.1.0-M5 to 2.1.0-M6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3985"},"#","3985"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update scribe, scribe-file, scribe-slf4j from 3.8.2 to 3.8.3\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3984"},"#","3984"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"build(deps): Update bloop-config, bloop-launcher from 1.5.0-18-003e6c7b to\n1.5.0-22-91111c15 ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3982"},"#","3982"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta-bot"},"scalameta-bot"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: Update tests to work with newest nightlies\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3981"},"#","3981"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"refactor: Fix testing library breakpoints and simplify metals adapter logic\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3966"},"#","3966"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"fix: correct steward cron\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3980"},"#","3980"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"chore(ci): add Scala Steward into CI\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3977"},"#","3977"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ckipp01"},"ckipp01"),")"),(0,i.kt)("li",{parentName:"ul"},"feature: ","[Scala 3]"," Add snippet completions\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3959"},"#","3959"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tgodzik"},"tgodzik"),")"),(0,i.kt)("li",{parentName:"ul"},"doc: fix release note v0.11.6 (duplicated merged commits section)\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3979"},"#","3979"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"chore: update version for v0.11.6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3978"},"#","3978"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")"),(0,i.kt)("li",{parentName:"ul"},"docs: release note for Metals 0.11.6\n",(0,i.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/pull/3957"},"#","3957"),"\n(",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tanishiking"},"tanishiking"),")")))}c.isMDXComponent=!0}}]);