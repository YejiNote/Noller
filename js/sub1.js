//jQuery(function($){
//	$(".menu_toggle_btn").click(function(){
//		$('.gnb').stop().slideToggle('fast');
//	});
//});

$('.menu_toggle_btn').click(function(){
    $('.nav').fadeToggle();
})

$('.question').click(function(){
    var me = $(this).children('h1');
    var bros = $(this).siblings().children('h1');
    
    if(me.hasClass('open')==true){ //open라는 클래스 가지고 있는게 참이면
        me.removeClass('open');
        me.next().slideUp();
        //나를 기준으로 next니까 마크업에서 보면 p를 가르킴
        me.prev().fadeOut(100);
        //나를 기준으로 prev니까 마크업에서 보면 img를 가르킴
    }else{ // if가 아니면
        me.addClass('open');
        bros.removeClass('open');
        
        me.next().slideDown();
        bros.next().slideUp();
        
        me.prev().fadeIn(100);
        bros.prev().fadeOut(100);
    }
});