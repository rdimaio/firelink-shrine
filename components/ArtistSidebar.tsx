import type { CollectionEntry } from "astro:content";
import SortedMusicList from "./SortedMusicList";

export interface Props {
  artist: string;
  tracks: CollectionEntry<"tracks">[];
  releases: CollectionEntry<"releases">[];
}

export default function ArtistSidebar({ artist, tracks, releases }: Props) {
  return (
    <div className="sidebar">
      {(() => {
        if (!(releases == undefined || releases.length == 0)) {
          return (
            <div>
              <a href={`/music/${artist}/releases`}><h1>Releases</h1></a>
              <SortedMusicList
                entries={releases}
                entryType="releases"
              ></SortedMusicList>
            </div>  
          );
        }
      })()}
      {(() => {
        if (!(tracks == undefined || tracks.length == 0)) {
          return (
            <div>
              <a href={`/music/${artist}/tracks`}><h1>Tracks</h1></a>
              <SortedMusicList
                entries={tracks}
                entryType="tracks"
              ></SortedMusicList>
            </div>
          );
        }
      })()}
    </div>
  );
}
