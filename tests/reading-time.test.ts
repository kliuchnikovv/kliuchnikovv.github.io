import { describe, it, expect } from 'vitest';
import { readingMinutes } from '../src/utils/reading-time';

describe('readingMinutes', () => {
  it('rounds a tiny post up to 1, never 0', () => {
    expect(readingMinutes('one')).toBe(1);
    expect(readingMinutes('')).toBe(1);
  });

  it('counts 230 words as 1 minute', () => {
    expect(readingMinutes(Array(230).fill('word').join(' '))).toBe(1);
  });

  it('rounds 231 words up to 2 minutes', () => {
    expect(readingMinutes(Array(231).fill('word').join(' '))).toBe(2);
  });

  it('counts 460 words as 2 minutes', () => {
    expect(readingMinutes(Array(460).fill('word').join(' '))).toBe(2);
  });
});
