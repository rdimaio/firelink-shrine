import { z, reference } from "astro:content";
import { mainSchema } from "./mainSchema";

export const trackSchema = mainSchema
  .extend({
    artists: z.array(reference("artists")).min(1),
    meidcode: z.string(),
    started: z.date().optional(),
    finished: z.date().optional(),
    published: z.date(),
    initial_recording_date: z.date().optional(),
    links: z.array(z.string().url()).optional(),
    gear: z.array(reference("gear")).optional(),
  })
  .strict();

export type trackSchemaType = z.infer<typeof trackSchema>;
