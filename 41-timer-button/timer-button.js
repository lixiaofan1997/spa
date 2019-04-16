/*export $timerBtn*/

var $timerBtn = (function(){
  var init = function(cfg){
    var n=cfg.time;
    var $container = $(cfg.container);
    
    var $timer=$('<input type="button" class="timer-button" value="'+cfg.title+'('+n+'s)" disabled />');
    $timer.appendTo($container);
    
    var $btnAgree = $('.timer-button');
  
    var timer = window.setInterval(function(){
      n--;
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);

    $btnAgree.click(function(){
      alert('SPA!10-timer-button task!');
    });
  };
  var remove = function(){
    var $btn=$('.main1').find('.timer-button');
    $btn.remove();
  };
  return {init:init,remove:remove};
}());




/*两个添加按钮
function TimerBtn(){
  var cfg={
    container:'.main',
    title:'确定' ,
    time:9,
    enable:false,
    clickHandler:null 
  };
  var n=cfg.time;
  this.init=function(conf){//conf参数
    $.extend(cfg,conf);
    var $container= $(cfg.container);
    var DOM='<input type="button" class="timer-button" value="'+cfg.title+'('+n+'s)">';
    $container.html(DOM);
    var $btnAgree=$container.find('.timer-button');
    var timer=window.setInterval(function(){
      n--; 
      if(n===0){
        window.clearInterval(timer);
        $btnAgree.removeAttr('disabled');
        $btnAgree.val(cfg.title);
      }else{
        $btnAgree.val(cfg.title+'('+n+'s)');
      }
    },1000);
    $btnAgree.click(function(){
      cfg.clickHandler();
    });
    return $btnAgree;
  };
}  
*/  
  
