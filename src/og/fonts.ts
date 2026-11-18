/**
 * Static Geist weights for satori (woff — satori does not read woff2 or the
 * variable fonts BaseLayout ships). Resolved from @fontsource at build time.
 *
 * The OG cards carry Russian copy. satori keeps only ONE font per name+weight,
 * so it will not fall back across same-named subsets; instead each subset is
 * registered under its own family name and the templates list them as
 * fallbacks (see FAMILY). satori then resolves each glyph down that list.
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';
import type { SatoriOptions } from 'satori';

const require = createRequire(import.meta.url);
const load = (spec: string): Buffer => readFileSync(require.resolve(spec));

/** Font-family stacks the OG templates reference. */
export const FAMILY = {
  sans: 'Geist, GeistCyr',
  mono: 'GeistMono, GeistMonoCyr, GeistMonoSym',
} as const;

type Entry = { name: string; weight: 400 | 600; file: string };

const entries: Entry[] = [
  { name: 'Geist', weight: 400, file: '@fontsource/geist/files/geist-latin-400-normal.woff' },
  { name: 'Geist', weight: 600, file: '@fontsource/geist/files/geist-latin-600-normal.woff' },
  { name: 'GeistCyr', weight: 400, file: '@fontsource/geist/files/geist-cyrillic-400-normal.woff' },
  { name: 'GeistCyr', weight: 600, file: '@fontsource/geist/files/geist-cyrillic-600-normal.woff' },
  { name: 'GeistMono', weight: 400, file: '@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff' },
  { name: 'GeistMonoCyr', weight: 400, file: '@fontsource/geist-mono/files/geist-mono-cyrillic-400-normal.woff' },
  { name: 'GeistMonoSym', weight: 400, file: '@fontsource/geist-mono/files/geist-mono-symbols2-400-normal.woff' },
];

export const ogFonts: SatoriOptions['fonts'] = entries.map((e) => ({
  name: e.name,
  data: load(e.file),
  weight: e.weight,
  style: 'normal' as const,
}));
