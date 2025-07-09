// ===== loader.js =====
(function() {
  const mapping = {
    'ui-altair':         'https://cdn.example.com/ui-altair.umd.js',
    'ui-bokeh':          'https://cdn.example.com/ui-bokeh.umd.js',
    'ui-comment':        'https://cdn.example.com/ui-comment.umd.js',
    'ui-markmap':        'https://cdn.example.com/ui-markmap.umd.js',
    'ui-multiple-choice':'https://cdn.example.com/ui-multiple-choice.umd.js',
    'ui-test':           'https://cdn.example.com/ui-test.umd.js',
    'ui-pivot':          'https://cdn.example.com/ui-pivot.umd.js',
    'ui-poll':           'https://cdn.example.com/ui-poll.umd.js',
    'ui-question':       'https://cdn.example.com/ui-question.umd.js',
    'ui-tabulator':      'https://cdn.example.com/ui-tabulator.umd.js'
  };
  document.addEventListener('DOMContentLoaded', () => {
    const loadTag = tag => {
      if (tag._loaded) return;
      const url = mapping[tag.tagName.toLowerCase()];
      if (!url) return;
      tag._loaded = true;
      const s = document.createElement('script'); s.src = url;
      document.head.append(s);
    };
    document.querySelectorAll(Object.keys(mapping).join(',')).forEach(loadTag);
    new MutationObserver((_, obs) => document.querySelectorAll(Object.keys(mapping).join(',')).forEach(loadTag))
      .observe(document.body, { childList: true, subtree: true });
  });
})();
