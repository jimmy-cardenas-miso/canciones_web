import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { Collector } from '@modules/collectors/entities/colllector.interface';
import {
  isNullOrUndefined,
  removeSubscriptions
} from '@app/commons/utils/util';
import { Subscription } from 'rxjs';
import { Album } from '@modules/album/album.interface';
import { AlbumService } from '@modules/album/services/album.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collector-detail',
  templateUrl: './collector-detail.component.html',
  styleUrls: ['./collector-detail.component.scss']
})
export class CollectorDetailComponent implements OnInit, OnDestroy {
  public collector: Collector;
  public albums: Album[];

  private subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private service: CollectorService,
    private albumsService: AlbumService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCollector();
    this.getAlbums();
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }

  public removeArtistToFavorites(id: number): void {
    this.subscriptions.push(
      this.service
        .removeMusician({
          collectorId: this.id,
          musicianId: id.toString()
        })
        .subscribe(
          () => {
            this.toastr.success($localize`Artista borrado`);
            this.getCollector();
          },
          (error) => {
            this.toastr.error(
              error?.error?.message || $localize`Error desconocido`,
              $localize`No hemos podido borrar el artista`
            );
          }
        )
    );
  }

  public removeAlbumToFavorites(id: number): void {
    this.subscriptions.push(
      this.service
        .removeAlbum({
          collectorId: this.id,
          albumId: id.toString()
        })
        .subscribe(
          () => {
            this.toastr.success($localize`Albúm borrado`);
            this.getCollector();
          },
          (error) => {
            this.toastr.error(
              error?.error?.message || $localize`Error desconocido`,
              $localize`No hemos podido borrar el albúm`
            );
          }
        )
    );
  }

  public searchAlbumDetail(albumId: number): Album {
    return !isNullOrUndefined(this.albums) && !isNullOrUndefined(albumId)
      ? this.albums.find((album) => album.id === albumId)
      : null;
  }

  private getCollector(): void {
    this.collector = undefined;
    this.subscriptions.push(
      this.service
        .getCollector(this.id)
        .subscribe((collector: Collector) => (this.collector = collector))
    );
  }

  private getAlbums(): void {
    this.albums = undefined;
    this.subscriptions.push(
      this.albumsService
        .getAlbums()
        .subscribe((albums: Album[]) => (this.albums = albums))
    );
  }

  public addAlbum(): void {
    this.router.navigateByUrl(`/albums/add-album/${this.collector.id}`);
  }

  get id(): string {
    return this.params.id;
  }

  get params(): Params {
    return this.route.snapshot.params;
  }
}
