/*exported $pwdVisual*/
var $pwdVisual = (function(){
  var DOM = ''
          +'<div class="main">'
          +'<span>密码:</span>'  
          +'<input type="password" id="password">'
          +'<img src="close.jpg" id="img1" >'
          +'<input type="text" id="pwd">'
          +'</div>';

  var view = $(DOM);

  var init = function(){
    $('body').append(view);

    var $pwd = view.find('#password'),
        $img1 = view.find('#img1'),
        $see = view.find('#pwd');
    $pwd.on('input',function(){
      $see.val($pwd.val());
    });
    $img1.hover(
      function(){
        $img1.attr('src','open.jpg');
        $see.css('z-index','10');
      },
      function(){
        $img1.attr('src','close.jpg');
        $see.css('z-index','-10');
      });
  };
  var get = function(){
    alert(view.find('#password').val());
  };

  return {init:init,get:get};
}());
