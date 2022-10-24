import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectorsRoutingModule } from './collectors-routing.module';
import { CollectorsComponent } from './components/collectors/collectors.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { CollectorDetailComponent } from './components/collector-detail/collector-detail.component';
import { CollectorAddComponent } from './components/collector-add/collector-add.component';
import { CollectorAddAlbumComponent } from './components/collector-add-album/collector-add-album.component';
import { CommonsModule } from '@app/commons/commons.module';

@NgModule({
  declarations: [
    CollectorsComponent,
    CollectorAddComponent,
    CollectorDetailComponent,
    CollectorAddAlbumComponent
  ],
  imports: [CommonModule, CommonsModule, CollectorsRoutingModule],
  providers: [CollectorService]
})
export class CollectorsModule {}
