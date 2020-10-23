const header = document.querySelector(".header__inner");
const submenuBg = document.querySelector(".header__submenu-bg");
const gnb = document.querySelector(".global-nav__menu-list");
const gnbItems = document.querySelectorAll(".global-nav__menu-item");
const submenu = document.querySelectorAll(".global-nav__submenu");

function gnbMouseOverEvent(e) {
  if(!e.target.classList.contains("global-nav__menu-link")) return;
  const parent_gnbItem = e.target.parentNode;

  gnbItems.forEach(function(item) {
    item.classList.remove("on");
  });
  parent_gnbItem.classList.add("on");
  header.style.backgroundColor = "#fff";
  header.style.transition = "background-color 250ms ease-in";
  submenuBg.style.visibility = "visible";
  submenuBg.style.height = "60px";
}

function gnbMouseLeaveEvent() {
  gnbItems.forEach(function(item) {
    item.classList.remove("on");
  });
  header.style.backgroundColor = "transparent";
  submenuBg.style.visibility = "hidden";
  submenuBg.style.height = "0";
}

gnb.addEventListener("mouseover", gnbMouseOverEvent);
gnb.addEventListener("mouseleave", gnbMouseLeaveEvent);