// @ts-check
import { defineConfig } from 'astro/config';

import icon from 'astro-icon';

const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabricelajoie.github.io',
  base: isProd ? '/portfolio/' : '/',
  integrations: [icon()],
});