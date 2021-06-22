// ==UserScript==
// @name         anti adblock aternos
// @version      0.1
// @description  make you happy cause no more ads on aternos.org
// @author       Enderty
// @match        https://aternos.org/options/*
// ==/UserScript==

function a(){
clearInterval(sf);
function s(elm){document.querySelector(elm).style.setProperty("display","");document.querySelector(elm).style.setProperty("height","");}
document.querySelectorAll("div").forEach(i=>{if(i && i.children[0] && i.children[0].innerText=="Options"){window.divapp=i;}});
if(window.divapp){window.divapp.style='';document.getElementsByClassName("page-content")[0].innerHTML=window.divapp.outerHTML;window.divapp.remove()}
s(".body");
s(".header");
document.querySelectorAll("span").forEach(i=>{
if(i.children[0] && i.children[0].outerHTML.startsWith("<div>")){i.style.setProperty("display","none");}
});
}

const sf=setInterval(()=>{
document.querySelectorAll("span").forEach(i=>{
if(i.children[0] && i.children[0].outerHTML.startsWith("<div>")){a();}
});
},1);
