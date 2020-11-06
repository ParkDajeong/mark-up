$(function() {
  // ============= 메인 배너 =============
  $(".main-content__banner").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: false,
  });

  // ============= 정책 리스트 =============
  const navList = ["취업지원", "창업지원", "주거·금융", "생활·복지", "정책참여"];

  $(".main-content__policy").slick({
    slidesToScroll: 1,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: true,
    appendDots: $(".main-content__policy-nav"),
    customPaging:  function(slider, i) {
      return "<button class='slick-dot' type='button'>" + navList[i] + "</button>"
    },
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          arrows: false,
        }
      }
    ],
  });

  // $(".main-content__btn-policy").click(function() {
  //   const slideNo = $(this).index();

  //   $(".main-content__btn-policy").removeClass("active");
  //   $(this).addClass("active");
  //   $(".main-content__policy").slick("slickGoTo", slideNo);
  // });

  // $(".main-content__btn-policy").first().addClass("active");
});