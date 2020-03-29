 $(document).ready(function(){

  let $stickyNav = $('.s-nav');
  let $menu      = $('.menu');
  let $contentBucket = $('.content-bucket');
  let $codeBucket = $('.code-bucket');
  let $codeSwitch  = $('.code-switch');
  let $contentSwitch = $('.content-switch');
 	let $burger    = $('.box-burger');
 	let $cross     = $('.box-cross');
 	let $hiddenbar = $('.hiddenbar');
 	let $container = $('.fp-container');
  let $resizeWidth = $('.resize-width');
  let $resizeHeight = $('.resize-height');
  let $content    = $('#lex-content');
  let contentWidths = ['33.7%', '75%'];
  let contentHeights = ['33.7%', '75%'];
  let bucketWidths = ['0%', '50%'];
  let scrollCache;

 	$burger.on('click', function(){
 	  $hiddenbar.css({right:'0px'});
 	});

 	$cross.on('click', function(){
    $hiddenbar.css({right: '-500px'});
 	});



 });
