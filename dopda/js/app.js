$(function() {
  // Fix Header
  $(window).on("resize scroll", function() {
    const scroll = $(this).scrollTop();
    if(scroll >= 100) {
      $(".main-header").css({"background-color": "#fff"});
    } else {
      $(".main-header").css({"background-color": "transparent"});
    }
  });

  // Mobile Menu
  $(".main-header__btn-open").on("click", function() {
    $(".gnb").addClass("on");
  });

  $(".gnb__btn-close").on("click", function() {
    $(".gnb").removeClass("on");
  });

  // Visual Slide
  $(".visual .slide").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });

  // Scroll Event
  $(".animate").scrolla({
    mobile: true,
    once: false,
  });
});