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


  function bodyOrHtml(){
  	if ('scrollingElement' in document) {
  		return document.scrollingElement;
  	}
  	// Fallback for legacy browsers
  	if (navigator.userAgent.indexOf('WebKit') != -1) {
  		return document.body;
  	}
  	return document.documentElement;
  }

 	$burger.on('click', function(){
 	  $hiddenbar.css({right:'0px'});
 	});

 	$cross.on('click', function(){
    $hiddenbar.css({right: '-500px'});
 	});



  //Classic View: toggling code and content

  $codeSwitch.on('click', function(){
     scrollCache = bodyOrHtml().scrollTop; // save current position
     bodyOrHtml().scrollTop = 0;
     $contentBucket.css({display: 'none'});
     $codeBucket.css({display: 'flex'});
     $stickyNav.css({position: 'relative'});
     $menu.css({display: 'block'});

  });
  $contentSwitch.on('click', function(){
     $contentBucket.css({display: 'block'});
     bodyOrHtml().scrollTop = scrollCache;
     $codeBucket.css({display: 'none'});
     $stickyNav.css({position: 'fixed'});
     $menu.css({display: 'none'});
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
