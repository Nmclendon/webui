import{c as h}from"./index.505b608a.js";import{a3 as b}from"./scheduler.8ceb707f.js";function x(p,{delay:i=0,duration:n=400,easing:s=b}={}){const e=+getComputedStyle(p).opacity;return{delay:i,duration:n,easing:s,css:a=>`opacity: ${a*e}`}}function F(p,{delay:i=0,duration:n=400,easing:s=h,axis:e="y"}={}){const a=getComputedStyle(p),c=+a.opacity,d=e==="y"?"height":"width",$=parseFloat(a[d]),r=e==="y"?["top","bottom"]:["left","right"],o=r.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),l=parseFloat(a[`padding${o[0]}`]),_=parseFloat(a[`padding${o[1]}`]),y=parseFloat(a[`margin${o[0]}`]),m=parseFloat(a[`margin${o[1]}`]),g=parseFloat(a[`border${o[0]}Width`]),u=parseFloat(a[`border${o[1]}Width`]);return{delay:i,duration:n,easing:s,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*c};${d}: ${t*$}px;padding-${r[0]}: ${t*l}px;padding-${r[1]}: ${t*_}px;margin-${r[0]}: ${t*y}px;margin-${r[1]}: ${t*m}px;border-${r[0]}-width: ${t*g}px;border-${r[1]}-width: ${t*u}px;`}}export{x as f,F as s};
//# sourceMappingURL=index.e31818e9.js.map
