import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { Observable } from 'rxjs';
import { Artist } from '../entities/artist.interface';
import { environment as ENV } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
  constructor(private http: HttpClient) {}

  public fetchBands(): Observable<Artist[]> {
    const url = urlBuilder.services(ENV.api.services.bands.base);
    return this.http.get<Artist[]>(url);
  }

  public fetchArtists(): Observable<Artist[]> {
    const url = urlBuilder.services(ENV.api.services.artists);
    return this.http.get<Artist[]>(url);
  }

  public getArtistById(id: string): Observable<Artist> {
    const url = urlBuilder.services(`${ENV.api.services.artists}/${id}`);
    return this.http.get<Artist>(url);
  }

  public getBandById(id: string): Observable<Artist> {
    const url = urlBuilder.services(`${ENV.api.services.bands.base}/${id}`);
    return this.http.get<Artist>(url);
  }

  addMusicians(bandId: number, musicianId: number): Observable<void> {
    const url = urlBuilder.services(ENV.api.services.bands.add_musician, {
      bandId,
      musicianId
    });
    return this.http.post<void>(url, {});
  }
}
