import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlbumService } from './services/album.service';
import { CommonsModule } from '@app/commons/commons.module';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AddAlbumComponent } from './components/add-album/add-album.component';
import { AlbumCommentsComponent } from './components/album-comments/album-comments.component';
import { LinkTrackComponent } from './components/link-track/link-track.component';

const AlbumRouting: Routes = [
  {
    path: '',
    component: AlbumsComponent
  },
  {
    path: 'detail/:id',
    component: AlbumDetailComponent
  },
  {
    path: 'add-album/:collectorid',
    component: AddAlbumComponent
  },
  {
    path: 'add-track/:id',
    component: LinkTrackComponent
  }
];

@NgModule({
  declarations: [
    AlbumsComponent,
    AlbumDetailComponent,
    AlbumCommentsComponent,
    AddAlbumComponent,
    LinkTrackComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(AlbumRouting),
    CommonsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AlbumService]
})
export class AlbumModule {}
