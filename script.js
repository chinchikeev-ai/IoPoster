/* IOPOSTER — minimal accessible mobile navigation and progressive reveal */
const header = document.querySelector('.topbar');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#primary-menu');

function closeMenu(open = false) {
  if (!header || !menuToggle) return;
  header.classList.toggle('menu-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
}

menuToggle?.addEventListener('click', () => {
  closeMenu(!header.classList.contains('menu-open'));
});

menu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => closeMenu(false));
});

document.addEventListener('pointerdown', event => {
  if (header && !header.contains(event.target)) closeMenu(false);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    closeMenu(false);
    if (menuToggle && document.activeElement && menu?.contains(document.activeElement)) {
      menuToggle.focus();
    }
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 980) closeMenu(false);
}, { passive: true });

function updateHeader() {
  header?.classList.toggle('scrolled', window.scrollY > 24);
}
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

const reveals = [...document.querySelectorAll('.reveal')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion && 'IntersectionObserver' in window) {
  document.documentElement.classList.add('has-motion');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });

  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add('visible'));
}
