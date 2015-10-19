

$( document ).ready( function(){
   var dom = {
    mainButton : '.js-mobile-nav-button',
    navContainer : '.js-mobile-nav',
    closeButton : '.js-mobile-nav-close'
   }

    $( dom.mainButton ).on( 'click', function() {
        $( dom.navContainer ).toggleClass( 'isOpen' );
    });

    $( dom.closeButton ).on( 'click', function() {
        $( dom.navContainer ).toggleClass( 'isOpen' );
    });
      
    $('.bxslider').bxSlider({
      speed:500,
      infiniteLoop:true,
      hideControlOnEnd:true,
      auto:true,
      video: true,
      useCSS: false 

    });
  $('.banner').unslider({
    speed: 500,               //  The speed to animate each slide (in milliseconds)
    delay: 3000,              //  The delay between slide animations (in milliseconds)
    complete: function() {},  //  A function that gets called after every slide animation
    keys: true,               //  Enable keyboard (left, right) arrow shortcuts
    dots: true,               //  Display dot navigation
    fluid: false              //  Support responsive design. May break non-responsive designs
  });
  


    // $(function() {
        // $('.banner').unslider();
    // });
  
     // $(".color5").mouseover(function() { 
     //        $('.bg').attr("src","../../Images/Philips_Hue_1_pink.jpg");
     //        // $(this).attr("src", src);
     //    })
     //     $(".color5").mouseout(function() {
     //         $('.bg').attr("src","../../Images/Philips_Hue_1.jpg");
     //    });
    $('.color5').click(function(e){
        e.preventDefault();
         $('.bg').fadeOut(300, function() {
            $('.bg').attr("src","../../Images/Philips_Hue_1_pink.jpg");
            $('.bg').fadeIn(300);
        });
    })
    $('.color4').click(function(e){
        e.preventDefault();
         $('.bg').fadeOut(300, function() {
            $('.bg').attr("src","../../Images/Philips_Hue_1.jpg");
            $('.bg').fadeIn(300);
        });
    })
    $('.color1').click(function(e){
        e.preventDefault();
         $('.bg').fadeOut(300, function() {
            $('.bg').attr("src","../../Images/Philips_Hue_1_green.jpg");
            $('.bg').fadeIn(300);
        });
    })
    $('.color2').click(function(e){
        e.preventDefault();
         $('.bg').fadeOut(300, function() {
            $('.bg').attr("src","../../Images/Philips_Hue_1_red.jpg");
            $('.bg').fadeIn(300);
        });
    })
});
