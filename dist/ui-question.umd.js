// ===== ui-question.umd.js =====
(function (root, factory) {
  if (typeof define === 'function' && define.amd) define([], factory);
  else if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.UIQuestion = factory();
}(typeof self !== 'undefined' ? self : this, function () {
  class UIQuestion extends HTMLElement {
    static get observedAttributes() {
      return ['question','answer','showAnswer','hint','caseSensitive','options'];
    }
    constructor() {
      super();
      this._opts = {};
      this.attachShadow({ mode: 'open' });
    }
    attributeChangedCallback(name, oldVal, newVal) {
      try {
        if (name === 'options') this._opts[name] = JSON.parse(newVal);
        else if (name === 'showAnswer' || name === 'caseSensitive') this._opts[name] = newVal !== null;
        else this._opts[name] = newVal;
      } catch {
        this._opts[name] = newVal;
      }
      this.render();
    }
    connectedCallback() {
      this.render();
    }
    render() {
      const { question, answer, showAnswer, hint } = this._opts;
      this.shadowRoot.innerHTML = '';
      const q = document.createElement('div');
      q.textContent = question || '';
      this.shadowRoot.appendChild(q);

      if (hint) {
        const h = document.createElement('div');
        h.textContent = `Hint: ${hint}`;
        this.shadowRoot.appendChild(h);
      }

      if (showAnswer) {
        const a = document.createElement('div');
        a.textContent = `Answer: ${answer}`;
        this.shadowRoot.appendChild(a);
      }
    }
  }

  // only define once
  if (!customElements.get('ui-question')) {
    customElements.define('ui-question', UIQuestion);
  }

  return UIQuestion;
}));
