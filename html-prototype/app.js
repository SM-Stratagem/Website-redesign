// SM Stratagem — shared client behaviors

(function(){
  // Reveal-on-scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Active nav link based on current page
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  // Mobile menu — simple show/hide of nav-links
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      if (open) {
        Object.assign(links.style, {
          display: 'flex',
          position: 'fixed',
          top: '74px',
          left: '0',
          right: '0',
          background: 'rgba(250,245,233,.97)',
          flexDirection: 'column',
          padding: '24px var(--gutter)',
          gap: '18px',
          borderBottom: '1px solid var(--rule)',
        });
      } else {
        links.style.cssText = '';
      }
    });
  }
})();
