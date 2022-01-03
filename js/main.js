"user strict";
{
 
    $('a[href^="#"]').click(function(){

      let adjust = -15;
      let speed = 400;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == " " ? 'html' : href);
      let position = target.offset().top + adjust;
      $('body, html').animate({scrollTop:position}, speed, 'swing');
      return false
    });

    $('.page-top').click(function(){
      $('body, html').animate({scrollTop: 0}, 500);
      return false
    });


  
}