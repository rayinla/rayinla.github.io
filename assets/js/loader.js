$(document).ready(function(){

  $main = $('main');
  $loader = $('.ship-loader');

  initLoader();

  function initLoader() {
    setTimeout(function(){showPage()}, 800);
  }

  function showPage() {
    $loader.css({display: 'none'});
    $main.css({display: 'inherit'});
  }
})
