"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5486"],{9668:function(e,n,s){s.r(n),s.d(n,{assets:function(){return l},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return i},metadata:function(){return t},toc:function(){return c}});var t=s(2411),o=s(5893),r=s(65);let i={author:"\xd3lafur P\xe1ll Geirsson",title:"Low-memory symbol indexing with bloom filters",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},a=void 0,l={authorsImageUrls:[void 0]},c=[{value:"Bloom filters",id:"bloom-filters",level:2},{value:"Find symbol references",id:"find-symbol-references",level:2},{value:"Fuzzy symbol search",id:"fuzzy-symbol-search",level:2},{value:"Workspace sources",id:"workspace-sources",level:3},{value:"Library classpath",id:"library-classpath",level:3},{value:"Evaluation",id:"evaluation",level:2},{value:"Response times",id:"response-times",level:3},{value:"Memory usage",id:"memory-usage",level:3},{value:"Indexing time",id:"indexing-time",level:3},{value:"Conclusion",id:"conclusion",level:2}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:'The latest Metals release introduces three new in-memory indexes to implement\nthe features "find symbol references" and "fuzzy symbol search". Indexes are\nimportant to provide fast response times for user requests but they come at the\nprice of higher memory usage. To keep memory usage low, Metals uses a data\nstructure called bloom filters that implements space-efficient sets. Thanks to\nbloom filters, the three new indexes added in the last release use only a few\nmegabytes of memory even for large projects with >500k lines of code.'}),"\n",(0,o.jsxs)(n.p,{children:["In this post, we look into how Metals uses bloom filters for fast indexing with\nsmall memory footprint. We explain what bloom filters are and how we can encode\nproblems like fuzzy searching to take advantage of the nice properties of bloom\nfilters. Finally, we evaluate these new features on a real-world project: the\n",(0,o.jsx)(n.a,{href:"https://github.com/akka/akka",children:"Akka"})," build."]}),"\n",(0,o.jsxs)(n.p,{children:["The work presented in this post was done as part of my job at the\n",(0,o.jsx)(n.a,{href:"https://scala.epfl.ch/",children:"Scala Center"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"bloom-filters",children:"Bloom filters"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Bloom_filter",children:"Bloom filters"})," are a probabilistic\ndata structure that implements space-efficient sets. The difference between a\nbloom filter and a regular set such as ",(0,o.jsx)(n.code,{children:"HashSet"})," is that bloom filters have the\nfollowing limitations:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.code,{children:"contains(element)"})," method may return false positives, meaning it can\noccasionally return true even when the element is not a member of the set."]}),"\n",(0,o.jsxs)(n.li,{children:["when creating a bloom filter, you must provide an estimate for how many\nelements will be added to the set. A large estimate results in lower false\npositive rates for the ",(0,o.jsx)(n.code,{children:"contains(element)"})," method at the cost of higher space\nusage. Conversely, a low estimate results in lower memory usage at the cost of\nhigher false positives for the ",(0,o.jsx)(n.code,{children:"contains(element)"})," method."]}),"\n",(0,o.jsx)(n.li,{children:"you can't iterate through the elements of a bloom filter."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"In exchange for these limitations, bloom filters are able to compress a large\nnumber of elements into a small number of bits. Due to their space-efficiency,\nbloom filters are used in many applications ranging from browsers, CDNs and\ncryptocurrencies. In the next sections, we'll explore how bloom filters can also\nbe used in the context of a language server like Metals."}),"\n",(0,o.jsx)(n.h2,{id:"find-symbol-references",children:"Find symbol references"}),"\n",(0,o.jsxs)(n.p,{children:['The "find symbol references" feature shows all usages of a given symbol. For\nexample, in the demo below we find 843 references to the method ',(0,o.jsx)(n.code,{children:"Actor.sender()"}),"\nin the Akka build."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/51531254-3a368280-1e3d-11e9-8df2-4560c6294e35.gif",alt:"Find symbol references example"})}),"\n",(0,o.jsx)(n.p,{children:'Find symbol references is helpful for users when exploring a codebase and it\'s\nalso an important component for Metals to implement other features down the road\nsuch as "rename symbol".'}),"\n",(0,o.jsx)(n.p,{children:"The challenge when implementing find references is that large projects have many\nsymbol references. Iterating through all symbol references for every source file\non every request is too slow. Most symbols appear only in a few source files so\nwe need some way to reduce the search space."}),"\n",(0,o.jsx)(n.p,{children:"Metals uses bloom filters to reduce the number of files we search when looking\nfor a symbol reference. For every file on disk, we keep an in-memory bloom\nfilter which contains the set of all referenced symbols in that file. When\nlooking for references to a given symbol, we skip files\xa0when their accompanying\nbloom filter does not contain a reference to that symbol. False positive results\nfrom the bloom filter are not a problem\xa0because they only slow down the response\nbut don't compromise the correctness of the final result."}),"\n",(0,o.jsx)(n.p,{children:"Concretely, Metals keeps an in-memory map where keys are paths to source files\nin the workspace."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"val references: Map[Path, BloomFilter[Symbol]]\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The values represent the set of\n",(0,o.jsx)(n.a,{href:"https://scalameta.org/docs/semanticdb/specification.html",children:"SemanticDB symbols"}),"\nreferenced in that file. A nice property of keying the map by file paths is that\nwe can incrementally update the map as files change. When a file is re-compiled\nproducing a new SemanticDB file, we throw out the old bloom filter and compute a\nnew one from scratch."]}),"\n",(0,o.jsx)(n.p,{children:"To implement the search, we iterate through all entries of the map and only read\nSemanticDB files from disk when their accompanying bloom filter contains the\nquery symbol (recap: false positives are OK)."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"val query = // ...\nfor {\n  (path, bloom) <- references\n  if bloom.mightContain(query)\n  symbolOccurrence <- readSemanticdbOccurrences(path) // read from disk\n  if isSameSymbol(query, symbolOccurrence)\n} yield symbolOccurrence\n"})}),"\n",(0,o.jsx)(n.p,{children:"In the actual Metals implementation, we additionally take care of adjusting\npositions of the results in case the source file contents have changed since the\nSemanticDB file was created."}),"\n",(0,o.jsx)(n.h2,{id:"fuzzy-symbol-search",children:"Fuzzy symbol search"}),"\n",(0,o.jsx)(n.p,{children:'The "fuzzy symbol search" feature allows you to navigate to a symbol definition\nin the workspace sources or library dependencies by typing the symbol\'s name.'}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/51537603-44fa1300-1e4f-11e9-84f2-eb7d4c6fc7ef.gif",alt:"Fuzzy symbol search example"})}),"\n",(0,o.jsxs)(n.p,{children:["The search is fuzzy, meaning the query doesn't have to be an exact match or a\nsubstring match with the target symbol. For example, we want the query ",(0,o.jsx)(n.code,{children:"ReaSer"}),"\nto match the symbol ",(0,o.jsx)(n.code,{children:"ReactDOMServer"}),". Additionally, all-lowercase queries are\ntreated as case-insensitive so that searching for ",(0,o.jsx)(n.code,{children:"nelis"})," matches the symbol\n",(0,o.jsx)(n.code,{children:"NonEmptyList"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Like with find symbol references, the challenge when implementing fuzzy symbol\nsearch is that we have little time to respond and a lot of symbols to search.\nTesting\xa0the search query against every source file the workspace and every entry\nin the library classpath is too slow."}),"\n",(0,o.jsx)(n.p,{children:"Metals uses bloom filters to reduce the search space so that we only look at\nplaces that are likely to contain matches for the query. We have two different\nindexes, one for workspace sources and another one for the library classpath."}),"\n",(0,o.jsx)(n.h3,{id:"workspace-sources",children:"Workspace sources"}),"\n",(0,o.jsx)(n.p,{children:"The first index is a map keyed by source files in the workspace."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"val inWorkspace: Map[Path, BloomFilter[String]]\n"})}),"\n",(0,o.jsx)(n.p,{children:"The values of the map is the set of all possible sub-queries that match symbols\ndefined in that source file. For example, consider the code below."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"package data\nclass NonEmptyListSpec { ... }\nobject Props { ... }\n"})}),"\n",(0,o.jsx)(n.p,{children:"For this source file, we insert the following sub-queries into the index."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"d\nda\ndat\ndata\nN\nNo\nNon\nL\nLi\nLis\nList\nS\nSp\nSpe\nSpec\nNEL\nNES\nELS\nP\nPr\nPro\nProp\nProps\n"})}),"\n",(0,o.jsxs)(n.p,{children:["When searching for a query like ",(0,o.jsx)(n.code,{children:"NoLi"}),", we split the query into the words ",(0,o.jsx)(n.code,{children:"No"}),"\nand ",(0,o.jsx)(n.code,{children:"Li"})," and visit only files whose bloom filter contains all of those exact\nsub-queries. We include trigrams of the uppercase characters to further reduce\nthe search space for queries like ",(0,o.jsx)(n.code,{children:"NELS"})," that have few lowercase character."]}),"\n",(0,o.jsxs)(n.p,{children:["For all-lowercase queries, we return the union of results from multiple\ncapitalization combinations in order to support case-insensitive searches. For\nexample, the query ",(0,o.jsx)(n.code,{children:"neli"})," returns all results matching any of the following\nqueries."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-txt",children:"neli\nNeli\nNEli\nNeLi\nNelI\nNELi\nNElI\nNeLI\nNELI\n"})}),"\n",(0,o.jsx)(n.p,{children:"To implement the search, we iterate through all entries of the in-memory map and\nonly visit the source files on disk whose bloom filter contain a match for the\nquery."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"val query = ...\nfor {\n  (file, bloom) <- inWorkspace\n  if bloom.mightContain(query)\n  symbol <- parseSymbols(file) // reads from disk\n  if isFuzzyMatch(query, symbol)\n} yield symbol\n"})}),"\n",(0,o.jsx)(n.p,{children:"Like with find symbol references, false positive results from the bloom filter\nslow down the response but don't compromise the correctness of the result. Also,\nwe incrementally update the map as files in the workspace change by removing old\nentries and compute a new bloom filter for the updated source file."}),"\n",(0,o.jsx)(n.h3,{id:"library-classpath",children:"Library classpath"}),"\n",(0,o.jsxs)(n.p,{children:["The library classpath index is similar to the workspace sources index except the\nkeys of the map are package symbols (example ",(0,o.jsx)(n.code,{children:"scala/collection/"}),") instead of\nfile paths."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"val inClasspath: Map[Symbol, (BloomFilter[String], Seq[Symbol])]\n"})}),"\n",(0,o.jsx)(n.p,{children:"Unlike the workspace sources index, the library classpath index does not need to\nbe incrementally updated when files re-compile. The bloom filters in the values\nof the map use the same sub-query technique as the bloom filters in the\nworkspace sources index. For each bloom filter, we additionally store a listing\nof all members of that package. If a query matches a given bloom filter, we test\nthe fuzzy search against all members of the package."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-scala",children:"val query = ...\nfor {\n  (pkg, (bloom, packageMembers)) <- inClasspath\n  if bloom.mightContain(query)\n  member <- packageMembers\n  if isFuzzyMatch(query, symbol(pkg, member))\n  definitionOnDisk <- findDefinition(member) // writes to disk\n} yield definitionOnDisk\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Due to how the Language Server Protocol works, the ",(0,o.jsx)(n.code,{children:"findDefinition"})," method\nwrites sources of library dependencies to disk so the editor can find the symbol\ndefinition location. To reduce the number of files written to disk, Metals\nlimits the number of non-exact search results from the library classpath index."]}),"\n",(0,o.jsx)(n.p,{children:"In the actual Metals implementation, the listing of package members is GZIP\ncompressed to reduce memory usage and the members are decompressed on-demand\nwhen a bloom filter matches the query."}),"\n",(0,o.jsx)(n.h2,{id:"evaluation",children:"Evaluation"}),"\n",(0,o.jsxs)(n.p,{children:["We test Metals on the ",(0,o.jsx)(n.a,{href:"https://github.com/akka/akka",children:"Akka codebase"})," to evaluate\nthe performance of our bloom filter indexes. Akka is a library to build highly\nconcurrent, distributed, and resilient message-driven applications on the JVM."]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:"https://user-images.githubusercontent.com/1408093/51541018-159bd400-1e58-11e9-9181-cf2e32a0a40b.png",alt:"Akka repository"})}),"\n",(0,o.jsx)(n.p,{children:"The Akka codebase has 300-600k lines of code depending on whether you include\ncomments and/or Java sources. Metals indexes both Java and Scala sources for\nfuzzy symbol search but only Scala sources for find symbol references."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"$ git clone https://github.com/akka/akka.git\n$ cd akka\n$ loc\nLanguage  Files    Lines   Blank  Comment     Code\nScala     1,951  358,149  57,528   76,605  224,016\nJava        486  250,609  19,838   51,291  179,480\n"})}),"\n",(0,o.jsxs)(n.p,{children:['We open the base directory with Visual Studio Code and update the "Metals Server\nProperties" setting to ',(0,o.jsx)(n.code,{children:"-Dmetals.statistics=all"})," to enable additional\nlogging\xa0output. We import the build, open the file ",(0,o.jsx)(n.code,{children:"Actor.scala"})," and wait until\ncompilation has finished. It is normal if this step takes several minutes to\ncomplete."]}),"\n",(0,o.jsx)(n.h3,{id:"response-times",children:"Response times"}),"\n",(0,o.jsx)(n.p,{children:"First, we measure the response times for find symbol references."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"time: found 8 references to symbol 'akka/actor/ActorCell.contextStack.' in 8ms\ntime: found 11 references to symbol 'akka/actor/Actor#postRestart().' in 17ms\ntime: found 146 references to symbol 'akka/actor/PoisonPill.' in 0.16s\ntime: found 163 references to symbol 'scala/collection/IterableLike#head().' in 0.23s\ntime: found 1027 references to symbol 'akka/actor/Actor#' in 0.5s\ntime: found 816 references to symbol 'scala/package.Throwable#' in 0.63s\ntime: found 6103 references to symbol 'scala/Predef.String#' in 1.54s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Response times range from 8ms up to 1.6s depending on the number of results. The\n6103 references to ",(0,o.jsx)(n.code,{children:"String"})," origin from 913 source files, which is almost half\nof all Scala source files in the repository. These numbers do not take into\naccount the delay in the editor to display the results in the UI. For large\nresults like ",(0,o.jsx)(n.code,{children:"String"}),", this delay can be several seconds depending on the\neditor."]}),"\n",(0,o.jsx)(n.p,{children:"Next, we measure the response times for fuzzy symbol search."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"time: found 0 results for query 'ConfigSEr' in 13ms\ntime: found 10 results for query 'ConfigSer' in 0.1s\ntime: found 105 results for query 'ActorRef' in 0.21s\ntime: found 105 results for query 'actorref' in 0.31s\ntime: found 1002 results for query 'actor' in 0.54s\ntime: found 3974 results for query 'S' in 1.98s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["Response times range from 13ms up to 2s depending on the query and number of\nresults. Queries with typos like ",(0,o.jsx)(n.code,{children:"ConfigSEr"})," have 0 results and respond\ninstantly, while generic queries like ",(0,o.jsx)(n.code,{children:"S"})," have ~4k results and take 2 seconds to\nrespond. Observe that all-lowercase queries like ",(0,o.jsx)(n.code,{children:"actorref"})," are slower than\ncapitalized queries like ",(0,o.jsx)(n.code,{children:"ActorRef"}),", which is expected because we test multiple\ncapitalization combinations for case-insensitive searches."]}),"\n",(0,o.jsx)(n.h3,{id:"memory-usage",children:"Memory usage"}),"\n",(0,o.jsxs)(n.p,{children:["Next, we look at the memory usage of the bloom filter indexes. The numbers are\ncomputed with ",(0,o.jsx)(n.a,{href:"https://openjdk.java.net/projects/code-tools/jol/",children:"JOL"}),"\n",(0,o.jsx)(n.code,{children:"GraphLayout"})," and the element counts are approximate number of insertions into\nthe bloom filters."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"memory: references index using 3.72M (274,747 elements)\nmemory: workspace symbol index using 1.89M (173,419 elements)\nmemory: classpath symbol index using 1.72M (382,243 elements)\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The three bloom filter indexes use 8Mb combined for the entire Akka build. The\n8Mb include the maps with file/symbol keys and also a GZIP compressed listing of\npackage members for the classpath symbol index. For comparison, the\n",(0,o.jsx)(n.a,{href:"https://scalameta.org/metals/blog/2018/12/12/fast-goto-definition.html",children:"goto definition index"}),"\nthat does not use bloom filters requires 16Mb alone."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"memory: definition index using 15.9M (337,532 lines Scala)\n"})}),"\n",(0,o.jsx)(n.h3,{id:"indexing-time",children:"Indexing time"}),"\n",(0,o.jsx)(n.p,{children:"Next, we look at the time it takes to construct the indexes after build import."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"time: imported build in 2.41s\ntime: updated build targets in 0.12s\ntime: started file watcher in 4.36s\ntime: indexed library classpath in 0.8s\ntime: indexed workspace SemanticDBs in 2.18s\ntime: indexed workspace sources in 3.35s\ntime: indexed library sources in 1.59s\n"})}),"\n",(0,o.jsxs)(n.p,{children:["The Akka build contains many source files but few library dependencies. The\nbottle-neck appears to be starting the file watcher and parsing all ",(0,o.jsx)(n.code,{children:"*.scala"}),"\nand ",(0,o.jsx)(n.code,{children:"*.java"})," sources in the workspace. The following flamegraph shows a detailed\nbreakdown of what goes on during indexing."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:"https://i.imgur.com/Xhr1wXp.jpg",alt:"Akka indexing flamegraph"}),"(",(0,o.jsx)(n.a,{href:"https://geirsson.com/assets/metals-akka-initialize.svg",children:"https://geirsson.com/assets/metals-akka-initialize.svg"}),")"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Click on image to interactively explore the flamegraph."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Some observations:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"it's slower to start the file watcher than compute all three indexes for find\nsymbol references and fuzzy symbol search, combined."}),"\n",(0,o.jsxs)(n.li,{children:["the method ",(0,o.jsx)(n.code,{children:"BloomFilter.put()"})," accounts for 2.26% of the total runtime."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["For comparison, below is another flamegraph for the same indexing pipeline but\nin a different project, ",(0,o.jsx)(n.a,{href:"https://github.com/prisma/prisma",children:"Prisma"}),". The total\nindexing time is around 8 seconds on a cold server for both Akka and Prisma but\nthe distribution is different for how long each indexing task takes. Prisma has\nfewer sources (80k lines of Scala code, no Java) and a larger number of library\ndependencies compared to Akka."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.img,{src:"https://i.imgur.com/JR3SNx6.jpg",alt:"Prisma indexing flamegraph"}),"(",(0,o.jsx)(n.a,{href:"https://geirsson.com/assets/metals-prisma-initialize.svg",children:"https://geirsson.com/assets/metals-prisma-initialize.svg"}),")"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Click on image to interactively explore the flamegraph."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Computing the bloom filter indexes for find symbol references and fuzzy symbol\nsearch takes proportionally even less time in Prisma compared to Akka. The\nPrisma project is a good representation\xa0for projects with less than 100k lines\nof code and a large number of library dependencies."}),"\n",(0,o.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,o.jsxs)(n.p,{children:['Metals uses three bloom filter indexes to implement the features "find symbol\nreferences" and "fuzzy symbol search". On a case study project containing 600k\nlines of code, all three indexes use 8Mb of memory combined and enable\nsub-second response times for most user requests. Response times for fuzzy\nsymbol search is occasionally slower for short queries like ',(0,o.jsx)(n.code,{children:"S"})," but this\nlimitation is not inherent with the bloom filter indexing approach and may be\naddressed in future releases."]}),"\n",(0,o.jsx)(n.p,{children:'Computing the bloom filter indexes takes 4s in our case-study project, out of\ntotal 16s for the combined "import build" and "indexing" steps. These steps run\nwhenever Metals starts in an existing project or after the build changes. Can\nindexing be made faster? Probably yes, but the user experience will still remain\nbottle-necked by sbt build export and compilation of workspace sources, which\nfrequently take many minutes\xa0to complete on large projects.'}),"\n",(0,o.jsx)(n.p,{children:"The indexes are in-memory maps where the keys are file paths and values are\nbloom filters. When files change, we can incrementally update the indexes\xa0by\ncomputing a new bloom filter for the updated source file."}),"\n",(0,o.jsx)(n.p,{children:"The bloom filter indexes are only used to narrow down the search space by\neliminating files and packages that don't contain relevant results for the user\nquery. False positive results slow down response times but don't compromise the\ncorrectness of the final result."}),"\n",(0,o.jsxs)(n.p,{children:["Try out Metals today with VS Code, Atom, Vim, Sublime Text or Emacs using the\ninstallation instructions here\n",(0,o.jsx)(n.a,{href:"https://scalameta.org/metals/docs/editors/overview.html",children:"https://scalameta.org/metals/docs/editors/overview.html"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["The indexer is working when the status bar says ",(0,o.jsx)(n.code,{children:"Indexing\u280B"}),"\n",(0,o.jsx)(n.img,{src:"https://i.imgur.com/6VLPu9c.gif",alt:"Indexing status bar"})]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},65:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(7294);let o={},r=t.createContext(o);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:n},e.children)}},2411:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2019/01/22/bloom-filters","source":"@site/blog/2019-01-22-bloom-filters.md","title":"Low-memory symbol indexing with bloom filters","description":"The latest Metals release introduces three new in-memory indexes to implement","date":"2019-01-22T00:00:00.000Z","tags":[],"readingTime":12.545,"hasTruncateMarker":true,"authors":[{"name":"\xd3lafur P\xe1ll Geirsson","url":"https://twitter.com/olafurpg","imageURL":"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4","key":null,"page":null}],"frontMatter":{"author":"\xd3lafur P\xe1ll Geirsson","title":"Low-memory symbol indexing with bloom filters","authorURL":"https://twitter.com/olafurpg","authorImageURL":"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},"unlisted":false,"prevItem":{"title":"Metals v0.4.0 - Tin","permalink":"/metals/blog/2019/01/24/tin"},"nextItem":{"title":"Metals v0.3.2 - Iron","permalink":"/metals/blog/2018/12/14/iron"}}')}}]);