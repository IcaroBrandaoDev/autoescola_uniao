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

  document.querySelectorAll('[data-wa-msg]').forEach((el) => {
    el.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(el.dataset.waMsg)}`;
  });

  document.querySelectorAll('.faq-item').forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        document.querySelectorAll('.faq-item[open]').forEach((other) => {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // Carrossel de depoimentos: só ativo no mobile (a grade do CSS já vira
  // flex nesse breakpoint). O swipe é nativo (scroll-snap); aqui só ligamos
  // as setas e as bolinhas ao scroll do próprio grid.
  const approvedGrid = document.getElementById('approvedGrid');
  const approvedDotsEl = document.getElementById('approvedDots');
  const approvedPrev = document.getElementById('approvedPrev');
  const approvedNext = document.getElementById('approvedNext');

  if (approvedGrid && approvedDotsEl && approvedPrev && approvedNext) {
    const cards = Array.from(approvedGrid.children);

    cards.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'approved__dot';
      dot.setAttribute('aria-label', `Ir para o depoimento ${index + 1}`);
      dot.addEventListener('click', () => scrollToCard(index));
      approvedDotsEl.appendChild(dot);
    });
    const dots = Array.from(approvedDotsEl.children);

    function activeIndex() {
      const width = approvedGrid.clientWidth || 1;
      return Math.round(approvedGrid.scrollLeft / width);
    }

    function updateDots() {
      const index = Math.min(Math.max(activeIndex(), 0), dots.length - 1);
      dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    }

    function scrollToCard(index) {
      const width = approvedGrid.clientWidth;
      approvedGrid.scrollTo({ left: width * index, behavior: 'smooth' });
    }

    let scrollTicking = false;
    approvedGrid.addEventListener('scroll', () => {
      if (scrollTicking) return;
      scrollTicking = true;
      window.requestAnimationFrame(() => {
        updateDots();
        scrollTicking = false;
      });
    });

    approvedPrev.addEventListener('click', () => {
      const index = activeIndex();
      scrollToCard(index <= 0 ? cards.length - 1 : index - 1);
    });

    approvedNext.addEventListener('click', () => {
      const index = activeIndex();
      scrollToCard(index >= cards.length - 1 ? 0 : index + 1);
    });

    updateDots();
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
