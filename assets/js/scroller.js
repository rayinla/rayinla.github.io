 $(document).ready(function(){

 	var $burger    = $('.box-burger');
 	var $cross     = $('.box-cross');
 	var $hiddenbar = $('.hiddenbar');
 	var $container = $('.fp-container');


 	$burger.on('click', function(){
 	  $hiddenbar.css({right:'0px', display:'block'});
 	});

 	$cross.on('click', function(){
      $hiddenbar.css({right: '-500px', display: 'none'});
 	});
 });
