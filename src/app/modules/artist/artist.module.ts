import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ArtistListComponent } from './artist-list/artist-list.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistRoutingModule } from './artist-routing-module';
import { ArtistService } from './service/artist.service';
import { ArtistMusicianBandComponent } from './artist-musician-band/artist-musician-band.component';

@NgModule({
  declarations: [
    ArtistListComponent,
    ArtistDetailsComponent,
    ArtistMusicianBandComponent
  ],
  imports: [
    CommonModule,
    ArtistRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ArtistService]
})
export class ArtistModule {}
