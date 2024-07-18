import{R as i,y as c}from"./index.de68b371.js";const l=async a=>{let o=null;const e=await fetch(`${i}/config`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t.detail,null));if(o)throw o;return e},h=async(a,o)=>{let e=null;const t=await fetch(`${i}/config/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),e=n.detail,null));if(e)throw e;return t},u=async a=>{let o=null;const e=await fetch(`${i}/query/settings`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t.detail,null));if(o)throw o;return e},d=async(a,o)=>{let e=null;const t=await fetch(`${i}/query/settings/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),e=n.detail,null));if(e)throw e;return t},p=async(a,o)=>{let e=null;const t=await fetch(`${i}/process/doc`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({file_id:o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(e=n.detail,console.log(n),null));if(e)throw e;return t},f=async(a,o,e)=>{let t=null;const n=await fetch(`${i}/web`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({url:e,collection_name:o})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(t=r.detail,console.log(r),null));if(t)throw t;return n},y=async(a,o)=>{let e=null;const t=await fetch(`${i}/youtube`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`},body:JSON.stringify({url:o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(e=n.detail,console.log(n),null));if(e)throw e;return t},w=async a=>{let o=null;const e=await fetch(`${i}/scan`,{method:"GET",headers:{Accept:"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(o=t.detail,null));if(o)throw o;return e},j=async a=>{let o=null;const e=await fetch(`${i}/reset/db`,{method:"GET",headers:{Accept:"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(o=t.detail,null));if(o)throw o;return e},g=async a=>{let o=null;const e=await fetch(`${i}/embedding`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t.detail,null));if(o)throw o;return e},T=async(a,o)=>{let e=null;const t=await fetch(`${i}/embedding/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),e=n.detail,null));if(e)throw e;return t},$=async a=>{let o=null;const e=await fetch(`${i}/reranking`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(console.log(t),o=t.detail,null));if(o)throw o;return e},m=async(a,o)=>{let e=null;const t=await fetch(`${i}/reranking/update`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({...o})}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).catch(n=>(console.log(n),e=n.detail,null));if(e)throw e;return t},A=async(a,o,e)=>{let t=null;const n=await fetch(`${i}/web/search`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${a}`},body:JSON.stringify({query:o,collection_name:e??""})}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(console.log(r),t=r.detail,null));if(t)throw t;return n},B=async(a,o)=>{const e=new FormData;e.append("file",o);let t=null;const n=await fetch(`${c}/files/`,{method:"POST",headers:{Accept:"application/json",authorization:`Bearer ${a}`},body:e}).then(async r=>{if(!r.ok)throw await r.json();return r.json()}).catch(r=>(t=r.detail,console.log(r),null));if(t)throw t;return n},S=async a=>{let o=null;const e=await fetch(`${c}/files/all`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${a}`}}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).then(t=>t).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return e};export{l as a,h as b,d as c,g as d,$ as e,S as f,u as g,T as h,B as i,f as j,y as k,A as l,p,j as r,w as s,m as u};
//# sourceMappingURL=index.435b937c.js.map
