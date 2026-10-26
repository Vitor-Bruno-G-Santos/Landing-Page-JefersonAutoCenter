/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#002d80',
          darkBlue: '#001f5c',
          yellow: '#ffcc00',
          yellowHover: '#e6b800',
          whatsapp: '#25D366',
        }
      }
    },
  },
  plugins: [],
}