import{_ as g}from"./ProseH2.vue.e78f38ed.js";import h from"./ContentRenderer.e1461f41.js";import{u as B}from"./useGithub.3c3a16e9.js";import{d as D,aM as x,aP as C,a6 as v,b as a,c as n,F as w,a7 as L,g as o,w as c,ac as i,t as _,aC as l}from"./entry.0971cdc5.js";import"./ContentRendererMarkdown.vue.4d5cd8cb.js";import"./MDCRenderer.3d7bbada.js";const b=(s,e={year:"numeric",month:"long",day:"numeric"})=>new Date(s).toLocaleDateString("en",e),k={style:{"margin-top":"50px"}},$=D({__name:"Releases",async setup(s){let e,r;const{fetchReleases:p}=B(),{data:u}=([e,r]=x(()=>C("releases",()=>p({}))),e=await e,r(),e);return(m,R)=>{const d=v("Badge"),f=g,y=h;return a(),n("div",k,[(a(!0),n(w,null,L(l(u),t=>(a(),n("div",{key:t.name,style:{"margin-bottom":"50px"}},[o(f,{id:t.name},{default:c(()=>[i(_(t.name)+" ",1),o(d,{style:{"margin-left":"10px"}},{default:c(()=>[i(_(("formatDateByLocale"in m?m.formatDateByLocale:l(b))(t.date)),1)]),_:2},1024)]),_:2},1032,["id"]),o(y,{value:t},null,8,["value"])]))),128))])}}});export{$ as default};
