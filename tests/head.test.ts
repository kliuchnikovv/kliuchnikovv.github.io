import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect, beforeAll } from 'vitest';
import Head from '../src/components/Head.astro';
import { site } from '../src/config';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

const render = (props: Record<string, unknown>) => container.renderToString(Head, { props });

describe('Head', () => {
  it('falls back to the site default OG image when none is given', async () => {
    const html = await render({ title: 'X', canonicalPath: '/' });
    expect(html).toContain(`content="${site.url}${site.defaultOgImage}"`);
  });

  it('uses a provided ogImage over the default', async () => {
    const html = await render({ title: 'X', canonicalPath: '/', ogImage: '/og/x.png' });
    expect(html).toContain(`content="${site.url}/og/x.png"`);
  });

  it('sets og:type to article when asked', async () => {
    const html = await render({ title: 'X', canonicalPath: '/posts/x/', ogType: 'article' });
    expect(html).toContain('property="og:type" content="article"');
  });
});
