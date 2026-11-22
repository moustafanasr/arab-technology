/* Minimal, optional compatibility helpers for older embedded browsers.
   The core site does not require these APIs to navigate. */
if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
if (!Element.prototype.closest) Element.prototype.closest = function(selector) {
  var el=this; while(el && el.nodeType===1){if(el.matches(selector))return el; el=el.parentElement;} return null;
};
