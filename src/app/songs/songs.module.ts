import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { SongService } from './song.service';

@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule
  ],
  providers: [SongService],
  exports: [ItemComponent]
})
export class SongsModule { }
