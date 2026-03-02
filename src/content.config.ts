import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
      level: z.string().optional(),       // "A1", "A2", "B1"...
      sublevel: z.string().optional(),    // "A1.1", "A1.2"...
      order: z.number().optional(),       // 1, 2, 3... orden dentro del subnivel
      category: z.string().optional(),    // "Gramática", "Vocabulario"...
    }),
});

export const collections = { blog };