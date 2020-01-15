$(document).ready(function(){
  $('.hero-iteam-active').slick({
    autoplay:true,
      arrows:false,
      speed:300,
  });
    
    
     $('.slider-item-active').slick({
    autoplay:true,
      arrows:false,
      speed:300,
  });
    
    $('nav ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    $('.scroll').click(function(){
        $('html,body').animate({
            scrollTop : 0
        }),100;
    });
        $('.scroll').hide();
    $(window).scroll(function(){
        var count = $(this).scrollTop();

        if(count < 100){
            $('.scroll').fadeOut();
        }
        else{
            $('.scroll').fadeIn();
        }
    });
});