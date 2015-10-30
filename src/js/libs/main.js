

$( document ).ready( function(){
   // var dom = {
   //  mainButton : '.js-mobile-nav-button',
   //  navContainer : '.js-mobile-nav',
   //  closeButton : '.js-mobile-nav-close'
   // }

   //  $( dom.mainButton ).on( 'click', function() {
   //      console.log('clicked');
   //      $( dom.navContainer ).toggleClass( 'isOpen' );
   //  });

   //  $( dom.closeButton ).on( 'click', function() {
   //      $( dom.navContainer ).toggleClass( 'isOpen' );
   //  });
      
    $('.bxslider').bxSlider({
      speed:500,
      infiniteLoop:true,
      hideControlOnEnd:true,
      auto:true,
      // video: true,
      useCSS: false, 
      controls:false,             //arrows are not shown
      autoHover:true,
      pager:false              //Dots are not displayed

    });
  
  


   
    // $('.color5').click(function(e){
    //     e.preventDefault();
    //      $('.bg').fadeOut(300, function() {
    //         $('.bg').attr("src","../../Images/Philips_Hue_1_pink.jpg");
    //         $('.bg').fadeIn(300);
    //     });
    // })
    // $('.color4').click(function(e){
    //     e.preventDefault();
    //      $('.bg').fadeOut(300, function() {
    //         $('.bg').attr("src","../../Images/Philips_Hue_1.jpg");
    //         $('.bg').fadeIn(300);
    //     });
    // })
    // $('.color1').click(function(e){
    //     e.preventDefault();
    //      $('.bg').fadeOut(300, function() {
    //         $('.bg').attr("src","../../Images/Philips_Hue_1_green.jpg");
    //         $('.bg').fadeIn(300);
    //     });
    // })
    // $('.color2').click(function(e){
    //     e.preventDefault();
    //      $('.bg').fadeOut(300, function() {
    //         $('.bg').attr("src","../../Images/Philips_Hue_1_red.jpg");
    //         $('.bg').fadeIn(300);
    //     });
    // })
});
