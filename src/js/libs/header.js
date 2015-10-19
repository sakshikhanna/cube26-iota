$(document).ready(function(){
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
	
})