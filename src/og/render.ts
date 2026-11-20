/**
 * Shared OG renderer: satori turns a template node into SVG, resvg rasterizes
 * it to a 1200×630 PNG. Used by the /og/*.png build endpoints.
 */
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { ogFonts } from './fonts';

export async function renderOgPng(node: unknown, width = 1200, height = 630) {
  // The templates return satori's lightweight element objects, not JSX.
  const svg = await satori(node as Parameters<typeof satori>[0], {
    width,
    height,
    fonts: ogFonts,
  });
  const png = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
  })
    .render()
    .asPng();
  // Copy into a fresh ArrayBuffer-backed Uint8Array: resvg returns a Node
  // Buffer (Uint8Array<ArrayBufferLike>), which TS will not accept as BodyInit.
  const bytes = new Uint8Array(png.byteLength);
  bytes.set(png);
  return bytes;
}
