// js/main.js
const menuBtn = document.getElementById('menuBtn');
const menuLateral = document.getElementById('menuLateral');
const menuCerrar = document.getElementById('menuCerrar');
const overlay = document.getElementById('overlay');

function abrirMenu() {
  menuLateral.classList.add('abierto');
  overlay.classList.add('visible');
  menuBtn.setAttribute('aria-expanded', 'true');
}

function cerrarMenu() {
  menuLateral.classList.remove('abierto');
  overlay.classList.remove('visible');
  menuBtn.setAttribute('aria-expanded', 'false');
}

menuBtn.addEventListener('click', abrirMenu);
menuCerrar.addEventListener('click', cerrarMenu);
overlay.addEventListener('click', cerrarMenu);

// espacio para más interactividad futura
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});