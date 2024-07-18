import{s as S,e as d,i as h,d as I,P as v,w as R,o as V,C as F}from"../chunks/scheduler.8ceb707f.js";import{S as U,i as q,a as f,t as p,c as N,g as O,b as $,d as y,m as P,e as W}from"../chunks/index.07e72a31.js";import{a as w}from"../chunks/Toaster.svelte_svelte_type_style_lang.a1b53f72.js";import{g as B}from"../chunks/navigation.4d72fedf.js";import{e as b,k as C,h as M}from"../chunks/index.de68b371.js";import{h as D,b as J}from"../chunks/index.a48b5b28.js";import{F as Q}from"../chunks/FunctionEditor.758054d2.js";import{b as H}from"../chunks/index.c405526f.js";import{o as L,d as j}from"../chunks/index.a303954b.js";function k(a){var c;let t=(c=a[2])==null?void 0:c.content,r,e,o=E(a);return{c(){o.c(),r=d()},l(s){o.l(s),r=d()},m(s,n){o.m(s,n),h(s,r,n),e=!0},p(s,n){var l;n&4&&S(t,t=(l=s[2])==null?void 0:l.content)?(O(),p(o,1,1,F),N(),o=E(s),o.c(),f(o,1),o.m(r.parentNode,r)):o.p(s,n)},i(s){e||(f(o),e=!0)},o(s){p(o),e=!1},d(s){s&&I(r),o.d(s)}}}function E(a){var e,o,c,s;let t,r;return t=new Q({props:{id:((e=a[2])==null?void 0:e.id)??"",name:((o=a[2])==null?void 0:o.name)??"",meta:((c=a[2])==null?void 0:c.meta)??{description:""},content:((s=a[2])==null?void 0:s.content)??"",clone:a[1]}}),t.$on("save",a[5]),{c(){$(t.$$.fragment)},l(n){y(t.$$.fragment,n)},m(n,l){P(t,n,l),r=!0},p(n,l){var i,u,g,_;const m={};l&4&&(m.id=((i=n[2])==null?void 0:i.id)??""),l&4&&(m.name=((u=n[2])==null?void 0:u.name)??""),l&4&&(m.meta=((g=n[2])==null?void 0:g.meta)??{description:""}),l&4&&(m.content=((_=n[2])==null?void 0:_.content)??""),l&2&&(m.clone=n[1]),t.$set(m)},i(n){r||(f(t.$$.fragment,n),r=!0)},o(n){p(t.$$.fragment,n),r=!1},d(n){W(t,n)}}}function z(a){let t,r,e=a[0]&&k(a);return{c(){e&&e.c(),t=d()},l(o){e&&e.l(o),t=d()},m(o,c){e&&e.m(o,c),h(o,t,c),r=!0},p(o,[c]){o[0]?e?(e.p(o,c),c&1&&f(e,1)):(e=k(o),e.c(),f(e,1),e.m(t.parentNode,t)):e&&(O(),p(e,1,1,()=>{e=null}),N())},i(o){r||(f(e),r=!0)},o(o){p(e),r=!1},d(o){o&&I(t),e&&e.d(o)}}}function A(a,t,r){let e;const o=v("i18n");R(a,o,i=>r(6,e=i));let c=!1,s=!1,n=null;const l=async i=>{console.log(i);const u=L(i.content);if(j((u==null?void 0:u.required_open_webui_version)??"0.0.0",b)){console.log("Version is lower than required"),w.error(e.t("Open WebUI version (v{{OPEN_WEBUI_VERSION}}) is lower than required version (v{{REQUIRED_VERSION}})",{OPEN_WEBUI_VERSION:b,REQUIRED_VERSION:(u==null?void 0:u.required_open_webui_version)??"0.0.0"}));return}await D(localStorage.token,{id:i.id,name:i.name,meta:i.meta,content:i.content}).catch(_=>(w.error(_),null))&&(w.success(e.t("Function created successfully")),C.set(await J(localStorage.token)),M.set(await H(localStorage.token)),await B("/workspace/functions"))};return V(()=>{window.addEventListener("message",async i=>{["https://openwebui.com","https://www.openwebui.com","http://localhost:9999"].includes(i.origin)&&(r(2,n=JSON.parse(i.data)),console.log(n))}),(window.opener??!1)&&window.opener.postMessage("loaded","*"),sessionStorage.function&&(r(2,n=JSON.parse(sessionStorage.function)),sessionStorage.removeItem("function"),console.log(n),r(1,s=!0)),r(0,c=!0)}),[c,s,n,o,l,i=>{l(i.detail)}]}class ne extends U{constructor(t){super(),q(this,t,A,z,S,{})}}export{ne as component};
//# sourceMappingURL=14.5d68f361.js.map
