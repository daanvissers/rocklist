import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Playlist } from './playlist';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  constructor(private httpClient: HttpClient) { }

  public get(id: number): Observable<Playlist> {
    return this.httpClient.get<Playlist>(`${environment.api}/playlists/${id}`);
  }

  public getAll(): Observable<Playlist[]> {
    return this.httpClient.get<Playlist[]>(`${environment.api}/playlists`);
  }

  public create(playlist: Playlist) {
    this.httpClient.post<Playlist>(`${environment.api}/playlists`, playlist).subscribe();
  }

  public delete(playlist: Playlist) {
    this.httpClient.delete<Playlist>(`${environment.api}/playlists/${playlist.id}`).subscribe();
  }

  public addSong(playlist: Playlist, songId: string) {
    this.httpClient.patch(`${environment.api}/playlists/${playlist.id}`, 
        {"songs": [...playlist.songs, +songId]}).subscribe();
  }
}
