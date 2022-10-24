import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '@modules/album/services/album.service';
import { ArtistService } from '@modules/artist/service/artist.service';
import { Album } from '@modules/album/album.interface';
import { Artist } from '@modules/artist/entities/artist.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  albums: Album[] = [];
  musicians: Artist[] = [];

  constructor(
    private albumService: AlbumService,
    private artistService: ArtistService
  ) {}

  ngOnInit(): void {
    this.subscription = this.albumService
      .getAlbums()
      .subscribe((albums: Album[]) => (this.albums = albums));

    this.subscription = this.artistService
      .fetchArtists()
      .subscribe((musicians: Artist[]) => (this.musicians = musicians));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
