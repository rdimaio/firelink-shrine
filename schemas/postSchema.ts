import { z } from "astro:content";
import { mainSchema } from "./mainSchema";

export const postSchema = mainSchema
  .extend({
    started: z.date().optional(),
    finished: z.date().optional(),
    published: z.date(),
    image: z.string().optional(),
  })
  .strict();
export type postSchemaType = z.infer<typeof postSchema>;
