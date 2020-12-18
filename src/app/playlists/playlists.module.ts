import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent as PlaylistItemComponent } from './item/item.component';
import { PlaylistService } from './playlist.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from '../app-routing.module';
import { SelectionComponent } from './selection/selection.component';
import { SongsModule } from '../songs/songs.module';
import { ListComponent } from './pages/list/list.component';
import { ArtistModule } from '../artists/artist.module';
import { DetailsComponent as PlaylistDetailsComponent } from './pages/details/details.component';

@NgModule({
  declarations: [PlaylistItemComponent, SelectionComponent, PlaylistDetailsComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    SongsModule,
    ArtistModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [PlaylistService],
  exports: [PlaylistItemComponent, PlaylistDetailsComponent, SelectionComponent]
})
export class PlaylistsModule { }
