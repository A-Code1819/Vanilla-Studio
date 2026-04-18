// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if(window.scrollY > 50){
    nav.style.background = "rgba(5,5,10,0.95)";
    nav.style.boxShadow = "0 0 30px rgba(124,58,237,0.25)";
  } else {
    nav.style.background = "rgba(5,5,10,0.7)";
    nav.style.boxShadow = "0 0 20px rgba(124,58,237,0.15)";
  }
});
// Scroll-based animations
document.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Floating CTA visibility on scroll
  const floatingCTA = document.querySelector('.floating-cta');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      floatingCTA.classList.add('visible');
    } else {
      floatingCTA.classList.remove('visible');
    }
  });

// BUTTON HOVER EFFECT
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0,0)";
  });
});