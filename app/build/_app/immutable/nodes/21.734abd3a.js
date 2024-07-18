import{s as Ye,f as l,a as v,l as n,g as s,h as c,R as Et,c as f,m as i,d,j as e,i as We,r as t,Q as rt,u as xt,O as Qe,n as b,C as je,v as Xe,w as Ae,P as Ge,o as Je,t as Ke}from"../chunks/scheduler.8ceb707f.js";import{S as $e,i as ta}from"../chunks/index.07e72a31.js";import{a as Re}from"../chunks/Toaster.svelte_svelte_type_style_lang.a1b53f72.js";import{g as De}from"../chunks/navigation.4d72fedf.js";import{v as Ze}from"../chunks/index.de68b371.js";import{u as ea,g as aa}from"../chunks/index.74f7e71e.js";import{p as la}from"../chunks/stores.af736a4a.js";function Fe(a){let p,m=`<svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><style>.spinner_ajPY {
									transform-origin: center;
									animation: spinner_AtaB 0.75s infinite linear;
								}
								@keyframes spinner_AtaB {
									100% {
										transform: rotate(360deg);
									}
								}
							</style><path d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"></path><path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z" class="spinner_ajPY"></path></svg>`;return{c(){p=l("div"),p.innerHTML=m,this.h()},l(_){p=s(_,"DIV",{class:!0,"data-svelte-h":!0}),Et(p)!=="svelte-qf5fty"&&(p.innerHTML=m),this.h()},h(){e(p,"class","ml-1.5 self-center")},m(_,j){We(_,p,j)},d(_){_&&d(p)}}}function sa(a){let p,m,_,j='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4"><path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd"></path></svg>',R,S,M=a[4].t("Back")+"",D,x,h,C,B,Z=a[4].t("Title")+"",G,ot,nt,J,u,N,Qt,V,F,it=a[4].t("Command")+"",It,Xt,Gt,O,W,Ve="/",Jt,A,Kt,k,dt=a[4].t("Only")+"",Ct,$t,K,ut=a[4].t("alphanumeric characters and hyphens")+"",At,te,ct=a[4].t("are allowed - Activate this command by typing")+"",Dt,ee,U,ae,Vt,le,se,mt=a[4].t("to chat input.")+"",Pt,re,H,$,Y,pt=a[4].t("Prompt Content")+"",Tt,oe,ne,P,vt,I,St,ie,g,de,ft=a[4].t("Format your variables using square brackets like this:")+"",Mt,ue,z,ce,ht=a[4].t("variable")+"",Bt,me,pe,gt=a[4].t("Make sure to enclose them with")+"",Nt,ve,Q,Pe="'['",fe,_t=a[4].t("and")+"",qt,he,X,Te="']'",ge,_e,q,bt=a[4].t("Utilize")+"",Ot,tt,Se=" {{CLIPBOARD}}",be,ye,yt=a[4].t("variable to have them replaced with clipboard content.")+"",Ut,ke,et,E,at,kt=a[4].t("Save & Update")+"",Ht,we,zt,xe,Me,y=a[0]&&Fe();return{c(){p=l("div"),m=l("button"),_=l("div"),_.innerHTML=j,R=v(),S=l("div"),D=n(M),x=v(),h=l("form"),C=l("div"),B=l("div"),G=n(Z),ot=n("*"),nt=v(),J=l("div"),u=l("input"),Qt=v(),V=l("div"),F=l("div"),It=n(it),Xt=n("*"),Gt=v(),O=l("div"),W=l("div"),W.textContent=Ve,Jt=v(),A=l("input"),Kt=v(),k=l("div"),Ct=n(dt),$t=v(),K=l("span"),At=n(ut),te=v(),Dt=n(ct),ee=n(' "'),U=l("span"),ae=n("/"),Vt=n(a[2]),le=v(),se=n(`"  
				`),Pt=n(mt),re=v(),H=l("div"),$=l("div"),Y=l("div"),Tt=n(pt),oe=n("*"),ne=v(),P=l("div"),vt=l("div"),I=l("textarea"),ie=v(),g=l("div"),de=n("ⓘ "),Mt=n(ft),ue=n(" "),z=l("span"),ce=n("["),Bt=n(ht),me=n("]"),pe=n(`.
					`),Nt=n(gt),ve=v(),Q=l("span"),Q.textContent=Pe,fe=v(),qt=n(_t),he=v(),X=l("span"),X.textContent=Te,ge=n("."),_e=v(),q=l("div"),Ot=n(bt),tt=l("span"),be=n(Se),ye=v(),Ut=n(yt),ke=v(),et=l("div"),E=l("button"),at=l("div"),Ht=n(kt),we=v(),y&&y.c(),this.h()},l(r){p=s(r,"DIV",{class:!0});var o=c(p);m=s(o,"BUTTON",{class:!0});var Lt=c(m);_=s(Lt,"DIV",{class:!0,"data-svelte-h":!0}),Et(_)!=="svelte-1klo87r"&&(_.innerHTML=j),R=f(Lt),S=s(Lt,"DIV",{class:!0});var Be=c(S);D=i(Be,M),Be.forEach(d),Lt.forEach(d),x=f(o),h=s(o,"FORM",{class:!0});var L=c(h);C=s(L,"DIV",{class:!0});var jt=c(C);B=s(jt,"DIV",{class:!0});var Ee=c(B);G=i(Ee,Z),ot=i(Ee,"*"),Ee.forEach(d),nt=f(jt),J=s(jt,"DIV",{});var Ne=c(J);u=s(Ne,"INPUT",{class:!0,placeholder:!0}),Ne.forEach(d),jt.forEach(d),Qt=f(L),V=s(L,"DIV",{class:!0});var lt=c(V);F=s(lt,"DIV",{class:!0});var Ie=c(F);It=i(Ie,it),Xt=i(Ie,"*"),Ie.forEach(d),Gt=f(lt),O=s(lt,"DIV",{class:!0});var Rt=c(O);W=s(Rt,"DIV",{class:!0,"data-svelte-h":!0}),Et(W)!=="svelte-hteuxn"&&(W.textContent=Ve),Jt=f(Rt),A=s(Rt,"INPUT",{class:!0,placeholder:!0}),Rt.forEach(d),Kt=f(lt),k=s(lt,"DIV",{class:!0});var T=c(k);Ct=i(T,dt),$t=f(T),K=s(T,"SPAN",{class:!0});var qe=c(K);At=i(qe,ut),qe.forEach(d),te=f(T),Dt=i(T,ct),ee=i(T,' "'),U=s(T,"SPAN",{class:!0});var Zt=c(U);ae=i(Zt,"/"),Vt=i(Zt,a[2]),le=f(Zt),Zt.forEach(d),se=i(T,`"  
				`),Pt=i(T,mt),T.forEach(d),lt.forEach(d),re=f(L),H=s(L,"DIV",{class:!0});var Ft=c(H);$=s(Ft,"DIV",{class:!0});var Oe=c($);Y=s(Oe,"DIV",{class:!0});var Ce=c(Y);Tt=i(Ce,pt),oe=i(Ce,"*"),Ce.forEach(d),Oe.forEach(d),ne=f(Ft),P=s(Ft,"DIV",{class:!0});var st=c(P);vt=s(st,"DIV",{});var Ue=c(vt);I=s(Ue,"TEXTAREA",{class:!0,placeholder:!0,rows:!0}),c(I).forEach(d),Ue.forEach(d),ie=f(st),g=s(st,"DIV",{class:!0});var w=c(g);de=i(w,"ⓘ "),Mt=i(w,ft),ue=i(w," "),z=s(w,"SPAN",{class:!0});var Wt=c(z);ce=i(Wt,"["),Bt=i(Wt,ht),me=i(Wt,"]"),Wt.forEach(d),pe=i(w,`.
					`),Nt=i(w,gt),ve=f(w),Q=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),Et(Q)!=="svelte-w4chb6"&&(Q.textContent=Pe),fe=f(w),qt=i(w,_t),he=f(w),X=s(w,"SPAN",{class:!0,"data-svelte-h":!0}),Et(X)!=="svelte-589oqk"&&(X.textContent=Te),ge=i(w,"."),w.forEach(d),_e=f(st),q=s(st,"DIV",{class:!0});var wt=c(q);Ot=i(wt,bt),tt=s(wt,"SPAN",{class:!0});var He=c(tt);be=i(He,Se),He.forEach(d),ye=f(wt),Ut=i(wt,yt),wt.forEach(d),st.forEach(d),Ft.forEach(d),ke=f(L),et=s(L,"DIV",{class:!0});var ze=c(et);E=s(ze,"BUTTON",{class:!0,type:!0});var Yt=c(E);at=s(Yt,"DIV",{class:!0});var Le=c(at);Ht=i(Le,kt),Le.forEach(d),we=f(Yt),y&&y.l(Yt),Yt.forEach(d),ze.forEach(d),L.forEach(d),o.forEach(d),this.h()},h(){e(_,"class","self-center"),e(S,"class","self-center font-medium text-sm"),e(m,"class","flex space-x-1"),e(B,"class","text-sm font-semibold mb-2"),e(u,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),e(u,"placeholder",N=a[4].t("Add a short title for this prompt")),u.required=!0,e(C,"class","my-2"),e(F,"class","text-sm font-semibold mb-2"),e(W,"class","bg-gray-200 dark:bg-gray-600 font-semibold px-3 py-1 border border-r-0 dark:border-gray-600 rounded-l-lg"),e(A,"class","px-3 py-1.5 text-sm w-full bg-transparent border disabled:text-gray-500 dark:border-gray-600 outline-none rounded-r-lg"),e(A,"placeholder","short-summary"),A.disabled=!0,A.required=!0,e(O,"class","flex items-center mb-1"),e(K,"class","text-gray-600 dark:text-gray-300 font-medium"),e(U,"class","text-gray-600 dark:text-gray-300 font-medium"),e(k,"class","text-xs text-gray-400 dark:text-gray-500"),e(V,"class","my-2"),e(Y,"class","self-center text-sm font-semibold"),e($,"class","flex w-full justify-between"),e(I,"class","px-3 py-1.5 text-sm w-full bg-transparent border dark:border-gray-600 outline-none rounded-lg"),e(I,"placeholder",St=a[4].t("Write a summary in 50 words that summarizes [topic or keyword].")),e(I,"rows","6"),I.required=!0,e(z,"class","text-gray-600 dark:text-gray-300 font-medium"),e(Q,"class","text-gray-600 dark:text-gray-300 font-medium"),e(X,"class","text-gray-600 dark:text-gray-300 font-medium"),e(g,"class","text-xs text-gray-400 dark:text-gray-500"),e(tt,"class","text-gray-600 dark:text-gray-300 font-medium"),e(q,"class","text-xs text-gray-400 dark:text-gray-500"),e(P,"class","mt-2"),e(H,"class","my-2"),e(at,"class","self-center font-medium"),e(E,"class",zt="text-sm px-3 py-2 transition rounded-xl "+(a[0]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex"),e(E,"type","submit"),E.disabled=a[0],e(et,"class","my-2 flex justify-end"),e(h,"class","flex flex-col max-w-2xl mx-auto mt-4 mb-10"),e(p,"class","w-full max-h-full")},m(r,o){We(r,p,o),t(p,m),t(m,_),t(m,R),t(m,S),t(S,D),t(p,x),t(p,h),t(h,C),t(C,B),t(B,G),t(B,ot),t(C,nt),t(C,J),t(J,u),rt(u,a[1]),t(h,Qt),t(h,V),t(V,F),t(F,It),t(F,Xt),t(V,Gt),t(V,O),t(O,W),t(O,Jt),t(O,A),rt(A,a[2]),t(V,Kt),t(V,k),t(k,Ct),t(k,$t),t(k,K),t(K,At),t(k,te),t(k,Dt),t(k,ee),t(k,U),t(U,ae),t(U,Vt),t(U,le),t(k,se),t(k,Pt),t(h,re),t(h,H),t(H,$),t($,Y),t(Y,Tt),t(Y,oe),t(H,ne),t(H,P),t(P,vt),t(vt,I),rt(I,a[3]),t(P,ie),t(P,g),t(g,de),t(g,Mt),t(g,ue),t(g,z),t(z,ce),t(z,Bt),t(z,me),t(g,pe),t(g,Nt),t(g,ve),t(g,Q),t(g,fe),t(g,qt),t(g,he),t(g,X),t(g,ge),t(P,_e),t(P,q),t(q,Ot),t(q,tt),t(tt,be),t(q,ye),t(q,Ut),t(h,ke),t(h,et),t(et,E),t(E,at),t(at,Ht),t(E,we),y&&y.m(E,null),xe||(Me=[xt(m,"click",a[7]),xt(u,"input",a[8]),xt(A,"input",a[9]),xt(I,"input",a[10]),xt(h,"submit",Qe(a[11]))],xe=!0)},p(r,[o]){o&16&&M!==(M=r[4].t("Back")+"")&&b(D,M),o&16&&Z!==(Z=r[4].t("Title")+"")&&b(G,Z),o&16&&N!==(N=r[4].t("Add a short title for this prompt"))&&e(u,"placeholder",N),o&2&&u.value!==r[1]&&rt(u,r[1]),o&16&&it!==(it=r[4].t("Command")+"")&&b(It,it),o&4&&A.value!==r[2]&&rt(A,r[2]),o&16&&dt!==(dt=r[4].t("Only")+"")&&b(Ct,dt),o&16&&ut!==(ut=r[4].t("alphanumeric characters and hyphens")+"")&&b(At,ut),o&16&&ct!==(ct=r[4].t("are allowed - Activate this command by typing")+"")&&b(Dt,ct),o&4&&b(Vt,r[2]),o&16&&mt!==(mt=r[4].t("to chat input.")+"")&&b(Pt,mt),o&16&&pt!==(pt=r[4].t("Prompt Content")+"")&&b(Tt,pt),o&16&&St!==(St=r[4].t("Write a summary in 50 words that summarizes [topic or keyword]."))&&e(I,"placeholder",St),o&8&&rt(I,r[3]),o&16&&ft!==(ft=r[4].t("Format your variables using square brackets like this:")+"")&&b(Mt,ft),o&16&&ht!==(ht=r[4].t("variable")+"")&&b(Bt,ht),o&16&&gt!==(gt=r[4].t("Make sure to enclose them with")+"")&&b(Nt,gt),o&16&&_t!==(_t=r[4].t("and")+"")&&b(qt,_t),o&16&&bt!==(bt=r[4].t("Utilize")+"")&&b(Ot,bt),o&16&&yt!==(yt=r[4].t("variable to have them replaced with clipboard content.")+"")&&b(Ut,yt),o&16&&kt!==(kt=r[4].t("Save & Update")+"")&&b(Ht,kt),r[0]?y||(y=Fe(),y.c(),y.m(E,null)):y&&(y.d(1),y=null),o&1&&zt!==(zt="text-sm px-3 py-2 transition rounded-xl "+(r[0]?" cursor-not-allowed bg-gray-100 dark:bg-gray-800":" bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-800")+" flex")&&e(E,"class",zt),o&1&&(E.disabled=r[0])},i:je,o:je,d(r){r&&d(p),y&&y.d(),xe=!1,Xe(Me)}}}function ra(a,p,m){let _,j,R;Ae(a,Ze,u=>m(12,_=u)),Ae(a,la,u=>m(13,j=u));const S=Ge("i18n");Ae(a,S,u=>m(4,R=u));let M=!1,D="",x="",h="";const C=async()=>{m(0,M=!0),B(x)?await ea(localStorage.token,x,D,h).catch(N=>(Re.error(N),null))&&(await Ze.set(await aa(localStorage.token)),await De("/workspace/prompts")):Re.error(R.t("Only alphanumeric characters and hyphens are allowed in the command string.")),m(0,M=!1)},B=u=>/^[a-zA-Z0-9-]+$/.test(u);Je(async()=>{if(m(2,x=j.url.searchParams.get("command")),x){const u=_.filter(N=>N.command===x).at(0);u?(console.log(u),console.log(u.command),m(1,D=u.title),await Ke(),m(2,x=u.command.slice(1)),m(3,h=u.content)):De("/workspace/prompts")}else De("/workspace/prompts")});const Z=()=>{history.back()};function G(){D=this.value,m(1,D)}function ot(){x=this.value,m(2,x)}function nt(){h=this.value,m(3,h)}return[M,D,x,h,R,S,C,Z,G,ot,nt,()=>{C()}]}class pa extends $e{constructor(p){super(),ta(this,p,ra,sa,Ye,{})}}export{pa as component};
//# sourceMappingURL=21.734abd3a.js.map
