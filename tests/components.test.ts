import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect, beforeAll } from 'vitest';
import Footer from '../src/components/Footer.astro';
import TagList from '../src/components/TagList.astro';
import PostCard from '../src/components/PostCard.astro';
import { socialLinks } from '../src/config';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

describe('Footer', () => {
  it('renders every social link in config order', async () => {
    const html = await container.renderToString(Footer);
    let last = -1;
    for (const { href } of socialLinks) {
      const at = html.indexOf(`href="${href}"`);
      expect(at, `link ${href} present`).toBeGreaterThan(-1);
      expect(at, `link ${href} after the previous one`).toBeGreaterThan(last);
      last = at;
    }
  });
});

describe('TagList', () => {
  it('links each tag to its filter and marks the active one', async () => {
    const html = await container.renderToString(TagList, {
      props: { tags: ['go'], activeTag: 'go' },
    });
    expect(html).toContain('href="/posts/?tag=go"');
    expect(html).toContain('aria-current="page"');
  });
});

describe('PostCard', () => {
  it('formats the date as en-US short', async () => {
    const html = await container.renderToString(PostCard, {
      props: {
        title: 'A post',
        url: '/posts/a-post/',
        date: new Date('2026-11-17'),
        readingMinutes: 4,
        tags: ['go'],
      },
    });
    expect(html).toContain('Nov 17, 2026');
  });
});
