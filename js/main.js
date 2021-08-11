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

  // search position buttom box hide and show
  // const h_bt_sl = $(".bt_box span").outerHeight();//outerHeight는 padding을 포함한 높이
  // const h_bt_box = $(".bt_box").outerHeight();
  // $(".bt_box").css("bottom", -(h_bt_box - h_bt_sl));

  // $(".bt_box span").click(function(){
  //   $(this).toggleClass('on');
  //   if($(this).hasClass("on")){
  //     $(".bt_box i").attr("class", "fa fa-chevron-down");
  //     $(".bt_box").stop().animate({'bottom':0}, 300);
  //   } else {
  //     $(".bt_box i").attr("class", "fa fa-chevron-up");
  //     $(".bt_box").stop().animate({"bottom": -(h_bt_box - h_bt_sl)}, 300);
  //   }
  // });

  let slider = $('.owl-carousel');
  slider.each(function () {
    $(this).owlCarousel({
      loop:false,
      margin: 5,
      autoHeight: false,
      responsive:{
        0:{
          items: 1,
          stagePadding: 20,
          margin: 15,
        }
      }
    });
  });

});

//carousel slide
$(document).ajaxComplete(function(){// ajax 데이터가 DOM으로 모두 로드된 이후 실행되는 함수
  
});