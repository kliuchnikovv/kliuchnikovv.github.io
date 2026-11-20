import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkMermaid from './src/plugins/remark-mermaid.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://kliuchnikovv.github.io',
  integrations: [mdx(), sitemap()],
  // Default (sharp) image service: optimizes imported assets to AVIF/WebP.
  markdown: {
    // Dual-theme Shiki: emits CSS vars for both; dark applies under [data-theme="dark"].
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
      wrap: false,
    },
    remarkPlugins: [remarkMermaid],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
  },
});
