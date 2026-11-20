import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { TAG_RE, PROJECT_STATUSES } from './validators';

const tags = z.array(z.string().regex(TAG_RE)).default([]);

// Colocated content: src/content/<collection>/<slug>/index.md(x).
// Slug = folder name, so strip the trailing /index from the generated id.
const stripIndex = ({ entry }: { entry: string }) => entry.replace(/\/index\.mdx?$/, '');

const posts = defineCollection({
  loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/posts', generateId: stripIndex }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags,
    project: reference('projects').optional(),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/index.{md,mdx}', base: './src/content/projects', generateId: stripIndex }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    status: z.enum(PROJECT_STATUSES),
    pubDate: z.coerce.date(),
    repo: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    tags,
    cover: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { posts, projects };
