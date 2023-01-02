var current = 0;
var count = $('.calendar_box_list li').size() - 1;


    /* 화살표 누르면 슬라이드 */

$('.calendar_box_list li').click(function(){
    
    var description = $(this).children().children('.box_description').text();
    $('.box_description_show').text(description);
    
    var title = $(this).children().children('.box_title').text();
    $('.box_title_show').text(title);
    
    var images = $(this).children('img').attr('src');
    $('.calendar_box_img_show').attr('src',images);
});


$('.left').click(function () {

    current -= 1;

    if (current < 0) {
        current = count;
    }

    $('.calendar_box_list li').eq(current).click();

});

$('.right').click(function () {

    current += 1;

    if (current > count) {
        current = 0;
    };

    $('.calendar_box_list li').eq(current).click();

});


$(window).resize(function() {
    if( $(window).width() > 1000){
        $(".assi_section .sec_tit h1 .assi_description").css('width','200px');
    
        $(".savings_section .sec_tit .savings_sub_title").css('width', '500px');
    }else{
        $(".assi_section .sec_tit h1 .assi_description").css('width','100%');
        $(".savings_section .sec_tit .savings_sub_title").css('width', '100%');
    } ;
});

$('.menu_toggle_btn').click(function(){
    $('.nav').fadeToggle();
})



var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}