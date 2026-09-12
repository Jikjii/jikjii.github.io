import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { site, href } from '../site';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  return rss({
    title: site.title,
    description: site.description,
    site: context.site,
    items: essays
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((entry) => ({
        title: entry.data.title,
        pubDate: entry.data.date,
        description: entry.data.standfirst ?? '',
        link: href(`/essays/${entry.id}`),
      })),
  });
}
