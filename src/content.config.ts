import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const endogenism = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './endogenism' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    order: z.number().optional(),
    icon: z.string().optional(),
  }),
});

export const collections = { endogenism };
