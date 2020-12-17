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
    this.httpClient.post(`${environment.api}/playlists`, playlist);
  }
}
