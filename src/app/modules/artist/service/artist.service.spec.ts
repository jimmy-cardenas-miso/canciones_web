import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { urlBuilder } from '@app/commons/utils/url-builder';

import { ArtistService } from './artist.service';
import { environment as ENV } from '@environment';

describe('ArtistService', () => {
  const setup = (): {
    service: ArtistService;
    httpTestingController: HttpTestingController;
  } => {
    const service = TestBed.inject(ArtistService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    return { service, httpTestingController };
  };
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ArtistService]
    })
  );

});
