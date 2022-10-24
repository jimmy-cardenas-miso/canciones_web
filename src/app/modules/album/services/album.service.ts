import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';

import { Album, Track } from '@modules/album/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    const url = urlBuilder.services(ENV.api.services.albums);
    return this.http.get<Album[]>(url);
  }

  getAlbumById(id: string): Observable<Album> {
    const url = urlBuilder.services(`${ENV.api.services.albums}/${id}`);
    return this.http.get<Album>(url);
  }

  addNewAlbum(albumInfo: object): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.albums);

    return this.http.post<void>(url, albumInfo);
  }

  addComments(albumId: number, comments: any): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.comments, {
      albumId
    });
    return this.http.post<void>(url, { ...comments });
  }

  addTrackToAlbum(albumId: string, trackInfo: Track): Observable<object> {
    const url = urlBuilder.services(
      `${ENV.api.services.albums}/${albumId}/tracks`
    );
    return this.http.post<object>(url, trackInfo);
  }
}
