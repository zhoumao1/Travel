;(function() {
	var styleNode = document.createElement('style')
	var w = document.documentElement.clientWidth / 16
	styleNode.innerHTML = 'html{font-size:' + w + 'px!important}'
	document.head.appendChild(styleNode)
})()
