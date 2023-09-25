import { z, reference } from "astro:content";
import { mainSchema } from "./mainSchema";

export const techSchema = mainSchema
  .extend({
    started: z.date().optional(),
    finished: z.date().optional(),
    published: z.date(),
    links: z.array(z.string().url()).optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
    gear: z.array(reference("gear")).optional(),
  })
  .strict();

export type techSchemaType = z.infer<typeof techSchema>;
