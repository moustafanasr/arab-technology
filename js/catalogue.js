/* Filter the visible product catalogue without external calls. */
(() => {
  'use strict';
  const items = [...document.querySelectorAll('.catalogue-section .equipment-card')];
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const search = document.getElementById('catalog-search');
  const count = document.getElementById('catalog-count');
  const empty = document.getElementById('catalog-empty');
  if (!items.length || !search) return;
  const allowed = new Set(['all','concrete','soil','asphalt','cement','laboratory']);
  const query = new URLSearchParams(location.search);
  let category = allowed.has(query.get('category')) ? query.get('category') : 'all';
  search.value = query.get('q') || '';
  function render() {
    const term = search.value.trim().toLocaleLowerCase();
    let n = 0;
    items.forEach(item => {
      const visible = (category === 'all' || item.dataset.category === category) && (!term || item.dataset.search?.includes(term));
      item.hidden = !visible;
      n += visible ? 1 : 0;
    });
    buttons.forEach(button => {
      const selected = button.dataset.filter === category;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    count.textContent = String(n);
    empty.hidden = n !== 0;
    const url = new URL(location.href);
    category === 'all' ? url.searchParams.delete('category') : url.searchParams.set('category', category);
    term ? url.searchParams.set('q', search.value.trim()) : url.searchParams.delete('q');
    try { if (location.protocol !== 'about:') history.replaceState(null, '', url.pathname + url.search + url.hash); } catch (_) { /* embedded preview */ }
  }
  buttons.forEach(button => button.addEventListener('click', () => { category = button.dataset.filter; render(); }));
  search.addEventListener('input', render);
  render();
})();
