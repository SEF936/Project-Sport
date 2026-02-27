import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()),
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