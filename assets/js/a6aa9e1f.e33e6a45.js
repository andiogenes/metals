"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7643],{2908:(e,t,a)=>{a.r(t),a.d(t,{default:()=>k});var n=a(6540),l=a(4164),r=a(62),i=a(6560),o=a(3891),s=a(2080),c=a(5418),m=a(6930);function g(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,c.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(m.A,{permalink:a,title:n.createElement(c.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&n.createElement(m.A,{permalink:l,title:n.createElement(c.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}var p=a(3067),u=a(431),E=a(9505);function d({items:e,component:t=E.A}){return n.createElement(n.Fragment,null,e.map((({content:e})=>n.createElement(u.i,{key:e.metadata.permalink,content:e},n.createElement(t,null,n.createElement(e,null))))))}var b=a(3248),A=a(8950);function f(e){const t=(0,A.k)(e);return n.createElement(b.A,null,n.createElement("script",{type:"application/ld+json"},JSON.stringify(t)))}function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,r.A)(),{blogDescription:l,blogTitle:o,permalink:s}=t,c="/"===s?a:o;return n.createElement(n.Fragment,null,n.createElement(i.be,{title:c,description:l}),n.createElement(p.A,{tag:"blog_posts_list"}))}function v(e){const{metadata:t,items:a,sidebar:l}=e;return n.createElement(s.A,{sidebar:l},n.createElement(d,{items:a}),n.createElement(g,{metadata:t}))}function k(e){return n.createElement(i.e3,{className:(0,l.A)(o.G.wrapper.blogPages,o.G.page.blogListPage)},n.createElement(h,e),n.createElement(f,e),n.createElement(v,e))}}}]);