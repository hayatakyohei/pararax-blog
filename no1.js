var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);


    //.leftを変えて登場させたいセレクタを変えることができる
  $(".left").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
  
    //どのタイミングでセレクタをフェードインさせるか
    if (scroll_top >= elem_pos - window_h+100) {
      $(this).addClass("left-fadein");
    } else {
      $(this).removeClass("left-fadein");
    }
  });


  //.rightを変えると登場させたいセレクタを変えることができる
  $(".right").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
  
    //どのタイミングでセレクタをフェードインさせるか
    if (scroll_top >= elem_pos - window_h+100) {
      $(this).addClass("right-fadein");
    } else {
      $(this).removeClass("right-fadein");
    }
  });


});
