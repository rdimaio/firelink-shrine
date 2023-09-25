import { z, reference } from "astro:content";
import { mainSchema } from "./mainSchema";

export const visualSchema = mainSchema
  .extend({
    artists: z.array(reference("artists")).min(1).optional(),
    ocicode: z.string(),
    started: z.date().optional(),
    finished: z.date().optional(),
    published: z.date().optional(),
    links: z.array(z.string().url()).optional(),
    gear: z.array(reference("gear")).optional(),
  })
  .strict();

export type visualSchemaType = z.infer<typeof visualSchema>;
