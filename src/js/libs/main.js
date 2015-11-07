$( document ).ready( function(){

// var slider = $('.bxslider').bxSlider({
//       speed:500,
//       // infiniteLoop:true,
//       hideControlOnEnd:true,
//       auto:true,
//       video: true,
//       useCSS: false,
//       controls:false,             //arrows are not shown
//       autoHover:true,
//       pager:false 
//       // stopAutoOnClick:true             //Dots are not displayed

//     });

console.log("here");
  var slider = $('.bxslider').bxSlider({
      auto:true,
      hideControlOnEnd:true,
      pager:false,
      controls:true
    });

  var slider1 = $('.bxslider1').bxSlider({
      auto:true,
      hideControlOnEnd:true,
      pager:false,
      controls:true
    });

    $('.btn-play').click(function(){
      console.log('showing1111111');
      $('.videoContainer').addClass('show');
      $('.bx-controls-direction').addClass('hide');
      $( 'body' ).addClass('bodyClass');
      slider.stopAuto();
      $('.videoContainer iframe').attr('src', 'https://www.youtube.com/embed/8bYouS7r8h0');
    })
    $( '.video-close' ).on( 'click', function() {
        $( '.videoContainer' ).addClass( 'hide' );
         $( '.videoContainer' ).removeClass( 'show' );
         $('.bx-controls-direction').addClass('show');
         $('.videoContainer iframe').attr('src', '');
         $( 'body' ).removeClass('bodyClass');
    });    
});
