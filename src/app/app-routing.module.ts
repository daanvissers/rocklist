import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent as ArtistDetailsComponent } from './artists/pages/details/details.component';
import { DetailsComponent as PlaylistDetailsComponent } from './playlists/pages/details/details.component';
import { ListComponent as ArtistListComponent } from './artists/pages/list/list.component';
import { ListComponent as PlaylistsListComponent } from './playlists/pages/list/list.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/artists' },
  { path: 'artists', component: ArtistListComponent },
  { path: 'artists/:id', component: ArtistDetailsComponent },
  { path: 'playlists', component: PlaylistsListComponent },
  { path: 'playlists/:id', component: PlaylistDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
