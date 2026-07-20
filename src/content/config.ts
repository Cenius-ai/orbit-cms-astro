import { defineCollection, z } from 'astro:content';

const postsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().max(300),
    author: z.string(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    coverImage: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  posts: postsCollection,
};
