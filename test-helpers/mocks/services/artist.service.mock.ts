import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArtistFactory } from '../../factories/artist.factory';
import { Artist } from '../../../src/app/modules/artist/entities/artist.interface';
const artists: Artist[] = new ArtistFactory().createBulk(4);

@Injectable()
export class ArtistServiceMock {
  constructor() {}

  public fetchArtists(): Observable<Artist[]> {
    return of(artists);
  }

  public fetchBands(): Observable<Artist[]> {
    return of(artists);
  }

  public getArtistById(id: string): Observable<Artist> {
    return of(artists[0]);
  }
}
