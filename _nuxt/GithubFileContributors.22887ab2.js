import{d as o,ai as n,M as i,aP as c,aU as f,b0 as b}from"./entry.0971cdc5.js";import{u as d}from"./useGithub.3c3a16e9.js";const l=o({props:{query:{type:Object,required:!1,default:()=>({})}},async setup(r){const a=n(r.query,"source"),{fetchFileContributors:u}=d();i(a,()=>{t&&t()});const{data:e,refresh:t,pending:s}=await c(`github-file-contributors-${f(r.query)}`,()=>u(r.query));return{contributors:e,refresh:t,pending:s}},render({contributors:r,refresh:a,pending:u}){var t;const e=b();return(t=e==null?void 0:e.default)==null?void 0:t.call(e,{contributors:r,refresh:a,pending:u})}});export{l as default};
