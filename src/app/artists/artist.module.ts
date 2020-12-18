import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent as ArtistListComponent } from './pages/list/list.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from '../app-routing.module';
import { ArtistService } from './artist.service';
import { SongsModule } from '../songs/songs.module';

@NgModule({
  declarations: [
    DetailsComponent,
    ArtistListComponent,
  ],
  imports: [
    CommonModule,
    SongsModule,
    AppRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [ ArtistService ],
  exports: [ DetailsComponent ]
})
export class ArtistModule { }
