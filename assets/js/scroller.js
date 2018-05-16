 $(document).ready(function(){

 	var $burger    = $('.box-burger');
 	var $cross     = $('.box-cross');
 	var $hiddenbar = $('.hiddenbar');
 	var $container = $('.fp-container');


  // addToHomescreen();

 	$burger.on('click', function(){
 	  $hiddenbar.css({right:'0px'});
 	});

 	$cross.on('click', function(){
      $hiddenbar.css({right: '-500px'});
 	});
 });
