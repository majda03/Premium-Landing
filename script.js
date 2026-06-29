const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

const revealElements = document.querySelectorAll(
  ".hero-content, .about, .service-card, .work-card, .audience, .step, .why-grid article, .contact"
);

revealElements.forEach((el) => {
  el.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((el) => observer.observe(el));