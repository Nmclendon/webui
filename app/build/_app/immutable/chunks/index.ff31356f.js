import{y as i}from"./index.de68b371.js";const h=async a=>{let n=null;const o=await fetch(`${i}/auths/admin/details`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},u=async a=>{let n=null;const o=await fetch(`${i}/auths/admin/config`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},d=async(a,n)=>{let o=null;const t=await fetch(`${i}/auths/admin/config`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify(n)}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),o=e.detail,null));if(o)throw o;return t},y=async a=>{let n=null;const o=await fetch(`${i}/auths/`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},credentials:"include"}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o},p=async(a,n)=>{let o=null;const t=await fetch(`${i}/auths/signin`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({email:a,password:n})}).then(async e=>{if(!e.ok)throw await e.json();return e.json()}).catch(e=>(console.log(e),o=e.detail,null));if(o)throw o;return t},f=async(a,n,o,t)=>{let e=null;const r=await fetch(`${i}/auths/signup`,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({name:a,email:n,password:o,profile_image_url:t})}).then(async s=>{if(!s.ok)throw await s.json();return s.json()}).catch(s=>(console.log(s),e=s.detail,null));if(e)throw e;return r},w=async(a,n,o,t,e="pending")=>{let r=null;const s=await fetch(`${i}/auths/add`,{method:"POST",headers:{"Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({name:n,email:o,password:t,role:e})}).then(async l=>{if(!l.ok)throw await l.json();return l.json()}).catch(l=>(console.log(l),r=l.detail,null));if(r)throw r;return s},j=async(a,n,o)=>{let t=null;const e=await fetch(`${i}/auths/update/profile`,{method:"POST",headers:{"Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({name:n,profile_image_url:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),t=r.detail,null));if(t)throw t;return e},g=async(a,n,o)=>{let t=null;const e=await fetch(`${i}/auths/update/password`,{method:"POST",headers:{"Content-Type":"application/json",...a&&{authorization:`Bearer ${a}`}},body:JSON.stringify({password:n,new_password:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),t=r.detail,null));if(t)throw t;return e},T=async a=>{let n=null;const o=await fetch(`${i}/auths/api_key`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o.api_key},m=async a=>{let n=null;const o=await fetch(`${i}/auths/api_key`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),n=t.detail,null));if(n)throw n;return o.api_key};export{m as a,j as b,T as c,h as d,w as e,u as f,y as g,d as h,p as i,f as j,g as u};
//# sourceMappingURL=index.ff31356f.js.map
