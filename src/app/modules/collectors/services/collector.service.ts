import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';
import { HttpClient } from '@angular/common/http';
import {
  AlbumToCollectorFavorites,
  ArtistToCollectorFavorites,
  Collector,
  RemoveAlbumToCollectorFavorites
} from '@modules/collectors/entities/colllector.interface';

@Injectable()
export class CollectorService {
  constructor(private http: HttpClient) {}

  public fetchCollectors(): Observable<Collector[]> {
    const url = urlBuilder.services(ENV.api.services.collectors.base);

    return this.http.get<Collector[]>(url);
  }

  public getCollector(id: string): Observable<Collector> {
    const url = urlBuilder.services(
      `${ENV.api.services.collectors.base}/${id}`
    );

    return this.http.get<Collector>(url);
  }

  public addMusician(data: ArtistToCollectorFavorites): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.collectors.add_musician, {
      ...data
    });

    return this.http.post<void>(url, {});
  }

  public removeMusician(data: ArtistToCollectorFavorites): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.collectors.add_musician, {
      ...data
    });

    return this.http.delete<void>(url, {});
  }

  public addAlbum(data: AlbumToCollectorFavorites): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.collectors.add_album, {
      ...data
    });

    return this.http.post<void>(url, {
      price:  10000,
      status: 'Active'
    });
  }

  public removeAlbum(data: RemoveAlbumToCollectorFavorites): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.collectors.add_album, {
      ...data
    });

    return this.http.delete<void>(url, {});
  }
}
