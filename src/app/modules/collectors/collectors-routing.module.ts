import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectorsComponent } from '@modules/collectors/components/collectors/collectors.component';
import { CollectorDetailComponent } from '@modules/collectors/components/collector-detail/collector-detail.component';
import { CollectorAddComponent } from '@modules/collectors/components/collector-add/collector-add.component';
import { CollectorAddAlbumComponent } from '@modules/collectors/components/collector-add-album/collector-add-album.component';

const routes: Routes = [
  {
    path: '',
    component: CollectorsComponent
  },
  {
    path: ':id',
    component: CollectorDetailComponent
  },
  {
    path: ':id/add',
    component: CollectorAddComponent
  },
  {
    path: ':id/add-album',
    component: CollectorAddAlbumComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectorsRoutingModule {}
