$(function(){
  start();
  var imgs = 2;
  var now = 0;
  function start(){
    $("#event_banner>div").eq(0).siblings().fadeOut();
    setInterval(function(){slide();},2000);
  };
  function slide(){
    now= now==imgs ? 0 : now+=1;
    $("#event_banner>div").eq(now-1).fadeOut();
    $("#event_banner>div").eq(now).fadeIn();
  };
});