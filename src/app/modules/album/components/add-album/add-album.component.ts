import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { AlbumService } from '../../services/album.service';
import { removeSubscriptions } from '@app/commons/utils/util';

@Component({
  selector: 'app-add-album',
  templateUrl: './add-album.component.html',
  styleUrls: ['./add-album.component.scss']
})
export class AddAlbumComponent implements OnInit, OnDestroy {
  public albumForm: FormGroup;
  public album: object;
  private collectorId: string;

  private subscriptions: Subscription[] = [];

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private albumServices: AlbumService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.albumForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      cover: ['', Validators.required],
      description: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      recordLabel: ['', [Validators.required]],
      releaseDate: ['', Validators.required]
    });
    this.collectorId = this.route.snapshot.params.collectorid;
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }

  public cancelForm(): void {
    this.router.navigateByUrl(`/collectors/${this.collectorId}`);
  }

  public createAlbum(): void {
    this.album = {
      name: this.albumForm.controls.name.value,
      cover: this.albumForm.controls.cover.value,
      releaseDate: this.albumForm.controls.releaseDate.value,
      description: this.albumForm.controls.description.value,
      genre: this.albumForm.controls.genre.value,
      recordLabel: this.albumForm.controls.recordLabel.value
    };

    this.subscriptions.push(
      this.albumServices.addNewAlbum(this.album).subscribe(
        () => {
          this.toastr.success(
            this.albumForm.controls.name.value,
            $localize`Albúm agregado correctamente`
          );
          this.router.navigateByUrl('/collectors');
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
}
