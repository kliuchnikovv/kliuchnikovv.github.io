import { defineConfig, passthroughImageService } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  site: 'https://kliuchnikovv.github.io',
  integrations: [mdx(), sitemap()],
  // Phase 0 has no images; the passthrough service avoids the native `sharp`
  // dependency. Phase 1 (real post images) installs sharp and drops this.
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    // Dual-theme Shiki: emits CSS vars for both; dark applies under [data-theme="dark"].
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
});
