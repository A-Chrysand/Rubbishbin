// ==UserScript==
// @name         detetivescorelist
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  check your score^1
// @author       A-Chrysand
// @match        [填入系统首页网址]
// @grant        none
// ==/UserScript==
console.log("mission start")
kjcdShow('NEW_XSD_XJCJ', 'NEW_XSD_XJCJ_WDCJ', 'NEW_XSD_XJCJ_WDCJ_KCCJCX', '/kscj/cjcx_frm', '课程成绩查询')
window.setTimeout(function () { console.log('1 min'); ckin() }, 60000)
window.setTimeout(function () { console.log('2 min') }, 120000)
window.setTimeout(function () { console.log('3 min') }, 180000)
window.setTimeout(function () { console.log('4 min') }, 240000)
window.setTimeout(function () { console.log('5 min') }, 300000)
window.setTimeout(function () { window.location.href = "[填入系统首页网址]" }, 310000)

function ckin() {
	var num = document.querySelector("#Frame1").contentDocument.querySelector("#cjcx_list_frm").contentDocument.querySelectorAll("#dataList tbody tr").length
	if (num > 8) {
		window.location.href = "https://a-chrysand.github.io/DWxuanxiuhw.github.io/src/0_Head/horzionalnav.html"
	}
	console.log("<" + num-1 + ">line checked\nwaiting for refresh")
}
