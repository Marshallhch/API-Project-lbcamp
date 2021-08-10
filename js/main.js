$(function(){

  // header menu button active
  $(".btn").click(function(){
    $(this).toggleClass('active');
    $(this).toggleClass('not-active');
  });

  // search select button active
  $(".dropdown").click(function(){
    $(this).toggleClass("on");
    if($(this).hasClass("on")){
      $(this).find(".dropdown_menu").slideDown(300);
      $(this).find('i').attr("class", "fa fa-chevron-up");
    } else {
      $(this).find(".dropdown_menu").slideUp(300);
      $(this).find('i').attr("class", "fa fa-chevron-down");
    }
  });

});