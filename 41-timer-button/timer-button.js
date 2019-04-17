/*export timerBtn*/
var timerBtn = function(config){
  var cfg=config,         //按钮的配置
      enabled=cfg.enabled,//按钮状态
      timer,
      i=cfg.duration,
      $btn=$('<input class="timer-btn" type="button">');
  $(cfg.container).append($btn);
  if(cfg.enabled){
    enabledBtn();
  }else{
    disableBtn();
  }
  function disableBtn(){
    enabled = false;
    $btn.attr('disabled');
    setBtnTxt();
    timer=window.setInterval(function(){
      i--;
      setBtnTxt();
      if(i===0)enabledBtn();

    },1000);
  }
  function enabledBtn(){
    enabled=true;
    i=cfg.duration;
    clearInterval(timer);
    setBtnTxt();
    $btn.removeAttr('disabled');
  }
  function setBtnTxt(){
    var txt=enabled?cfg.text:cfg.text+'('+i+'s)';
    $btn.val(txt);
  }
  $btn.click(function(){
    $btn.trigger('hello!pikaqiu');
    if(cfg.enabled)disableBtn();
  });
  return $btn;
};
