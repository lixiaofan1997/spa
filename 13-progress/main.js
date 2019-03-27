$(function(){
  var timer=0;
  var i=0;//进度条数值
  var $start=$('#start-button');
  var $stop=$('#stop-button');
  var $reset=$('#reset-button');
  var $progress=$('#progress');
  $start.click(function(){
    timer=setInterval(function(){
      if(i<=100){
        $progress.attr('value',i++);
      }else{window.clearInterval(timer);}
    },100);
    
  });
  $stop.click(function(){
    window.clearInterval(timer);
  });
  $reset.click(function(){
    $progress.attr('value',i=0);
    window.clearInterval(timer);
  });
});
