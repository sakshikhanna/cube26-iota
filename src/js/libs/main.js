$( document ).ready( function(){
  
var slider = $('.bxslider').bxSlider({
      speed:500,
      infiniteLoop:true,
      hideControlOnEnd:true,
      auto:true,
      video: true,
      useCSS: false, 
      controls:false,             //arrows are not shown
      autoHover:true,
      pager:false ,
      stopAutoOnClick:true             //Dots are not displayed

    });


      
    $('.btn-play').click(function(){
      console.log('showing1111111');
      $('.videoContainer').addClass('show');
      $( 'body' ).addClass('bodyClass');
      slider.stopAuto();
      $('.videoContainer iframe').attr('src', 'https://www.youtube.com/embed/P6QIpEabg-U');
    })
    $( '.video-close' ).on( 'click', function() {
        $( '.videoContainer' ).addClass( 'hide' );
         $( '.videoContainer' ).removeClass( 'show' );
         // $('.video')[0].pause();
         $('.videoContainer iframe').attr('src', '');
         // $('.youtubeplayer').stopVideo();
         $( 'body' ).removeClass('bodyClass');
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
