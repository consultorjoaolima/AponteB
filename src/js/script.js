// ─── Menu Mobile ──────────────────────────────────

const btnMobile = document.querySelector('.btn-mobile');
const navLinks  = document.querySelector('.header__nav');

function abrirMenu() {
  navLinks.classList.add('show');
  btnMobile.setAttribute('aria-expanded', 'true');
  btnMobile.querySelector('i').classList.replace('fa-bars', 'fa-times');
}

function fecharMenu() {
  navLinks.classList.remove('show');
  btnMobile.setAttribute('aria-expanded', 'false');
  btnMobile.querySelector('i').classList.replace('fa-times', 'fa-bars');
}

function toggleMenu() {
  const estaAberto = navLinks.classList.contains('show');
  estaAberto ? fecharMenu() : abrirMenu();
}

// Abre/fecha ao clicar no botão
btnMobile.addEventListener('click', toggleMenu);

// Fecha ao clicar fora
document.addEventListener('click', (e) => {
  const clicouFora =
    !navLinks.contains(e.target) &&
    !btnMobile.contains(e.target);

  if (clicouFora) fecharMenu();
});

// Fecha ao pressionar ESC
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') fecharMenu();
});

// Fecha ao clicar em qualquer link do menu
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', fecharMenu);
});

// ─── Contadores Animados ──────────────────────────

const counters = document.querySelectorAll('.counter');

// Formata número no padrão brasileiro: 3000 → 3.000
const formatarBR = (valor) =>
  new Intl.NumberFormat('pt-BR').format(valor);

function animarContador(el) {
  // Evita reanimar se já foi animado
  if (el.dataset.counted === 'true') return;
  el.dataset.counted = 'true';

  const target   = Number(el.dataset.target || 0);
  const prefix   = el.dataset.prefix || '';
  const suffix   = el.dataset.suffix || '';
  const duracao  = 1800; // ms
  const inicio   = performance.now();

  function atualizar(agora) {
    const progresso = Math.min((agora - inicio) / duracao, 1);

    // Easing: começa rápido e desacelera no final
    const eased  = 1 - Math.pow(1 - progresso, 3);
    const atual  = Math.round(target * eased);

    el.textContent = prefix + formatarBR(atual) + suffix;

    if (progresso < 1) {
      requestAnimationFrame(atualizar);
    } else {
      // Garante o valor final exato
      el.textContent = prefix + formatarBR(target) + suffix;
    }
  }

  requestAnimationFrame(atualizar);
}

// Observa cada contador e dispara quando entra na tela
const observador = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animarContador(entry.target);
      }
    });
  },
  { threshold: 0.35 }
);

counters.forEach((counter) => observador.observe(counter));

// ─── Fallback de Imagens ──────────────────────────

document.querySelectorAll('img').forEach((img) => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const fallback = document.createElement('span');
    fallback.className  = 'image-fallback';
    fallback.textContent = img.getAttribute('alt') || 'Imagem não encontrada';
    img.insertAdjacentElement('afterend', fallback);
  }, { once: true });
});