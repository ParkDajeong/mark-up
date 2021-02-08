const header = $(".header");
const headerInner = $(".header__inner");

// ============== Header Fix ==============
const headerHeight = headerInner.outerHeight();
const delta = 10;
let didScroll = false;
let lastScrollTop = 0;

function hasScrolled() {
  const currentScrollTop = $(document).scrollTop();
  if(Math.abs(lastScrollTop - currentScrollTop) <= delta) return;

  if(currentScrollTop < headerHeight) {
    header.removeClass("fixed");
    header.removeClass("scroll");
  } else if(currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
    header.addClass("fixed");
    header.removeClass("scroll");
  } else if(currentScrollTop + window.innerHeight < document.body.offsetHeight) {
    header.addClass("scroll");
  }
  lastScrollTop = currentScrollTop;
}

$(window).scroll(hasScrolled);

// ============== PC Nav ==============
const submenuBg = $(".header__submenu-bg");

function openSubMenu() {
  $(".global-nav__menu-item").removeClass("on");
  $(this).addClass("on");
  headerInner.css("background-color", "#fff");
  submenuBg.css("visibility", "visible");
  submenuBg.css("height", "60px");
}

function onGnbMouseLeave() {
  $(".global-nav__menu-item").removeClass("on");
  headerInner.css("background-color", "");
  submenuBg.css("visibility", "hidden");
  submenuBg.css("height", "0");
}

$(".global-nav__menu-item").hover(openSubMenu, onGnbMouseLeave);

// ============== Mobile Nav ==============
const m_nav = $(".mobile-nav");

function toggleMobileNavList() {
  $(this).toggleClass("active");
}

function openMobileNav() {
  $("body").css("overflow", "hidden");
  m_nav.css("left", "0");
  m_nav.css("opacity", "1");
}

function closeMobileNav() {
  $("body").css("overflow", "auto");
  m_nav.css("left", "-100%");
  m_nav.css("opacity", "0");
}

$(".mobile-nav__menu-item").click(toggleMobileNavList);
$(".header__btn-mobile-menu button").click(openMobileNav);
$(".mobile-nav__top .btn-close button").click(closeMobileNav);

// ============== Search ==============
function openSearchForm() {
  headerInner.addClass("search--active");
  $(".header__search-box .search-input input").focus();
}

function closeSearchForm() {
  headerInner.removeClass("search--active");
}

$(".header__btn-search button").click(openSearchForm);
$(".header__search-wrap .btn-close button").click(closeSearchForm);