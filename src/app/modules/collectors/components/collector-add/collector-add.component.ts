import { Component, OnDestroy, OnInit } from '@angular/core';
import { ArtistService } from '@modules/artist/service/artist.service';
import { Artist } from '@modules/artist/entities/artist.interface';
import { Subscription } from 'rxjs';
import { removeSubscriptions } from '@app/commons/utils/util';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-collector-add',
  templateUrl: './collector-add.component.html',
  styleUrls: ['./collector-add.component.scss']
})
export class CollectorAddComponent implements OnInit, OnDestroy {
  public artists: Artist[];

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private artistService: ArtistService,
    private collectorService: CollectorService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.artistService
        .fetchArtists()
        .subscribe((artists: Artist[]) => (this.artists = artists))
    );
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }

  public addArtistToFavorites(artist: Artist): void {
    this.subscriptions.push(
      this.collectorService
        .addMusician({
          collectorId: this.id,
          musicianId: artist.id.toString()
        })
        .subscribe(
          () => {
            this.toastr.success(
              artist.name,
              $localize`Artista agregado correctamente`
            );
            this.router.navigateByUrl('/collectors/' + this.id);
          },
          (error) => {
            this.toastr.error(
              error?.error?.message ||
                $localize`No hemos podido agregar al artista`,
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
