import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from '../../playlist';
import { PlaylistService } from '../../playlist.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  playlists: Observable<Playlist[]>;
  newListValue = '';

  constructor(private playlistService: PlaylistService) {
    this.playlists = new Observable<Playlist[]>();
  }

  ngOnInit(): void {
    this.getPlaylists();
  }

  public createNew(): void {
    let playlist = {
      title: this.newListValue,
      songs: []
    } as Playlist;

    this.playlistService.create(playlist);
    this.getPlaylists();
  }

  delete(playlist: Playlist): void {
    this.playlistService.delete(playlist);
    this.getPlaylists();
  }

  getPlaylists(): void {
    this.playlists = this.playlistService.getAll();
  }

}
