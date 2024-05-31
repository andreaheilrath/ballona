import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],

  site: 'https://andreaheilrath.github.io/ballona/',
  base: '/ballona', // repository name for GitHub pages, '/' for local dev
  output: 'static',
  outDir: './docs',
  build: {
    assets: 'astro'
  }

});
