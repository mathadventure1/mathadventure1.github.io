function getReqHeaders(e,r,t){const{referrer:s}=r;for(var n of(e.origin=`${t.protocol}//${t.host}`,e.Host=t.host,Object.keys(e).filter((e=>e.startsWith("sec-")))))delete e[n];if(s)try{var o=decodeURL(s);e.referer=o}catch{e.referer=t.href}else e.referer=t.href;return e}function reqResHeaders(e,r,t){}const MAX_HEADER_VALUE=3072;function splitHeaders(e){const r=new Headers(e);if(e.has("x-bare-headers")){const t=e.get("x-bare-headers");if(t.length>3072){r.delete("x-bare-headers");let e=0;for(let s=0;s<t.length;s+=3072){const n=t.slice(s,s+3072),o=e++;r.set(`x-bare-headers-${o}`,`;${n}`)}}}return r}function joinHeaders(e){const r=new Headers(e),t="x-bare-headers";if(e.has(`${t}-0`)){const s=[];for(const[n,o]of e){if(!n.startsWith(t))continue;if(!o.startsWith(";"))throw new Error("400");s[parseInt(n.slice(15))]=o.slice(1),r.delete(n)}r.set(t,s.join(""))}return r}