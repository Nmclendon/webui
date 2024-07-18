import{s as re,a as A,e as X,M as ie,d as g,c as G,i as O,w as U,P as ne,p as R,f as v,l as Z,g as b,h as S,m as x,j as y,r as d,n as $,W as q,t as C}from"../chunks/scheduler.8ceb707f.js";import{S as ue,i as me,a as H,t as T,c as ce,f as F,b as de,d as fe,m as _e,e as ge,g as pe}from"../chunks/index.07e72a31.js";import{g as ee}from"../chunks/navigation.4d72fedf.js";import{p as he}from"../chunks/stores.af736a4a.js";import{d as se}from"../chunks/dayjs.min.1e504c00.js";import{l as te,W as ve,h as be}from"../chunks/index.de68b371.js";import{m as ye}from"../chunks/index.a303954b.js";import{F as Ie,G as we}from"../chunks/index.31423eb8.js";import{M as Me}from"../chunks/Messages.efa1ab6b.js";import"../chunks/Toaster.svelte_svelte_type_style_lang.a1b53f72.js";import"../chunks/Modal.9e048b4e.js";import"../chunks/create.4fbceb05.js";import{b as Ee}from"../chunks/index.c405526f.js";import"../chunks/Selector.svelte_svelte_type_style_lang.d3c33061.js";import"../chunks/FileSaver.min.898eb36f.js";import"../chunks/index.c4ca6160.js";function ae(s){let u,t,r,i,a,o,m,I,h=se(s[4].chat.timestamp).format(s[10].t("MMMM DD, YYYY"))+"",k,w,D,V,M,c,n,f,Y,B,P,e;function E(l){s[14](l)}function oe(l){s[15](l)}function le(l){s[16](l)}let W={user:s[5],chatId:s[8],readOnly:!0,selectedModels:s[3],processing:ke,bottomPadding:s[12].length>0,sendPrompt:De,continueGeneration:Ve,regenerateResponse:Ye};return s[0]!==void 0&&(W.history=s[0]),s[7]!==void 0&&(W.messages=s[7]),s[2]!==void 0&&(W.autoScroll=s[2]),f=new Me({props:W}),R.push(()=>F(f,"history",E)),R.push(()=>F(f,"messages",oe)),R.push(()=>F(f,"autoScroll",le)),{c(){u=v("div"),t=v("div"),r=v("div"),i=v("div"),a=v("div"),o=Z(s[6]),m=A(),I=v("div"),k=Z(h),w=A(),D=v("hr"),V=A(),M=v("div"),c=v("div"),n=v("div"),de(f.$$.fragment),this.h()},l(l){u=b(l,"DIV",{class:!0});var _=S(u);t=b(_,"DIV",{class:!0});var p=S(t);r=b(p,"DIV",{class:!0});var j=S(r);i=b(j,"DIV",{});var N=S(i);a=b(N,"DIV",{class:!0});var z=S(a);o=x(z,s[6]),z.forEach(g),m=G(N),I=b(N,"DIV",{class:!0});var J=S(I);k=x(J,h),J.forEach(g),N.forEach(g),w=G(j),D=b(j,"HR",{class:!0}),j.forEach(g),V=G(p),M=b(p,"DIV",{class:!0,id:!0});var K=S(M);c=b(K,"DIV",{class:!0});var L=S(c);n=b(L,"DIV",{class:!0});var Q=S(n);fe(f.$$.fragment,Q),Q.forEach(g),L.forEach(g),K.forEach(g),p.forEach(g),_.forEach(g),this.h()},h(){y(a,"class","text-3xl font-semibold line-clamp-1"),y(I,"class","mt-1 text-gray-400"),y(D,"class","dark:border-gray-800 mt-6 mb-2"),y(r,"class","px-3 w-full max-w-5xl mx-auto"),y(n,"class","py-2"),y(c,"class","h-full w-full flex flex-col py-4"),y(M,"class","flex flex-col w-full flex-auto overflow-auto h-0"),y(M,"id","messages-container"),y(t,"class","flex flex-col flex-auto justify-center py-8"),y(u,"class","min-h-screen max-h-screen w-full flex flex-col text-gray-700 dark:text-gray-100 bg-white dark:bg-gray-900")},m(l,_){O(l,u,_),d(u,t),d(t,r),d(r,i),d(i,a),d(a,o),d(i,m),d(i,I),d(I,k),d(r,w),d(r,D),d(t,V),d(t,M),d(M,c),d(c,n),_e(f,n,null),e=!0},p(l,_){(!e||_&64)&&$(o,l[6]),(!e||_&1040)&&h!==(h=se(l[4].chat.timestamp).format(l[10].t("MMMM DD, YYYY"))+"")&&$(k,h);const p={};_&32&&(p.user=l[5]),_&256&&(p.chatId=l[8]),_&8&&(p.selectedModels=l[3]),!Y&&_&1&&(Y=!0,p.history=l[0],q(()=>Y=!1)),!B&&_&128&&(B=!0,p.messages=l[7],q(()=>B=!1)),!P&&_&4&&(P=!0,p.autoScroll=l[2],q(()=>P=!1)),f.$set(p)},i(l){e||(H(f.$$.fragment,l),e=!0)},o(l){T(f.$$.fragment,l),e=!1},d(l){l&&g(u),ge(f)}}}function Se(s){let u,t,r,i;document.title=u=`
		`+(s[6]?`${s[6].length>30?`${s[6].slice(0,30)}...`:s[6]} | ${s[9]}`:`${s[9]}`)+`
	`;let a=s[1]&&ae(s);return{c(){t=A(),a&&a.c(),r=X()},l(o){ie("svelte-1123lr8",document.head).forEach(g),t=G(o),a&&a.l(o),r=X()},m(o,m){O(o,t,m),a&&a.m(o,m),O(o,r,m),i=!0},p(o,[m]){(!i||m&576)&&u!==(u=`
		`+(o[6]?`${o[6].length>30?`${o[6].slice(0,30)}...`:o[6]} | ${o[9]}`:`${o[9]}`)+`
	`)&&(document.title=u),o[1]?a?(a.p(o,m),m&2&&H(a,1)):(a=ae(o),a.c(),H(a,1),a.m(r.parentNode,r)):a&&(pe(),T(a,1,1,()=>{a=null}),ce())},i(o){i||(H(a),i=!0)},o(o){T(a),i=!1},d(o){o&&(g(t),g(r)),a&&a.d(o)}}}let ke="";const De=()=>{},Ve=()=>{},Ye=()=>{};function Be(s,u,t){let r,i,a,o;U(s,te,e=>t(8,r=e)),U(s,he,e=>t(13,i=e)),U(s,ve,e=>t(9,a=e));const m=ne("i18n");U(s,m,e=>t(10,o=e));let I=!1,h=!0,k=[""],w=null,D=null,V="",M=[],c=[],n={messages:{},currentId:null};const f=async()=>{if(await be.set(await Ee(localStorage.token)),await te.set(i.params.id),t(4,w=await Ie(localStorage.token,r).catch(async e=>(await ee("/"),null))),w){t(5,D=await we(localStorage.token,w.user_id).catch(E=>(console.error(E),null)));const e=w.chat;return e?(console.log(e),t(3,k=((e==null?void 0:e.models)??void 0)!==void 0?e.models:[e.models??""]),t(0,n=((e==null?void 0:e.history)??void 0)!==void 0?e.history:ye(e.messages)),t(6,V=e.title),t(2,h=!0),await C(),c.length>0&&t(0,n.messages[c.at(-1).id].done=!0,n),await C(),!0):null}};function Y(e){n=e,t(0,n)}function B(e){c=e,t(7,c),t(0,n)}function P(e){h=e,t(2,h)}return s.$$.update=()=>{if(s.$$.dirty&1)if(n.currentId!==null){let e=[],E=n.messages[n.currentId];for(;E!==null;)e.unshift({...E}),E=E.parentId!==null?n.messages[E.parentId]:null;t(7,c=e)}else t(7,c=[]);s.$$.dirty&8192&&i.params.id&&(async()=>await f()?(await C(),t(1,I=!0)):await ee("/"))()},[n,I,h,k,w,D,V,c,r,a,o,m,M,i,Y,B,P]}class Ke extends ue{constructor(u){super(),me(this,u,Be,Se,re,{})}}export{Ke as component};
//# sourceMappingURL=27.982d91dc.js.map
