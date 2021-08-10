$(function(){

  // header menu button active
  $(".btn").click(function(){
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
  });

  // search select button active
  $(".dropdown").click(function(){
    $(this).toggleClass("on");
  });

});