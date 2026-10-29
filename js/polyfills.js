/** Minimal compatibility fallbacks without an external polyfill service.
 * This project targets evergreen Chrome/Edge/Firefox/Safari. */
if (!('requestIdleCallback' in window)) {
  window.requestIdleCallback = cb => window.setTimeout(() => cb({didTimeout:false,timeRemaining:()=>0}),1);
  window.cancelIdleCallback = id => window.clearTimeout(id);
}
if (!('scrollTo' in Element.prototype)) {
  Element.prototype.scrollTo = function(options){this.scrollTop=typeof options==='number'?options:(options?.top||0);};
}
