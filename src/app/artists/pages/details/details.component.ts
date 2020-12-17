import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Song } from 'src/app/songs/song';
import { SongService } from 'src/app/songs/song.service';
import { Artist } from '../../artist';
import { ArtistService } from '../../artist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  subscriptions: Subscription;

  artist!: Artist;
  songs: Observable<Song[]>;
  id: number;

  constructor(private artistService: ArtistService, private route: ActivatedRoute,
              private songService: SongService) {
    this.subscriptions = new Subscription();
    this.songs = new Observable<Song[]>();
    this.id = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    // Get param from snapshot, as this component does not intend to update URL
    let artistSub = this.artistService.get(this.id).subscribe(res => {
      this.artist = res;
      this.songs = this.songService.getSongsByArtist(this.artist);
    });
    
    this.subscriptions.add(artistSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

}
