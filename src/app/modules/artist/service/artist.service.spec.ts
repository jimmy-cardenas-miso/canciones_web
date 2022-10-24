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

  it('should be created', () => {
    const service: ArtistService = TestBed.inject(ArtistService);
    expect(service).toBeTruthy();
  });

  it('should to call fetch Artists', () => {
    const { service, httpTestingController } = setup();
    const url = urlBuilder.services(ENV.api.services.artists);
    const mockData = {};
    service.fetchArtists().subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call fetch Band', () => {
    const { service, httpTestingController } = setup();
    const url = urlBuilder.services(ENV.api.services.bands.base);
    const mockData = {};
    service.fetchBands().subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call get Artist by ID ', () => {
    const { service, httpTestingController } = setup();
    const id = '123';
    const url = urlBuilder.services(`${ENV.api.services.artists}/${id}`);
    const mockData = {};
    service.getArtistById(id).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call get Band by ID ', () => {
    const { service, httpTestingController } = setup();
    const id = '1';
    const url = urlBuilder.services(`${ENV.api.services.bands.base}/${id}`);
    const mockData = {};
    service.getBandById(id).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should provide addMusicians', () => {
    const { service, httpTestingController } = setup();
    const bandId = 1;
    const musicianId = 100;
    const url = urlBuilder.services(ENV.api.services.bands.add_musician, {
      bandId,
      musicianId
    });
    service.addMusicians(bandId, musicianId).subscribe((saved) => {
      expect(saved).not.toBe(null);
    });
    const req = httpTestingController.expectOne(url);

    req.flush({
      band: {
        creationDate: '1970-01-01T00:00:00.000Z',
        description:
          'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.',
        id: 101,
        image:
          'https://pm1.narvii.com/6724/a8b29909071e9d08517b40c748b6689649372852v2_hq.jpg',
        name: 'Queen'
      },
      birthDate: '1948-07-16T00:00:00.000Z',
      description:
        'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
      id: 100,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
      name: 'Rubén Blades Bellido de Luna'
    });
    expect(req.request.method).toBe('POST');
  });
});
