var _=function(){"use strict";var e={edit:function(e,r){if("string"==typeof e)return document.querySelector(e).innerHTML=r;e.innerHTML=r},addClass:function(e,r){if(!e)throw new Error("Element parameter is not set!");if(!r)throw new Error("Class parameter is not set!");if("string"==typeof e)return document.querySelector(e).classList.add(r);e.classList.add(r)},getType:function(e){return typeof e},setCSS:function(e,r,t){if(!e)throw new Error("Element parameter is not set!");if(!r)throw new Error("Property parameter is not set!");if(!t)throw new Error("Value parameter is not set!");if("string"==typeof e)return document.querySelector(e).style.setProperty(r,t);e.style.setProperty(r,t)},hide:function(e){if("string"==typeof e)return document.querySelector(e).style.display="none";e.style.display="none"},show:function(e){if("string"==typeof e)return document.querySelector(e).style.removeProperty("display")},toggle:function(e){if("string"==typeof e){var r=document.querySelector(e);return"none"==r.style.display?r.style.removeProperty("display"):r.style.display="none"}return"none"==e.style.display?e.style.removeProperty("display"):e.style.display="none"},removeClass:function(e,r){if("string"==typeof e)return document.querySelector(e).classList.remove(r);e.classList.remove(r)},get:function(e){if(!e)throw new Error("No query selector provided");return document.querySelector(e)},loop:function(e,r){for(var t=0;t<e;t++)r()},on:function(e,r,t,o){if(!e)throw new Error("Please provide an element to attach the event to.");if(!r)throw new Error("Please provide an event to listen for.");if(!t)throw new Error("Please provide a callback to run");if("string"==typeof e)return document.querySelector(e).addEventListener(r,t,o||!1);e.addEventListener(r,t,o||!1)},redirect:function(e){if(!e)throw new Error("No URL parameter provided");document.location.href=e}};return e}();