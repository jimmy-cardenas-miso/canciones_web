import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomeModule)
      },
      {
        path: 'albums',
        loadChildren: () =>
          import('../album/album.module').then((m) => m.AlbumModule)
      },
      {
        path: 'collectors',
        loadChildren: () =>
          import('../collectors/collectors.module').then(
            (m) => m.CollectorsModule
          )
      },
      {
        path: 'artists',
        loadChildren: () =>
          import('../artist/artist.module').then((m) => m.ArtistModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
