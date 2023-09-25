import type { CollectionEntry } from "astro:content";
import getSortedEntries from "../utils/getSortedEntries";
import Datetime from "./Datetime";

export interface Props {
  entries: CollectionEntry<"tracks">[] | CollectionEntry<"releases">[];
  entryType: "releases" | "tracks";
}

export default function SortedMusicList({ entries, entryType }: Props) {
  const sortedEntries = getSortedEntries(entries);
  return (
    <ul>
      {sortedEntries.map((entry: any) => (
        <li>
          <Datetime datetime={entry.data.published} /> ~{" "}
          <a
            href={
              "/music/" +
              [
                entry.slug.split("/")[0],
                entryType,
                entry.slug.split("/").pop(),
              ].join("/")
            }
          >
            {entry.data.title}
          </a>
        </li>
      ))}
    </ul>
  );
}
