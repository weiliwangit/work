$(function(){
	// 搜索js开始
	var topNav=$('.top-nav')
	var topSearch=$('.top-search')
	var searchInput=$('.search-input')
	var searchFlase=$('.search-flase')
	topSearch[0].onclick=function(){
		searchInput.slideDown(300);
	}
	searchFlase[0].onclick=function(){
		searchInput.slideUp(300);
	}
	// 搜索js结束

	// 菜单开始
	var flexibleRight=$('.flexible-right')
	var flexibleLeft=$('.flexible-left')
	var topSort=$('.top-sort')
	var flexible=$('.flexible')
	topSort[0].onclick=function(){
		flexibleRight[0].style.width='6.875rem';
		flexibleLeft[0].style.width='3.125rem';
	}
	flexibleLeft[0].onclick=function(){
		flexibleRight[0].style.width=0;
		flexibleLeft[0].style.width=0;
	}

	// 菜单结束

	// 轮播图开始
	//1.获取元素
	  var aImg = document.querySelectorAll('.carousel-imgs-item');
	  var oLeftArrow = document.querySelector('.left-arrow');
	  var oRightArrow = document.querySelector('.right-arrow');
	  var aBtn = document.querySelector('.carousel-btn').children;
	  var oCarousel = document.querySelector('.carousel');
	  var timer = 0;
	  //当前图片
	  var now = 0;
	  
	  /*
	    切换函数
	  */
	  function tab(){
	    for(var i = 0;i<aImg.length;i++){
	      aImg[i].style.zIndex = '0';
	      aBtn[i].className = '';
	      aImg[i].style.opacity = '0';
	    }
	    aImg[now].style.zIndex = '99';
	    aImg[now].style.opacity = '1';
	    aBtn[now].className = 'active';
	  }
	  //2.添加下一张事件
	  oRightArrow.onclick = function(){
	    now++;
	    if(now >= aImg.length){
	      now = 0;
	    }
	    tab();
	  }
	  //3.添加下一张事件
	  oLeftArrow.onclick = function(){
	    now--;
	    if(now < 0){
	      now = aImg.length - 1;
	    }
	    tab();  
	  }
	  //4.底部指示按钮事件
	  for(var i = 0;i<aBtn.length;i++){
	    aBtn[i].index = i;
	    aBtn[i].onclick = function(){
	      now = this.index;
	      tab();
	    }
	  }
	  //5.自动播放
	  timer = setInterval(oRightArrow.onclick,5000);
	  oCarousel.onmouseover = function(){
	    clearInterval(timer);
	  }
	  oCarousel.onmouseout = function(){
	    timer = setInterval(oRightArrow.onclick,5000);
	  }
	// 轮播图结束
})