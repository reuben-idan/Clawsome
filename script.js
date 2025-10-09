// Enhanced Parallax effect with smooth scrolling
function parallaxHero() {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.scrollY;
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

// Advanced reveal animations with staggered timing
function revealOnScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const revealEls = document.querySelectorAll('.glass, .card, .hero-section, .divider, .news-feed, .Advertisement, .mission');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealEls.forEach((el) => {
    el.classList.add('reveal-init');
    observer.observe(el);
  });
}

// Enhanced Parallax effect with smooth scrolling
function parallaxHero() {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  let ticking = false;

  function updateParallax() {
    const scrolled = window.scrollY;
    const rate = scrolled * -0.5;
    hero.style.transform = `translateY(${rate}px)`;
    ticking = false;
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(updateParallax);
      ticking = true;
    }
  }

  window.addEventListener('scroll', requestTick, { passive: true });
}

// Advanced reveal animations with staggered timing
function revealOnScroll() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const revealEls = document.querySelectorAll('.glass, .card, .hero-section, .divider, .news-feed, .Advertisement, .mission');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('revealed');
          entry.target.style.animationDelay = `${index * 0.1}s`;
        }, index * 100);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealEls.forEach((el) => {
    el.classList.add('reveal-init');
    observer.observe(el);
  });
}

