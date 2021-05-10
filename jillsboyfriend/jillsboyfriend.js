// ==UserScript==
// @name        Jill's Boyfriend 
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0.0
// @author      DaniDipp
// @description Replaces every occurence of "Jill's Boyfriend" with "Jill's Boyfriend"
// @run-at      document-idle
// @downloadURL https://raw.githubusercontent.com/DaniDipp/BrowserScripts/main/jillsboyfriend/jillsboyfriend.js
// ==/UserScript==

setInterval(function() {
	function walkText(node) {
		if (node.nodeType == 3) {
			node.data = node.data.replace(/citRa/gi, "Jill's Boyfriend");
		}
		if (node.nodeType == 1 && node.nodeName != "SCRIPT") {
			for (var i = 0; i < node.childNodes.length; i++) {
				walkText(node.childNodes[i]);
			}
		}
	}
	walkText(document.body);
}, 300);
