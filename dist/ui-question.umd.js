// ===== ui-question.umd.js =====
(function(root, factory) {
  if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.UIQuestion = factory();
}(typeof self !== 'undefined' ? self : this, function() {
  class UIQuestion extends HTMLElement {
    static get observedAttributes() { return ['question','answer','showAnswer','hint','caseSensitive','options']; }
    constructor() { super(); this._opts = {}; this.attachShadow({ mode: 'open' }); }
    attributeChangedCallback(n, o, v) {
      try { this._opts[n] = (n==='options')? JSON.parse(v) : (n==='showAnswer'||n==='caseSensitive'? (v!==null) : v); } catch { this._opts[n] = v; }
      this.render();
    }
    connectedCallback() { this.render(); }
    render() {
      const { question, answer, showAnswer, hint } = this._opts;
      this.shadowRoot.innerHTML = '';
      const q = document.createElement('div'); q.textContent = question || '';
      this.shadowRoot.append(q);
      if (hint) { const h = document.createElement('div'); h.textContent = `Hint: ${hint}`; this.shadowRoot.append(h); }
      if (showAnswer) { const a = document.createElement('div'); a.textContent = `Answer: ${answer}`; this.shadowRoot.append(a); }
    }
  }
  if (!customElements.get('ui-question')) customElements.define('ui-question', UIQuestion);
  return UIQuestion;
}));
