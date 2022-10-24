import { Component, OnInit } from '@angular/core';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { Collector } from '@modules/collectors/entities/colllector.interface';

@Component({
  selector: 'app-collectors',
  templateUrl: './collectors.component.html',
  styleUrls: ['./collectors.component.scss']
})
export class CollectorsComponent implements OnInit {
  public collectors: Collector[];

  constructor(private service: CollectorService) {}

  ngOnInit(): void {
    this.fetchCollectors();
  }

  private fetchCollectors(): void {
    this.service
      .fetchCollectors()
      .subscribe((collectors: Collector[]) => (this.collectors = collectors));
  }
}
