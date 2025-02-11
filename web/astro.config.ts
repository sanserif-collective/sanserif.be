import tailwind from '@astrojs/tailwind';
import { defineConfig, envField } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: 'https://sanserif.be',
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),
  experimental: {
    env: {
      schema: {
        BASE_URL: envField.string({
          context: 'server',
          access: 'public',
          default: 'http://127.0.0.1:4321',
        }),
        STRAPI_URL: envField.string({
          context: 'server',
          access: 'secret',
          default: 'http://strapi:1337/graphql',
        }),
        PLAUSIBLE_DOMAIN: envField.string({
          context: 'server',
          access: 'public',
          optional: true,
        }),
        PLAUSIBLE_URL: envField.string({
          context: 'server',
          access: 'public',
          default: 'http://127.0.0.1:4321',
        }),
      },
    },
  },
  server: {
    host: true,
  },
});
