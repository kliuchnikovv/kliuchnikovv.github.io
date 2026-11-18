import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { describe, it, expect, beforeAll } from 'vitest';
import Footer from '../src/components/Footer.astro';
import Header from '../src/components/Header.astro';
import TagList from '../src/components/TagList.astro';
import PostCard from '../src/components/PostCard.astro';
import AuthorBio from '../src/components/AuthorBio.astro';
import { socialLinks, author } from '../src/config';

let container: AstroContainer;
beforeAll(async () => {
  container = await AstroContainer.create();
});

describe('Header', () => {
  it('renders a theme toggle control', async () => {
    const html = await container.renderToString(Header);
    expect(html).toContain('data-theme-toggle');
    expect(html).toMatch(/aria-label="[^"]*[Tt]heme[^"]*"/);
  });
});

describe('AuthorBio', () => {
  it('renders the author identity from config with photo and link to /about', async () => {
    const html = await container.renderToString(AuthorBio);
    expect(html).toContain(author.name);
    expect(html).toContain(`src="${author.avatar}"`);
    expect(html).toContain(`alt="${author.name}"`);
    expect(html).toContain(`href="${author.aboutHref}"`);
  });
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
