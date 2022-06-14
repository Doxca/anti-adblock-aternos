// ==UserScript==
// @name        Aternos anti-anti adblock
// @description Kills Aternos' annoying full-page + timeout anti-adblock.
// @version     1.0.4
// @author      Ender
// @match       *://aternos.org/*
// @grant       none
// @inject-into page
// @run-at      document-start
// @namespace       https://github.com/Endxca/aternos_AAAB
// @updateURL       https://raw.githubusercontent.com/Endxca/aternos_AAAB/main/aternos_AAAB.user.js
// @downloadURL     https://raw.githubusercontent.com/Endxca/aternos_AAAB/main/aternos_AAAB.user.js
// @supportURL      https://github.com/Endxca/aternos_AAAB/issues
// @meta        Thank you aspen, i juste modifyed a little thing but it's a modification so .. idk credit to you thx
// ==/UserScript==

const regex = /function ([A-Za-z]+)\(\)\s+\{\s+([A-Za-z]+)\s+\=\s*true\s*;\s*([A-Za-z]+)\(\)\s*;\s*}\s*let\s*[a-zA-Z],\s*[a-zA-Z]\s*;/;

(function () {
	"use strict";
const unsafeWindow=window;/*that's the modification...yes x) */let old_atob=unsafeWindow.atob;unsafeWindow.atob=function(i){let out=old_atob(i);let find_function=regex.exec(out);if(find_function){let function_name=find_function[1];out=out.replace(function_name,"Function.prototype")}return out.replace(".addClass('fa-sad-tear');",".addClass('fa-sad-tear'); return true;")};
})();
//big credit to aspen
