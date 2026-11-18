import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { describe, it, expect, beforeAll } from 'vitest';

const root = fileURLToPath(new URL('..', import.meta.url));
const dist = (p: string) => fileURLToPath(new URL(`../dist/${p}`, import.meta.url));
const read = (p: string) => readFileSync(dist(p), 'utf8');

beforeAll(() => {
  // Build as the real deploy does: production mode. Vitest sets NODE_ENV=test
  // in this process; without overriding it the child build would run non-prod
  // and keep drafts, which is exactly what this test must catch.
  // Build in a clean, production-like env — the way CI runs it. Vitest's own
  // process env carries vite/vitest vars that flip the build out of production
  // (keeping drafts), so we pass only what `npm run build` needs.
  execSync('npm run build', {
    cwd: root,
    stdio: 'inherit',
    env: {
      PATH: process.env.PATH,
      HOME: process.env.HOME,
      NODE_ENV: 'production',
    },
  });
}, 180000);

describe('production build output', () => {
  it('lists the published post and excludes the draft', () => {
    const html = read('posts/index.html');
    expect(html).toContain('Setting up the blog');
    expect(html).not.toContain('Hello, world');
  });

  it('emits full-content RSS, newest first, without the draft', () => {
    const xml = read('rss.xml');
    expect(xml).toContain('<content:encoded>');
    expect(xml).toContain('Setting up the blog');
    expect(xml).not.toContain('Hello, world');
  });

  it('moves the resume to /about', () => {
    const html = read('about/index.html');
    expect(html).toContain('Playneta');
  });

  it('does not generate a page for the draft post', () => {
    expect(() => read('posts/hello-world/index.html')).toThrow();
  });
});
