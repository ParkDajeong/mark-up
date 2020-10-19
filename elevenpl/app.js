const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const mobileDropdownMenu = document.querySelector(".mobile-menu-dropdown")

const openDropdownMenu = () => {
  mobileDropdownMenu.style.maxHeight = "500px";
}

const closeDropdownMenu = () => {
  mobileDropdownMenu.style.maxHeight = "0";
}

btnMenu.addEventListener("click", openDropdownMenu);
btnClose.addEventListener("click", closeDropdownMenu);