// Número de WhatsApp centralizado: troque só aqui para atualizar todos os botões do site.
// Ainda não confirmado como WhatsApp Business oficial (hoje é o telefone fixo da unidade).
const WHATSAPP_NUMBER = '553136252542';

document.addEventListener('DOMContentLoaded', () => {
  // Menu mobile
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Links de WhatsApp: monta a URL final a partir da constante WHATSAPP_NUMBER
  // e da mensagem específica de cada botão (data-wa-msg).
  document.querySelectorAll('[data-wa-msg]').forEach((el) => {
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(el.dataset.waMsg)}`;
  });

  // Sanfona do FAQ: mantém só uma pergunta aberta por vez
  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item[open]').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Ano dinâmico no rodapé
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
