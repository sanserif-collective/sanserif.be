import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://sanserif.be'
});
