import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    titleTt: z.string(),
    description: z.string(),
    descriptionTt: z.string(),
    pubDate: z.coerce.date(),
    image: z.string().optional().default('/images/blog/placeholder.svg'),
    category: z.string(),
    categoryTt: z.string(),
    readTime: z.number(),
    featured: z.boolean().optional().default(false),
  }),
});
export const collections = { blog };