import { describe, it, expect } from 'vitest';
import { formatDate } from '../src/utils/format-date';

describe('formatDate', () => {
  it('formats a date as en-US short', () => {
    expect(formatDate(new Date('2026-11-17'))).toBe('Nov 17, 2026');
  });

  it('is stable regardless of the host timezone (UTC)', () => {
    expect(formatDate(new Date('2026-01-01'))).toBe('Jan 1, 2026');
  });
});
