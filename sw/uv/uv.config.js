self.__uv$config={prefix:"/~/uv/",bare:"/bare/",encodeUrl:Ultraviolet.codec.plain.encode,decodeUrl:Ultraviolet.codec.plain.decode,handler:"/sw/uv/uv.handler.js",client:"/sw/uv/uv.client.js",bundle:"/sw/uv/uv.bundle.js",config:"/sw/uv/uv.config.js",sw:"/sw/uv/uv.sw.js"},"object"!=typeof window||(window.parent.location.href.includes("/~/uv/")||window.parent.location.href.includes("games"))&&window.top!=window||fetch(location.origin+"/js/inject.js?sw=ignore").then((async e=>{const t=await e.text(),n=document.createElement("script");function o(){var e=document.createElement("div");e.style.display="none";e.attachShadow({mode:"open"}).append(n),self.frameElement&&(self.frameElement.style.display="block"),document.body.appendChild(e)}n.type="module",n.textContent=t,"complete"==document.readyState||"interactive"==document.readyState?o():document.addEventListener("readystatechange",(()=>{"complete"!=document.readyState&&"interactive"!=document.readyState||o()}))}));