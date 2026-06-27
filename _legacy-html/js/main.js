/* ===========================
   NAVIGATION
=========================== */
(function () {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
      });
    });
  }

  // Set active nav link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ===========================
   SMOOTH SCROLL ANIMATIONS
=========================== */
(function () {
  if (!('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  // Add animation class to cards
  const style = document.createElement('style');
  style.textContent = `
    .service-card, .feature-card, .testimonial-card, .service-detail-card,
    .team-card, .contact-card, .price-table {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity .5s ease, transform .5s ease, box-shadow .28s ease, border-color .28s ease;
    }
    .service-card.visible, .feature-card.visible, .testimonial-card.visible,
    .service-detail-card.visible, .team-card.visible, .contact-card.visible,
    .price-table.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);

  document.querySelectorAll(
    '.service-card, .feature-card, .testimonial-card, .service-detail-card, .team-card, .contact-card, .price-table'
  ).forEach((el, i) => {
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
    observer.observe(el);
  });
})();

/* ===========================
   PRICE TABS
=========================== */
(function () {
  const tabs = document.querySelectorAll('.tab-btn');
  const tables = document.querySelectorAll('.price-table');
  if (!tabs.length) return;

  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tables.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      const target = document.getElementById(btn.dataset.tab);
      if (target) {
        target.classList.add('active');
        // Trigger visible animation
        target.classList.remove('visible');
        requestAnimationFrame(() => target.classList.add('visible'));
      }
    });
  });
})();

/* ===========================
   CONTACT FORM
=========================== */
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic validation
    let valid = true;
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#E53935';
        valid = false;
      }
    });

    if (!valid) return;

    const btn = form.querySelector('.btn-submit');
    btn.textContent = 'Se trimite...';
    btn.disabled = true;

    // Simulate async send
    setTimeout(() => {
      form.style.display = 'none';
      const success = document.querySelector('.form-success');
      if (success) {
        success.style.display = 'block';
      }
    }, 1400);
  });
})();

/* ===========================
   COUNTER ANIMATION (hero stats)
=========================== */
(function () {
  const stats = document.querySelectorAll('.hero-stat strong[data-target]');
  if (!stats.length) return;

  function animateCount(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 1600;
    const step = duration / target;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + Math.ceil(target / 60), target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(timer);
    }, step > 20 ? 20 : step);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        stats.forEach(el => animateCount(el));
        observer.disconnect();
      }
    });
  }, { threshold: 0.5 });

  const heroStats = document.querySelector('.hero-stats');
  if (heroStats) observer.observe(heroStats);
})();
