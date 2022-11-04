import { Component, Input } from '@angular/core';
import { Album } from '@modules/album/album.interface';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.scss']
})
export class AlbumItemComponent {
  @Input() album: Album;
}
