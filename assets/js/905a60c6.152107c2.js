"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(h,i(i({ref:t},u),{},{components:r})):o.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2894:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var o=r(7462),n=r(3366),a=(r(7294),r(3905)),i=["components"],s={id:"proxy",title:"Proxy and mirrors"},l=void 0,p={unversionedId:"troubleshooting/proxy",id:"troubleshooting/proxy",title:"Proxy and mirrors",description:"There are several parts inside Metals and Bloop that require resolving",source:"@site/target/docs/troubleshooting/proxy.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/proxy",permalink:"/metals/docs/troubleshooting/proxy",draft:!1,editUrl:"https://github.com/scalameta/metals/edit/main/docs/troubleshooting/proxy.md",tags:[],version:"current",frontMatter:{id:"proxy",title:"Proxy and mirrors"},sidebar:"docs",previous:{title:"Running and debugging",permalink:"/metals/docs/integrations/debug-adapter-protocol"},next:{title:"Frequently asked questions",permalink:"/metals/docs/troubleshooting/faq"}},u={},c=[{value:"Mirrors",id:"mirrors",level:2},{value:"Via global properties file",id:"via-global-properties-file",level:3},{value:"Via environment variable",id:"via-environment-variable",level:3},{value:"Via properties",id:"via-properties",level:3},{value:"Custom artifact repositories (Maven or Ivy resolvers)",id:"custom-artifact-repositories-maven-or-ivy-resolvers",level:2},{value:"Proxy settings",id:"proxy-settings",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"The server did not start, got FailedToOpenBspConnection",id:"the-server-did-not-start-got-failedtoopenbspconnection",level:3},{value:"Timeout waiting for &#39;build/initialize&#39; response",id:"timeout-waiting-for-buildinitialize-response",level:3},{value:"Mirrors still do not work for all dependencies",id:"mirrors-still-do-not-work-for-all-dependencies",level:3}],d={toc:c};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"There are several parts inside Metals and Bloop that require resolving\nadditional dependencies from the internet. Inside environments behind a proxy or\nwith private artifact repositories Metals might not be able to start, because it\ncannot easily download the needed dependencies."),(0,a.kt)("p",null,"There are multiple ways of fixing these issues, but not all of them work in all\nsituations. While we are trying to make it as painless as possible to setup\neverything, there are some steps that might need to be done manually."),(0,a.kt)("p",null,"Everything inside Metals uses Coursier to download its dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Visual Studio Code and ",(0,a.kt)("inlineCode",{parentName:"li"},"nvim-metals")," extensions both use Coursier to\ndownload Metals server, although they do it slightly different. The VS Code\nextension has a Coursier boostrap file, which is used to is to download a full\nCoursier version. It's used to keep the extension size down to a minimum,\nwhereas ",(0,a.kt)("inlineCode",{parentName:"li"},"nvim-metals")," requires Coursier to be installed on the users machine."),(0,a.kt)("li",{parentName:"ul"},"Metals uses Coursier api to download dependencies needed for a particular\nScala version"),(0,a.kt)("li",{parentName:"ul"},"Bloop uses Coursier api to download the SemanticDB plugin")),(0,a.kt)("p",null,"You can find some more information about particular topics on\n",(0,a.kt)("a",{parentName:"p",href:"https://get-coursier.io/docs/overview"},"Coursier's website"),", but we will try to\nsummarize the most useful solutions here."),(0,a.kt)("h2",{id:"mirrors"},"Mirrors"),(0,a.kt)("p",null,"If Maven Central is not available for your workspace it might be best to use\nCoursier's mirrors. Especially since Coursier boostrap tries to download the\ncore of Coursier from Maven Central directly, which can only be changed using\nthe mirrors. Not all functionalities are yet available for the bootstrapped\nCoursier version, including custom repositories, so mirrors are really the only\nway to fix this."),(0,a.kt)("p",null,"There are different ways to setup mirrors:"),(0,a.kt)("h3",{id:"via-global-properties-file"},"Via global properties file"),(0,a.kt)("p",null,"Create ",(0,a.kt)("inlineCode",{parentName:"p"},"mirror.properties")," file with the contents:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"central.from=https://repo1.maven.org/maven2\ncentral.to=http://exmaple.com:8080/nexus/content/groups/public\n")),(0,a.kt)("p",null,"You need to replace the uri after ",(0,a.kt)("inlineCode",{parentName:"p"},"central.to=")," with your private repository."),(0,a.kt)("p",null,"The location of the mirror file varies depending on the operating system:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows:\n",(0,a.kt)("inlineCode",{parentName:"li"},"C:\\Users\\<user_name>\\AppData\\Roaming\\Coursier\\config\\mirror.properties")),(0,a.kt)("li",{parentName:"ul"},"Linux: ",(0,a.kt)("inlineCode",{parentName:"li"},"~/.config/coursier/mirror.properties")),(0,a.kt)("li",{parentName:"ul"},"MacOS: ",(0,a.kt)("inlineCode",{parentName:"li"},"~/Library/Preferences/Coursier/mirror.properties"))),(0,a.kt)("p",null,"This solution will work in most cases for all previously mentioned usages of\nCoursier, which is especially important in the case of the Bloop server, which\nwhen started by Metals will not have any system properties forwarded."),(0,a.kt)("h3",{id:"via-environment-variable"},"Via environment variable"),(0,a.kt)("p",null,"You can set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"COURSIER_MIRRORS")," with the location of the\nfile containing the mirror definition. That environment variable will need to\navailable either locally or globally for the Metals server. In case of the\nVisual Studio Code extension it means you will need to start it from command\nline with that variable in scope."),(0,a.kt)("h3",{id:"via-properties"},"Via properties"),(0,a.kt)("p",null,"You can also use properties to specify the location of the mirror file, for\nexample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-Dcoursier.mirrors=~/.config/coursier/mirror.properties\n")),(0,a.kt)("p",null,"This property needs to be added to the Metals server and Coursier invocation.\nHowever, this solution will not work for Bloop, because properties are not\nforwarded to the invocation of the Bloop server. You will need to use a\ndifferent method for Bloop in this case or you can run the build server manually\nwith everything specified separately."),(0,a.kt)("h2",{id:"custom-artifact-repositories-maven-or-ivy-resolvers"},"Custom artifact repositories (Maven or Ivy resolvers)"),(0,a.kt)("p",null,"In case you need to add custom repositories to resolve Metals server artifacts\nyou can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COURSIER_REPOSITORIES")," environment variable. This will tell\nCoursier to try to download artifacts from your private artifact repository.\nThis is also available as a setting in the Metals Visual Studio Code and\n",(0,a.kt)("inlineCode",{parentName:"p"},"nvim-metals")," extensions."),(0,a.kt)("h2",{id:"proxy-settings"},"Proxy settings"),(0,a.kt)("p",null,"In some cases, workspaces might require a proxy in order to resolve the needed\nartifacts. Depending on the way Metals server is started, proxy settings can be\nspecified using properties inside a ",(0,a.kt)("inlineCode",{parentName:"p"},".jvmopts")," file and\n",(0,a.kt)("inlineCode",{parentName:"p"},"metals.serverProperties")," for Visual Studio Code or ",(0,a.kt)("inlineCode",{parentName:"p"},"serverProperties")," in your\nsettings table for ",(0,a.kt)("inlineCode",{parentName:"p"},"nvim-metals"),", or via properties for Coursier and Metals\ninvocations."),(0,a.kt)("p",null,"However, because proxy properties might vary between workspaces and a Bloop\nserver must work for multiple clients at the same time they are not forwarded to\nthe Bloop itself. To make sure that Bloop uses the correct proxy settings, you\ncan specify them by copying the correct ",(0,a.kt)("inlineCode",{parentName:"p"},".jvmopts")," file to the ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.bloop"),"\ndirectory, which will make them global."),(0,a.kt)("p",null,"If you are using a manually installed Bloop server, each time you run ",(0,a.kt)("inlineCode",{parentName:"p"},"bloop"),"\nfrom commandline, the proxy settings will be reapplied according to the current\nworkspace's ",(0,a.kt)("inlineCode",{parentName:"p"},".jvmopts"),". This should not be an issue, since those settings are\nrequired only to download the compiler bridges and SemanticDB plugin."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Important")," Each setting needs to be on a separate line."),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"There has already been a couple of issues surrounding this topic, if you are\nstill having issues you can take a look at some of them:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/1315"},"https://github.com/scalameta/metals/issues/1315")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/1301"},"https://github.com/scalameta/metals/issues/1301")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/1306"},"https://github.com/scalameta/metals/issues/1306")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/scalameta/metals/issues/1362"},"https://github.com/scalameta/metals/issues/1362"))),(0,a.kt)("h3",{id:"the-server-did-not-start-got-failedtoopenbspconnection"},"The server did not start, got FailedToOpenBspConnection"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"error: The command bsp --protocol tcp --port 44559 returned with an error\n>\nerror: The launcher failed to establish a bsp connection, aborting...\nERROR Failed to connect with build server, no functionality will work.\njava.lang.RuntimeException: The server did not start, got FailedToOpenBspConnection\n    at bloop.launcher.LauncherMain.failPromise$1(Launcher.scala:92)\n    at bloop.launcher.LauncherMain.runLauncher(Launcher.scala:119)\n    at scala.meta.internal.metals.BloopServers$$anon$1.run(BloopServers.scala:101)\n    at java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:515)\n    at java.util.concurrent.FutureTask.run(FutureTask.java:264)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n    at java.lang.Thread.run(Thread.java:834)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Exception in thread "bloop-server-background" java.io.IOException: Cannot run program "java" (in directory "<some path here ...>"): error=2, No such file or directory\n        at java.lang.ProcessBuilder.start(ProcessBuilder.java:1048)\n')),(0,a.kt)("p",null,"This might mean that you don't have your java installation on your PATH and\nBloop was unable to start."),(0,a.kt)("h3",{id:"timeout-waiting-for-buildinitialize-response"},"Timeout waiting for 'build/initialize' response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INFO  tracing is disabled for protocol BSP, to enable tracing of incoming and outgoing JSON messages create an empty file at C:\\Users\\tgodzik\\AppData\\Local\\scalameta\\metals\\cache\\bsp.trace.json\nERROR Timeout waiting for 'build/initialize' response\nERROR Failed to connect with build server, no functionality will work.\njava.util.concurrent.TimeoutException\n    at java.util.concurrent.CompletableFuture.timedGet(CompletableFuture.java:1886)\n    at java.util.concurrent.CompletableFuture.get(CompletableFuture.java:2021)\n    at scala.meta.internal.metals.BuildServerConnection$.initialize(BuildServerConnection.scala:259)\n    at scala.meta.internal.metals.BuildServerConnection$.$anonfun$fromSockets$1(BuildServerConnection.scala:203)\n    at scala.util.Success.$anonfun$map$1(Try.scala:255)\n    at scala.util.Success.map(Try.scala:213)\n    at scala.concurrent.Future.$anonfun$map$1(Future.scala:292)\n    at scala.concurrent.impl.Promise.liftedTree1$1(Promise.scala:33)\n    at scala.concurrent.impl.Promise.$anonfun$transform$1(Promise.scala:33)\n    at scala.concurrent.impl.CallbackRunnable.run(Promise.scala:64)\n    at java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1128)\n    at java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:628)\n    at java.lang.Thread.run(Thread.java:834)\n\nWARN  Stopped configuration of SemanticDB in Scala 2.13.1 projects: Error downloading org.scalameta:semanticdb-scalac_2.13.1:4.3.0\n  not found: C:\\Users\\tgodzik\\.ivy2\\local\\org.scalameta\\semanticdb-scalac_2.13.1\\4.3.0\\ivys\\ivy.xml\n  download error: Caught java.net.ConnectException: Connection timed out: connect (Connection timed out: connect) while downloading https://repo1.maven.org/maven2/org/scalameta/semanticdb-scalac_2.13.1/4.3.0/semanticdb-scalac_2.13.1-4.3.0.pom\n  not found: https://dl.bintray.com/scalacenter/releases/org/scalameta/semanticdb-scalac_2.13.1/4.3.0/semanticdb-scalac_2.13.1-4.3.0.pom\n")),(0,a.kt)("p",null,"This might mean you need to specify proxy settings for Bloop or add custom\nrepositories as specified above."),(0,a.kt)("h3",{id:"mirrors-still-do-not-work-for-all-dependencies"},"Mirrors still do not work for all dependencies"),(0,a.kt)("p",null,"In some specific configurations it might be needed to define additional mirrors\nlike:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jcenter.from=https://repo1.maven.org/maven2\njcenter.to=https://artifactory.mycomany.com/maven2\n\ntypesafe.from=https://repo.typesafe.com/typesafe/ivy-releases\ntypesafe.to=https://artifactory.mycompany.com/typesafe-ivy-releases/\n")),(0,a.kt)("p",null,"The number of repositories to add depends on how the company's infrastructure is\nset up. The key is to keep adding mirror entries until you've fixed each resolve\nerror. In case of sbt you can find out what the repos are named like\ntypesafe.from|to by checking\n",(0,a.kt)("a",{parentName:"p",href:"https://www.scala-sbt.org/1.x/docs/Resolvers.html#Predefined+resolvers"},"the official documentation"),"\nand any custom resolvers your workspace has defined."))}m.isMDXComponent=!0}}]);