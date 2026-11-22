/* GSAP progressive enhancement: no navigation or form depends on animation. */
(() => {
  'use strict';
  const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !window.gsap) return;
  const gsap = window.gsap;
  if (window.Lenis && window.matchMedia?.('(hover:hover) and (pointer:fine)').matches) {
    const lenis = new window.Lenis({ duration:1.07, smoothWheel:true, wheelMultiplier:.95 });
    if (window.ScrollTrigger) lenis.on('scroll', window.ScrollTrigger.update);
    gsap.ticker.add(time => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  const intro = document.querySelector('.hero-text');
  if (intro) {
    gsap.from(intro.querySelectorAll('.eyebrow,h1,p,.hero-buttons,.hero-points'), {
      opacity:0, y:17, duration:.7, ease:'power2.out', stagger:.08, clearProps:'all'
    });
    const device = document.querySelector('.hero-device');
    if (device) gsap.from(device,{opacity:0,y:23,duration:.9,delay:.18,ease:'power2.out',clearProps:'all'});
    const hero = document.querySelector('.hero-visual');
    if (hero && window.matchMedia?.('(hover:hover) and (pointer:fine)').matches) {
      hero.addEventListener('pointermove', e => {
        const r = hero.getBoundingClientRect();
        const x=(e.clientX-r.left)/r.width-.5, y=(e.clientY-r.top)/r.height-.5;
        gsap.to('.hero-floating-card',{x:x*-10,y:y*-9,duration:.6,ease:'power2.out'});
        gsap.to('.hero-orbit',{rotation:x*8,duration:.7,ease:'power2.out'});
      },{passive:true});
      hero.addEventListener('pointerleave',()=>{
        gsap.to('.hero-floating-card',{x:0,y:0,duration:.7,ease:'power2.out'});
        gsap.to('.hero-orbit',{rotation:0,duration:.7,ease:'power2.out'});
      });
    }
  }
  if (window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);
    gsap.utils.toArray('[data-reveal]').forEach(el=>gsap.from(el,{opacity:0,y:17,duration:.62,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 95%',once:true},clearProps:'all'}));
  }
})();
