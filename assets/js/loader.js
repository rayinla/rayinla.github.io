$(document).ready(function(){
  var $main = $('main');
  var $loader = $('.ship-loader');
  var isClassic = localStorage.getItem('classicView');
  var $fpContainer = $('.fp-container');
 if (isClassic != 'true' || isClassic == null || isClassic == undefined)
 {
   debugger
    initLoader();
  }else{
    setTimeout(function(){showPage()}, 410);
  }


  function initLoader(){
    $loader.css({display: 'block'});
    setTimeout(function(){showPage()}, 800);
  }
  function showPage(){
    $loader.css({display: 'none'});
    $main.css({display: 'inherit'});
  }
});
