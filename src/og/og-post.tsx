/**
 * OG per-post template for satori.
 * Параметры берутся из frontmatter поста.
 *
 * Правило: title переносится по словам, до 3 строк; дальше — "…".
 * Первые 3 тега, дата, время чтения.
 *
 * Вертикальная золотая полоса 8 px слева — единственный «большой» золотой
 * элемент. На fallback он не повторяется (там гало).
 */

interface PostData {
  title: string;
  date: Date;
  readingMinutes: number;
  tags: string[];
  slug: string;
}

export const OGPost = (data: PostData) => {
  const dateFmt = new Intl.DateTimeFormat('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' }).format(data.date);
  const tags = data.tags.slice(0, 3);

  return {
    type: 'div',
    props: {
      style: {
        width: '1200px',
        height: '630px',
        background: '#FBFBFB',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Geist',
      },
      children: [
        // 8-px gold bar left
        {
          type: 'div',
          props: {
            style: {
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: '8px',
              background: '#C98A1F',
            },
          },
        },

        // Content
        {
          type: 'div',
          props: {
            style: {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              padding: '60px 80px 48px',
            },
            children: [
              // Brand strip
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', gap: '12px' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { fontSize: '24px', fontWeight: 600, letterSpacing: '-0.02em', display: 'flex' },
                        children: [
                          { type: 'span', props: { style: { color: '#C98A1F' }, children: 'kv' } },
                          { type: 'span', props: { style: { color: '#272727' }, children: '.' } },
                        ],
                      },
                    },
                    { type: 'div', props: { style: { height: '16px', width: '1px', background: '#D9D9D9' } } },
                    {
                      type: 'div',
                      props: { style: { fontSize: '14px', color: '#787878' }, children: 'kliuchnikovv.github.io / посты' },
                    },
                  ],
                },
              },

              // Post content
              {
                type: 'div',
                props: {
                  style: { display: 'flex', flexDirection: 'column', maxWidth: '1000px' },
                  children: [
                    // tags
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', gap: '14px', fontSize: '16px', color: '#787878', marginBottom: '24px' },
                        children: tags.map(tag => ({
                          type: 'span',
                          props: { children: `#${tag}` },
                        })),
                      },
                    },
                    // title
                    {
                      type: 'div',
                      props: {
                        style: {
                          fontSize: '60px',
                          lineHeight: 1.1,
                          fontWeight: 600,
                          letterSpacing: '-0.025em',
                          color: '#272727',
                          marginBottom: '24px',
                        },
                        children: data.title,
                      },
                    },
                    // meta
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', alignItems: 'center', gap: '16px', fontSize: '18px', color: '#787878' },
                        children: [
                          { type: 'span', props: { children: dateFmt } },
                          { type: 'span', props: { children: '·' } },
                          { type: 'span', props: { children: `${data.readingMinutes} мин чтения` } },
                        ],
                      },
                    },
                  ],
                },
              },

              // Author + URL
              {
                type: 'div',
                props: {
                  style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
                  children: [
                    {
                      type: 'div',
                      props: {
                        style: { display: 'flex', alignItems: 'center', gap: '14px' },
                        children: [
                          {
                            type: 'div',
                            props: {
                              style: {
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                background: '#F6E3B8',
                                color: '#6B4E12',
                                fontWeight: 600,
                                fontSize: '14px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              },
                              children: 'VK',
                            },
                          },
                          {
                            type: 'div',
                            props: {
                              style: { fontSize: '16px', color: '#555555', fontWeight: 500 },
                              children: 'Валерий Ключников',
                            },
                          },
                        ],
                      },
                    },
                    {
                      type: 'div',
                      props: {
                        style: { fontSize: '14px', color: '#787878', fontFamily: 'Geist Mono' },
                        children: `kliuchnikovv.github.io/posts/${data.slug}/`,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  };
};
