$(function() {
  // ============== mobile 검색영역 ==============
  $(".header__btn-search").click(function() {
    $(".header__search-wrap").fadeIn(700);
  });

  $(".search-wrap__btn-close").click(function() {
    $(".header__search-wrap").fadeOut(700);
  });

  // ============== mobile 메뉴 ==============
  function openMobileMenu() {
    $(".header__gnb-mobile").show();
    $(".header__gnb-mobile-bg").show();
    $(".gnb-mobile").animate({
      right: "0"
    });
  }

  function closeMobileMenu() {
    $(".header__gnb-mobile-bg").hide();
    $(".gnb-mobile").animate({
      right: "-100%"
    });
    setTimeout(function() {
      $(".header__gnb-mobile").hide();
    }, 400);
  }

  $(".header__btn-m-menu").click(openMobileMenu);
  $(".gnb-mobile__btn-close").click(closeMobileMenu);

  $(window).resize(function() {
    if($(window).width() >= 1070) {
      closeMobileMenu();
    }
  });

  // ============== PC 메뉴 ==============
  function openSubMenu() {
    $(this).addClass("on");
    $(".gnb-pc__menu-list").addClass("open");
    $(".gnb-pc__sub-menu").slideDown();
  }

  function closeSubMenu() {
    $(this).removeClass("on");
    if(!$(".gnb-pc__menu-list").hasClass("fixed")) {
      $(".gnb-pc__menu-list").removeClass("open");
      $(".gnb-pc__sub-menu").slideUp();
    }
  }

  $(".gnb-pc__menu-item").hover(openSubMenu, closeSubMenu);

  // $(".gnb-pc__menu-item").mouseover(openSubMenu);
  // $(".gnb-pc__menu-item").mouseleave(closeSubMenu);

  $(".gnb-pc__btn-menu").click(function() {
    $(".gnb-pc__menu-list").toggleClass("open fixed");
  });
});