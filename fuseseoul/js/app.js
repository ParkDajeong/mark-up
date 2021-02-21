$(function() {
  $(".slide").slick({
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: `<button type='button' class='slick-arrow slick-prev'>
      <span class='blind'>이전 슬라이드로</span>
      <i class="fas fa-arrow-left"></i>
    </button>`,
    nextArrow: `<button type='button' class='slick-arrow slick-next'>
      <span class='blind'>다음 슬라이드로</span>
      <i class="fas fa-arrow-right"></i>
    </button>`,
  });

  $(".slide--multiple").slick({
    speed: 800,
    autoplay: false,
    autoplaySpeed: 500,
    slidesToShow : 3,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: `<button type='button' class='slick-arrow slick-prev'>
      <span class='blind'>이전 슬라이드로</span>
      <i class="fas fa-angle-left"></i>
    </button>`,
    nextArrow: `<button type='button' class='slick-arrow slick-next'>
      <span class='blind'>다음 슬라이드로</span>
      <i class="fas fa-angle-right"></i>
    </button>`,
  });
});