const time=document.querySelector(".clock-text"),date=document.querySelector(".date-text");date&&time&&setInterval((function(){date.innerText=(new Date).toLocaleDateString(),time.innerText=(new Date).toLocaleTimeString()}),1e3),addEventListener("router:end",(function(){const e=document.querySelector(".clock-text"),t=document.querySelector(".date-text");t&&e&&setInterval((function(){t.innerText=(new Date).toLocaleDateString(),e.innerText=(new Date).toLocaleTimeString()}),1e3)}));const proxy=document.querySelector(".header .switch-btn-container");if(proxy){try{var cookie=document.cookie.split("; ").find((e=>e.startsWith("astro-proxy"))).split("=")[1]}catch{cookie=null}proxy.querySelector("img").src=cookie?document.querySelector("a[data-value='"+cookie+"'] img").src:document.querySelector("a[data-value='Ultraviolet'] img").src,proxy.querySelector("img").srcset=cookie?document.querySelector("a[data-value='"+cookie+"'] img").srcset:document.querySelector("a[data-value='Ultraviolet'] img").srcset}addEventListener("router:end",(function(){const e=document.querySelector(".header .switch-btn-container");if(e){try{var t=document.cookie.split("; ").find((e=>e.startsWith("astro-proxy"))).split("=")[1]}catch{t=null}e.querySelector("img").src=t?document.querySelector("a[data-value='"+t+"'] img").src:document.querySelector("a[data-value='Ultraviolet'] img").src,e.querySelector("img").srcset=t?document.querySelector("a[data-value='"+t+"'] img").srcset:document.querySelector("a[data-value='Ultraviolet'] img").srcset}})),window.console.error=new Proxy(window.console.error,{apply:function(e,t,r){try{return r.length&&r[0].includes("Warning: ReactDOM.render is no longer supported in React 18")?void 0:Reflect.apply(e,t,r)}catch{return Reflect.apply(e,t,r)}}});