import { Song } from "../songs/song";

export interface Playlist {
    title: string,
    songs: Song[];
}