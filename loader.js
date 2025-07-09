// ===== loader.js =====
(function() {
  const mapping = {
    'ui-altair':         'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-altair.umd.js',
    'ui-bokeh':          'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-bokeh.umd.js',
    'ui-comment':        'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-comment.umd.js',
    'ui-markmap':        'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-markmap.umd.js',
    'ui-multiple-choice':'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-multiple-choice.umd.js',
    'ui-test':           'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-test.umd.js',
    'ui-pivot':          'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-pivot.umd.js',
    'ui-poll':           'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-poll.umd.js',
    'ui-question':       'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-question.umd.js',
    'ui-tabulator':      'https://cdn.jsdelivr.net/gh/hmelberg/components@main/dist/ui-tabulator.umd.js'
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
