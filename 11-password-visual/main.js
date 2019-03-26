$(function(){
  var $pwd=$('#pwd');
  var $eye=$('#eye');
  var $truepwd=$('#truepwd');
  $eye.mouseover(function(){
    $truepwd.css('z-index','10');
  });
  $eye.mouseout(function(){
    $truepwd.css('z-index','-10');
  });
  $pwd.bind('input',function(){
    $truepwd.val($pwd.val());
    //console.log($truepwd.val());
  });
});
