

$( document ).ready( function(){
   //for scrolling
    // $('.banner').unslider();
$('.banner').unslider({
  speed: 500,               //  The speed to animate each slide (in milliseconds)
  delay: 3000,              //  The delay between slide animations (in milliseconds)
  complete: function() {},  //  A function that gets called after every slide animation
  keys: true,               //  Enable keyboard (left, right) arrow shortcuts
  dots: true,               //  Display dot navigation
  fluid: false              //  Support responsive design. May break non-responsive designs
});
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


    $(function() {
      $('.banner').unslider();
  });
});
