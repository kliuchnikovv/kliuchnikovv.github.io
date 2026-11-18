import type { APIRoute, GetStaticPaths } from 'astro';
import type { CollectionEntry } from 'astro:content';
import { getCollection } from 'astro:content';
import { Cover } from '../../og/cover';
import { renderOgPng } from '../../og/render';

/** One 16:9 cover per project at /covers/<slug>.png, from its frontmatter. */
export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await getCollection('projects');
  return projects.map((project) => ({ params: { slug: project.id }, props: { project } }));
};

export const GET: APIRoute = async ({ props }) => {
  const project = props.project as CollectionEntry<'projects'>;
  const png = await renderOgPng(
    Cover({
      title: project.data.title,
      tagline: project.data.tagline,
      tech: project.data.tech,
      status: project.data.status,
    }),
    1200,
    675,
  );
  return new Response(new Blob([png], { type: 'image/png' }), {
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
