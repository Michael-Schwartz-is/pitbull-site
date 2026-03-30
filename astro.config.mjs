// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://pitbull-site-dup.pages.dev',
  integrations: [sitemap()],
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
});
