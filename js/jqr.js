$(function(){
	//为浏览器注册滚动事件
	$(window).scroll(function(){
		//获取页面向上卷曲出去的距离
		if($(this).scrollTop()>=$(".header").height()){
			$(".search").css(
				{
					"position":"fixed",
					"zIndex":99999	
				}
				);
			
			//设置导航栏在顶部距离为0
			$(".search").css({"top":"0px"});
			
			$(".fenl").css({"marginTop":$(".search").height()});
		}else{
			$(".search").css("position","static");
			$(".fenl").css({"marginTop":"0px"});
		}
		
		if($(this).scrollTop()>=$(".search").height()){
			$(".flexs #asc").css({"display":"block"});
		}else{
			$(".flexs #asc").css({"display":"none"});
		}
	});
	
});