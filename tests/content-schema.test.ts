import { describe, it, expect } from 'vitest';
import { tagSchema, statusSchema } from '../src/content/validators';

describe('content schema', () => {
  it('accepts lowercase kebab-case tags', () => {
    expect(tagSchema.safeParse(['go', 'esp32', 'go-routines']).success).toBe(true);
  });

  it('rejects an uppercase tag', () => {
    expect(tagSchema.safeParse(['Go']).success).toBe(false);
  });

  it('rejects a tag with a space', () => {
    expect(tagSchema.safeParse(['two words']).success).toBe(false);
  });

  it('rejects an unknown project status', () => {
    expect(statusSchema.safeParse('retired').success).toBe(false);
  });

  it('accepts a known project status', () => {
    expect(statusSchema.safeParse('active').success).toBe(true);
  });
});
