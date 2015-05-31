$(function(){
	$(window).resize();	
	$("head-nav").css("z-index",1);
	// 导航条固定顶部
	$("#head-nav").navFixed();
});

$(window).resize(function () {
	//首页铺满屏幕
	$("#firstpage").css("height",$(window).height());
	//首页文字效果
	
	$(".welcome").fadeIn('slow').animate({
		"top" : ($(window).height() - $('.welcome').outerHeight())/2},500);
	//最后一页效果
	$("#contact").css("height", $(window).height()-50-30 + "px");
	$("#contact>p").css("top", ($("#contact").outerHeight(true) - $('#contact>p').outerHeight())/2 + "px"); 
});

$.fn.navFixed = function(){
	var $_this = $(this),
		$_this_prev_marginBottom = parseInt($_this.prev().css("margin-bottom").substring(0, $_this.prev().css("margin-bottom").length-2)),
		$_this_next_marginTop = parseInt($_this.next().css("margin-top").substring(0, $_this.next().css("margin-top").length-2)),
		_topPosition = $(document).scrollTop(),
		_navPosition = $_this.prev().outerHeight(true);
	
	_if();

	$(document).scroll( function() {
		_topPosition = $(document).scrollTop();
		_if();
	});

	$(window).resize(function(){ 
		_navPosition = $_this.prev().outerHeight(true);
		_if();
	}); 

	function _if(){
		if (_topPosition >= _navPosition){
			$_this.css("position", "fixed");
			$_this.next().css("margin-top", $_this_prev_marginBottom + $_this.outerHeight() + $_this_next_marginTop + "px");
		}else{
			$_this.css("position", "relative");
			$_this.next().css("margin-top", $_this_next_marginTop + "px");
		}
	}
};