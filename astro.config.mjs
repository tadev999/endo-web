import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkStripBookChrome from './src/lib/remark-strip-book-chrome.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://endogenism.com',
  markdown: {
    remarkPlugins: [remarkStripBookChrome],
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
