/* =========================================================
   KOROV — Interactions
   ========================================================= */

(() => {
  'use strict';

  /* ---------- Scroll-triggered reveals ---------- */
  const revealTargets = document.querySelectorAll(
    '.manifesto__body p, .bean, .step, .prica__title, .prica__right p, .stat, .entry, .cta__title, .cta__lede, .cta__form'
  );

  revealTargets.forEach(el => el.classList.add('in-view-fade'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // staggered reveal for siblings
          const parent = entry.target.parentElement;
          const siblings = parent ? Array.from(parent.children).filter(c => c.classList.contains('in-view-fade')) : [];
          const idx = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${Math.max(0, idx) * 80}ms`;
          entry.target.classList.add('is-visible');

          // trigger count-up if needed
          const counter = entry.target.querySelector('[data-count]');
          if (counter) animateCount(counter);

          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -60px 0px' });

    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Count-up animation ---------- */
  function animateCount(el) {
    const target = parseInt(el.dataset.count, 10);
    if (Number.isNaN(target)) return;
    const duration = 1400;
    const start = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);

    function tick(now) {
      const progress = Math.min(1, (now - start) / duration);
      el.textContent = Math.floor(ease(progress) * target).toString();
      if (progress < 1) requestAnimationFrame(tick);
      else el.textContent = target.toString();
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Smooth nav reaction on scroll ---------- */
  const nav = document.querySelector('.nav');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      nav.style.boxShadow = '0 1px 0 rgba(26, 22, 18, 0.08)';
    } else {
      nav.style.boxShadow = 'none';
    }
    lastY = y;
  }, { passive: true });

  /* ---------- Bean cards: parallax tilt on mouse ---------- */
  const beans = document.querySelectorAll('.bean');
  beans.forEach(bean => {
    bean.addEventListener('mousemove', (e) => {
      const rect = bean.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      bean.style.transform = `translateY(-6px) perspective(800px) rotateY(${x * 2}deg) rotateX(${-y * 2}deg)`;
    });
    bean.addEventListener('mouseleave', () => {
      bean.style.transform = '';
    });
  });

  /* ---------- Add-to-cart visual feedback ---------- */
  document.querySelectorAll('.bean__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const original = btn.innerHTML;
      btn.innerHTML = 'Dodato ✓';
      btn.style.background = 'var(--accent)';
      btn.style.color = 'var(--paper)';
      setTimeout(() => {
        btn.innerHTML = original;
        btn.style.background = '';
        btn.style.color = '';
      }, 1600);
    });
  });

  /* ---------- Subtle parallax on hero numbers ---------- */
  const floats = document.querySelectorAll('.float-num');
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    floats.forEach((el, i) => {
      const speed = i === 0 ? 0.15 : 0.25;
      el.style.transform = `translateY(${y * speed}px) rotate(${i === 0 ? -8 : 6}deg)`;
    });
  }, { passive: true });

  console.log('%cKOROV ★ kafa koja te čeka.', 'font-family: serif; font-size: 18px; color: #c1440e; font-style: italic;');
  console.log('%cDizajn & development — Nikola Živković', 'font-family: monospace; font-size: 12px; color: #4a3f33;');
})();
