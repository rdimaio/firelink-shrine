import { z } from "astro:content";
import { mainSchema } from "./mainSchema";

export const artistSchema = mainSchema
  .extend({
    started: z.date().optional(),
    finished: z.date().optional(),
    other: z.boolean().optional().default(false), // Non-primary aliases (e.g. groups I was not part in for a long time)
    links: z.array(z.string().url()).optional(),
  })
  .strict();

export type artistSchemaType = z.infer<typeof artistSchema>;
