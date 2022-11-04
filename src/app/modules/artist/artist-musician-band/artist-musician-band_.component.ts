import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { removeSubscriptions } from '@app/commons/utils/util';
import { ToastrService } from 'ngx-toastr';

import { ArtistService } from '../service/artist.service';
import { Artist } from '@modules/artist/entities/artist.interface';

@Component({
  selector: 'app-artist-musician-band',
  templateUrl: './artist-musician-band.component.html',
  styleUrls: ['./artist-musician-band.component.scss']
})
export class ArtistMusicianBandComponent implements OnInit, OnDestroy {
  public artists: Artist[];
  private subscriptions: Subscription[] = [];

  @Input() musicians: any;
  @Input() bandId: number;

  // tslint:disable-next-line: typedef
  artistForm = new FormGroup({
    artist: new FormControl('', Validators.required)
  });

  constructor(
    private artistService: ArtistService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.artistService
        .fetchArtists()
        .subscribe((artists: Artist[]) => (this.artists = artists))
    );
  }

  // tslint:disable-next-line: typedef
  addMusician() {
    this.subscriptions.push(
      this.artistService
        // tslint:disable-next-line: radix
        .addMusicians(this.bandId, parseInt(this.artistForm.value.artist))
        .subscribe(
          (musician: any) => {
            this.musicians.push({
              image: musician.image,
              name: musician.name,
              id: musician.id
            });
            this.toastr.success(
              musician.id.toString(),
              $localize`Músico agregado correctamente`
            );
            this.artistForm.reset();
          },
          (error) => {
            this.toastr.error(
              error?.error?.message || $localize`No se ha agregado el músico`,
              $localize`Ha ocurrido un error`
            );
          }
        )
    );
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }
  private getMusic(): void {
    
  }
  private getBand(): void {
    
  }
}
