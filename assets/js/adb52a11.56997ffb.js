"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8306"],{8663:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>r,default:()=>d,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"contributors/releasing","title":"Making a release","description":"Metals","source":"@site/target/docs/contributors/releasing.md","sourceDirName":"contributors","slug":"/contributors/releasing","permalink":"/metals/docs/contributors/releasing","draft":false,"unlisted":false,"editUrl":"https://github.com/scalameta/metals/edit/main/docs/contributors/releasing.md","tags":[],"version":"current","frontMatter":{"id":"releasing","title":"Making a release"},"sidebar":"docs","previous":{"title":"Contributing to the website","permalink":"/metals/docs/contributors/updating-website"},"next":{"title":"Integrating a new build tool","permalink":"/metals/docs/integrations/new-build-tool"}}'),i=n("5893"),l=n("65");let a={id:"releasing",title:"Making a release"},r=void 0,o={},c=[{value:"Metals",id:"metals",level:2},{value:"Tag the release",id:"tag-the-release",level:3},{value:"Draft the release notes",id:"draft-the-release-notes",level:3},{value:"Update Metals version",id:"update-metals-version",level:3},{value:"Open a PR with release notes",id:"open-a-pr-with-release-notes",level:3},{value:"Start the release process:",id:"start-the-release-process",level:3},{value:"Before release announcement",id:"before-release-announcement",level:3},{value:"Official release",id:"official-release",level:3},{value:"Post release",id:"post-release",level:3},{value:"Sanity check",id:"sanity-check",level:2},{value:"Add new Scala version support to the existing release",id:"add-new-scala-version-support-to-the-existing-release",level:2}];function h(e){let s={a:"a",code:"code",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"metals",children:"Metals"}),"\n",(0,i.jsx)(s.h3,{id:"tag-the-release",children:"Tag the release"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Choose the right version number:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"x.0.0"})," should not be used unless Metals is totally reworked."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"x.y.0"})," is reserved for changes that require adjustments in the plugins for\ndifferent editors."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"x.y.z"})," is reserved in remaining cases, where the changes do not require any\nadjustments in the plugins."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["For most releases bumping ",(0,i.jsx)(s.code,{children:"z"})," is enough especially that Metals not being used\nas a library anywhere and do not have a public API."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The tag must be called ",(0,i.jsx)(s.code,{children:"vx.y.z"}),", e.g. ",(0,i.jsx)(s.code,{children:"v3.0.0"}),"."]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:'git tag -a vx.y.z -m "vx.y.z"'})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["You will need the tag to fill in some information in the release notes. It can\nalways be deleted and tagged again if you want to include more commits.\n",(0,i.jsx)(s.code,{children:"git tag -d vx.y.z"})]}),"\n",(0,i.jsx)(s.p,{children:"Please wait with pushing the tag until the release notes are accepted."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"draft-the-release-notes",children:"Draft the release notes"}),"\n",(0,i.jsx)(s.p,{children:"First of all, if you are bumping the minor part of the version choose a new\nmetal or an alloy as a new for the release! Use that in the release notes and in\nthe release title on GitHub. Otherwise, use the metal from the previous release."}),"\n",(0,i.jsxs)(s.p,{children:["You might use the ",(0,i.jsx)(s.code,{children:"./bin/merged_prs.sc"})," script to generate a draft of release\nnotes with merged PRs list between two last release tags. It can be run using\nscala-cli:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{children:'cs install scala-cli\nscala-cli ./bin/merged_prs.scala -- <tag1> <tag2> "<github_api_token>"\n'})}),"\n",(0,i.jsxs)(s.p,{children:["Make sure that required tags, the previous one and the new one, are available.\nYou might need to do ",(0,i.jsx)(s.code,{children:"git fetch <main_fork> --tags"})," to fetch the older tag. You\nneed to create the new one."]}),"\n",(0,i.jsxs)(s.p,{children:["It will need a ",(0,i.jsx)(s.a,{href:"https://github.com/settings/tokens",children:"basic github API token"}),"\n(don't need any additional scopes) to run, which may be specified via the last\nargument."]}),"\n",(0,i.jsxs)(s.p,{children:["The script will generate a new markdown file in ",(0,i.jsx)(s.code,{children:"website/blog"})," filled with a\nbasic release template."]}),"\n",(0,i.jsx)(s.p,{children:"You can fill in the number of closed issues from the last milestone, though you\nwill need to make sure everything is included there. In most cases you can just\nadd all the closed issues since the last milestone."}),"\n",(0,i.jsx)(s.p,{children:"Please also fill in any missing details like the author or author image."}),"\n",(0,i.jsxs)(s.p,{children:["To write the actual release notes you can look through the list of closed PR,\nput any smaller changes that you think are worth mentioning to the users in the\n",(0,i.jsx)(s.code,{children:"Miscellaneous"})," section and any large ones as their own section with more\nexplanation and examples."]}),"\n",(0,i.jsx)(s.h3,{id:"update-metals-version",children:"Update Metals version"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"build.sbt"})," - update ",(0,i.jsx)(s.code,{children:"localSnapshotVersion"})," and ",(0,i.jsx)(s.code,{children:"mimaPreviousArtifacts"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".github/ISSUE_TEMPLATE/bug_report.yml"})," - update ",(0,i.jsx)(s.code,{children:"Version of Metals"})]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"./bin/test-release.sh"})," - remove any unsupported Scala versions and add newly\nsupported ones. This will be needed later to test the new release."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:".github/workflows/mtags-auto-release.yml"})," - update ",(0,i.jsx)(s.code,{children:"metals_version"})," and\n",(0,i.jsx)(s.code,{children:"metals_ref"})]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"open-a-pr-with-release-notes",children:"Open a PR with release notes"}),"\n",(0,i.jsx)(s.p,{children:"Open the PR to the repo and wait until they are approved to merge them. This\nmight take some time if the release is large enough."}),"\n",(0,i.jsx)(s.h3,{id:"start-the-release-process",children:"Start the release process:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"git push <main_fork> <tag_name>"})," will trigger release workflow on the main\nfork of the metals repository. This for example can be\n",(0,i.jsx)(s.code,{children:"git push git@github.com:scalameta/metals.git v1.0.0"})," or if you have the\nremote set up:"]}),"\n"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"> git remote -v\nprimary	git@github.com:scalameta/metals.git (fetch)\nprimary	git@github.com:scalameta/metals.git (push)\n> git push primary v1.0.0\n"})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Do not create a release on GitHub just yet. Creating a release on GitHub sends\nout a notification to repository watchers, and the release isn't ready for\nthat yet."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Wait for\n",(0,i.jsx)(s.a,{href:"https://github.com/scalameta/metals/actions?query=workflow%3ARelease",children:"the Github Actions job"}),"\nto build the binaries and stage them to Sonatype."]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"While waiting for Github Actions, update the milestones:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/scalameta/metals/milestones",children:"https://github.com/scalameta/metals/milestones"})}),"\n",(0,i.jsx)(s.li,{children:"Close the milestone or milestones corresponding to the release. For example,\nfor a v3.3.0 release, we close both 3.3.0 and 3.2.1 (because we never\nreleased 3.2.1, so all its tickets went straight to 3.3.0)."}),"\n",(0,i.jsx)(s.li,{children:"Create the milestone or milestones corresponding to future releases. For\nexample, for a v3.3.0 release, we create both v3.3.1 and v3.4.0."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"before-release-announcement",children:"Before release announcement"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Verify the Sonatype release:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Make sure that the release shows up at\n",(0,i.jsx)(s.a,{href:"https://oss.sonatype.org/content/repositories/releases/org/scalameta/",children:"https://oss.sonatype.org/content/repositories/releases/org/scalameta/"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Run ",(0,i.jsx)(s.code,{children:"./bin/test-release.sh $VERSION"})," to ensure that all artifacts have\nsuccessfully been released. It's important to ensure that this script passes\nbefore announcing the release since it takes a while for all published\nartifacts to sync with Maven Central. You might need to update the script if\nthe list of supported versions changed in the meantime."]}),"\n",(0,i.jsxs)(s.li,{children:["To check that the release to Sonatype succeed even if the artifacts are not\nyet available on Maven Central run:\n",(0,i.jsx)(s.code,{children:"./bin/test-release.sh $VERSION -r sonatype:public"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Double check if the release starts up and some basic features work."}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Merge the release notes PR"}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Wait until it's available on ",(0,i.jsx)(s.a,{href:"https://scalameta.org/metals/blog/",children:"https://scalameta.org/metals/blog/"})]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Upgrade downstream projects:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"https://github.com/scalameta/metals-vscode",children:"https://github.com/scalameta/metals-vscode"}),":","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["generate metals website with ",(0,i.jsx)(s.code,{children:"sbt docs/run"})]}),"\n",(0,i.jsxs)(s.li,{children:["open ",(0,i.jsx)(s.code,{children:"website/target/docs/editors/vscode.md"}),' and copy everything from\n"Installation" over to the scalameta/metals-vscode README',"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:'remove "Using latest SNAPSHOT" section, this table is only up-to-date on\nthe website'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["check or update ",(0,i.jsx)(s.code,{children:"enum"})," values of ",(0,i.jsx)(s.code,{children:"fallbackScalaVersion"})," property in\n",(0,i.jsx)(s.code,{children:"package.json"}),". They should be the same as ",(0,i.jsx)(s.code,{children:"V.supportedScalaVersions"})," in\n",(0,i.jsx)(s.code,{children:"build.sbt"})]}),"\n",(0,i.jsx)(s.li,{children:"open a PR, feel free to merge after CI is green"}),"\n",(0,i.jsxs)(s.li,{children:["open the last generated release draft, tag with a new version and publish\nthe release. The new version should always be the next minor since patches\nare used for prerelease versions, so if the last full release was ",(0,i.jsx)(s.code,{children:"1.24.0"}),"\nthen the next should be ",(0,i.jsx)(s.code,{children:"1.25.0"}),". This will start github actions job and\npublish the extension to both the Visual Studio Code Marketplace and\nopenvsx."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"official-release",children:"Official release"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Publish the release on GitHub:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"https://github.com/scalameta/metals/releases",children:"https://github.com/scalameta/metals/releases"})}),"\n",(0,i.jsx)(s.li,{children:"Copy-paste the release from the website blog"}),"\n",(0,i.jsx)(s.li,{children:"In the dropdown, pick the recently pushed tag."}),"\n",(0,i.jsxs)(s.li,{children:["In the release title, say ",(0,i.jsx)(s.code,{children:"Metals vX.Y.Z"}),"."]}),"\n",(0,i.jsx)(s.li,{children:'Once the VS Code extension has been updated on the Marketplace, click\n"Publish release".'}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"Announce the new release with the link to the release notes:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["on ",(0,i.jsx)(s.a,{href:"https://discord.com/invite/RFpSVth",children:"Discord"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"post-release",children:"Post release"}),"\n",(0,i.jsx)(s.p,{children:"See if any docs need to be updated due to the changes in the last PR. This could\npotentially be done also before the release, but might be easier as a follow up\nafterwards without the release pressure."}),"\n",(0,i.jsx)(s.h2,{id:"sanity-check",children:"Sanity check"}),"\n",(0,i.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","draft release notes and create with PR with them"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","bump Metals version"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","push a tag to the repository"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","merge PR with release notes"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","check if artifacts are published to the sonatype"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","update downstream projects like metals-vscode"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","do release on GitHub"]}),"\n",(0,i.jsxs)(s.li,{className:"task-list-item",children:[(0,i.jsx)(s.input,{type:"checkbox",disabled:!0})," ","announce it"]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"add-new-scala-version-support-to-the-existing-release",children:"Add new Scala version support to the existing release"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsx)(s.p,{children:"If it's a Scala2 you need to release semanticdb plugin for it first."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Find out which scalameta version the existing release uses"}),"\n",(0,i.jsxs)(s.li,{children:["In scalameta project:","\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"checkout on the tag for this version"}),"\n",(0,i.jsx)(s.li,{children:"apply required changes for supporting new Scala2 compiler"}),"\n",(0,i.jsxs)(s.li,{children:["create and push tag with the following name:\n",(0,i.jsx)(s.code,{children:"semanticdb_v${existing-scalameta-version}_${scala-version}"})," Notice this\ntag should include\n",(0,i.jsxs)(s.a,{href:"https://github.com/scalameta/scalameta/pull/2562/commits/1dfc99677659f5a9919c0dc9166547a0b332d35c",children:["these changes in ",(0,i.jsx)(s.code,{children:"release.yml"})]})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:["\n",(0,i.jsxs)(s.p,{children:["Release mtags artifact. Open\n",(0,i.jsxs)(s.a,{href:"https://github.com/scalameta/metals/actions/workflows/mtags-auto-release.yml",children:[(0,i.jsx)(s.code,{children:"Mtags auto release"})," action page"]}),",\nclick ",(0,i.jsx)(s.code,{children:"Run Workflow"}),", specify Scala version and confirm."]}),"\n"]}),"\n"]})]})}function d(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},65:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return a}});var t=n(7294);let i={},l=t.createContext(i);function a(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);