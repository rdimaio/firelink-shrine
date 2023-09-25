import type { CollectionEntry } from "astro:content";

const getSortedEntries = (
  entries: CollectionEntry<"any">[]
) =>
  entries.sort(
    (a: any, b: any) =>
      Math.floor(new Date(b.data.published).getTime() / 1000) -
      Math.floor(new Date(a.data.published).getTime() / 1000)
  );

export default getSortedEntries;
