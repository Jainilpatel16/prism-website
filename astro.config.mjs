// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeBase from './src/lib/rehype-base.mjs';

// SITE_URL / BASE_PATH let the same code deploy to GitHub Pages
// (https://<user>.github.io/prism-website/) or to the real domain at "/".
const site = process.env.SITE_URL || 'https://prisminltd.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ filter: (page) => !page.includes('/404') })],
  markdown: {
    rehypePlugins: [[rehypeBase, { base }]],
  },
});
