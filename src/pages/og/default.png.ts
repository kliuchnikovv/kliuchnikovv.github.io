import type { APIRoute } from 'astro';
import { OGDefault } from '../../og/og-default';
import { renderOgPng } from '../../og/render';

/** Static fallback card at /og/default.png (see site.defaultOgImage). */
export const GET: APIRoute = async () => {
  const png = await renderOgPng(OGDefault());
  return new Response(new Blob([png], { type: 'image/png' }), {
    headers: { 'Cache-Control': 'public, max-age=31536000, immutable' },
  });
};
