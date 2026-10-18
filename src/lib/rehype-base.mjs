// Prefixes root-relative links and images in Markdown with the site base path,
// so content written as "/about-us/" works on GitHub Pages sub-paths too.
// Also lazy-loads images and wraps tables so they scroll on small screens.
export default function rehypeBase({ base = '/' } = {}) {
  const prefix = base.replace(/\/$/, '');
  const fix = (v) =>
    typeof v === 'string' && v.startsWith('/') && !v.startsWith('//') && prefix && !v.startsWith(prefix + '/')
      ? prefix + v
      : v;

  const walk = (node, parent) => {
    if (node.type === 'element') {
      const p = node.properties || {};
      if (node.tagName === 'a' && p.href) {
        p.href = fix(p.href);
        if (/^https?:\/\//.test(p.href)) {
          p.target = '_blank';
          p.rel = ['noopener'];
        }
      }
      if (node.tagName === 'img' && p.src) {
        p.src = fix(p.src);
        p.loading = 'lazy';
        p.decoding = 'async';
      }
      if (node.tagName === 'table' && parent && !(parent.properties?.className || []).includes('table-wrap')) {
        const idx = parent.children.indexOf(node);
        parent.children[idx] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrap'] },
          children: [node],
        };
        return;
      }
    }
    if (node.children) [...node.children].forEach((c) => walk(c, node));
  };
  return (tree) => walk(tree, null);
}
