/**
 * OG default / fallback template for satori.
 *
 * Использование (Astro API route):
 *   import satori from 'satori';
 *   import { Resvg } from '@resvg/resvg-js';
 *   import { OGDefault } from './og-default';
 *   import fs from 'node:fs';
 *
 *   const geistRegular = fs.readFileSync('public/fonts/Geist-Regular.ttf');
 *   const geistSemibold = fs.readFileSync('public/fonts/Geist-SemiBold.ttf');
 *   const geistMono = fs.readFileSync('public/fonts/GeistMono-Regular.ttf');
 *
 *   const svg = await satori(OGDefault(), {
 *     width: 1200, height: 630,
 *     fonts: [
 *       { name: 'Geist', data: geistRegular, weight: 400, style: 'normal' },
 *       { name: 'Geist', data: geistSemibold, weight: 600, style: 'normal' },
 *       { name: 'Geist Mono', data: geistMono, weight: 400, style: 'normal' },
 *     ],
 *   });
 *   const png = new Resvg(svg).render().asPng();
 *
 * Satori HEX вместо OKLCH, потому что CSS Color 4 пока не поддерживается.
 */

export const OGDefault = () => ({
  type: 'div',
  props: {
    style: {
      width: '1200px',
      height: '630px',
      background: '#FBFBFB',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'Geist, GeistCyr',
      padding: '72px 80px',
      justifyContent: 'space-between',
    },
    children: [
      // Мягкое золотое гало в правом-верхнем
      {
        type: 'div',
        props: {
          style: {
            position: 'absolute',
            top: '-200px',
            right: '-200px',
            width: '600px',
            height: '600px',
            background: 'radial-gradient(circle, #F6E3B8 0%, transparent 70%)',
            opacity: 0.6,
          },
        },
      },

      // Top: brand
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', gap: '12px' },
          children: [
            {
              type: 'div',
              props: {
                style: { fontSize: '32px', fontWeight: 600, letterSpacing: '-0.02em', display: 'flex' },
                children: [
                  { type: 'span', props: { style: { color: '#C98A1F' }, children: 'kv' } },
                  { type: 'span', props: { style: { color: '#272727' }, children: '.' } },
                ],
              },
            },
            { type: 'div', props: { style: { height: '20px', width: '1px', background: '#D9D9D9' } } },
            { type: 'div', props: { style: { fontSize: '15px', color: '#787878' }, children: 'kliuchnikovv.github.io' } },
          ],
        },
      },

      // Middle: headline
      {
        type: 'div',
        props: {
          style: { display: 'flex', flexDirection: 'column', maxWidth: '920px' },
          children: [
            // eyebrow with gold dot
            {
              type: 'div',
              props: {
                style: { display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' },
                children: [
                  {
                    type: 'div',
                    props: {
                      style: {
                        width: '10px',
                        height: '10px',
                        borderRadius: '50%',
                        background: '#C98A1F',
                        boxShadow: '0 0 0 4px #F6E3B8',
                      },
                    },
                  },
                  {
                    type: 'div',
                    props: {
                      style: {
                        fontSize: '16px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        color: '#787878',
                      },
                      children: 'Инженерная тетрадь',
                    },
                  },
                ],
              },
            },
            {
              type: 'div',
              props: {
                style: {
                  fontSize: '72px',
                  lineHeight: 1.05,
                  fontWeight: 600,
                  letterSpacing: '-0.025em',
                  color: '#272727',
                  marginBottom: '20px',
                },
                children: 'Валерий Ключников',
              },
            },
            {
              type: 'div',
              props: {
                style: { fontSize: '26px', lineHeight: 1.45, color: '#555555', maxWidth: '760px' },
                children: 'Go/systems-инженер. Пишу о распределённых системах и о проектах, которые собираю вечерами.',
              },
            },
          ],
        },
      },

      // Bottom
      {
        type: 'div',
        props: {
          style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
          children: [
            { type: 'div', props: { style: { fontSize: '16px', color: '#787878' }, children: 'Barcelona · 8 лет Go' } },
            {
              type: 'div',
              props: {
                style: { display: 'flex', alignItems: 'center', gap: '8px', fontSize: '15px', color: '#787878', fontFamily: 'GeistMono, GeistMonoCyr, GeistMonoSym' },
                children: [
                  // Geist has no → glyph, so draw it (satori renders inline SVG).
                  {
                    type: 'svg',
                    props: {
                      width: 17, height: 17, viewBox: '0 0 24 24', fill: 'none',
                      stroke: '#787878', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round',
                      children: [
                        { type: 'line', props: { x1: 5, y1: 12, x2: 19, y2: 12 } },
                        { type: 'polyline', props: { points: '12 5 19 12 12 19' } },
                      ],
                    },
                  },
                  { type: 'span', props: { children: '/posts' } },
                ],
              },
            },
          ],
        },
      },
    ],
  },
});
