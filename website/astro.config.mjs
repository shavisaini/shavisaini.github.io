// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * `SITE_URL` and `BASE_PATH` are the only two deployment-dependent values.
 *
 * - shavisaini.github.io          -> SITE_URL=https://shavisaini.github.io  BASE_PATH=/
 * - shavisaini.github.io/Shavi    -> SITE_URL=https://shavisaini.github.io  BASE_PATH=/Shavi
 * - a custom domain later         -> SITE_URL=https://example.com           BASE_PATH=/
 *
 * Every internal link and asset goes through `href()` in `src/lib/url.ts`, so
 * moving between those targets is a change to the workflow environment only.
 */
const site = process.env.SITE_URL ?? 'https://shavisaini.github.io';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/credentials'),
    }),
  ],
  image: {
    // Screenshots are the only images Astro processes. Cap the work it does.
    responsiveStyles: true,
    layout: 'constrained',
  },
  devToolbar: { enabled: false },
});
