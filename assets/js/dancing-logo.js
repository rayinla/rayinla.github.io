
  $(document).ready(function(){
   var wobbleBlks = $('.code-blk li:nth-of-type(odd)');

   var $dragBlocks = $('.how-blk li, .to-blk li, .code-blk li, .js-blk li');

   var codeBlkOne = $('.code-blk li:nth-of-type(1)');

   var $window = $('window');
   $window.on('load', function(){
     codeBlkOne.css({top: '60px'});
   })
    $dragBlocks.draggable({
      cursor: 'move',
      stack: 'ul li',
      snap: true,
      snapMode: 'outer',
      snapTolerance: 5,
      containment: '#hero'
    });

   $dragBlocks.resizable({
      animate: true,
      minHeight: 100,
      minWidth: 100,
      maxHeight: 300,
      maxWidth: 300 
    });
  });
    
  



