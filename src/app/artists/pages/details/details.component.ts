import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Artist } from '../../artist';
import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  artist: Observable<Artist>;
  id: number;

  constructor(private artistService: ArtistService, private route: ActivatedRoute) {
    this.artist = new Observable<Artist>();
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    // Get param from snapshot, as this component does not intend to update URL
    this.artist = this.artistService.get(this.id);
  }

}
