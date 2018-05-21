 $(document).ready(function(){

 	var $burger    = $('.box-burger');
 	var $cross     = $('.box-cross');
 	var $hiddenbar = $('.hiddenbar');
 	var $container = $('.fp-container');
  var $resizeWidth = $('.resize-width');
  var $resizeHeight = $('.resize-height');
  var $content    = $('#lex-content');
  var contentWidths = ['33.7%', '75%'];
  var contentHeights = ['33.7%', '75%'];
  // addToHomescreen();

 	$burger.on('click', function(){
 	  $hiddenbar.css({right:'0px'});
 	});

 	$cross.on('click', function(){
    $hiddenbar.css({right: '-500px'});
 	});

  //Reset height based on resize

  $(window).on('resize', function(){
    if (window.matchMedia("(min-width: 771px)").matches){
        $content.css({height: '100%'});
    } else if (window.matchMedia("(max-width: 771px)").matches){
        $content.css({height: '33%'});
    }
  });


  $resizeHeight.on('click', function(){
    toggle(contentHeights);
    $content.css({height: contentHeights[0]});
  });

  $resizeWidth.on('click', function(){
    toggle(contentWidths);
    $content.css({width: contentWidths[0]});
  });


  function toggle(arr){
    arr.reverse();
  }

 });
