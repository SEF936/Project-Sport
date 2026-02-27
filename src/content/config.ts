import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()).transform(val => {
      // Normalise date to YYYY-MM-DD format if it's a full ISO string
      if (typeof val === 'string' && val.includes('T')) {
        return val.split('T')[0];
      }
      return val;
    }),
    excerpt: z.string(),
    coverImage: z.string(),
    tags: z.array(z.string()).default([]),
    videoUrl: z.string().optional().default(''),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};