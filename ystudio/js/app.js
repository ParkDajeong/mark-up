$(function() {

  // Header Event
  $(window).on("scroll", function() {
    const scroll = $(this).scrollTop();
    if(scroll > 100) {
      $(".header").addClass("on");
    } else {
      $(".header").removeClass("on");
    }
  });

  // Button Menu Event
  $(".btn-menu-open, .btn-menu-close").on("click", function() {
    $(".gnb").toggleClass("on");
  });

  // Slick Slide
  $(".slide").slick({
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  });
});