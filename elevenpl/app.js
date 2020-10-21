const btnMenu = document.querySelector(".btn-menu");
const btnClose = document.querySelector(".btn-close");
const mobileDropdownMenu = document.querySelector(".mobile-menu-dropdown");
// Slider Image
const slider = document.querySelector(".slider");
const sliderItems = document.querySelectorAll(".slider-item");
const sliderLen = sliderItems.length;
let currentIdx = 1;
const sliderSpeed = 300;
let sliderWidth = slider.offsetWidth;
// Slider Pagination
const sliderPagination = document.querySelector(".slider-pagination");
const sliderBullets = document.querySelectorAll(".slider-pagination .bullet button");

// Mobile Dropdown Menu
function openDropdownMenu() {
  mobileDropdownMenu.style.maxHeight = "500px";
}

function closeDropdownMenu() {
  mobileDropdownMenu.style.maxHeight = "0";
}

// Slider
function moveSliderImages(speed) {
  slider.style.transition = `${speed}ms`;
  slider.style.transform = `translateX(${-(sliderWidth * (currentIdx++))}px)`;
}

function moveSliderPagination() {
  sliderBullets.forEach((bullet) => bullet.classList.remove("active"));
  if(currentIdx >= sliderLen - 1) {
    sliderBullets[0].classList.add("active");
  } else {
    sliderBullets[currentIdx].classList.add("active");
  }
}

function roopSlider() {
  setInterval(() => {
    moveSliderPagination();
    moveSliderImages(sliderSpeed);
    
    if(currentIdx === sliderLen) {
      setTimeout(() => {
        currentIdx = 0;
        moveSliderPagination();
        moveSliderImages(0);
      }, 200)
    }
  }, 4000);
}

function clickSliderPagination(e) {
  const clickedEl = e.target;
  if(clickedEl.tagName !== "BUTTON") return;

  currentIdx = clickedEl.dataset.index;
  moveSliderPagination();
  moveSliderImages(0);
}

window.addEventListener("resize", () => sliderWidth = slider.offsetWidth);
window.addEventListener("load", roopSlider);

btnMenu.addEventListener("click", openDropdownMenu);
btnClose.addEventListener("click", closeDropdownMenu);

sliderPagination.addEventListener("click", clickSliderPagination);

