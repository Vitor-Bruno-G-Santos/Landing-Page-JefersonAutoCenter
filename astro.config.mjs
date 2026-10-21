import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  site: 'https://Vitor-Bruno-G-Santos.github.io',
  base: '/Lading-Page-JefersonAutoCenter'
});