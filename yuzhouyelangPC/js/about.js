
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

	// 公司简介开始
	var aboutOne=$('.about-one')
	var aboutTwo=$('.about-two')
	var aboutBlock=$('.about-block')
	var aboutNone=$('.about-none')
	var profileInner=$('.profile-inner')
	var profileEnglish=$('.profile-english')
	aboutOne.mouseover(function(){
		$(this).attr({class:"about-one active"});
		aboutTwo.attr({class:"about-two"});
		profileInner.text('公司简介');
		profileEnglish.text('Company Profile')
	})
	aboutTwo.mouseover(function(){
		// console.log(1)
		$(this).attr({class:"about-two active"});
		aboutOne.attr({class:"about-one "});
		profileInner.text('公司资质');
		profileEnglish.text('Company qualification')
	})
    //公司简介结束
})


