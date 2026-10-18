import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    categories: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['cinchona', 'hyoscine', 'antimalarial', 'nicotine']),
    grade: z.string().optional(),
    cas: z.string().optional(),
    formula: z.string().optional(),
    image: z.string().optional(),
    coa: z.string().optional(),
    msds: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { blog, products };
