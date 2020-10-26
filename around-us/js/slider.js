$(function() {
  // Main Banner
  $(".slider").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    speed: 1000,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    swipe: true,
    fade: true,
  });

  // Content - Video
  $(".content__slider").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    prevArrow: "<button class='btn-icon slider__btn-arrow slider__btn-prev'>Previous</button>",
    nextArrow: "<button class='btn-icon slider__btn-arrow slider__btn-next'>Next</button>",
    swipe: true,
  });
});