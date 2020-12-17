import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist } from '../../artist';
import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  artists: Observable<Artist[]>;

  constructor(private artistService: ArtistService) {
    this.artists = new Observable<Artist[]>();
  }

  ngOnInit(): void {
    this.artists = this.artistService.getAll();
  }

}
