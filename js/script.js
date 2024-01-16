// menuクリック時にドロワー表示
jQuery(".js-menu").on("click", function () {
  jQuery("#js-drawer-menu").slideToggle();
});

// topボタンを押したときに最上部に戻る
jQuery(document).ready(function () {
  var pagetop = $(".page-top");
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 80) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 300);
    return false;
  });
});

//画像クリック時に拡大
//id=menu-img内のimgをクリックした際に発火
jQuery(".menu-img img").click(function(){
    jQuery("#grayDisplay").html(jQuery(this).prop("outerHTML"));
    jQuery("#grayDisplay").fadeIn(200);
    return false;
});

//モーダル非表示イベント
//拡大後は前面にgrayDisplayが出るため
//それをクリックしたときのイベントでフェードアウトさせる
jQuery("#grayDisplay").click(function(){
    $("#grayDisplay").fadeOut(200);
    return false;
});