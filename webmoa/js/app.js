$(function() {
  // Scrolla
  $(".animate__animated").scrolla({
    mobile: true,
  });

  // Fix Header
  $(window).on("scroll", function() {
    const scroll = $(this).scrollTop();
    if(scroll > 100) {
      $("header").removeClass("animate__bounceInLeft");
      $("header").addClass("fix");
    } else {
      $("header").addClass("animate__bounceInLeft");
      $("header").removeClass("fix");
    }
  });
});