// Enhanced micro-interactions with spring physics
function microInteractions() {
  // Button press effects
  document.querySelectorAll('button, .btn').forEach((btn) => {
    btn.addEventListener('mousedown', () => {
      btn.classList.add('pressed');
      btn.style.transform = 'scale(0.96) translateY(2px)';
    });

    btn.addEventListener('mouseup', () => {
      setTimeout(() => {
        btn.style.transform = '';
      }, 150);
    });

    btn.addEventListener('mouseleave', () => {
      btn.classList.remove('pressed');
      btn.style.transform = '';
    });

    // Add hover effects for buttons
    btn.addEventListener('mouseenter', () => {
      btn.style.transform = 'translateY(-2px) scale(1.02)';
      btn.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
      btn.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Enhanced link hover effects
  document.querySelectorAll('a').forEach((link) => {
    link.addEventListener('mouseenter', () => {
      link.classList.add('hovered');
      link.style.transform = 'translateY(-1px) scale(1.02)';
      link.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    link.addEventListener('mouseleave', () => {
      link.classList.remove('hovered');
      link.style.transform = '';
      link.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Card hover effects with 3D tilt
  document.querySelectorAll('.card, .glass').forEach((card) => {
    card.addEventListener('mouseenter', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 10;
      const rotateY = (centerX - x) / 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
      card.style.transition = 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
      card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });

  // Add focus ring animations for better accessibility
  document.querySelectorAll('input, textarea, button, .btn').forEach((element) => {
    element.addEventListener('focus', () => {
      element.style.boxShadow = '0 0 0 3px rgba(255, 0, 106, 0.2)';
      element.style.outline = 'none';
      element.style.transition = 'box-shadow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    });

    element.addEventListener('blur', () => {
      element.style.boxShadow = '';
      element.style.outline = '';
      element.style.transition = 'box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
}

// Smooth scroll for internal links
function smoothScrollLinks() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Dynamic background effects
function dynamicBackgrounds() {
  const hero = document.querySelector('.hero-section');
  if (!hero) return;

  function updateBackground() {
    const scrolled = window.scrollY;
    const opacity = Math.max(0.3, 1 - scrolled / 300);
    hero.style.background = `linear-gradient(135deg, rgba(255, 240, 246, ${opacity}) 0%, rgba(255, 224, 240, ${opacity * 0.8}) 100%)`;
  }

  window.addEventListener('scroll', updateBackground, { passive: true });
  updateBackground();
}

// Search functionality
function searchFunctionality() {
  const searchForm = document.getElementById('searchForm');
  const searchInput = document.getElementById('searchInput');

  if (!searchForm || !searchInput) return;

  // Sample search data (in a real app, this would come from an API)
  const searchData = [
    { title: 'Dog Care Tips', content: 'Essential tips for taking care of your dog', category: 'dogs' },
    { title: 'Cat Nutrition Guide', content: 'Complete guide to feeding your cat properly', category: 'cats' },
    { title: 'Bird Training Basics', content: 'How to train your pet bird effectively', category: 'birds' },
    { title: 'Fish Tank Maintenance', content: 'Keep your aquarium clean and healthy', category: 'fish' },
    { title: 'Pet Health and Wellness', content: 'General health tips for all pets', category: 'health' },
    { title: 'Adopting a Rescue Pet', content: 'Everything you need to know about pet adoption', category: 'adoption' }
  ];

  function performSearch(query) {
    if (!query.trim()) {
      showSearchResults([]);
      return;
    }

    const results = searchData.filter(item => {
      return item.title.toLowerCase().includes(query.toLowerCase()) ||
             item.content.toLowerCase().includes(query.toLowerCase()) ||
             item.category.toLowerCase().includes(query.toLowerCase());
    });

    showSearchResults(results);
  }

  function showSearchResults(results) {
    // Remove existing search results
    const existingResults = document.querySelector('.search-results');
    if (existingResults) {
      existingResults.remove();
    }

    if (results.length === 0) return;

    const resultsContainer = document.createElement('div');
    resultsContainer.className = 'search-results glass';
    resultsContainer.style.cssText = `
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: var(--glass-bg-gradient);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius);
      box-shadow: var(--glass-shadow-hover);
      backdrop-filter: var(--backdrop-blur);
      max-height: 300px;
      overflow-y: auto;
      z-index: 1000;
      margin-top: 8px;
      animation: slideInBounce 0.3s ease-out;
    `;

    results.forEach((result, index) => {
      const resultItem = document.createElement('div');
      resultItem.className = 'search-result-item';
      resultItem.style.cssText = `
        padding: 1rem;
        border-bottom: 1px solid var(--glass-border);
        cursor: pointer;
        transition: background var(--transition);
      `;

      resultItem.innerHTML = `
        <h6 style="margin: 0; color: var(--accent); font-size: 0.9rem;">${result.title}</h6>
        <p style="margin: 0.25rem 0 0 0; font-size: 0.8rem; color: var(--text-secondary);">${result.content}</p>
      `;

      resultItem.addEventListener('mouseenter', () => {
        resultItem.style.background = 'var(--glass-bg-hover)';
      });

      resultItem.addEventListener('mouseleave', () => {
        resultItem.style.background = 'transparent';
      });

      resultItem.addEventListener('click', () => {
        searchInput.value = result.title;
        resultsContainer.remove();
        showSearchMessage(`Showing results for: "${result.title}"`);
      });

      resultsContainer.appendChild(resultItem);
    });

    const searchContainer = document.querySelector('.search-container');
    searchContainer.style.position = 'relative';
    searchContainer.appendChild(resultsContainer);
  }

  function showSearchMessage(message) {
    const existingMessage = document.querySelector('.search-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageDiv = document.createElement('div');
    messageDiv.className = 'search-message';
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
      margin-top: 1rem;
      padding: 0.75rem;
      background: var(--glass-bg-gradient);
      border: 1px solid var(--glass-border);
      border-radius: var(--radius);
      color: var(--text-secondary);
      font-size: 0.9rem;
      animation: fadeIn 0.3s ease-out;
    `;

    const mainContent = document.querySelector('main');
    if (mainContent) {
      mainContent.insertBefore(messageDiv, mainContent.firstChild);
    }
  }

  // Debounced search
  let searchTimeout;
  searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      performSearch(e.target.value);
    }, 300);
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    if (query) {
      performSearch(query);
      showSearchMessage(`Search results for: "${query}"`);
    }
  });

  // Close search results when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) {
      const results = document.querySelector('.search-results');
      if (results) {
        results.remove();
      }
    }
  });
}

// Initialize all effects on DOMContentLoaded
window.addEventListener('DOMContentLoaded', () => {
  parallaxHero();
  revealOnScroll();
  microInteractions();
  smoothScrollLinks();
  dynamicBackgrounds();
  searchFunctionality();
});
