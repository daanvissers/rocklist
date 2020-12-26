import { Component, Input, OnInit } from '@angular/core';
import { Artist } from '../artist';

@Component({
  selector: 'app-artist-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public artist!: Artist;

  constructor() { }

  ngOnInit(): void {
  }

}
