import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  base: process.env.BASE_PATH || '/',
  site: 'https://tadev999.github.io',
});
