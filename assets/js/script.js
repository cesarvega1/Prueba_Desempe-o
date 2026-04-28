const hamburger = document.getElementById("Hamburger");
const nav = document.getElementById("main-nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("active");
});