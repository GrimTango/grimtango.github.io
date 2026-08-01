import { z } from "astro/zod";
import { defineCollection } from "astro:content";
import { glob } from "astro/loaders"; // Required for modern Astro Content Layer

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.date(),
      image: image().optional(),
    }),
});

export const collections = { blog };
