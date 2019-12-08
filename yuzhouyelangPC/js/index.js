
$(function(){
	// 头部js开始
	var headerNavBackground=$('.header-nav-background');
	// console.log(headerNavBackground)
	// console.log(headerNavFirstPage)
	headerNavBackground.mouseover(function(){
		$(this).css('background-color',"#ffa700")
	});
	headerNavBackground.mouseout(function(){
		$(this).css('background-color',"#0D3B93")
		// headerNavFirstPage.css('background-color',"#ffa700")
	});
	// 头部js结束

	//轮播图js开始
	// 通过for循环来清空所有图片的zIndex opacity，然后重新赋值，注意opacity需要加过渡属性。
	var carousel=$('.carousel')
	var carouselLi=$('.carousel-li');
	var carouselRight=$('.carousel-right')
	var carouselLeft=$('.carousel-left')
	var nowIndex = 0;
	var timer=null;
	function forLi (){
		for(var i=0;i<carouselLi.length;i++){
		   		carouselLi[i].style.zIndex=0;
		   		carouselLi[i].style.opacity=0;
		   	}
		carouselLi[nowIndex].style.zIndex=99;
		carouselLi[nowIndex].style.opacity=1;
	}
	carouselRight[0].onclick=function(){
		// console.log(11)
	   	nowIndex++
	   	if(nowIndex>=carouselLi.length){
			nowIndex=0
	   	}
		forLi ()
	}
	carouselLeft[0].onclick=function(){
		// console.log(11)
	   	nowIndex--
	   	if(nowIndex<0){
			nowIndex=carouselLi.length-1
	   	}
	   	forLi ()
	}
	//循环型定时器
	timer=setInterval(carouselRight[0].onclick,2500)
	//当鼠标放入轮播图中
	carousel[0].onmouseover=function(){
		clearInterval(timer);
	}
	carousel[0].onmouseout = function(){
		timer=setInterval(carouselRight[0].onclick,2500)
	}
	//轮播图js结束


	//关于我们下的循环轮播

		var speed=30;
        var tab=document.getElementById("demo");
        var tab1=document.getElementById("demo1");
        var tab2=document.getElementById("demo2");
        tab2.innerHTML=tab1.innerHTML;
        function Marquee(){
        if(tab2.offsetWidth-tab.scrollLeft<=0)
        tab.scrollLeft-=tab1.offsetWidth
        else{
        tab.scrollLeft++;}
        }
        var MyMar=setInterval(Marquee,speed);
        tab.onmouseover=function() {clearInterval(MyMar)};
        tab.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

})


