import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from '../playlist';
import { PlaylistService } from '../playlist.service';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public playlist!: Playlist;

  constructor(private playlistService: PlaylistService) { }

  ngOnInit(): void {
  }

  delete(): void {
    this.playlistService.delete(this.playlist);
  }

}
