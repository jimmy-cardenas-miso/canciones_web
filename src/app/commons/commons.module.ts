import { NgModule } from '@angular/core';
import { AlbumItemComponent } from './components/album-item/album-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlbumItemComponent],
  imports: [RouterModule],
  exports: [AlbumItemComponent]
})
export class CommonsModule {}
