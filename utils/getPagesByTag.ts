import parseTag from "./parseTag";
import type { CollectionEntry } from "astro:content";

const pageHasTag = (page: CollectionEntry<"any">, tag: string) => {
  let tags: string[] = [];
  page.data.tags.forEach(tag => (tags = tags.concat(parseTag(tag))));
  return tags.includes(tag);
};

const getPagesByTag = (pages: CollectionEntry<"any">[], tag: string) =>
  pages.filter(page => pageHasTag(page, tag));

export default getPagesByTag;
