"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8401],{2447:(e,n,t)=>{t.r(n),t.d(n,{default:()=>re});var a=t(6540),s=t(1213),i=t(3807),r=t(4848),l=a.createContext(null);function o(e){var n=e.children,t=function(e){return(0,a.useMemo)((function(){return{metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc}}),[e])}(e.content);return(0,r.jsx)(l.Provider,{value:t,children:n})}function c(){var e=(0,a.useContext)(l);if(null===e)throw new i.dV("DocProvider");return e}function d(){var e,n=c(),t=n.metadata,a=n.frontMatter,i=n.assets;return(0,r.jsx)(s.be,{title:t.title,description:t.description,keywords:a.keywords,image:null!=(e=i.image)?e:a.image})}var u=t(4164),m=t(4581),v=t(1312),h=t(9022);function b(e){var n=e.previous,t=e.next;return(0,r.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,v.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,r.jsx)(h.A,Object.assign({},n,{subLabel:(0,r.jsx)(v.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),t&&(0,r.jsx)(h.A,Object.assign({},t,{subLabel:(0,r.jsx)(v.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}function x(){var e=c().metadata;return(0,r.jsx)(b,{previous:e.previous,next:e.next})}var f=t(4586),g=t(8774),p=t(4070),j=t(7559),C=t(5597),A=t(2252);var L={unreleased:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(v.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var n=e.siteTitle,t=e.versionMetadata;return(0,r.jsx)(v.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,r.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){var n=L[e.versionMetadata.banner];return(0,r.jsx)(n,Object.assign({},e))}function _(e){var n=e.versionLabel,t=e.to,a=e.onClick;return(0,r.jsx)(v.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,r.jsx)("b",{children:(0,r.jsx)(g.A,{to:t,onClick:a,children:(0,r.jsx)(v.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){var n,t=e.className,a=e.versionMetadata,s=(0,f.A)().siteConfig.title,i=(0,p.vT)({failfast:!0}).pluginId,l=(0,C.g1)(i).savePreferredVersionName,o=(0,p.HW)(i),c=o.latestDocSuggestion,d=o.latestVersionSuggestion,m=null!=c?c:(n=d).docs.find((function(e){return e.id===n.mainDocId}));return(0,r.jsxs)("div",{className:(0,u.A)(t,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,r.jsx)("div",{children:(0,r.jsx)(N,{siteTitle:s,versionMetadata:a})}),(0,r.jsx)("div",{className:"margin-top--md",children:(0,r.jsx)(_,{versionLabel:d.label,to:m.path,onClick:function(){return l(d.name)}})})]})}function T(e){var n=e.className,t=(0,A.r)();return t.banner?(0,r.jsx)(k,{className:n,versionMetadata:t}):null}function H(e){var n=e.className,t=(0,A.r)();return t.badge?(0,r.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,r.jsx)(v.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var M=t(8046),O=t(4336);function y(){var e=c().metadata,n=e.editUrl,t=e.lastUpdatedAt,a=e.lastUpdatedBy,s=e.tags,i=s.length>0,l=!!(n||t||a);return i||l?(0,r.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,r.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,r.jsx)("div",{className:"col",children:(0,r.jsx)(M.A,{tags:s})})}),l&&(0,r.jsx)(O.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:a})]}):null}var I=t(1422),w=t(5195),E=t(8587);const B={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};var V=["collapsed"];function S(e){var n=e.collapsed,t=(0,E.A)(e,V);return(0,r.jsx)("button",Object.assign({type:"button"},t,{className:(0,u.A)("clean-btn",B.tocCollapsibleButton,!n&&B.tocCollapsibleButtonExpanded,t.className),children:(0,r.jsx)(v.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})}))}const G={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function P(e){var n=e.toc,t=e.className,a=e.minHeadingLevel,s=e.maxHeadingLevel,i=(0,I.u)({initialState:!0}),l=i.collapsed,o=i.toggleCollapsed;return(0,r.jsxs)("div",{className:(0,u.A)(G.tocCollapsible,!l&&G.tocCollapsibleExpanded,t),children:[(0,r.jsx)(S,{collapsed:l,onClick:o}),(0,r.jsx)(I.N,{lazy:!0,className:G.tocCollapsibleContent,collapsed:l,children:(0,r.jsx)(w.A,{toc:n,minHeadingLevel:a,maxHeadingLevel:s})})]})}const R={tocMobile:"tocMobile_ITEo"};function U(){var e=c(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(P,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,R.tocMobile)})}var F=t(7763);function D(){var e=c(),n=e.toc,t=e.frontMatter;return(0,r.jsx)(F.A,{toc:n,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var z=t(1107),q=t(6416);function W(e){var n,t,a,s,i=e.children,l=(n=c(),t=n.metadata,a=n.frontMatter,s=n.contentTitle,a.hide_title||void 0!==s?null:t.title);return(0,r.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[l&&(0,r.jsx)("header",{children:(0,r.jsx)(z.A,{as:"h1",children:l})}),(0,r.jsx)(q.A,{children:i})]})}var Y=t(1754),Z=t(9169),J=t(6025);function K(e){return(0,r.jsx)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,r.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}const Q={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function X(){var e=(0,J.Ay)("/");return(0,r.jsx)("li",{className:"breadcrumbs__item",children:(0,r.jsx)(g.A,{"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,r.jsx)(K,{className:Q.breadcrumbHomeIcon})})})}const $={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function ee(e){var n=e.children,t=e.href,a="breadcrumbs__link";return e.isLast?(0,r.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,r.jsx)(g.A,{className:a,href:t,itemProp:"item",children:(0,r.jsx)("span",{itemProp:"name",children:n})}):(0,r.jsx)("span",{className:a,children:n})}function ne(e){var n=e.children,t=e.active,a=e.index,s=e.addMicrodata;return(0,r.jsxs)("li",Object.assign({},s&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,r.jsx)("meta",{itemProp:"position",content:String(a+1)})]}))}function te(){var e=(0,Y.OF)(),n=(0,Z.Dt)();return e?(0,r.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,$.breadcrumbsContainer),"aria-label":(0,v.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,r.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,r.jsx)(X,{}),e.map((function(n,t){var a=t===e.length-1,s="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,r.jsx)(ne,{active:a,index:t,addMicrodata:!!s,children:(0,r.jsx)(ee,{href:s,isLast:a,children:n.label})},t)}))]})}):null}var ae=t(996);const se={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function ie(e){var n,t,a,s,i,l,o=e.children,d=(n=c(),t=n.frontMatter,a=n.toc,s=(0,m.l)(),i=t.hide_table_of_contents,l=!i&&a.length>0,{hidden:i,mobile:l?(0,r.jsx)(U,{}):void 0,desktop:!l||"desktop"!==s&&"ssr"!==s?void 0:(0,r.jsx)(D,{})}),v=c().metadata.unlisted;return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:(0,u.A)("col",!d.hidden&&se.docItemCol),children:[v&&(0,r.jsx)(ae.A,{}),(0,r.jsx)(T,{}),(0,r.jsxs)("div",{className:se.docItemContainer,children:[(0,r.jsxs)("article",{children:[(0,r.jsx)(te,{}),(0,r.jsx)(H,{}),d.mobile,(0,r.jsx)(W,{children:o}),(0,r.jsx)(y,{})]}),(0,r.jsx)(x,{})]})]}),d.desktop&&(0,r.jsx)("div",{className:"col col--3",children:d.desktop})]})}function re(e){var n="docs-doc-id-"+e.content.metadata.id,t=e.content;return(0,r.jsx)(o,{content:e.content,children:(0,r.jsxs)(s.e3,{className:n,children:[(0,r.jsx)(d,{}),(0,r.jsx)(ie,{children:(0,r.jsx)(t,{})})]})})}},7763:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(8587),s=(t(6540),t(4164)),i=t(5195);const r={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=t(4848),o=["className"],c="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function u(e){var n=e.className,t=(0,a.A)(e,o);return(0,l.jsx)("div",{className:(0,s.A)(r.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.A,Object.assign({},t,{linkClassName:c,linkActiveClassName:d}))})}},5195:(e,n,t)=>{t.d(n,{A:()=>g});var a=t(8587),s=t(6540),i=t(6342),r=["parentIndex"];function l(e){var n=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),t=Array(7).fill(-1);n.forEach((function(e,n){var a=t.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),t[e.level]=n}));var s=[];return n.forEach((function(e){var t=e.parentIndex,i=(0,a.A)(e,r);t>=0?n[t].children.push(i):s.push(i)})),s}function o(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return n.flatMap((function(e){var n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[Object.assign({},e,{children:n})]:n}))}function c(e){var n=e.getBoundingClientRect();return n.top===n.bottom?c(e.parentNode):n}function d(e,n){var t,a,s=n.anchorTopOffset,i=e.find((function(e){return c(e).top>=s}));return i?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(c(i))?i:null!=(a=e[e.indexOf(i)-1])?a:null:null!=(t=e[e.length-1])?t:null}function u(){var e=(0,s.useRef)(0),n=(0,i.p)().navbar.hideOnScroll;return(0,s.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function m(e){var n=(0,s.useRef)(void 0),t=u();(0,s.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,s=e.linkActiveClassName,i=e.minHeadingLevel,r=e.maxHeadingLevel;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),l=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,a=[],s=n;s<=t;s+=1)a.push("h"+s+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:r}),o=d(l,{anchorTopOffset:t.current}),c=e.find((function(e){return o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(s),e.classList.add(s),n.current=e):e.classList.remove(s)}(e,e===c)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,t])}var v=t(8774),h=t(4848);function b(e){var n=e.toc,t=e.className,a=e.linkClassName,s=e.isChild;return n.length?(0,h.jsx)("ul",{className:s?void 0:t,children:n.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsx)(v.A,{to:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,h.jsx)(b,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)}))}):null}const x=s.memo(b);var f=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function g(e){var n=e.toc,t=e.className,r=void 0===t?"table-of-contents table-of-contents__left-border":t,c=e.linkClassName,d=void 0===c?"table-of-contents__link":c,u=e.linkActiveClassName,v=void 0===u?void 0:u,b=e.minHeadingLevel,g=e.maxHeadingLevel,p=(0,a.A)(e,f),j=(0,i.p)(),C=null!=b?b:j.tableOfContents.minHeadingLevel,A=null!=g?g:j.tableOfContents.maxHeadingLevel,L=function(e){var n=e.toc,t=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,s.useMemo)((function(){return o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})}),[n,t,a])}({toc:n,minHeadingLevel:C,maxHeadingLevel:A});return m((0,s.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:C,maxHeadingLevel:A}}),[d,v,C,A])),(0,h.jsx)(x,Object.assign({toc:L,className:r,linkClassName:d},p))}},996:(e,n,t)=>{t.d(n,{A:()=>v});t(6540);var a=t(4164),s=t(1312),i=t(5260),r=t(4848);function l(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,r.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(i.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(7559),u=t(7293);function m(e){var n=e.className;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(l,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,r.jsx)(o,{})})}function v(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,Object.assign({},e))]})}}}]);