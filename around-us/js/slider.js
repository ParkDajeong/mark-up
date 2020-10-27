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

  // Content - Video, News
  $(".content-video .content__slider, .content-news .content__slider").slick({
    slide: "div",
    infinite: true,
    slidesToShow: 1, 
    slidesToScroll: 1,
    speed: 500,
    arrows: true,
    prevArrow: "<button class='btn-icon btn-icon--prev slider__btn-arrow'>Previous</button>",
    nextArrow: "<button class='btn-icon btn-icon--next slider__btn-arrow'>Next</button>",
    swipe: true,
  });

  // Content - SNS
  const snsSwiper = $(".content__swiper");
  let isMouseDown = false;
  let startX = 0;
  let scrollLeft = 0;

  snsSwiper.mousedown(function(e) {
    isMouseDown = true;
    startX = e.pageX - snsSwiper.offset().left;
    scrollLeft = snsSwiper.scrollLeft();
  });

  snsSwiper.mousemove(function(e) {
    if(!isMouseDown) return;
    e.preventDefault();

    const x = e.pageX - snsSwiper.offset().left;
    const movement = (x - startX) * 1.2;
    snsSwiper.scrollLeft(scrollLeft - movement);
    snsSwiper.find("a").on("click", function(e) {
      e.preventDefault();
    });
  });

  snsSwiper.mouseup(function() {
    isMouseDown = false;
    setTimeout(function() {
      snsSwiper.find("a").off("click");
    }, 500);
  });

  snsSwiper.mouseleave(function() {
    isMouseDown = false;
  })

  // Swiper Arrow Button

});