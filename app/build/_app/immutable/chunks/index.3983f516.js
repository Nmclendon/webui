import{y as c}from"./index.de68b371.js";const l=async(r,s)=>{let o=null;const e=await fetch(`${c}/models/add`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify(s)}).then(async t=>{if(!t.ok)throw await t.json();return t.json()}).catch(t=>(o=t.detail,console.log(t),null));if(o)throw o;return e},d=async(r,s,o)=>{let e=null;const t=new URLSearchParams;t.append("id",s);const n=await fetch(`${c}/models/update?${t.toString()}`,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`},body:JSON.stringify(o)}).then(async a=>{if(!a.ok)throw await a.json();return a.json()}).then(a=>a).catch(a=>(e=a,console.log(a),null));if(e)throw e;return n},h=async(r,s)=>{let o=null;const e=new URLSearchParams;e.append("id",s);const t=await fetch(`${c}/models/delete?${e.toString()}`,{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",authorization:`Bearer ${r}`}}).then(async n=>{if(!n.ok)throw await n.json();return n.json()}).then(n=>n).catch(n=>(o=n,console.log(n),null));if(o)throw o;return t};export{l as a,h as d,d as u};
//# sourceMappingURL=index.3983f516.js.map
