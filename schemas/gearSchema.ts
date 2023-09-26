import { z } from "astro:content";
import { mainSchema } from "./mainSchema";

export const gearSchema = mainSchema
  .extend({
    status: z.enum(["owned", "sold", "lost"]),
    price: z
      .object({
        amount: z.number(),
        currency: z.enum("EUR, GBP"),
      })
      .optional(),
    started: z.date().optional(),
    finished: z.date().optional(),
    published: z.date().optional(),
    manufactured: z.date().optional(),
    bought_from: z.string().optional(),
    links: z.array(z.string().url()).optional(),
    image: z
      .object({
        src: z.string(),
        alt: z.string(),
      })
      .optional(),
  })
  .strict();

export type gearSchemaType = z.infer<typeof gearSchema>;
