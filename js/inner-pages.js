/* Static content pages: accessible bilingual switch and mobile nav. No client data is submitted or stored. */
(()=>{'use strict';
 const $=(s)=>document.querySelector(s),$$=(s)=>document.querySelectorAll(s);
 function language(next){
   document.documentElement.lang=next;document.documentElement.dir=next==='ar'?'rtl':'ltr';
   $$('[data-l10n]').forEach(el=>{el.hidden=el.dataset.l10n!==next;});
   const btn=$('#inner-lang');if(btn)btn.textContent=next==='ar'?'English':'العربية';
   try{localStorage.setItem('atLang',next)}catch(e){}
 }
 document.addEventListener('DOMContentLoaded',()=>{
   let defaultLang='en';try{defaultLang=localStorage.getItem('atLang')==='ar'?'ar':'en'}catch(e){}
   language(defaultLang);
   $('#inner-lang')?.addEventListener('click',()=>language(document.documentElement.lang==='ar'?'en':'ar'));
   const menu=$('#inner-menu'),nav=$('#inner-nav');
   menu?.addEventListener('click',()=>{const open=!nav.classList.contains('is-open');nav.classList.toggle('is-open',open);menu.setAttribute('aria-expanded',String(open))});
   nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu?.setAttribute('aria-expanded','false')}));
   document.addEventListener('keydown',(e)=>{if(e.key==='Escape'&&nav?.classList.contains('is-open')){nav.classList.remove('is-open');menu?.setAttribute('aria-expanded','false')}});
 });
})();
