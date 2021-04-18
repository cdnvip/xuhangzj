//baidu tongji
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?9bb5374485245c40d4d2a6245aa1d66c";
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
