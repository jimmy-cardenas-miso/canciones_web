import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { removeSubscriptions } from '@app/commons/utils/util';
import { AlbumService } from '@modules/album/services/album.service';
import { Album } from '@modules/album/album.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collector-add-album',
  templateUrl: './collector-add-album.component.html',
  styleUrls: ['./collector-add-album.component.scss']
})
export class CollectorAddAlbumComponent implements OnInit, OnDestroy {
  public albums: Album[];

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private albumService: AlbumService,
    private collectorService: CollectorService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.albumService
        .getAlbums()
        .subscribe((albums: Album[]) => (this.albums = albums))
    );
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }

  public addAlbumToFavorites(album: Album): void {
    this.subscriptions.push(
      this.collectorService
        .addAlbum({
          collectorId: this.id,
          albumId: album.id.toString()
        })
        .subscribe(
          () => {
            this.toastr.success(
              album.name,
              $localize`Albúm agregado correctamente`
            );
            this.router.navigateByUrl('/collectors/' + this.id);
          },
          (error) => {
            this.toastr.error(
              error?.error?.message ||
                $localize`No hemos podido agregar el albúm`,
              $localize`Ha ocurrido un error`
            );
          }
        )
    );
  }

  get id(): string {
    return this.params.id;
  }

  get params(): Params {
    return this.route.snapshot.params;
  }
}
