import type { APIRoute, GetStaticPaths } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { OGPost } from '../../og/og-post';
import { renderOgPng } from '../../og/render';
import { readingMinutes } from '../../utils/reading-time';

/** One PNG per published post at /og/<slug>.png, built from its frontmatter. */
export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getCollection('posts', (p) => !p.data.draft);
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
};

export const GET: APIRoute = async ({ props }) => {
  const post = props.post as CollectionEntry<'posts'>;
  const png = await renderOgPng(
    OGPost({
      title: post.data.title,
      date: post.data.pubDate,
      readingMinutes: readingMinutes(post.body ?? ''),
      tags: post.data.tags,
      slug: post.id,
    }),
  );
  return new Response(new Blob([png], { type: 'image/png' }), {
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
