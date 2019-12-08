$(function(){
	// 搜索js开始
	var topNav=$('.top-nav')
	var topSearch=$('.top-search')
	var searchInput=$('.search-input')
	topSearch[0].onclick=function(){
		searchInput.slideDown(300);
	}
	// 搜索js结束

	// 菜单开始
	var flexibleRight=$('.flexible-right')
	var flexibleLeft=$('.flexible-left')
	var topSort=$('.top-sort')
	var flexible=$('.flexible')
	topSort[0].onclick=function(){
		flexible.css('display','block')
		flexibleRight.slideDown(500);
		flexibleLeft.slideDown(500);
		// flexibleRight[0].style.width='6.875rem';
		// flexibleLeft[0].style.width='3.125rem';
	}
	flexibleLeft[0].onclick=function(){
		
		
	}

	// 菜单结束

	// 轮播图开始
	var btn=$('.btn')
    btn[0].onclick =function(){
			btn[0].style.backgroundColor='yellow';
			btn[1].style.backgroundColor='#fff';
			btn[2].style.backgroundColor='#fff';
	}
	btn[1].onclick =function(){
			btn[1].style.backgroundColor='yellow';
			btn[0].style.backgroundColor='#fff';
			btn[2].style.backgroundColor='#fff';
	}
	btn[2].onclick =function(){
			btn[2].style.backgroundColor='yellow';
			btn[1].style.backgroundColor='#fff';
			btn[0].style.backgroundColor='#fff';
	}

	// 轮播图结束
})