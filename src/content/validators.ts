import { z } from 'astro/zod';

/** Tags: flat, lowercase, kebab-case. */
export const TAG_RE = /^[a-z0-9-]+$/;

/** Project lifecycle statuses, active-first ordering handled at display time. */
export const PROJECT_STATUSES = ['active', 'paused', 'archived'] as const;

// Standalone schema fragments — the content config enforces the same rules via
// the shared constants above; these exist so the rules are unit-testable
// without the astro:content virtual module.
export const tagSchema = z.array(z.string().regex(TAG_RE));
export const statusSchema = z.enum(PROJECT_STATUSES);
