/**
 * Project cover card for satori — a 16:9 banner shown on project cards and at
 * the top of a project page. Warm paper background and the gold accent match
 * the OG cards and the site's Casanomi palette; HEX because satori has no OKLCH.
 *
 * Fonts resolve via the OG family stacks (see src/og/fonts.ts).
 */
interface CoverData {
  title: string;
  tagline: string;
  tech: string[];
  status: 'active' | 'paused' | 'archived';
}

const STATUS: Record<CoverData['status'], { label: string; dot: string; fg: string }> = {
  active: { label: 'Active', dot: '#3F9E54', fg: '#2E6B3D' },
  paused: { label: 'Paused', dot: '#C98A1F', fg: '#6B4E12' },
  archived: { label: 'Archived', dot: '#9A9A9A', fg: '#6E6E6E' },
};

export const Cover = (data: CoverData) => {
  const status = STATUS[data.status];
  const tech = data.tech.slice(0, 5);

  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '675px',
        background: '#FCF8F0',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        fontFamily: 'Geist, GeistCyr',
        padding: '64px 72px',
      },
      children: [
        // Soft gold halo, top-right.
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: '-180px',
              right: '-180px',
              width: '520px',
              height: '520px',
              background: 'radial-gradient(circle, #F3DFB0 0%, transparent 70%)',
              opacity: 0.55,
            },
          },
        },

        // Top: brand + status
        {
          type: 'div',
          props: {
            style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
            children: [
              {
                type: 'div',
                props: {
                  style: { fontSize: '26px', fontWeight: 600, letterSpacing: '-0.02em', display: 'flex' },
                  children: [
                    { type: 'span', props: { style: { color: '#C98A1F' }, children: 'kv' } },
                    { type: 'span', props: { style: { color: '#272727' }, children: '.' } },
                  ],
                },
              },
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: '10px', fontSize: '16px', color: status.fg },
                  children: [
                    { type: 'div', props: { style: { width: '10px', height: '10px', borderRadius: '50%', background: status.dot } } },
                    { type: 'span', props: { style: { textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }, children: status.label } },
                  ],
                },
              },
            ],
          },
        },

        // Middle: title + tagline
        {
          type: 'div',
          props: {
            style: { display: 'flex', flexDirection: 'column', maxWidth: '960px' },
            children: [
              {
                type: 'div',
                props: {
                  style: { fontSize: '76px', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-0.03em', color: '#222222', marginBottom: '18px' },
                  children: data.title,
                },
              },
              {
                type: 'div',
                props: {
                  style: { fontSize: '28px', lineHeight: 1.4, color: '#575757', maxWidth: '820px' },
                  children: data.tagline,
                },
              },
            ],
          },
        },

        // Bottom: tech chips
        {
          type: 'div',
          props: {
            style: { display: 'flex', gap: '12px', flexWrap: 'wrap' },
            children: tech.map((t) => ({
              type: 'div',
              props: {
                style: {
                  display: 'flex',
                  fontFamily: 'GeistMono, GeistMonoCyr, GeistMonoSym',
                  fontSize: '17px',
                  color: '#6B4E12',
                  background: '#F7ECD2',
                  border: '1px solid #EADBB4',
                  borderRadius: '8px',
                  padding: '6px 14px',
                },
                children: t,
              },
            })),
          },
        },
      ],
    },
  };
};
