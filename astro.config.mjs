import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import { fileURLToPath } from 'url';

export default defineConfig({
  site: 'https://www.coachsportif.example',
  output: 'static',
  integrations: [tailwind(), netlify()],
  markdown: {
    syntaxHighlight: 'prism',
  },
  vite: {
    resolve: {
      alias: {
        '~': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  },
});