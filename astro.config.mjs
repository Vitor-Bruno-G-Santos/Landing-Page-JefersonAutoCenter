import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const isVercel = Boolean(process.env.VERCEL);

export default defineConfig({
  integrations: [
    react(),
    tailwind()
  ],
  site: isVercel
    ? (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : 'https://jefersonautocenter.vercel.app')
    : 'https://vitor-bruno-g-santos.github.io',
  base: isVercel ? '/' : '/Landing-Page-JefersonAutoCenter'
});