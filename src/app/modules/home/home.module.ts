import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumService } from '@modules/album/services/album.service';
import { ArtistService } from '@modules/artist/service/artist.service';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
  providers: [AlbumService, ArtistService]
})
export class HomeModule {}
