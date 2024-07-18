import{y as te,b as We,U as qe,r as Ge,i as de,q as he,p as pe,h as Je,c as Ze}from"./index.de68b371.js";import{s as le,z as ae,A as se,h as $,d as i,j as u,i as B,r as g,C as ue,p as Ae,W as je,w as Z,P as Le,V as Ue,E as Ne,a as L,c as U,F as Oe,G as De,H as Ve,f as I,l as O,e as ke,g as M,R as ee,m as D,u as J,n as V,v as ze,o as Ye}from"./scheduler.8ceb707f.js";import{S as ne,i as oe,f as He,b as Y,d as F,m as K,a as H,t as R,e as Q,g as Pe,c as Re}from"./index.07e72a31.js";import{T as Fe}from"./create.4fbceb05.js";import{b as Ke,c as Qe,M as Xe}from"./menu-trigger.87a134fd.js";import{g as ye}from"./navigation.4d72fedf.js";import{f as xe}from"./index.e31818e9.js";import{l as et,k as tt,n as Te,r as Ce,o as ce,m as at,b as st,q as me,D as lt,E as nt}from"./index.31423eb8.js";import{T as ot}from"./Tags.161ebfce.js";import{a as Ee}from"./Toaster.svelte_svelte_type_style_lang.a1b53f72.js";import{a as rt}from"./index.a303954b.js";import{M as it}from"./Modal.9e048b4e.js";const qt=async l=>{let e=null;const a=await fetch(`${te}/memories/`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${l}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(e=t.detail,console.log(t),null));if(e)throw e;return a},Gt=async(l,e)=>{let a=null;const t=await fetch(`${te}/memories/add`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${l}`},body:JSON.stringify({content:e})}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(a=s.detail,console.log(s),null));if(a)throw a;return t},Jt=async(l,e,a)=>{let t=null;const s=await fetch(`${te}/memories/${e}/update`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${l}`},body:JSON.stringify({content:a})}).then(async o=>{if(!o.ok)throw await o.json();return o.json()}).catch(o=>(t=o.detail,console.log(o),null));if(t)throw t;return s},Zt=async(l,e)=>{let a=null;const t=await fetch(`${te}/memories/query`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${l}`},body:JSON.stringify({content:e})}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(a=s.detail,console.log(s),null));if(a)throw a;return t},Yt=async(l,e)=>{let a=null;const t=await fetch(`${te}/memories/${e}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${l}`}}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).then(s=>s).catch(s=>(a=s.detail,console.log(s),null));if(a)throw a;return t},Ft=async l=>{let e=null;const a=await fetch(`${te}/memories/user`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${l}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(e=t.detail,console.log(t),null));if(e)throw e;return a};function ct(l){let e,a;return{c(){e=ae("svg"),a=ae("path"),this.h()},l(t){e=se(t,"svg",{xmlns:!0,fill:!0,viewBox:!0,"stroke-width":!0,stroke:!0,class:!0});var s=$(e);a=se(s,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,d:!0}),$(a).forEach(i),s.forEach(i),this.h()},h(){u(a,"stroke-linecap","round"),u(a,"stroke-linejoin","round"),u(a,"d","m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"fill","none"),u(e,"viewBox","0 0 24 24"),u(e,"stroke-width",l[1]),u(e,"stroke","currentColor"),u(e,"class",l[0])},m(t,s){B(t,e,s),g(e,a)},p(t,[s]){s&2&&u(e,"stroke-width",t[1]),s&1&&u(e,"class",t[0])},i:ue,o:ue,d(t){t&&i(e)}}}function ut(l,e,a){let{className:t="size-3.5"}=e,{strokeWidth:s="2.5"}=e;return l.$$set=o=>{"className"in o&&a(0,t=o.className),"strokeWidth"in o&&a(1,s=o.strokeWidth)},[t,s]}class ft extends ne{constructor(e){super(),oe(this,e,ut,ct,le,{className:0,strokeWidth:1})}}const dt=l=>({}),Se=l=>({});function ht(l){let e;const a=l[8].default,t=Ne(a,l,l[17],null);return{c(){t&&t.c()},l(s){t&&t.l(s)},m(s,o){t&&t.m(s,o),e=!0},p(s,o){t&&t.p&&(!e||o&131072)&&Oe(t,a,s,s[17],e?Ve(a,s[17],o,null):De(s[17]),null)},i(s){e||(H(t,s),e=!0)},o(s){R(t,s),e=!1},d(s){t&&t.d(s)}}}function Ie(l){let e,a,t='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5"><path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z"></path></svg>',s,o,n=l[3].t("Playground")+"",r,c,f,w,p='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',b,m,_=l[3].t("Admin Panel")+"",T,E,y;return{c(){e=I("button"),a=I("div"),a.innerHTML=t,s=L(),o=I("div"),r=O(n),c=L(),f=I("button"),w=I("div"),w.innerHTML=p,b=L(),m=I("div"),T=O(_),this.h()},l(A){e=M(A,"BUTTON",{class:!0});var d=$(e);a=M(d,"DIV",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-4ehrk0"&&(a.innerHTML=t),s=U(d),o=M(d,"DIV",{class:!0});var S=$(o);r=D(S,n),S.forEach(i),d.forEach(i),c=U(A),f=M(A,"BUTTON",{class:!0});var v=$(f);w=M(v,"DIV",{class:!0,"data-svelte-h":!0}),ee(w)!=="svelte-1vodyax"&&(w.innerHTML=p),b=U(v),m=M(v,"DIV",{class:!0});var h=$(m);T=D(h,_),h.forEach(i),v.forEach(i),this.h()},h(){u(a,"class","self-center mr-3"),u(o,"class","self-center font-medium"),u(e,"class","flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"),u(w,"class","self-center mr-3"),u(m,"class","self-center font-medium"),u(f,"class","flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition")},m(A,d){B(A,e,d),g(e,a),g(e,s),g(e,o),g(o,r),B(A,c,d),B(A,f,d),g(f,w),g(f,b),g(f,m),g(m,T),E||(y=[J(e,"click",l[11]),J(f,"click",l[12])],E=!0)},p(A,d){d&8&&n!==(n=A[3].t("Playground")+"")&&V(r,n),d&8&&_!==(_=A[3].t("Admin Panel")+"")&&V(T,_)},d(A){A&&(i(e),i(c),i(f)),E=!1,ze(y)}}}function Me(l){let e,a,t,s;return t=new Fe({props:{content:l[5]&&l[5].length>0?`${l[3].t("Running")}: ${l[5].join(", ")} ✨`:"",$$slots:{default:[pt]},$$scope:{ctx:l}}}),{c(){e=I("hr"),a=L(),Y(t.$$.fragment),this.h()},l(o){e=M(o,"HR",{class:!0}),a=U(o),F(t.$$.fragment,o),this.h()},h(){u(e,"class","dark:border-gray-800 my-1.5 p-0")},m(o,n){B(o,e,n),B(o,a,n),K(t,o,n),s=!0},p(o,n){const r={};n&40&&(r.content=o[5]&&o[5].length>0?`${o[3].t("Running")}: ${o[5].join(", ")} ✨`:""),n&131096&&(r.$$scope={dirty:n,ctx:o}),t.$set(r)},i(o){s||(H(t.$$.fragment,o),s=!0)},o(o){R(t.$$.fragment,o),s=!1},d(o){o&&(i(e),i(a)),Q(t,o)}}}function pt(l){let e,a,t='<span class="relative flex size-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span> <span class="relative inline-flex rounded-full size-2 bg-green-500"></span></span>',s,o,n,r=l[3].t("Active Users")+"",c,f,w,p,b;return{c(){e=I("div"),a=I("div"),a.innerHTML=t,s=L(),o=I("div"),n=I("span"),c=O(r),f=O(":"),w=L(),p=I("span"),b=O(l[4]),this.h()},l(m){e=M(m,"DIV",{class:!0});var _=$(e);a=M(_,"DIV",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-dl2p8d"&&(a.innerHTML=t),s=U(_),o=M(_,"DIV",{class:!0});var T=$(o);n=M(T,"SPAN",{class:!0});var E=$(n);c=D(E,r),f=D(E,":"),E.forEach(i),w=U(T),p=M(T,"SPAN",{class:!0});var y=$(p);b=D(y,l[4]),y.forEach(i),T.forEach(i),_.forEach(i),this.h()},h(){u(a,"class","flex items-center"),u(n,"class","font-medium"),u(p,"class","font-semibold"),u(o,"class",""),u(e,"class","flex rounded-md py-1.5 px-3 text-xs gap-2.5 items-center")},m(m,_){B(m,e,_),g(e,a),g(e,s),g(e,o),g(o,n),g(n,c),g(n,f),g(o,w),g(o,p),g(p,b)},p(m,_){_&8&&r!==(r=m[3].t("Active Users")+"")&&V(c,r),_&16&&V(b,m[4])},d(m){m&&i(e)}}}function mt(l){let e,a,t='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>',s,o,n=l[3].t("Settings")+"",r,c,f,w,p,b,m,_=l[3].t("Archived Chats")+"",T,E,y,A,d,S,v,h='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path fill-rule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clip-rule="evenodd"></path></svg>',C,P,W=l[3].t("Sign Out")+"",X,G,q,x,fe,ge;p=new ft({props:{className:"size-5",strokeWidth:"1.5"}});let z=l[1]==="admin"&&Ie(l),N=l[4]&&Me(l);return{c(){e=I("button"),a=I("div"),a.innerHTML=t,s=L(),o=I("div"),r=O(n),c=L(),f=I("button"),w=I("div"),Y(p.$$.fragment),b=L(),m=I("div"),T=O(_),E=L(),z&&z.c(),y=L(),A=I("hr"),d=L(),S=I("button"),v=I("div"),v.innerHTML=h,C=L(),P=I("div"),X=O(W),G=L(),N&&N.c(),q=ke(),this.h()},l(k){e=M(k,"BUTTON",{class:!0});var j=$(e);a=M(j,"DIV",{class:!0,"data-svelte-h":!0}),ee(a)!=="svelte-1ew1v3e"&&(a.innerHTML=t),s=U(j),o=M(j,"DIV",{class:!0});var _e=$(o);r=D(_e,n),_e.forEach(i),j.forEach(i),c=U(k),f=M(k,"BUTTON",{class:!0});var re=$(f);w=M(re,"DIV",{class:!0});var ve=$(w);F(p.$$.fragment,ve),ve.forEach(i),b=U(re),m=M(re,"DIV",{class:!0});var we=$(m);T=D(we,_),we.forEach(i),re.forEach(i),E=U(k),z&&z.l(k),y=U(k),A=M(k,"HR",{class:!0}),d=U(k),S=M(k,"BUTTON",{class:!0});var ie=$(S);v=M(ie,"DIV",{class:!0,"data-svelte-h":!0}),ee(v)!=="svelte-1svlfdm"&&(v.innerHTML=h),C=U(ie),P=M(ie,"DIV",{class:!0});var be=$(P);X=D(be,W),be.forEach(i),ie.forEach(i),G=U(k),N&&N.l(k),q=ke(),this.h()},h(){u(a,"class","self-center mr-3"),u(o,"class","self-center font-medium"),u(e,"class","flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"),u(w,"class","self-center mr-3"),u(m,"class","self-center font-medium"),u(f,"class","flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition"),u(A,"class","dark:border-gray-800 my-1.5 p-0"),u(v,"class","self-center mr-3"),u(P,"class","self-center font-medium"),u(S,"class","flex rounded-md py-2 px-3 w-full hover:bg-gray-50 dark:hover:bg-gray-800 transition")},m(k,j){B(k,e,j),g(e,a),g(e,s),g(e,o),g(o,r),B(k,c,j),B(k,f,j),g(f,w),K(p,w,null),g(f,b),g(f,m),g(m,T),B(k,E,j),z&&z.m(k,j),B(k,y,j),B(k,A,j),B(k,d,j),B(k,S,j),g(S,v),g(S,C),g(S,P),g(P,X),B(k,G,j),N&&N.m(k,j),B(k,q,j),x=!0,fe||(ge=[J(e,"click",l[9]),J(f,"click",l[10]),J(S,"click",l[13])],fe=!0)},p(k,j){(!x||j&8)&&n!==(n=k[3].t("Settings")+"")&&V(r,n),(!x||j&8)&&_!==(_=k[3].t("Archived Chats")+"")&&V(T,_),k[1]==="admin"?z?z.p(k,j):(z=Ie(k),z.c(),z.m(y.parentNode,y)):z&&(z.d(1),z=null),(!x||j&8)&&W!==(W=k[3].t("Sign Out")+"")&&V(X,W),k[4]?N?(N.p(k,j),j&16&&H(N,1)):(N=Me(k),N.c(),H(N,1),N.m(q.parentNode,q)):N&&(Pe(),R(N,1,1,()=>{N=null}),Re())},i(k){x||(H(p.$$.fragment,k),H(N),x=!0)},o(k){R(p.$$.fragment,k),R(N),x=!1},d(k){k&&(i(e),i(c),i(f),i(E),i(y),i(A),i(d),i(S),i(G),i(q)),Q(p),z&&z.d(k),N&&N.d(k),fe=!1,ze(ge)}}}function gt(l){let e,a;return e=new Xe({props:{class:"w-full "+l[2]+" text-sm rounded-xl px-1 py-1.5 border border-gray-300/30 dark:border-gray-700/50 z-50 bg-white dark:bg-gray-850 dark:text-white shadow font-primary",sideOffset:8,side:"bottom",align:"start",transition:l[14],$$slots:{default:[mt]},$$scope:{ctx:l}}}),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,s){const o={};s&4&&(o.class="w-full "+t[2]+" text-sm rounded-xl px-1 py-1.5 border border-gray-300/30 dark:border-gray-700/50 z-50 bg-white dark:bg-gray-850 dark:text-white shadow font-primary"),s&131131&&(o.$$scope={dirty:s,ctx:t}),e.$set(o)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){Q(e,t)}}}function _t(l){let e,a,t;e=new Qe({props:{$$slots:{default:[ht]},$$scope:{ctx:l}}});const s=l[8].content,o=Ne(s,l,l[17],Se),n=o||gt(l);return{c(){Y(e.$$.fragment),a=L(),n&&n.c()},l(r){F(e.$$.fragment,r),a=U(r),n&&n.l(r)},m(r,c){K(e,r,c),B(r,a,c),n&&n.m(r,c),t=!0},p(r,c){const f={};c&131072&&(f.$$scope={dirty:c,ctx:r}),e.$set(f),o?o.p&&(!t||c&131072)&&Oe(o,s,r,r[17],t?Ve(s,r[17],c,dt):De(r[17]),Se):n&&n.p&&(!t||c&63)&&n.p(r,t?c:-1)},i(r){t||(H(e.$$.fragment,r),H(n,r),t=!0)},o(r){R(e.$$.fragment,r),R(n,r),t=!1},d(r){r&&i(a),Q(e,r),n&&n.d(r)}}}function vt(l){let e,a,t;function s(n){l[16](n)}let o={onOpenChange:l[15],$$slots:{default:[_t]},$$scope:{ctx:l}};return l[0]!==void 0&&(o.open=l[0]),e=new Ke({props:o}),Ae.push(()=>He(e,"open",s)),{c(){Y(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){K(e,n,r),t=!0},p(n,[r]){const c={};r&131135&&(c.$$scope={dirty:r,ctx:n}),!a&&r&1&&(a=!0,c.open=n[0],je(()=>a=!1)),e.$set(c)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function wt(l,e,a){let t,s,o;Z(l,We,v=>a(4,s=v)),Z(l,qe,v=>a(5,o=v));let{$$slots:n={},$$scope:r}=e;const c=Le("i18n");Z(l,c,v=>a(3,t=v));let{show:f=!1}=e,{role:w=""}=e,{className:p="max-w-[240px]"}=e;const b=Ue(),m=async()=>{await Ge.set(!0),a(0,f=!1)},_=()=>{b("show","archived-chat"),a(0,f=!1)},T=()=>{ye("/playground"),a(0,f=!1)},E=()=>{ye("/admin"),a(0,f=!1)},y=()=>{localStorage.removeItem("token"),location.href="/auth",a(0,f=!1)},A=v=>xe(v,{duration:100}),d=v=>{b("change",v)};function S(v){f=v,a(0,f)}return l.$$set=v=>{"show"in v&&a(0,f=v.show),"role"in v&&a(1,w=v.role),"className"in v&&a(2,p=v.className),"$$scope"in v&&a(17,r=v.$$scope)},[f,w,p,t,s,o,c,b,n,m,_,T,E,y,A,d,S,r]}class Kt extends ne{constructor(e){super(),oe(this,e,wt,vt,le,{show:0,role:1,className:2})}}function bt(l){let e,a;return e=new ot({props:{tags:l[0],deleteTag:l[2],addTag:l[1]}}),{c(){Y(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){K(e,t,s),a=!0},p(t,[s]){const o={};s&1&&(o.tags=t[0]),e.$set(o)},i(t){a||(H(e.$$.fragment,t),a=!0)},o(t){R(e.$$.fragment,t),a=!1},d(t){Q(e,t)}}}function kt(l,e,a){let t,s;Z(l,de,p=>a(4,t=p)),Z(l,he,p=>a(5,s=p));const o=Ue();let{chatId:n=""}=e,r=[];const c=async()=>(await et(localStorage.token,n).catch(async p=>[])).filter(p=>p.name!=="pinned"),f=async p=>{await tt(localStorage.token,n,p),a(0,r=await c()),await Te(localStorage.token,n,{tags:r}),he.set(await Ce(localStorage.token)),await pe.set(await ce(localStorage.token,"pinned"))},w=async p=>{await at(localStorage.token,n,p),a(0,r=await c()),await Te(localStorage.token,n,{tags:r}),console.log(s),await he.set(await Ce(localStorage.token)),console.log(s),s.map(b=>b.name).includes(p)?(p==="pinned"?await pe.set(await ce(localStorage.token,"pinned")):await de.set(await ce(localStorage.token,p)),t.find(b=>b.id===n)&&o("close")):(await de.set(await st(localStorage.token)),await pe.set(await ce(localStorage.token,"pinned")))};return Ye(async()=>{n&&a(0,r=await c())}),l.$$set=p=>{"chatId"in p&&a(3,n=p.chatId)},[r,f,w,n]}class Qt extends ne{constructor(e){super(),oe(this,e,kt,bt,le,{chatId:3})}}function yt(l){let e,a,t;return{c(){e=ae("svg"),a=ae("path"),t=ae("path"),this.h()},l(s){e=se(s,"svg",{xmlns:!0,viewBox:!0,fill:!0,class:!0});var o=$(e);a=se(o,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),$(a).forEach(i),t=se(o,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),$(t).forEach(i),o.forEach(i),this.h()},h(){u(a,"fill-rule","evenodd"),u(a,"d","M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"),u(a,"clip-rule","evenodd"),u(t,"fill-rule","evenodd"),u(t,"d","M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"),u(t,"clip-rule","evenodd"),u(e,"xmlns","http://www.w3.org/2000/svg"),u(e,"viewBox","0 0 16 16"),u(e,"fill","currentColor"),u(e,"class",l[0])},m(s,o){B(s,e,o),g(e,a),g(e,t)},p(s,[o]){o&1&&u(e,"class",s[0])},i:ue,o:ue,d(s){s&&i(e)}}}function Tt(l,e,a){let{className:t="w-4 h-4"}=e;return l.$$set=s=>{"className"in s&&a(0,t=s.className)},[t]}class Ct extends ne{constructor(e){super(),oe(this,e,Tt,yt,le,{className:0})}}function $e(l){var v;let e,a,t,s,o,n,r,c,f,w,p,b,m;function _(h,C){return h[2].share_id?St:Et}let T=_(l),E=T(l),y=((v=l[4])==null?void 0:v.features.enable_community_sharing)&&Be(l);f=new Ct({});function A(h,C){return h[2].share_id?Mt:It}let d=A(l),S=d(l);return{c(){e=I("div"),a=I("div"),E.c(),t=L(),s=I("div"),o=I("div"),n=I("div"),y&&y.c(),r=L(),c=I("button"),Y(f.$$.fragment),w=L(),S.c(),this.h()},l(h){e=M(h,"DIV",{class:!0});var C=$(e);a=M(C,"DIV",{class:!0});var P=$(a);E.l(P),P.forEach(i),t=U(C),s=M(C,"DIV",{class:!0});var W=$(s);o=M(W,"DIV",{class:!0});var X=$(o);n=M(X,"DIV",{class:!0});var G=$(n);y&&y.l(G),r=U(G),c=M(G,"BUTTON",{class:!0,type:!0,id:!0});var q=$(c);F(f.$$.fragment,q),w=U(q),S.l(q),q.forEach(i),G.forEach(i),X.forEach(i),W.forEach(i),C.forEach(i),this.h()},h(){u(a,"class","text-sm dark:text-gray-300 mb-1"),u(c,"class","self-center flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white"),u(c,"type","button"),u(c,"id","copy-and-share-chat-button"),u(n,"class","flex gap-1"),u(o,"class","flex flex-col items-end space-x-1 mt-1.5"),u(s,"class","flex justify-end"),u(e,"class","px-5 pt-4 pb-5 w-full flex flex-col justify-center")},m(h,C){B(h,e,C),g(e,a),E.m(a,null),g(e,t),g(e,s),g(s,o),g(o,n),y&&y.m(n,null),g(n,r),g(n,c),K(f,c,null),g(c,w),S.m(c,null),p=!0,b||(m=J(c,"click",l[11]),b=!0)},p(h,C){var P;T===(T=_(h))&&E?E.p(h,C):(E.d(1),E=T(h),E&&(E.c(),E.m(a,null))),(P=h[4])!=null&&P.features.enable_community_sharing?y?y.p(h,C):(y=Be(h),y.c(),y.m(n,r)):y&&(y.d(1),y=null),d===(d=A(h))&&S?S.p(h,C):(S.d(1),S=d(h),S&&(S.c(),S.m(c,null)))},i(h){p||(H(f.$$.fragment,h),p=!0)},o(h){R(f.$$.fragment,h),p=!1},d(h){h&&i(e),E.d(),y&&y.d(),Q(f),S.d(),b=!1,m()}}}function Et(l){let e=l[3].t("Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat.")+"",a;return{c(){a=O(e)},l(t){a=D(t,e)},m(t,s){B(t,a,s)},p(t,s){s&8&&e!==(e=t[3].t("Messages you send after creating your link won't be shared. Users with the URL will be able to view the shared chat.")+"")&&V(a,e)},d(t){t&&i(a)}}}function St(l){let e,a=l[3].t("You have shared this chat")+"",t,s,o,n=l[3].t("before")+"",r,c,f,w,p=l[3].t("Click here to")+"",b,m,_,T=l[3].t("delete this link")+"",E,y,A=l[3].t("and create a new shared link.")+"",d,S,v;return{c(){e=I("a"),t=O(a),s=L(),o=I("span"),r=O(n),c=O("."),w=L(),b=O(p),m=L(),_=I("button"),E=O(T),y=L(),d=O(A),this.h()},l(h){e=M(h,"A",{href:!0,target:!0});var C=$(e);t=D(C,a),s=U(C),o=M(C,"SPAN",{class:!0});var P=$(o);r=D(P,n),P.forEach(i),c=D(C,"."),C.forEach(i),w=U(h),b=D(h,p),m=U(h),_=M(h,"BUTTON",{class:!0});var W=$(_);E=D(W,T),W.forEach(i),y=U(h),d=D(h,A),this.h()},h(){u(o,"class","underline"),u(e,"href",f="/s/"+l[2].share_id),u(e,"target","_blank"),u(_,"class","underline")},m(h,C){B(h,e,C),g(e,t),g(e,s),g(e,o),g(o,r),g(e,c),B(h,w,C),B(h,b,C),B(h,m,C),B(h,_,C),g(_,E),B(h,y,C),B(h,d,C),S||(v=J(_,"click",l[9]),S=!0)},p(h,C){C&8&&a!==(a=h[3].t("You have shared this chat")+"")&&V(t,a),C&8&&n!==(n=h[3].t("before")+"")&&V(r,n),C&4&&f!==(f="/s/"+h[2].share_id)&&u(e,"href",f),C&8&&p!==(p=h[3].t("Click here to")+"")&&V(b,p),C&8&&T!==(T=h[3].t("delete this link")+"")&&V(E,T),C&8&&A!==(A=h[3].t("and create a new shared link.")+"")&&V(d,A)},d(h){h&&(i(e),i(w),i(b),i(m),i(_),i(y),i(d)),S=!1,v()}}}function Be(l){let e,a=l[3].t("Share to OpenWebUI Community")+"",t,s,o;return{c(){e=I("button"),t=O(a),this.h()},l(n){e=M(n,"BUTTON",{class:!0,type:!0});var r=$(e);t=D(r,a),r.forEach(i),this.h()},h(){u(e,"class","self-center px-3.5 py-2 rounded-xl text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-850 dark:hover:bg-gray-800 dark:text-white"),u(e,"type","button")},m(n,r){B(n,e,r),g(e,t),s||(o=J(e,"click",l[10]),s=!0)},p(n,r){r&8&&a!==(a=n[3].t("Share to OpenWebUI Community")+"")&&V(t,a)},d(n){n&&i(e),s=!1,o()}}}function It(l){let e=l[3].t("Copy Link")+"",a;return{c(){a=O(e)},l(t){a=D(t,e)},m(t,s){B(t,a,s)},p(t,s){s&8&&e!==(e=t[3].t("Copy Link")+"")&&V(a,e)},d(t){t&&i(a)}}}function Mt(l){let e=l[3].t("Update and Copy Link")+"",a;return{c(){a=O(e)},l(t){a=D(t,e)},m(t,s){B(t,a,s)},p(t,s){s&8&&e!==(e=t[3].t("Update and Copy Link")+"")&&V(a,e)},d(t){t&&i(a)}}}function $t(l){let e,a,t,s=l[3].t("Share Chat")+"",o,n,r,c='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5"><path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path></svg>',f,w,p,b,m=l[2]&&$e(l);return{c(){e=I("div"),a=I("div"),t=I("div"),o=O(s),n=L(),r=I("button"),r.innerHTML=c,f=L(),m&&m.c(),this.h()},l(_){e=M(_,"DIV",{});var T=$(e);a=M(T,"DIV",{class:!0});var E=$(a);t=M(E,"DIV",{class:!0});var y=$(t);o=D(y,s),y.forEach(i),n=U(E),r=M(E,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(r)!=="svelte-745w2y"&&(r.innerHTML=c),E.forEach(i),f=U(T),m&&m.l(T),T.forEach(i),this.h()},h(){u(t,"class","text-lg font-medium self-center"),u(r,"class","self-center"),u(a,"class","flex justify-between dark:text-gray-300 px-5 pt-4 pb-0.5")},m(_,T){B(_,e,T),g(e,a),g(a,t),g(t,o),g(a,n),g(a,r),g(e,f),m&&m.m(e,null),w=!0,p||(b=J(r,"click",l[8]),p=!0)},p(_,T){(!w||T&8)&&s!==(s=_[3].t("Share Chat")+"")&&V(o,s),_[2]?m?(m.p(_,T),T&4&&H(m,1)):(m=$e(_),m.c(),H(m,1),m.m(e,null)):m&&(Pe(),R(m,1,1,()=>{m=null}),Re())},i(_){w||(H(m),w=!0)},o(_){R(m),w=!1},d(_){_&&i(e),m&&m.d(),p=!1,b()}}}function Bt(l){let e,a,t;function s(n){l[12](n)}let o={size:"sm",$$slots:{default:[$t]},$$scope:{ctx:l}};return l[0]!==void 0&&(o.show=l[0]),e=new it({props:o}),Ae.push(()=>He(e,"show",s)),{c(){Y(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){K(e,n,r),t=!0},p(n,[r]){const c={};r&65567&&(c.$$scope={dirty:r,ctx:n}),!a&&r&1&&(a=!0,c.show=n[0],je(()=>a=!1)),e.$set(c)},i(n){t||(H(e.$$.fragment,n),t=!0)},o(n){R(e.$$.fragment,n),t=!1},d(n){Q(e,n)}}}function At(l,e,a){let t,s,o;Z(l,Je,d=>a(14,t=d)),Z(l,Ze,d=>a(4,o=d));let{chatId:n}=e,r=null,c=null;const f=Le("i18n");Z(l,f,d=>a(3,s=d));const w=async()=>{const d=await lt(localStorage.token,n);return c=`${window.location.origin}/s/${d.id}`,console.log(c),a(2,r=await me(localStorage.token,n)),c},p=async()=>{const d=r.chat;console.log("share",d),Ee.success(s.t("Redirecting you to OpenWebUI Community"));const S="https://openwebui.com",v=await window.open(`${S}/chats/upload`,"_blank");window.addEventListener("message",h=>{h.origin===S&&h.data==="loaded"&&v.postMessage(JSON.stringify({chat:d,models:t.filter(C=>d.models.includes(C.id))}),"*")},!1)};let{show:b=!1}=e;const m=d=>r?d?r.id!==d.id||r.share_id!==d.share_id:!1:!0,_=()=>{a(0,b=!1)},T=async()=>{await nt(localStorage.token,n)&&a(2,r=await me(localStorage.token,n))},E=()=>{p(),a(0,b=!1)},y=async()=>{if(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)){console.log("isSafari");const S=async()=>{const v=await w();return new Blob([v],{type:"text/plain"})};navigator.clipboard.write([new ClipboardItem({"text/plain":S()})]).then(()=>(console.log("Async: Copying to clipboard was successful!"),!0)).catch(v=>(console.error("Async: Could not copy text: ",v),!1))}else rt(await w());Ee.success(s.t("Copied shared chat URL to clipboard!")),a(0,b=!1)};function A(d){b=d,a(0,b)}return l.$$set=d=>{"chatId"in d&&a(1,n=d.chatId),"show"in d&&a(0,b=d.show)},l.$$.update=()=>{l.$$.dirty&7&&b&&(async()=>{if(n){const d=await me(localStorage.token,n);m(d)&&a(2,r=d)}else a(2,r=null),console.log(r)})()},[b,n,r,s,o,f,w,p,_,T,E,y,A]}class Xt extends ne{constructor(e){super(),oe(this,e,At,Bt,le,{chatId:1,show:0})}}export{ft as A,Xt as S,Qt as T,Kt as U,Gt as a,Ft as b,Yt as d,qt as g,Zt as q,Jt as u};
//# sourceMappingURL=ShareChatModal.e684fb29.js.map
