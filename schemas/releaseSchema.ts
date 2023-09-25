import { z, reference } from "astro:content";
import { mainSchema } from "./mainSchema";

export const releaseSchema = mainSchema
  .extend({
    artists: z.array(reference("artists")).min(1),
    type: z.enum(["album", "single", "ep"]),
    started: z.date().optional(),
    finished: z.date().optional(),
    published: z.date(),
    links: z.array(z.string().url()).optional(),
    image: z.string().optional(),
    tracks: z.array(reference("tracks")).min(1).optional(),
  })
  .strict();

export type releaseSchemaType = z.infer<typeof releaseSchema>;
