chrome.storage.local.get(['checked'], function(result) {
	if (result.checked == "checked"){
	  	var s = document.createElement('script');
		s.src = document.getElementsByClassName('gui_flex-wrapper_uXHkj')[0].style.flexDirection = "row-reverse";
		(document.head||document.documentElement).appendChild(s);
		s.onload = function() {
		s.parentNode.removeChild(s);
		};
	}
});