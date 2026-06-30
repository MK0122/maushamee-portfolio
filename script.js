// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Scroll reveal (progressive enhancement — elements are visible by default;
// we only animate them if IntersectionObserver is available)
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  revealEls.forEach(el => el.classList.add('pending'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });

  revealEls.forEach(el => observer.observe(el));
}

// Expand / collapse timeline detail
document.querySelectorAll('.tl-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = document.getElementById(btn.dataset.target);
    const isOpen = target.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.textContent = isOpen ? '\u2212 Show less' : '+ Show full scope';
  });
});
