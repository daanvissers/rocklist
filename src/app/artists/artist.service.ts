import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  public get(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(`${environment.api}/artists/${id}`);
  }

  public getAll(): Observable<Artist[]> {
    return this.httpClient.get<Artist[]>(`${environment.api}/artists`);
  }
}
