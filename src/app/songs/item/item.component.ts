import { Component, Input, OnInit } from '@angular/core';
import { Song } from '../song';

@Component({
  selector: 'app-song-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public song!: Song;

  constructor() { }

  ngOnInit(): void {
  }

}
