import tailwind from '@astrojs/tailwind';
import { defineConfig, envField } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: false,
    },
  }),
  env: {
    schema: {
      BASE_URL: envField.string({
        context: 'server',
        access: 'public',
      }),
      STRAPI_URL: envField.string({
        context: 'server',
        access: 'public',
      }),
      STRAPI_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      PLAUSIBLE_DOMAIN: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
      }),
      PLAUSIBLE_URL: envField.string({
        context: 'server',
        access: 'public',
        optional: true,
      }),
    },
  },
  server: {
    host: true,
  },
});
