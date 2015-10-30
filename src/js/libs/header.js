$(document).ready(function(){
    console.log('11111');
	var dom = {
    mainButton : '.js-mobile-nav-button',
    navContainer : '.js-mobile-nav',
    closeButton : '.js-mobile-nav-close'
   }

    $( dom.mainButton ).on( 'click', function() {
        console.log('clicked1111');
        $( dom.navContainer ).toggleClass( 'isOpen' );
    });

    $( dom.closeButton ).on( 'click', function() {
        $( dom.navContainer ).toggleClass( 'isOpen' );
    });
	
});