(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".carousel-track"),o=document.querySelectorAll(".hero").length;let r=0;function e(l){const d=-l*100;s.style.transform=`translateX(${d}%)`}function t(){r=(r+1)%o,e(r)}function n(){r=(r-1+o)%o,e(r)}setInterval(t,5e3);const i=document.querySelector("#prevButton"),u=document.querySelector("#nextButton");i&&i.addEventListener("click",n),u&&u.addEventListener("click",t),e(r)});
