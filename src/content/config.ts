import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['getting-started', 'fundamentals', 'advanced', 'reference']),
    order: z.number().optional().default(999),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { docs };
