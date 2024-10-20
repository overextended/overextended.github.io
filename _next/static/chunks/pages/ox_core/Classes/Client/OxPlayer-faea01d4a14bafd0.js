(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1095],{3036:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ox_core/Classes/Client/OxPlayer",function(){return s(6203)}])},6203:function(e,n,s){"use strict";s.r(n),s.d(n,{__toc:function(){return t}});var l=s(2676),r=s(2140),a=s(8745);let t=[{depth:2,value:"OxPlayer",id:"oxplayer"},{depth:2,value:"OxPlayer.addStatus",id:"oxplayeraddstatus"},{depth:2,value:"OxPlayer.get",id:"oxplayerget"},{depth:2,value:"OxPlayer.getCoords",id:"oxplayergetcoords"},{depth:2,value:"OxPlayer.getGroup",id:"oxplayergetgroup"},{depth:2,value:"OxPlayer.getGroupByType",id:"oxplayergetgroupbytype"},{depth:2,value:"OxPlayer.getGroups",id:"oxplayergetgroups"},{depth:2,value:"OxPlayer.getStatus",id:"oxplayergetstatus"},{depth:2,value:"OxPlayer.getStatuses",id:"oxplayergetstatuses"},{depth:2,value:"OxPlayer.hasPermission",id:"oxplayerhaspermission"},{depth:2,value:"OxPlayer.removeStatus",id:"oxplayerremovestatus"},{depth:2,value:"OxPlayer.on",id:"oxplayeron"}];function _createMdxContent(e){let n=Object.assign({h2:"h2",ul:"ul",li:"li",code:"code",p:"p",pre:"pre",span:"span",strong:"strong"},(0,a.a)(),e.components);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"oxplayer",children:"OxPlayer"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["state: ",(0,l.jsx)(n.code,{children:"StateBagInterface"})]}),"\n",(0,l.jsxs)(n.li,{children:["userId: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["charId?: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n",(0,l.jsxs)(n.li,{children:["stateId?: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayeraddstatus",children:"OxPlayer.addStatus"}),"\n",(0,l.jsx)(n.p,{children:"Increases value of a status."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"addStatus"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(statusName, value)"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["statusName: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:["value: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["success: ",(0,l.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayerget",children:"OxPlayer.get"}),"\n",(0,l.jsx)(n.p,{children:"Returns a value from the players metadata."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"get"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(key)"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["key: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"unknown"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayergetcoords",children:"OxPlayer.getCoords"}),"\n",(0,l.jsx)(n.p,{children:"Returns the player's current coordinates."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getCoords"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"vector3"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayergetgroup",children:"OxPlayer.getGroup"}),"\n",(0,l.jsx)(n.p,{children:"Returns the player's grade of a given group name, or the first matched name and grade in a filter."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getGroup"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(filter)"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["filter: ",(0,l.jsx)(n.code,{children:"string"}),"|",(0,l.jsx)(n.code,{children:"string[]"}),"|",(0,l.jsx)(n.code,{children:"{ [string]: number }"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"unknown"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayergetgroupbytype",children:"OxPlayer.getGroupByType"}),"\n",(0,l.jsx)(n.p,{children:"Returns the player's name and grade of a group with a matching type."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getGroupByType"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"type"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:")"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["type: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"string"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"number"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayergetgroups",children:"OxPlayer.getGroups"}),"\n",(0,l.jsx)(n.p,{children:"Returns an object of all groups the player is currently in, using the group name as a key."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getGroups"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"{ [string]: number }"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayergetstatus",children:"OxPlayer.getStatus"}),"\n",(0,l.jsx)(n.p,{children:"Returns the value of the status."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getStatus"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(statusName)"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["statusName: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"number"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayergetstatuses",children:"OxPlayer.getStatuses"}),"\n",(0,l.jsx)(n.p,{children:"Returns an object containing all statuses, using the status name as the key."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getStatuses"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"()"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"{ [string]: number }"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayerhaspermission",children:"OxPlayer.hasPermission"}),"\n",(0,l.jsx)(n.p,{children:"Checks if a user has been granted a permission by one of their groups."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"hasPermission"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(permission)"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["permission: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"boolean"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayerremovestatus",children:"OxPlayer.removeStatus"}),"\n",(0,l.jsx)(n.p,{children:"Reduces the value of a status."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"removeStatus"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(statusName, value)"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["statusName: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:["value: ",(0,l.jsx)(n.code,{children:"number"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.code,{children:"boolean"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"oxplayeron",children:"OxPlayer.on"}),"\n",(0,l.jsx)(n.p,{children:"Listens for changes to the players metadata, specified by a key."}),"\n",(0,l.jsx)(n.pre,{"data-language":"lua","data-theme":"default",children:(0,l.jsx)(n.code,{"data-language":"lua","data-theme":"default",children:(0,l.jsxs)(n.span,{className:"line",children:[(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"player."}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"on"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(key, "}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"cb"}),(0,l.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"(data))"})]})})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Parameters"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["key: ",(0,l.jsx)(n.code,{children:"string"})]}),"\n",(0,l.jsxs)(n.li,{children:["cb: ",(0,l.jsx)(n.code,{children:"function"})]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.strong,{children:"Returns"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["data: ",(0,l.jsx)(n.code,{children:"unknown"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["new value of ",(0,l.jsx)(n.code,{children:"key"})]}),"\n"]}),"\n"]}),"\n"]})]})}n.default=(0,r.j)({MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.a)(),e.components);return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(_createMdxContent,{...e})}):_createMdxContent(e)},pageOpts:{filePath:"pages/ox_core/Classes/Client/OxPlayer.mdx",route:"/ox_core/Classes/Client/OxPlayer",frontMatter:{title:"OxPlayer"},timestamp:1729398637e3,title:"OxPlayer",headings:t},pageNextRoute:"/ox_core/Classes/Client/OxPlayer"})}},function(e){e.O(0,[2601,9774,2888,179],function(){return e(e.s=3036)}),_N_E=e.O()}]);