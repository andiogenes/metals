"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7048"],{5427:function(e,t,n){n.d(t,{Z:()=>f});var s=n("5893");n("7294");var l=n("7026"),i=n("6025"),r=n("4819");function a(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function o(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,s.jsx)(r.Z,{children:(0,s.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function d(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function u(){return(0,s.jsx)(i.Z,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}var m=n("4681"),h=n("5094");function b(e){let{className:t}=e;return(0,s.jsx)(h.Z,{type:"caution",title:(0,s.jsx)(d,{}),className:(0,l.Z)(t,m.k.common.draftBanner),children:(0,s.jsx)(u,{})})}function x(e){let{className:t}=e;return(0,s.jsx)(h.Z,{type:"caution",title:(0,s.jsx)(a,{}),className:(0,l.Z)(t,m.k.common.unlistedBanner),children:(0,s.jsx)(o,{})})}function v(e){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c,{}),(0,s.jsx)(x,{...e})]})}function f(e){let{metadata:t}=e,{unlisted:n,frontMatter:l}=t;return(0,s.jsxs)(s.Fragment,{children:[(n||l.unlisted)&&(0,s.jsx)(v,{}),l.draft&&(0,s.jsx)(b,{})]})}},806:function(e,t,n){n.r(t),n.d(t,{default:()=>el});var s=n("5893"),l=n("7294"),i=n("2743"),r=n("5346");let a=l.createContext(null);function o(e){var t;let{children:n,content:i}=e;let r=(t=i,(0,l.useMemo)(()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,contentTitle:t.contentTitle,toc:t.toc}),[t]));return(0,s.jsx)(a.Provider,{value:r,children:n})}function c(){let e=(0,l.useContext)(a);if(null===e)throw new r.i6("DocProvider");return e}function d(){let{metadata:e,frontMatter:t,assets:n}=c();return(0,s.jsx)(i.d,{title:e.title,description:e.description,keywords:t.keywords,image:n.image??t.image})}var u=n("7026"),m=n("4704"),h=n("6025"),b=n("790");function x(e){let{previous:t,next:n}=e;return(0,s.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,s.jsx)(b.Z,{...t,subLabel:(0,s.jsx)(h.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),n&&(0,s.jsx)(b.Z,{...n,subLabel:(0,s.jsx)(h.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){let{metadata:e}=c();return(0,s.jsx)(x,{previous:e.previous,next:e.next})}var f=n("2933"),p=n("3012"),j=n("1723"),g=n("4681"),Z=n("3896"),C=n("8529");let _={unreleased:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:n}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,s.jsx)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){let t=_[e.versionMetadata.banner];return(0,s.jsx)(t,{...e})}function L(e){let{versionLabel:t,to:n,onClick:l}=e;return(0,s.jsx)(h.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,s.jsx)("b",{children:(0,s.jsx)(p.Z,{to:n,onClick:l,children:(0,s.jsx)(h.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let t,{className:n,versionMetadata:l}=e,{siteConfig:{title:i}}=(0,f.Z)(),{pluginId:r}=(0,j.gA)({failfast:!0}),{savePreferredVersionName:a}=(0,Z.J)(r),{latestDocSuggestion:o,latestVersionSuggestion:c}=(0,j.Jo)(r);let d=o??(t=c).docs.find(e=>e.id===t.mainDocId);return(0,s.jsxs)("div",{className:(0,u.Z)(n,g.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,s.jsx)("div",{children:(0,s.jsx)(N,{siteTitle:i,versionMetadata:l})}),(0,s.jsx)("div",{className:"margin-top--md",children:(0,s.jsx)(L,{versionLabel:c.label,to:d.path,onClick:()=>a(c.name)})})]})}function T(e){let{className:t}=e,n=(0,C.E)();return n.banner?(0,s.jsx)(k,{className:t,versionMetadata:n}):null}function y(e){let{className:t}=e,n=(0,C.E)();return n.badge?(0,s.jsx)("span",{className:(0,u.Z)(t,g.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,s.jsx)(h.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}var w=n("9701"),B=n("9230");function E(){let{metadata:e}=c(),{editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l,tags:i}=e,r=i.length>0,a=!!(t||n||l);return r||a?(0,s.jsxs)("footer",{className:(0,u.Z)(g.k.docs.docFooter,"docusaurus-mt-lg"),children:[r&&(0,s.jsx)("div",{className:(0,u.Z)("row margin-top--sm",g.k.docs.docFooterTagsRow),children:(0,s.jsx)("div",{className:"col",children:(0,s.jsx)(w.Z,{tags:i})})}),a&&(0,s.jsx)(B.Z,{className:(0,u.Z)("margin-top--sm",g.k.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:n,lastUpdatedBy:l})]}):null}var I=n("7455"),M=n("6365");let A={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function H(e){let{collapsed:t,...n}=e;return(0,s.jsx)("button",{type:"button",...n,className:(0,u.Z)("clean-btn",A.tocCollapsibleButton,!t&&A.tocCollapsibleButtonExpanded,n.className),children:(0,s.jsx)(h.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}let V={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function O(e){let{toc:t,className:n,minHeadingLevel:l,maxHeadingLevel:i}=e,{collapsed:r,toggleCollapsed:a}=(0,I.u)({initialState:!0});return(0,s.jsxs)("div",{className:(0,u.Z)(V.tocCollapsible,!r&&V.tocCollapsibleExpanded,n),children:[(0,s.jsx)(H,{collapsed:r,onClick:a}),(0,s.jsx)(I.z,{lazy:!0,className:V.tocCollapsibleContent,collapsed:r,children:(0,s.jsx)(M.Z,{toc:t,minHeadingLevel:l,maxHeadingLevel:i})})]})}let P="tocMobile_ITEo";function R(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(O,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,u.Z)(g.k.docs.docTocMobile,P)})}var S=n("1397");function F(){let{toc:e,frontMatter:t}=c();return(0,s.jsx)(S.Z,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:g.k.docs.docTocDesktop})}var D=n("4403"),U=n("6798");function z(e){let{children:t}=e,n=function(){let{metadata:e,frontMatter:t,contentTitle:n}=c();return!t.hide_title&&void 0===n?e.title:null}();return(0,s.jsxs)("div",{className:(0,u.Z)(g.k.docs.docMarkdown,"markdown"),children:[n&&(0,s.jsx)("header",{children:(0,s.jsx)(D.Z,{as:"h1",children:n})}),(0,s.jsx)(U.Z,{children:t})]})}var q=n("9369"),$=n("9246"),G=n("4757");function J(e){return(0,s.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,s.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}let Y="breadcrumbHomeIcon_YNFT";function K(){let e=(0,G.ZP)("/");return(0,s.jsx)("li",{className:"breadcrumbs__item",children:(0,s.jsx)(p.Z,{"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,s.jsx)(J,{className:Y})})})}let Q="breadcrumbsContainer_Z_bl";function W(e){let{children:t,href:n,isLast:l}=e,i="breadcrumbs__link";return l?(0,s.jsx)("span",{className:i,itemProp:"name",children:t}):n?(0,s.jsx)(p.Z,{className:i,href:n,itemProp:"item",children:(0,s.jsx)("span",{itemProp:"name",children:t})}):(0,s.jsx)("span",{className:i,children:t})}function X(e){let{children:t,active:n,index:l,addMicrodata:i}=e;return(0,s.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,s.jsx)("meta",{itemProp:"position",content:String(l+1)})]})}function ee(){let e=(0,q.s1)(),t=(0,$.Ns)();return e?(0,s.jsx)("nav",{className:(0,u.Z)(g.k.docs.docBreadcrumbs,Q),"aria-label":(0,h.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,s.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,s.jsx)(K,{}),e.map((t,n)=>{let l=n===e.length-1,i="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,s.jsx)(X,{active:l,index:n,addMicrodata:!!i,children:(0,s.jsx)(W,{href:i,isLast:l,children:t.label})},n)})]})}):null}var et=n("5427");let en={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function es(e){let{children:t}=e,n=function(){let{frontMatter:e,toc:t}=c(),n=(0,m.i)(),l=e.hide_table_of_contents,i=!l&&t.length>0,r=i?(0,s.jsx)(R,{}):void 0;return{hidden:l,mobile:r,desktop:i&&("desktop"===n||"ssr"===n)?(0,s.jsx)(F,{}):void 0}}(),{metadata:l}=c();return(0,s.jsxs)("div",{className:"row",children:[(0,s.jsxs)("div",{className:(0,u.Z)("col",!n.hidden&&en.docItemCol),children:[(0,s.jsx)(et.Z,{metadata:l}),(0,s.jsx)(T,{}),(0,s.jsxs)("div",{className:en.docItemContainer,children:[(0,s.jsxs)("article",{children:[(0,s.jsx)(ee,{}),(0,s.jsx)(y,{}),n.mobile,(0,s.jsx)(z,{children:t}),(0,s.jsx)(E,{})]}),(0,s.jsx)(v,{})]})]}),n.desktop&&(0,s.jsx)("div",{className:"col col--3",children:n.desktop})]})}function el(e){let t=`docs-doc-id-${e.content.metadata.id}`,n=e.content;return(0,s.jsx)(o,{content:e.content,children:(0,s.jsxs)(i.FG,{className:t,children:[(0,s.jsx)(d,{}),(0,s.jsx)(es,{children:(0,s.jsx)(n,{})})]})})}},1397:function(e,t,n){n.d(t,{Z:()=>a});var s=n("5893");n("7294");var l=n("7026"),i=n("6365");let r="tableOfContents_bqdL";function a(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,l.Z)(r,"thin-scrollbar",t),children:(0,s.jsx)(i.Z,{...n,linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})})}},6365:function(e,t,n){n.d(t,{Z:()=>c});var s=n("5893"),l=n("7294"),i=n("140");function r(e){let t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}var a=n("3012");let o=l.memo(function e(t){let{toc:n,className:l,linkClassName:i,isChild:r}=t;return n.length?(0,s.jsx)("ul",{className:r?void 0:l,children:n.map(t=>(0,s.jsxs)("li",{children:[(0,s.jsx)(a.Z,{to:`#${t.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:t.value}}),(0,s.jsx)(e,{isChild:!0,toc:t.children,className:l,linkClassName:i})]},t.id))}):null});function c(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:a="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:d,maxHeadingLevel:u,...m}=e,h=(0,i.L)(),b=d??h.tableOfContents.minHeadingLevel,x=u??h.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,l.useMemo)(()=>(function e(t){let{toc:n,minHeadingLevel:s,maxHeadingLevel:l}=t;return n.flatMap(t=>{var n;let i=e({toc:t.children,minHeadingLevel:s,maxHeadingLevel:l});return(n=t).level>=s&&n.level<=l?[{...t,children:i}]:i})})({toc:function(e){let t=e.map(e=>({...e,parentIndex:-1,children:[]})),n=Array(7).fill(-1);t.forEach((e,t)=>{let s=n.slice(2,e.level);e.parentIndex=Math.max(...s),n[e.level]=t});let s=[];return t.forEach(e=>{let{parentIndex:n,...l}=e;n>=0?t[n].children.push(l):s.push(l)}),s}(t),minHeadingLevel:n,maxHeadingLevel:s}),[t,n,s])}({toc:t,minHeadingLevel:b,maxHeadingLevel:x});return!function(e){let t=(0,l.useRef)(void 0),n=function(){let e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,i.L)();return(0,l.useEffect)(()=>{e.current=t?0:document.querySelector(".navbar").clientHeight},[t]),e}();(0,l.useEffect)(()=>{if(!e)return()=>{};let{linkClassName:s,linkActiveClassName:l,minHeadingLevel:i,maxHeadingLevel:a}=e;function o(){var e;let o=(e=s,Array.from(document.getElementsByClassName(e))),c=function(e,t){let{anchorTopOffset:n}=t,s=e.find(e=>r(e).top>=n);if(s){var l;return(l=r(s)).top>0&&l.bottom<window.innerHeight/2?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}(function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e,s=[];for(let e=t;e<=n;e+=1)s.push(`h${e}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:a}),{anchorTopOffset:n.current}),d=o.find(e=>{var t;return c&&c.id===decodeURIComponent((t=e).href.substring(t.href.indexOf("#")+1))});o.forEach(e=>{var n;n=e,e===d?(t.current&&t.current!==n&&t.current.classList.remove(l),n.classList.add(l),t.current=n):n.classList.remove(l)})}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}},[e,n])}((0,l.useMemo)(()=>{if(a&&c)return{linkClassName:a,linkActiveClassName:c,minHeadingLevel:b,maxHeadingLevel:x}},[a,c,b,x])),(0,s.jsx)(o,{toc:v,className:n,linkClassName:a,...m})}}}]);