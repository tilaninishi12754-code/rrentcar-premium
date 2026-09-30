const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const fallbackReveal = () => {
  document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('is-visible'));
};
if (reduce) {
  fallbackReveal();
} else {
  // Motion is progressively enhanced when the browser has internet access.
  // The local preview remains fully functional with a native IntersectionObserver fallback.
  import('https://cdn.jsdelivr.net/npm/motion@12.23.24/+esm')
    .then(({ animate, inView }) => {
      window.__RRC_MOTION__ = { animate, inView };
      inView('[data-reveal]', (el) => {
        animate(el, { opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] }, { duration: 0.65, easing: [0.22, 1, 0.36, 1] });
      }, { margin: '0px 0px -8% 0px' });
    })
    .catch(fallbackReveal);
}
