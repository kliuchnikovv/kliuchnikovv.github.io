import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

function rootBlock(src: string): string {
  const m = src.match(/:root\s*\{([^}]*)\}/);
  if (!m) throw new Error(':root block not found');
  return m[1];
}

describe('Phase 0 tokens', () => {
  const root = rootBlock(css);
  const grey = /^oklch\(\s*[\d.]+\s+0\s+0\s*\)$/;

  it('neutralises --primary to a chroma-0 grey', () => {
    const m = root.match(/--primary:\s*([^;]+);/);
    expect(m).not.toBeNull();
    expect(m![1].trim()).toMatch(grey);
  });

  it('neutralises --gold to a chroma-0 grey', () => {
    const m = root.match(/--gold:\s*([^;]+);/);
    expect(m).not.toBeNull();
    expect(m![1].trim()).toMatch(grey);
  });

  it('keeps the token structure intact', () => {
    for (const token of ['--content-prose', '--chart-1', '--status-active-bg', '--radius']) {
      expect(root).toContain(token + ':');
    }
  });
});
