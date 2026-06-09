/* main.js — shared across all pages */

// ── NAV TOGGLE (mobile) ──
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // ── ACTIVE NAV STATE ──
  const current = window.location.pathname.replace(/\/$/, '') || '/';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href').replace(/\/$/, '') || '/';
    if (
      href === current ||
      (href !== '' && href !== '/' && href !== '/index.html' && current.startsWith(href))
    ) {
      link.classList.add('active');
    }
  });

  // ── RESUME PDF DOWNLOAD ──
  const dlBtn = document.getElementById('resume-dl');
  if (dlBtn) {
    dlBtn.addEventListener('click', () => {
      // Minimal placeholder PDF so the button works
      const link = document.createElement('a');
      link.href = '../resume/Amit_Padhy_Resume.pdf';
      link.download = 'Amit_Padhy_Resume.pdf';
      link.click();
    });
  }

  // ── SCROLL-TRIGGERED FADE-IN ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});