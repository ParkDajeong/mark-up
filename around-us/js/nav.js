const header = document.querySelector(".header__inner");
const submenuBg = document.querySelector(".header__submenu-bg");
// pc navigation
const gnb = document.querySelector(".global-nav__menu-list");
const gnbItems = document.querySelectorAll(".global-nav__menu-item");
// mobile navigation
const m_nav = document.querySelector(".mobile-nav");
const m_navList = document.querySelector(".mobile-nav__menu-list");
const m_navItems = document.querySelectorAll(".mobile-nav__menu-link");
const m_submenu = document.querySelectorAll(".mobile-nav__submenu");
const m_btnMenu = document.querySelector(".header__btn-mobile-menu button");
const m_btnClose = document.querySelector(".mobile-nav__top .btn-close button");
// search
const btnSearch = document.querySelector(".header__btn-search button");
const btnSearchClose = document.querySelector(".header__search-wrap .btn-close button");
const searchBox = document.querySelector(".header__search-box");
const inputSearch = document.querySelector(".header__search-box .search-input input");

function onGnbMouseOver(e) {
  if(!e.target.classList.contains("global-nav__menu-link")) return;
  const current_gnbItem = e.target.parentNode;

  gnbItems.forEach(function(item) {
    item.classList.remove("on");
  });
  current_gnbItem.classList.add("on");
  header.style.backgroundColor = "#fff";
  header.style.transition = "background-color 250ms ease-in";
  submenuBg.style.visibility = "visible";
  submenuBg.style.height = "60px";
}

function onGnbMouseLeave() {
  gnbItems.forEach(function(item) {
    item.classList.remove("on");
  });
  header.style.backgroundColor = "transparent";
  submenuBg.style.visibility = "hidden";
  submenuBg.style.height = "0";
}

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

function openSearchForm() {
  header.classList.add("search--active");
  inputSearch.focus();
}

function closeSearchForm() {
  header.classList.remove("search--active");
}

gnb.addEventListener("mouseover", onGnbMouseOver);
gnb.addEventListener("mouseleave", onGnbMouseLeave);

m_navList.addEventListener("click", toggleMobileNavList);
m_btnMenu.addEventListener("click", openMobileNav);
m_btnClose.addEventListener("click", closeMobileNav);

btnSearch.addEventListener("click", openSearchForm);
btnSearchClose.addEventListener("click", closeSearchForm);