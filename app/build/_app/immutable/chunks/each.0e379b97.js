import{t as B,a as C}from"./index.07e72a31.js";import{v as D}from"./scheduler.8ceb707f.js";function G(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function H(n,o){B(n,1,1,()=>{o.delete(n.key)})}function I(n,o,x,A,j,p,d,k,y,q,w,z){let i=n.length,f=p.length,c=i;const u={};for(;c--;)u[n[c].key]=c;const h=[],a=new Map,m=new Map,v=[];for(c=f;c--;){const e=z(j,p,c),s=x(e);let t=d.get(s);t?A&&v.push(()=>t.p(e,o)):(t=q(s,e),t.c()),a.set(s,h[c]=t),s in u&&m.set(s,Math.abs(c-u[s]))}const M=new Set,S=new Set;function g(e){C(e,1),e.m(k,w),d.set(e.key,e),w=e.first,f--}for(;i&&f;){const e=h[f-1],s=n[i-1],t=e.key,l=s.key;e===s?(w=e.first,i--,f--):a.has(l)?!d.has(t)||M.has(t)?g(e):S.has(l)?i--:m.get(t)>m.get(l)?(S.add(t),g(e)):(M.add(l),i--):(y(s,d),i--)}for(;i--;){const e=n[i];a.has(e.key)||y(e,d)}for(;f;)g(h[f-1]);return D(v),h}export{G as e,H as o,I as u};
//# sourceMappingURL=each.0e379b97.js.map
