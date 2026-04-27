//Main.js
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 14, 71, 0.95)";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.5)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.boxShadow = "none";
  }
});
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 14, 71, 0.85)";
    navbar.style.backdropFilter = "blur(14px)";
    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
  } else {
    navbar.style.background = "rgba(15, 14, 71, 0.6)";
    navbar.style.backdropFilter = "blur(12px)";
    navbar.style.boxShadow = "none";
  }
});