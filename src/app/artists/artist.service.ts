import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Artist } from './artist';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }
}
