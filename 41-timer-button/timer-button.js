/*export TimerBtn*/
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
  
  //return {init:init};//键
  /*
   *var $timerbtn={
   init:function(){
      
      },
   remove:function{
      
     }   
   }
    */
  /*
     var $timerbtn={
     $timerbtn.init=function(){

     }
   }
   var $timerbtn.remove=function(){

   }


}());
function TimerBtn(conf){
  var cfg={
    container:'.main',
    title:'预定' ,
    timer:9,
    enable:false,
    clickHandle(): 

  }
  this.init=function(){

  }
} */
