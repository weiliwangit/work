
$(function(){
	// 头部js开始
	$('.header-nav-background-one').hover(function(){
		$('.header-nav-dec-one').css({display:"block"})
	},function(){
		$('.header-nav-dec-one').css({display:"none"})
	})
	$('.header-nav-background-two').hover(function(){
		$('.header-nav-dec-two').css({display:"block"})
	},function(){
			$('.header-nav-dec-two').css({display:"none"})
	})
	$('.header-nav-background-three').hover(function(){
		$('.header-nav-dec-three').css({display:"block"})
	},function(){
			$('.header-nav-dec-three').css({display:"none"})
	})
	$('.header-nav-background-four').hover(function(){
		$('.header-nav-dec-four').css({display:"block"})
	},function(){
			$('.header-nav-dec-four').css({display:"none"})
	})
	// 头部js结束

	//轮播图js开始
	var mySwiper = new Swiper ('.swiper-container', {
	    loop: true, // 循环模式选项
	    // 如果需要前进后退按钮
        prevButton:'.swiper-button-prev',
	    nextButton:'.swiper-button-next',
	    autoplay : 2000,
	})     
	// 通过for循环来清空所有图片的zIndex opacity，然后重新赋值，注意opacity需要加过渡属性。
	// var carousel=$('.carousel')
	// var carouselLi=$('.carousel-li');
	// var carouselRight=$('.carousel-right')
	// var carouselLeft=$('.carousel-left')
	// var nowIndex = 0;
	// var timer=null;
	// function forLi (){
	// 	for(var i=0;i<carouselLi.length;i++){
	// 	   		carouselLi[i].style.zIndex=0;
	// 	   		carouselLi[i].style.opacity=0;
	// 	   	}
	// 	carouselLi[nowIndex].style.zIndex=99;
	// 	carouselLi[nowIndex].style.opacity=1;
	// }
	// carouselRight[0].onclick=function(){
	// 	// console.log(11)
	//    	nowIndex++
	//    	if(nowIndex>=carouselLi.length){
	// 		nowIndex=0
	//    	}
	// 	forLi ()
	// }
	// carouselLeft[0].onclick=function(){
	//    	nowIndex--
	//    	if(nowIndex<0){
	// 		nowIndex=carouselLi.length-1
	//    	}
	//    	forLi ()
	// }
	//循环型定时器
	// timer=setInterval(carouselRight[0].onclick,4000)
	//当鼠标放入轮播图中
	// carousel[0].onmouseover=function(){
	// 	clearInterval(timer);
	// }
	// carousel[0].onmouseout = function(){
	// 	timer=setInterval(carouselRight[0].onclick,4000)
	// }
	//轮播图js结束



	//显示隐藏
	var fushi=$('.fushi');
	var jiankong=$('.jiankong');
	var jingYong=$('.jingyong');
	var xiaoFang=$('.xiaofang');
	var productBlock=$('.product-block');
	var productNone=$('.product-none');
	var productJing=$('.product-jing');
	var productXiao=$('.product-xiao')
	fushi[0].onmouseover=function(){
		productBlock.css({display:'none'})
		productNone.css({display:'block'})
		fushi.attr('class',"fushi active")
		xiaoFang.attr('class',"xiaofang ")
		jiankong.attr('class',"jiankong")
		jingYong.attr('class',"jingyong")
		productJing.css({display:'none'})
		productXiao.css({display:'none'})
	}
	jiankong[0].onmouseover=function(){
		productBlock.css({display:'block'})
		productNone.css({display:'none'})
		fushi.attr('class',"fushi ")
		xiaoFang.attr('class',"xiaofang ")
		jiankong.attr('class',"jiankong active")
		jingYong.attr('class',"jingyong")
		productJing.css({display:'none'})
		productXiao.css({display:'none'})
	}
	jingYong[0].onmouseover=function(){
		jingYong.attr('class',"jingyong active")
		fushi.attr('class',"fushi ")
		jiankong.attr('class',"jiankong")
		xiaoFang.attr('class',"xiaofang ")
		productJing.css({display:'block'})
		productBlock.css({display:'none'})
		productNone.css({display:'none'})
		productXiao.css({display:'none'})
	}
	xiaoFang[0].onmouseover=function(){
		xiaoFang.attr('class',"xiaofang active")
		jingYong.attr('class',"jingyong")
		fushi.attr('class',"fushi ")
		jiankong.attr('class',"jiankong")
		productXiao.css({display:'block'})
		productJing.css({display:'none'})
		productBlock.css({display:'none'})
		productNone.css({display:'none'})
	}
	//显示隐藏

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


