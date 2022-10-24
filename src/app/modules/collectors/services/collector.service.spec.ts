import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';

describe('CollectorService', () => {
  const setup = (): {
    service: CollectorService;
    httpTestingController: HttpTestingController;
  } => {
    const service = TestBed.inject(CollectorService);
    const httpTestingController = TestBed.inject(HttpTestingController);
    return { service, httpTestingController };
  };
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CollectorService]
    })
  );

  it('should be created', () => {
    const service: CollectorService = TestBed.inject(CollectorService);
    expect(service).toBeTruthy();
  });

  it('should to call fetch collectors', () => {
    const { service, httpTestingController } = setup();
    const url = urlBuilder.services(ENV.api.services.collectors.base);
    const mockData = {};
    service.fetchCollectors().subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call get collector', () => {
    const { service, httpTestingController } = setup();
    const id = '123';
    const url = urlBuilder.services(
      `${ENV.api.services.collectors.base}/${id}`
    );
    const mockData = {};
    service.getCollector(id).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('GET');
  });

  it('should to call add musician', () => {
    const { service, httpTestingController } = setup();
    const collectorId = '123';
    const musicianId = '456';
    const url = urlBuilder.services(ENV.api.services.collectors.add_musician, {
      collectorId,
      musicianId
    });
    const mockData = {};
    service.addMusician({ collectorId, musicianId }).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('POST');
  });

  it('should to call remove musician', () => {
    const { service, httpTestingController } = setup();
    const collectorId = '123';
    const musicianId = '456';
    const url = urlBuilder.services(ENV.api.services.collectors.add_musician, {
      collectorId,
      musicianId
    });
    const mockData = {};
    service.removeMusician({ collectorId, musicianId }).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('DELETE');
  });

  it('should to call add album', () => {
    const { service, httpTestingController } = setup();
    const collectorId = '123';
    const albumId = '456';
    const url = urlBuilder.services(ENV.api.services.collectors.add_album, {
      collectorId,
      albumId
    });
    const mockData = {};
    service.addAlbum({ collectorId, albumId }).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('POST');
  });

  it('should to call remove album', () => {
    const { service, httpTestingController } = setup();
    const collectorId = '123';
    const albumId = '456';
    const url = urlBuilder.services(ENV.api.services.collectors.add_album, {
      collectorId,
      albumId
    });
    const mockData = {};
    service.removeAlbum({ collectorId, albumId }).subscribe((data) => {});
    const req = httpTestingController.expectOne(url);
    req.flush(mockData);
    expect(req.request.method).toBe('DELETE');
  });
});
