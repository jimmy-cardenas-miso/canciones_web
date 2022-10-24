import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Collector } from '@modules/collectors/entities/colllector.interface';
import { CollectorFactory } from '@testing/factories/collector.factory';

const collectors: Collector[] = new CollectorFactory().createBulk(4);

@Injectable()
export class CollectorServiceMock {
  constructor() {}

  public fetchCollectors(): Observable<Collector[]> {
    return of(collectors);
  }

  public getCollector(id: string): Observable<Collector> {
    return of(collectors[0]);
  }
}
