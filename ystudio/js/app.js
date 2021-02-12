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
  
});