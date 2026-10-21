import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  site: 'https://vitor-bruno-g-santos.github.io',
  base: '/Landing-Page-JefersonAutoCenter'
});