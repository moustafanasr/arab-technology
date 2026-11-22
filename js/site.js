/* Shared behaviour. No framework or backend needed.
   Language preference is stored locally. All user information remains on-device
   until the visitor chooses to open and send a WhatsApp message. */
(() => {
  'use strict';
  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];
  const html = document.documentElement;
  const mobile = $('#mobile-site-nav');
  const menu = $('[data-menu-toggle]');
  const localeButton = $('[data-language-switch]');
  const langLabel = $('[data-lang-label]');

  function applyLanguage(value, persist = true) {
    const lang = value === 'ar' ? 'ar' : 'en';
    html.lang = lang;
    html.dir = lang === 'ar' ? 'rtl' : 'ltr';
    $$('[data-l10n]').forEach(node => { node.hidden = node.getAttribute('data-l10n') !== lang; });
    if (langLabel) langLabel.textContent = lang === 'ar' ? 'English' : 'العربية';
    if (localeButton) localeButton.setAttribute('aria-label', lang === 'ar' ? 'Switch to English' : 'التبديل إلى العربية');
    if (persist) { try { localStorage.setItem('arabTechnologyLanguage', lang); } catch (_) {} }
    document.dispatchEvent(new CustomEvent('at:language', { detail:{lang} }));
  }
  let preferred = 'en';
  try { preferred = localStorage.getItem('arabTechnologyLanguage') || 'en'; } catch (_) {}
  applyLanguage(preferred, false);
  localeButton?.addEventListener('click', () => applyLanguage(html.lang === 'ar' ? 'en' : 'ar'));

  function closeMenu() {
    if (!mobile || !menu) return;
    mobile.hidden = true;
    menu.setAttribute('aria-expanded', 'false');
  }
  menu?.addEventListener('click', () => {
    const opening = mobile.hidden;
    mobile.hidden = !opening;
    menu.setAttribute('aria-expanded', String(opening));
  });
  $$('a', mobile || document.createElement('div')).forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  document.addEventListener('click', e => {
    if (mobile && !mobile.hidden && !e.target.closest('#mobile-site-nav') && !e.target.closest('[data-menu-toggle]')) closeMenu();
  });
  document.querySelectorAll('[data-year]').forEach(e => {e.textContent = String(new Date().getFullYear());});
})();
