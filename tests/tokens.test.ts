import { readFileSync } from 'node:fs';
import { describe, it, expect } from 'vitest';

const css = readFileSync(new URL('../src/styles/tokens.css', import.meta.url), 'utf8');

function rootBlock(src: string): string {
  const m = src.match(/:root\s*\{([^}]*)\}/);
  if (!m) throw new Error(':root block not found');
  return m[1];
}

describe('Phase 2 target palette', () => {
  const root = rootBlock(css);
  const grey = /^oklch\(\s*[\d.]+\s+0\s+0\s*\)$/;

  it('restores the gold accent on --primary (non-neutral)', () => {
    const m = root.match(/--primary:\s*([^;]+);/);
    expect(m).not.toBeNull();
    const value = m![1].trim();
    expect(value).not.toMatch(grey);
    // gold = oklch(L 0.14 75): non-zero chroma, warm hue.
    expect(value).toMatch(/^oklch\(\s*[\d.]+\s+0\.1[0-9]\s+7[0-9]\s*\)$/);
  });

  it('restores the gold accent on --gold (non-neutral)', () => {
    const m = root.match(/--gold:\s*([^;]+);/);
    expect(m).not.toBeNull();
    const value = m![1].trim();
    expect(value).not.toMatch(grey);
    expect(value).toMatch(/^oklch\(\s*[\d.]+\s+0\.1[0-9]\s+[78][0-9]\s*\)$/);
  });

  it('keeps the token structure intact', () => {
    for (const token of ['--content-prose', '--chart-1', '--status-active-bg', '--radius']) {
      expect(root).toContain(token + ':');
    }
  });
});
