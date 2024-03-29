$(document).ready(function(){
  /* For sticky navigation */
    $('.js--section-features').waypoint(function(direction) {
      if(direction === 'down') {
          $('nav').addClass('sticky');
      }
      else {
          $('nav').removeClass('sticky');
      }
  },{
      offset:'20%'
  });
    
    /*Header button navigation*/
    $('.js--scroll-to-plans').click(function(){
       $('html,body').animate({scrollTop:$('.js--section-plans').offset().top},1000)
    });
    $('.js--scroll-to-start').click(function(){
       $('html,body').animate({scrollTop:$('.js--section-features').offset().top},1000)
    });
    
    /*Navbar scroll*/
    $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
    
    /*Animation*/
    $('.js--wp-1').waypoint(function() {
          $('.js--wp-1').addClass('animated fadeIn');
  },{
        offset:'50%'
    });
    
    $('.js--wp-2').waypoint(function() {
          $('.js--wp-2').addClass('animated fadeInUp');
  },{
        offset:'50%'
    });
    
    $('.js--wp-3').waypoint(function() {
          $('.js--wp-3').addClass('animated fadeIn');
  },{
        offset:'50%'
    });
    
    $('.js--wp-4').waypoint(function() {
          $('.js--wp-4').addClass('animated pulse');
  },{
        offset:'70%'
    });
    
    /*Mobile navigation*/
    $('.js--nav-icon').click(function(){
       let nav = $('.js--main-nav'); 
        let icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if(icon.hasClass('ion-ios-menu')) {
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        }
        else {
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }
    });
});
