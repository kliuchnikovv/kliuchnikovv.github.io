import rss from '@astrojs/rss';
import { getCollection, render } from 'astro:content';
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { site } from '../config';
import { isPublished } from '../utils/content';

export async function GET(context) {
  const container = await AstroContainer.create();

  const posts = (await getCollection('posts'))
    .filter(isPublished)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const items = [];
  for (const post of posts) {
    const { Content } = await render(post);
    const content = await container.renderToString(Content);
    items.push({
      title: post.data.title,
      description: post.data.description,
      // pubDate is authoritative; updatedDate never re-dates the feed item.
      pubDate: post.data.pubDate,
      link: `/posts/${post.id}/`,
      content,
    });
  }

  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items,
    xmlns: { content: 'http://purl.org/rss/1.0/modules/content/' },
  });
}
