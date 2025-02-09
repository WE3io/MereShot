import { defineCollection, z } from 'astro:content';

const pagesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        date: z.date().optional(),
        featured: z.boolean().optional().default(false),
        draft: z.boolean().optional().default(false),
        image: z.string().optional(),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = {
    pages: pagesCollection,
}; 