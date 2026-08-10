const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuBtn?.setAttribute('aria-expanded', 'false');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
