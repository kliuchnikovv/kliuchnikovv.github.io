import type { CollectionEntry } from 'astro:content';

/**
 * Draft policy: in production drafts are excluded, in dev they are kept.
 * Astro 5's content layer has no config-level `filter`, so this runs at every
 * getCollection call site (pages) instead of in the collection definition.
 */
export function isPublished(entry: CollectionEntry<'posts'>): boolean {
  return import.meta.env.PROD ? entry.data.draft !== true : true;
}
