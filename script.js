// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const mobile = document.getElementById('navMobile');
toggle.addEventListener('click', () => mobile.classList.toggle('open'));
mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.15 });
reveals.forEach(el => observer.observe(el));
