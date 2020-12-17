import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../artists/artist';
import { Song } from './song';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpClient: HttpClient) { }

  public getSongsByArtist(artist: Artist): Observable<Song[]> {
    return this.httpClient.get<Song[]>(`${environment.api}/songs?artist=${artist.name}`);
  }
}
