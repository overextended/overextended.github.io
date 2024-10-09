(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8119],{5060:function(s,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/oxmysql/Functions/insert",function(){return n(7648)}])},7648:function(s,e,n){"use strict";n.r(e),n.d(e,{__toc:function(){return o}});var l=n(2676),i=n(2140),r=n(8745),t=n(7100);let o=[{depth:2,value:"Promise",id:"promise"},{depth:2,value:"Callback",id:"callback"}];function _createMdxContent(s){let e=Object.assign({h1:"h1",p:"p",h2:"h2",pre:"pre",code:"code",span:"span",strong:"strong",ul:"ul",li:"li"},(0,r.a)(),s.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{children:"Insert"}),"\n",(0,l.jsx)(e.p,{children:"Inserts a new entry into the database and returns the insert id for the row, if valid."}),"\n",(0,l.jsx)(e.h2,{id:"promise",children:"Promise"}),"\n",(0,l.jsxs)(t.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(t.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"local"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" id "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" MySQL.insert."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"await"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier, firstName, lastName"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]})]})})}),(0,l.jsx)(t.OK,{children:(0,l.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"id"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".insert"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" firstName"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lastName"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"])"})}),"\n",(0,l.jsx)(e.span,{className:"line",children:" "}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]})]})})})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"MySQL.Sync.insert"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.ghmattimysql.executeSync"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.oxmysql.insert_async"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"callback",children:"Callback"}),"\n",(0,l.jsxs)(t.mQ,{items:["Lua","JS"],children:[(0,l.jsx)(t.OK,{children:(0,l.jsx)(e.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"lua","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"MySQL."}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"insert"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:", {"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    identifier, firstName, lastName"})}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"}, "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"function"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-parameter)"},children:"id"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"    "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:"print"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"end"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})]})})}),(0,l.jsx)(t.OK,{children:(0,l.jsx)(e.pre,{"data-language":"js","data-theme":"default",children:(0,l.jsxs)(e.code,{"data-language":"js","data-theme":"default",children:[(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"MySQL"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".insert"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-string-expression)"},children:"'INSERT INTO `users` (identifier, firstname, lastname) VALUES (?, ?, ?)'"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" ["})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  identifier"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" firstName"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" lastName"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"]"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" (id) "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-keyword)"},children:"=>"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,l.jsxs)(e.span,{className:"line",children:[(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-constant)"},children:"console"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-token-function)"},children:".log"}),(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"(id)"})]}),"\n",(0,l.jsx)(e.span,{className:"line",children:(0,l.jsx)(e.span,{style:{color:"var(--shiki-color-text)"},children:"})"})})]})})})]}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.strong,{children:"Aliases"})}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"MySQL.Async.insert"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.ghmattimysql.execute"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"exports.oxmysql.insert"})}),"\n"]})]})}e.default=(0,i.j)({MDXContent:function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:e}=Object.assign({},(0,r.a)(),s.components);return e?(0,l.jsx)(e,{...s,children:(0,l.jsx)(_createMdxContent,{...s})}):_createMdxContent(s)},pageOpts:{filePath:"pages/oxmysql/Functions/insert.mdx",route:"/oxmysql/Functions/insert",frontMatter:{title:"insert"},timestamp:1728511676e3,title:"insert",headings:o},pageNextRoute:"/oxmysql/Functions/insert"})}},function(s){s.O(0,[2601,9774,2888,179],function(){return s(s.s=5060)}),_N_E=s.O()}]);