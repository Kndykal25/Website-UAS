// 1. Reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal');
  for (const el of reveals) {
    const top = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (top < windowHeight - 100) {
      el.classList.add('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 2. Navbar highlight
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNav() {
  let index = sections.length;
  while (--index && window.scrollY + 150 < sections[index].offsetTop) {}
  navLinks.forEach((link) => link.classList.remove('active'));
  navLinks[index].classList.add('active');
}
window.addEventListener('scroll', highlightNav);
window.addEventListener('load', highlightNav);

// 3. Form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Pesan berhasil dikirim. Terima kasih!');
  this.reset();
});

// 4. Smooth scroll fallback
document.querySelectorAll('a.nav-link').forEach((link) => {
  link.addEventListener('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});
