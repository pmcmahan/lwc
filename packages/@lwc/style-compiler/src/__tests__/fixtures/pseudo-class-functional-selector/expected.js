

var cachedStylesheet

function generateCss(hostSelector, shadowSelector, nativeShadow) {
  return [":not(p)", shadowSelector, " {}p:not(.foo, .bar)", shadowSelector, " {}:matches(ol, li, span)", shadowSelector, " {}"].join('');
}

function stylesheet(hostSelector, shadowSelector, nativeShadow, hasAdoptedStyleSheets) {
  if (nativeShadow && hasAdoptedStyleSheets) {
    if (!cachedStylesheet) {
      cachedStylesheet = new CSSStyleSheet();
      cachedStylesheet.replaceSync(generateCss(hostSelector, shadowSelector, nativeShadow));
    }
    return cachedStylesheet; // fast path
  }
  return generateCss(hostSelector, shadowSelector, nativeShadow);
}
export default [stylesheet];