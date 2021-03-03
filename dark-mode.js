//baidu tongji
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?b3edc6f3baeff97fd0a6c08b81311a50";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

//夜间模式
$(document).ready(function(){
	
	if(document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") === ''){
		if(new Date().getHours() > 24 || new Date().getHours() < 0){
			document.body.classList.add('night');
			document.cookie = "night=1;path=/";
			//console.log('夜间模式开启');
		}else{
			document.body.classList.remove('night');
			document.cookie = "night=0;path=/";
			//console.log('夜间模式关闭');
		}
	}else{
		var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
		if(night == '0'){
			document.body.classList.remove('night');
		}else if(night == '1'){
			document.body.classList.add('night');
		}
	}    
});
//夜间模式切换
function switchNightMode(){
	var night = document.cookie.replace(/(?:(?:^|.*;\s*)night\s*\=\s*([^;]*).*$)|^.*$/, "$1") || '0';
	if(night == '0'){
		document.body.classList.add('night');
		document.cookie = "night=1;path=/"
		//console.log('夜间模式开启');
	}else{
		document.body.classList.remove('night');
		document.cookie = "night=0;path=/"
		//console.log('夜间模式关闭');
	}
}
