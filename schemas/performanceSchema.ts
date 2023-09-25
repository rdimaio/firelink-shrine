import { z, reference } from "astro:content";
import { mainSchema } from "./mainSchema";

export const performanceSchema = mainSchema
  .extend({
    artists: z.array(reference("artists")).min(1),
    date: z.date(),
    venue: z.string(),
    event: z.string().optional(),
    links: z.array(z.string().url()).optional(),
    gear: z.array(reference("gear")).optional(),
  })
  .strict();

export type performanceSchemaType = z.infer<typeof performanceSchema>;
