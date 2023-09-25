import { z } from "astro:content";

export const mainSchema = z
  .object({
    title: z.string(),
    description: z.string().optional(),
    pageSlug: z.string().optional(),
    publish: z.boolean().default(true),
    published: z.date().optional(),
    tags: z.array(z.string()).default(["untagged"]),
  })
  .strict();

export type mainSchemaType = z.infer<typeof mainSchema>;
