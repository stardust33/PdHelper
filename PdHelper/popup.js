
function paste(e) {
	window.setTimeout(function(){
		var v = document.getElementsByTagName('textarea')[0].value.match(/(http|https)\:\/\/pan.baidu.com\/s\/.*/ig);
		if(v && v.length) {
			for (var i = 0; i < v.length; ++i) {
				if (v[i].search("pan.baidu.com") != -1) {
					v[i] = v[i].replace("baidu","baiduwp");
					chrome.tabs.create({url:v[i]});
				}
			}
			window.close();
		} else {
			document.body.innerHTML = '<nobr>没有从剪贴板获取到正确的百度网盘分享链接。</nobr>';
		}
	}, 0);
}

window.onload = function () {
    var textarea = document.getElementsByTagName('textarea')[0];
    textarea.onpaste = paste;
    textarea.focus();
	document.execCommand('paste');
}