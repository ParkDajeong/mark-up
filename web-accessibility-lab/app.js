const mainNav = document.querySelector(".main-nav");
const mainLinks = document.querySelectorAll(".main-link");
const subNavs = document.querySelectorAll(".sub-nav");

const removeClass = () => {
  mainLinks.forEach((link) => link.parentElement.classList.remove("active"));
};

const openMenu = (e) => {
  if (!mainNav.contains(e.target)) return;

  removeClass();
  let parentEl = e.target.parentElement;
  if (e.target.tagName === "A" && e.target.className !== "main-link") {
    parentEl = parentEl.parentElement.parentElement;
  }
  console.log(parentEl);
  parentEl.classList.add("active");
  subNavs.forEach((sub) => (sub.style.display = "block"));
};

const closeMenu = () => {
  removeClass();
  subNavs.forEach((sub) => (sub.style.display = "none"));
};

// Mouse Event
mainNav.addEventListener("mouseover", openMenu);
mainNav.addEventListener("mouseleave", closeMenu);

// Tab Event
mainLinks.forEach((el) => {
  el.addEventListener("focus", openMenu);
});
// mainNav.addEventListener("blur", closeMenu);

// subNavs.forEach();
