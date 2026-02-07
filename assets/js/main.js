(function () {
  // Theme management
  const root = document.documentElement;
  const key = 'hl-theme';
  const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
  const saved = localStorage.getItem(key);
  if (saved === 'light' || (!saved && prefersLight)) root.classList.add('light');

  function setTheme(mode) {
    if (mode === 'light') root.classList.add('light');
    else root.classList.remove('light');
    localStorage.setItem(key, mode);
  }

  const btn = document.getElementById('theme-toggle');
  btn && btn.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem(key, isLight ? 'light' : 'dark');
  });

  // Set year in footer
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Avatar fallback handling
  (function () {
    const img = document.querySelector('img.avatar-img');
    if (!img) return;
    const candidates = [
      'assets/img/heanloong.jpg',
      'assets/img/HeanLoong01.png',
      'assets/img/photo.jpeg',
      'assets/img/photo.jpg',
      'assets/img/photo.png',
      'assets/img/photo.webp',
      'assets/photo.jpeg',
      'assets/photo.jpg',
      'photo.jpeg',
      'photo.jpg'
    ];
    const placeholder = 'assets/img/profile-placeholder.svg';
    const testNext = (i) => {
      if (i >= candidates.length) { img.src = placeholder; return; }
      const url = candidates[i];
      const probe = new Image();
      probe.onload = () => { img.src = url; };
      probe.onerror = () => { testNext(i + 1); };
      probe.src = url;
    };
    const start = () => {
      if (img.complete && img.naturalWidth > 0 && img.src.indexOf(placeholder) === -1) {
        return;
      }
      testNext(0);
    };
    if (document.readyState === 'complete') start();
    else window.addEventListener('load', start);
  })();

  // Smooth scroll for same-page anchors
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.pushState(null, '', `#${id}`);
    }
  });

  // Scroll-triggered animations for timeline items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Apply animation to timeline items and cards
  document.addEventListener('DOMContentLoaded', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const cards = document.querySelectorAll('.card, .edu-card, .cert-item, .pub-item');

    timelineItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
      animateOnScroll.observe(item);
    });

    cards.forEach((card, index) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;
      animateOnScroll.observe(card);
    });

    // Animate skills badges
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach((badge, index) => {
      badge.style.opacity = '0';
      badge.style.transform = 'scale(0.9)';
      badge.style.transition = `opacity 0.4s ease ${index * 0.03}s, transform 0.4s ease ${index * 0.03}s`;
      animateOnScroll.observe(badge);
    });
  });

  // Header scroll effect
  let lastScroll = 0;
  const header = document.querySelector('.site-header');

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      header.style.boxShadow = 'none';
    } else {
      header.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
    }

    lastScroll = currentScroll;
  });

  // Add active state to navigation based on scroll position
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

  function setActiveNav() {
    let current = '';
    const scrollPos = window.pageYOffset + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.style.opacity = '0.85';
      const href = link.getAttribute('href');
      if (href === `#${current}`) {
        link.style.opacity = '1';
        link.style.color = 'var(--accent)';
      } else {
        link.style.color = 'var(--text)';
      }
    });
  }

  window.addEventListener('scroll', setActiveNav);
  setActiveNav(); // Call on load

})();
