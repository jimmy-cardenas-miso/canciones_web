import { Component, OnDestroy, OnInit } from '@angular/core';
import { AlbumService } from '@modules/album/services/album.service';
import { Album } from '@modules/album/album.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  albums: Album[] = [];

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.subscription = this.albumService
      .getAlbums()
      .subscribe((albums: Album[]) => (this.albums = albums));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
