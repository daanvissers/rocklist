import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Song } from 'src/app/songs/song';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {

  song!: Song;
  playlists: Observable<Playlist[]>;

  constructor(private playlistService: PlaylistService, public dialogRef: MatDialogRef<SelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
    {
      this.playlists = new Observable<Playlist[]>();
    }

  ngOnInit(): void {
    this.playlists = this.playlistService.getAll();
    this.song = this.data.song;
  }

  addToSelected(playlist: Playlist): void {
    this.playlistService.addSong(playlist, this.song.id);
  }

}
