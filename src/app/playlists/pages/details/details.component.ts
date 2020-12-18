import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Song } from 'src/app/songs/song';
import { SongService } from 'src/app/songs/song.service';
import { Playlist } from '../../playlist';
import { PlaylistService } from '../../playlist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit, OnDestroy {

  playlist!: Playlist;
  songs: Observable<Song>[];
  subscriptions: Subscription;

  constructor(private playlistService: PlaylistService, private route: ActivatedRoute,
              private songService: SongService) {
    this.subscriptions = new Subscription();
    this.songs = [];
  }

  ngOnInit(): void {
    // Get param from snapshot, as this component does not intend to update URL
    let playlistSub = this.playlistService
        .get(+this.route.snapshot.paramMap.get('id')!)
        .subscribe(playlist => {
          this.playlist = playlist;
          this.getSongs();
    });
    
    this.subscriptions.add(playlistSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  getSongs(): void {
    this.playlist.songs.forEach(songId => {
      let song = this.songService.getSong(songId);
      this.songs.push(song);
    });

    console.log(this.songs);
  }

}
