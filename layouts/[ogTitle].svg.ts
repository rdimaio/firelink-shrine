import { getCollection } from "astro:content";
import generateOgImage from "../utils/generateOgImage";
import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, ResponseWithEncoding }) =>
  new ResponseWithEncoding(
    await generateOgImage(params.ogTitle),
    undefined,
    "binary"
  );

const postImportResult = await getCollection("posts", ({ data }) => !data.publish);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ data }) => !data.image)
    .map(({ data }) => ({
      params: { ogTitle: data.title },
    }));
}
