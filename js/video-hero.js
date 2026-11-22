/* Cinematic hero: optional autoplay, explicit pause control and no audio. */
(() => {
  'use strict';
  const video = document.querySelector('#homepage-hero-video');
  const button = document.querySelector('[data-hero-film-toggle]');
  if (!video || !button) return;
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)');
  let userPaused = Boolean(prefersReduced?.matches || navigator.connection?.saveData);
  const setUI = () => {
    const paused = video.paused;
    button.classList.toggle('is-paused', paused);
    button.setAttribute('aria-pressed', String(paused));
    button.setAttribute('aria-label', paused ? (document.documentElement.lang === 'ar' ? 'تشغيل الفيديو' : 'Play background video') : (document.documentElement.lang === 'ar' ? 'إيقاف الفيديو' : 'Pause background video'));
    // The site's language toggler only manages data-l10n, so filter by playback state here.
    button.querySelectorAll('.film-toggle-pause,.film-toggle-play').forEach(node => {
      node.hidden = node.getAttribute('data-l10n') !== document.documentElement.lang || node.classList.contains(paused ? 'film-toggle-pause' : 'film-toggle-play');
    });
  };
  video.muted = true;
  video.defaultMuted = true;
  if (userPaused) { video.pause(); video.removeAttribute('autoplay'); }
  const playIfAllowed = () => {
    if (userPaused || document.hidden) return;
    const promise = video.play();
    if (promise?.catch) promise.catch(() => {userPaused=true; setUI();});
  };
  button.addEventListener('click', () => {
    if (video.paused) { userPaused=false; video.play().catch(() => {userPaused=true; setUI();}); }
    else { userPaused=true; video.pause(); }
    setUI();
  });
  video.addEventListener('play',setUI);
  video.addEventListener('pause',setUI);
  video.addEventListener('error', () => { userPaused=true; setUI(); });
  document.addEventListener('at:language', setUI);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) video.pause();
    else playIfAllowed();
  });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      const visible = entries[0]?.isIntersecting;
      if (!visible) video.pause(); else playIfAllowed();
    },{threshold:.1}).observe(video.closest('.home-hero'));
  }
  setUI();
})();
