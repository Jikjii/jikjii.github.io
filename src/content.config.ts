import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Long-form: theory, criticism, argument.
const essays = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/essays' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Optional standfirst shown under the title. Keep it to one sentence.
    standfirst: z.string().optional(),
    series: z.string().optional(),
    tags: z.array(z.string()).default([]),
    // Set true to keep a piece out of the index while you work on it.
    draft: z.boolean().default(false),
  }),
});

// Short-form: aphorism, notebook entry, the stuff that doesn't want a title page.
const fragments = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/fragments' }),
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { essays, fragments };
