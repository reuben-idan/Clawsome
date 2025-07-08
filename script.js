// Parallax effect for hero sections
function parallaxHero() {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;
  window.addEventListener('scroll', () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const scrolled = window.scrollY;
    hero.style.backgroundPosition = `center ${scrolled * 0.3}px`;
  });
}

// Scroll-based reveal animations
function revealOnScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const revealEls = document.querySelectorAll('.glass, .card, .hero-section, .divider, .news-feed, .Advertisement, .mission');
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  revealEls.forEach((el) => {
    el.classList.add('reveal-init');
    observer.observe(el);
  });
}

// Micro-interactions for buttons and links
function microInteractions() {
  document.querySelectorAll('button, .btn').forEach((btn) => {
    btn.addEventListener('mousedown', () => {
      btn.classList.add('pressed');
    });
    btn.addEventListener('mouseup', () => {
      btn.classList.remove('pressed');
    });
    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('pressed');
    });
  });
  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('hovered');
    });
    link.addEventListener('mouseleave', () => {
      link.classList.remove('hovered');
    });
  });
}

// Initialize all effects on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  parallaxHero();
  revealOnScroll();
  microInteractions();
});

