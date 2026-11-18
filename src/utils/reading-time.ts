const WORDS_PER_MINUTE = 230;

/** Estimated reading time in minutes: words / 230, rounded up, never below 1. */
export function readingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
