"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7821"],{5999:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return l},default:function(){return c},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return u}});var o=n(2411),r=n(5893),s=n(65);let a={author:"\xd3lafur P\xe1ll Geirsson",title:"Low-memory symbol indexing with bloom filters",authorURL:"https://twitter.com/olafurpg",authorImageURL:"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},l=void 0,i={authorsImageUrls:[void 0]},u=[];function m(e){let t={a:"a",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:'The latest Metals release introduces three new in-memory indexes to implement\nthe features "find symbol references" and "fuzzy symbol search". Indexes are\nimportant to provide fast response times for user requests but they come at the\nprice of higher memory usage. To keep memory usage low, Metals uses a data\nstructure called bloom filters that implements space-efficient sets. Thanks to\nbloom filters, the three new indexes added in the last release use only a few\nmegabytes of memory even for large projects with >500k lines of code.'}),"\n",(0,r.jsxs)(t.p,{children:["In this post, we look into how Metals uses bloom filters for fast indexing with\nsmall memory footprint. We explain what bloom filters are and how we can encode\nproblems like fuzzy searching to take advantage of the nice properties of bloom\nfilters. Finally, we evaluate these new features on a real-world project: the\n",(0,r.jsx)(t.a,{href:"https://github.com/akka/akka",children:"Akka"})," build."]})]})}function c(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},65:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return a}});var o=n(7294);let r={},s=o.createContext(r);function a(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:t},e.children)}},2411:function(e){e.exports=JSON.parse('{"permalink":"/metals/blog/2019/01/22/bloom-filters","source":"@site/blog/2019-01-22-bloom-filters.md","title":"Low-memory symbol indexing with bloom filters","description":"The latest Metals release introduces three new in-memory indexes to implement","date":"2019-01-22T00:00:00.000Z","tags":[],"readingTime":12.545,"hasTruncateMarker":true,"authors":[{"name":"\xd3lafur P\xe1ll Geirsson","url":"https://twitter.com/olafurpg","imageURL":"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4","key":null,"page":null}],"frontMatter":{"author":"\xd3lafur P\xe1ll Geirsson","title":"Low-memory symbol indexing with bloom filters","authorURL":"https://twitter.com/olafurpg","authorImageURL":"https://avatars2.githubusercontent.com/u/1408093?s=460&v=4"},"unlisted":false,"prevItem":{"title":"Metals v0.4.0 - Tin","permalink":"/metals/blog/2019/01/24/tin"},"nextItem":{"title":"Metals v0.3.2 - Iron","permalink":"/metals/blog/2018/12/14/iron"}}')}}]);