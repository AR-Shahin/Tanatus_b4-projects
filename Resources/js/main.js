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
});