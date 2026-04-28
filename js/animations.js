//animation.js
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.1 });

// Select all elements you want to animate
const scrollElements = document.querySelectorAll(
  ".card, .img-box, .hero-content, .services h2, .cta h2, .cta p, .cta .btn, .trust h2, .trust p"
);

scrollElements.forEach((el) => observer.observe(el));

// // Add .contact-info p to your observer list in animations.js
// const scrollElements = document.querySelectorAll(
//   ".card, .img-box, .hero-content, .services h2, .cta h2, .cta p, .cta .btn, .contact-info p"
// );
