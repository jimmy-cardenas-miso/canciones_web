import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { removeSubscriptions } from '@app/commons/utils/util';
import { ToastrService } from 'ngx-toastr';

import { AlbumService } from '@modules/album/services/album.service';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { Collector } from '@modules/collectors/entities/colllector.interface';
import { Comments } from '@modules/album/album.interface';

@Component({
  selector: 'app-album-comments',
  templateUrl: './album-comments.component.html',
  styleUrls: ['./album-comments.component.scss']
})
export class AlbumCommentsComponent implements OnInit, OnDestroy {
  public collectors: Collector[];
  private subscriptions: Subscription[] = [];

  @Input() comments: Comments[];
  @Input() idAlbum: number;

  feedbackForm: FormGroup = new FormGroup({
    collector: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    rating: new FormControl(0, Validators.min(1))
  });

  constructor(
    private albumService: AlbumService,
    private collectorService: CollectorService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.collectorService
        .fetchCollectors()
        .subscribe((collectors: Collector[]) => (this.collectors = collectors))
    );
  }

  addNewComment(): void {
    this.subscriptions.push(
      this.albumService
        .addComments(this.idAlbum, {
          // tslint:disable-next-line: radix
          collector: { id: parseInt(this.feedbackForm.value.collector) },
          description: this.feedbackForm.value.description,
          rating: this.feedbackForm.value.rating
        })
        .subscribe(
          (comment: any) => {
            this.comments.push({
              description: comment.description,
              rating: comment.rating,
              id: comment.id
            });
            this.toastr.success(
              comment.id.toString(),
              $localize`Comentario agregado correctamente`
            );
            this.feedbackForm.reset();
          },
          (error) => {
            this.toastr.error(
              error?.error?.message ||
                $localize`No se ha agregado el comentario`,
              $localize`Ha ocurrido un error`
            );
          }
        )
    );
  }

  ngOnDestroy(): void {
    removeSubscriptions(this.subscriptions);
  }
}
