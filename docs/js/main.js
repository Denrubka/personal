(()=>{"use strict";var e=[,(e,t,o)=>{o.r(t),o.d(t,{default:()=>u});var n,r,i="function"==typeof Map?new Map:(n=[],r=[],{has:function(e){return n.indexOf(e)>-1},get:function(e){return r[n.indexOf(e)]},set:function(e,t){-1===n.indexOf(e)&&(n.push(e),r.push(t))},delete:function(e){var t=n.indexOf(e);t>-1&&(n.splice(t,1),r.splice(t,1))}}),s=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){s=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}function a(e){if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var t,o=null,n=null,r=null,a=function(){e.clientWidth!==n&&u()},l=function(t){window.removeEventListener("resize",a,!1),e.removeEventListener("input",u,!1),e.removeEventListener("keyup",u,!1),e.removeEventListener("autosize:destroy",l,!1),e.removeEventListener("autosize:update",u,!1),Object.keys(t).forEach((function(o){e.style[o]=t[o]})),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",l,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",u,!1),window.addEventListener("resize",a,!1),e.addEventListener("input",u,!1),e.addEventListener("autosize:update",u,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:l,update:u}),"vertical"===(t=window.getComputedStyle(e,null)).resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),o="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(o)&&(o=0),u()}function d(t){var o=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=o,e.style.overflowY=t}function c(){if(0!==e.scrollHeight){var t=function(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="",e.style.height=e.scrollHeight+o+"px",n=e.clientWidth,t.forEach((function(e){e.node.scrollTop=e.scrollTop})),r&&(document.documentElement.scrollTop=r)}}function u(){c();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),n="content-box"===o.boxSizing?Math.round(parseFloat(o.height)):e.offsetHeight;if(n<t?"hidden"===o.overflowY&&(d("scroll"),c(),n="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight):"hidden"!==o.overflowY&&(d("hidden"),c(),n="content-box"===o.boxSizing?Math.round(parseFloat(window.getComputedStyle(e,null).height)):e.offsetHeight),r!==n){r=n;var i=s("autosize:resized");try{e.dispatchEvent(i)}catch(e){}}}}function l(e){var t=i.get(e);t&&t.destroy()}function d(e){var t=i.get(e);t&&t.update()}var c=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((c=function(e){return e}).destroy=function(e){return e},c.update=function(e){return e}):((c=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],(function(e){return a(e)})),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],l),e},c.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],d),e});const u=c},(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n=function(e,t){e.addEventListener("click",(function(){e.classList.toggle("burger_active"),t.classList.toggle("sidebar_active")}))}},(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n=function(e){e.forEach((function(e){var t=e.querySelector(".dropdown-block"),o=e.querySelector("svg.arrow");e.addEventListener("click",(function(){t.classList.contains("dropdown-block_active")?(t.classList.remove("dropdown-block_active"),o.classList.remove("active"),t.style.maxHeight="0px"):(t.classList.add("dropdown-block_active"),o.classList.add("active"),t.style.maxHeight="".concat(t.scrollHeight,"px"))}))}))}},(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n=function(e){document.querySelectorAll(e).forEach((function(e){var t=e.closest(".form-label");e.addEventListener("focus",(function(){t.classList.add("form-label_active")})),e.addEventListener("focusout",(function(){t.classList.remove("form-label_active")}))}))}},(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n=function(e){document.querySelectorAll(e).forEach((function(e){var t=e.getAttribute("data-modal"),o=document.querySelector("#"+t),n=o.closest(".overlay");e.addEventListener("click",(function(e){e.preventDefault(),n.classList.add("overlay_active"),document.body.style.overflow="hidden"})),n.addEventListener("click",(function(e){var t=e.target;(t.closest(".modal__close")||t===n&&t!==o)&&(n.classList.remove("overlay_active"),document.body.style.overflow="")}))}))}},(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});const n=(r=document.querySelector(".preloader"),void document.addEventListener("DOMContentLoaded",(function(){r.style.display="none"})));var r}],t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,o),i.exports}o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{o.r(n);var e=o(1),t=o(2),r=o(3),i=o(4),s=o(5),a=(o(6),document.querySelector("textarea")),l=document.querySelector(".history-form"),d=document.querySelector(".burger"),c=document.querySelector(".sidebar"),u=document.querySelectorAll(".dropdown-btn");(0,e.default)(a),a.addEventListener("focus",(function(){a.value&&l.classList.add("history-form_focus")})),a.addEventListener("focusout",(function(){a.value||l.classList.contains("history-form_focus")&&l.classList.remove("history-form_focus")})),a.addEventListener("input",(function(){a.value?l.classList.add("history-form_focus"):l.classList.contains("history-form_focus")&&l.classList.remove("history-form_focus")}));new Swiper(".history-slider",{slidesPerView:5,spaceBetween:20,slideClass:"history-cards__item",breakpoints:{0:{slidesPerView:2,spaceBetween:13},1100:{slidesPerView:6,spaceBetween:20}}});(0,t.default)(d,c),(0,r.default)(u),(0,i.default)(".form-input"),(0,s.default)(".btn-to-modal")})()})();