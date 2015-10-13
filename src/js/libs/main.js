// // 

// $(document).ready(function(){
// 	// $(".fs-image-container").hover(function(){
// 	// 	console.log('here');
//  //       $(".fs-image-container").addClass("hide");
//  //       $(".fs-image-container-blur").removeClass("hide");
//  //   });
//    $(".fs-image-container").mouseout(function(){
//    		console.log('there');
//        // $("p").css("background-color", "lightgray");
//         $(".fs-image-container").removeClass("hide");
//        $(".fs-image-container-blur").addClass("hide");
//    });
// $('.fs-image-container img').hover(
//     function(){
//     	console.log(this);
//       $(this).attr('src','/images/feature1-blur.jpg');
//     },
//     function(){
//     	console.log(this);
//       $(this).attr('src','/images/feature1.jpg')
//     }
// )
// })

$( document ).ready( function(){
   //for scrolling
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
});
