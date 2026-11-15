/* Cross-browser SVG arrows, including Mobile Safari / iPhone.
 * Rehydrates arrows after the homepage changes language; no icon fonts or unicode arrows.
 */
(()=>{
  'use strict';
  const paths={right:'M5 12h14m-6-6 6 6-6 6',diagonal:'M7 17 17 7M8 7h9v9',chevron:'m9 5 7 7-7 7',up:'M12 19V5m-6 6 6-6 6 6'};
  const targets=[
    ['.section-link','right'],['.cat-action','right'],['.hero-actions .arrow','right'],
    ['.industry-action .need-arrow','diagonal'],['.step-arrow','chevron'],
    ['.footer-whatsapp','diagonal'],['.footer-request .button>span:last-child','right'],
    ['.footer-bottom>a[aria-label="Back to top"]','up'],
    ['#detail-request>span:last-child','right'],['.quote-form button[type="submit"]>span:last-child','diagonal'],
    ['.why-intro .button>span:last-child','right']
  ];
  const isArrow=/[→←↗↖↑›]\s*$/u;
  function icon(type){
    const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
    svg.classList.add('at-arrow-svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.setAttribute('focusable','false');svg.setAttribute('data-arrow',type);
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',paths[type]);svg.append(path);return svg;
  }
  function paint(){
    targets.forEach(([selector,type])=>document.querySelectorAll(selector).forEach(el=>{
      const old=el.querySelector(':scope > svg.at-arrow-svg');
      if(old)return;
      const textNodes=[...el.childNodes].filter(node=>node.nodeType===3);
      for(const node of textNodes){if(isArrow.test(node.textContent)){node.textContent=node.textContent.replace(isArrow,'').trimEnd();break;}}
      if(el.classList.contains('step-arrow')||el.classList.contains('need-arrow')||el.classList.contains('arrow'))el.textContent='';
      el.append(icon(type));
    }));
  }
  window.AT_updateArrows=paint;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',paint,{once:true});else paint();
})();
