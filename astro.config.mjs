import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jikjii.github.io',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  markdown: {
    // Straight quotes, double-hyphen dashes. A typewriter smartens nothing.
    smartypants: false,
    gfm: true,
    shikiConfig: { theme: 'github-light' },
  },
});
