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

  // Visual Slide
  $(".visual .slide").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
  });
});