/*global hljs:true*/
$(function(){
  var $btnAddCode = $('input[type="button"]');

  $btnAddCode.click(function(){
    var $code=$('<div><pre class="javascript"></pre><button class="del">删除</button></div>');
    $code.find('pre').html($('.code').val());
    $('div.main').append($code);
    hljs.highlightBlock($code[0]);
    var $del=$code.find('.del');
    $del.on('click',function(){
      $code.remove();
    });
  }); 
});  
