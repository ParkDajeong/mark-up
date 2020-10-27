const header = document.querySelector(".header");
const headerInner = document.querySelector(".header__inner");

// ============== header fix ==============
const headerHeight = header.offsetHeight;
const delta = 5;
let didScroll = false;
let lastScrollTop = 0;

function hasScrolled() {
  let currentScrollTop = window.scrollY;

  if(Math.abs(lastScrollTop - currentScrollTop) <= delta) return;

  if(currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
    header.classList.remove("header--fixed");
  } else {
    if(currentScrollTop === 0) {
      header.classList.remove("header--fixed");
    } else if(currentScrollTop + window.innerHeight  < document.documentElement.offsetHeight ) {
      header.classList.add("header--fixed");
    }
  }

  lastScrollTop = currentScrollTop;
}

function onScroll() {
  didScroll = true;
}

setInterval(function() {
  if(didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

window.addEventListener("scroll", onScroll);

// ============== pc navigation ==============
const gnb = document.querySelector(".global-nav__menu-list");
const gnbItems = document.querySelectorAll(".global-nav__menu-item");
const submenuBg = document.querySelector(".header__submenu-bg");

function onGnbMouseOver(e) {
  if(!e.target.classList.contains("global-nav__menu-link")) return;
  const current_gnbItem = e.target.parentNode;

  gnbItems.forEach(function(item) {
    item.classList.remove("on");
  });
  current_gnbItem.classList.add("on");
  headerInner.style.backgroundColor = "#fff";
  headerInner.style.transition = "background-color 250ms ease-in";
  submenuBg.style.visibility = "visible";
  submenuBg.style.height = "60px";
}

function onGnbMouseLeave() {
  gnbItems.forEach(function(item) {
    item.classList.remove("on");
  });
  if(!header.classList.contains("header--fixed")) {
    headerInner.style.backgroundColor = "transparent";
  }
  submenuBg.style.visibility = "hidden";
  submenuBg.style.height = "0";
}

gnb.addEventListener("mouseover", onGnbMouseOver);
gnb.addEventListener("mouseleave", onGnbMouseLeave);

// ============== mobile navigation ==============
const m_nav = document.querySelector(".mobile-nav");
const m_navList = document.querySelector(".mobile-nav__menu-list");
const m_navItems = document.querySelectorAll(".mobile-nav__menu-link");
const m_submenu = document.querySelectorAll(".mobile-nav__submenu");
const m_btnMenu = document.querySelector(".header__btn-mobile-menu button");
const m_btnClose = document.querySelector(".mobile-nav__top .btn-close button");

function toggleMobileNavList(e) {
  if(!e.target.classList.contains("mobile-nav__menu-link")) return;

  const current_navItem = e.target.parentNode;
  current_navItem.classList.toggle("active");
}

function openMobileNav() {
  document.body.style.overflow = "hidden";
  m_nav.style.left = "0";
  m_nav.style.opacity = "1";
}

function closeMobileNav() {
  document.body.style.overflow = "auto";
  m_nav.style.left = "-100%";
  m_nav.style.opacity = "0";
}

m_navList.addEventListener("click", toggleMobileNavList);
m_btnMenu.addEventListener("click", openMobileNav);
m_btnClose.addEventListener("click", closeMobileNav);

// ============== search ==============
const btnSearch = document.querySelector(".header__btn-search button");
const btnSearchClose = document.querySelector(".header__search-wrap .btn-close button");
const inputSearch = document.querySelector(".header__search-box .search-input input");

function openSearchForm() {
  headerInner.classList.add("search--active");
  inputSearch.focus();
}

function closeSearchForm() {
  headerInner.classList.remove("search--active");
}

btnSearch.addEventListener("click", openSearchForm);
btnSearchClose.addEventListener("click", closeSearchForm);