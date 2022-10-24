import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { urlBuilder } from '@app/commons/utils/url-builder';
import { environment as ENV } from '@environment';
import { AlbumService } from './album.service';
import { Album } from '@modules/album/album.interface';

export const mockAlbum: Album = {
  id: 100,
  name: 'Buscando América',
  cover:
    'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
  releaseDate: '1984-08-01T00:00:00.000Z',
  description:
    'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
  genre: 'Salsa',
  recordLabel: 'Elektra',
  tracks: [
    {
      id: 100,
      name: 'Decisiones',
      duration: '5:05'
    },
    {
      id: 101,
      name: 'Desapariciones',
      duration: '6:29'
    }
  ],
  performers: [
    {
      id: 100,
      name: 'Rubén Blades Bellido de Luna',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
      description:
        'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
      birthDate: '1948-07-16T00:00:00.000Z'
    }
  ],
  comments: [
    {
      id: 100,
      description: 'The most relevant album of Ruben Blades',
      rating: 5
    }
  ]
};

describe('AlbumService', () => {
  let service: AlbumService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlbumService]
    });
    service = TestBed.inject(AlbumService);
    // tslint:disable-next-line: deprecation
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should provide getAlbums', () => {
    const url = urlBuilder.services(ENV.api.services.albums);
    // tslint:disable-next-line: deprecation
    service.getAlbums().subscribe((albums: Album[]) => {
      expect(albums).not.toBe(null);
    });
    const req = httpMock.expectOne(url);

    req.flush(mockAlbum);
    expect(req.request.method).toBe('GET');
  });

  it('should provide getAlbumById', () => {
    const id = '100';
    const url = urlBuilder.services(ENV.api.services.albums + `/${id}`);
    // tslint:disable-next-line: deprecation
    service.getAlbumById(id).subscribe((album: Album) => {
      expect(album).not.toBe(null);
    });
    const req = httpMock.expectOne(url);

    req.flush(mockAlbum);
    expect(req.request.method).toBe('GET');
  });

  it('should provide addNewAlbum', () => {
    const url = urlBuilder.services(ENV.api.services.albums);
    const albumInfo = {
      name: 'Yellow',
      cover: 'imagen',
      releaseDate: '2000-01-01',
      description: 'un buen album',
      genre: 'rock',
      recordLabel: 'recodlabel'
    };
    // tslint:disable-next-line: deprecation
    service.addNewAlbum(albumInfo).subscribe((album) => {
      expect(album).not.toBe(null);
    });
    const req = httpMock.expectOne(url);

    req.flush(mockAlbum);
    expect(req.request.method).toBe('POST');
  });

  it('should provide addComments', () => {
    const albumId = 100;
    const comments = [
      {
        collector: { id: 1 },
        description: 'The most relevant album of Ruben Blades',
        rating: 5
      }
    ];
    const url = urlBuilder.services(ENV.api.services.comments, {
      albumId
    });
    // tslint:disable-next-line: deprecation
    service.addComments(albumId, { comments }).subscribe((saved) => {
      expect(saved).not.toBe(null);
    });
    const req = httpMock.expectOne(url);

    req.flush({
      description: 'It is an amazing album 45',
      rating: 4,
      collector: {
        id: 100,
        name: 'Manolo Bellon',
        telephone: '3502457896',
        email: 'manollo@caracol.com.co'
      },
      album: {
        id: 100,
        name: 'Buscando América',
        cover:
          'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
        releaseDate: '1984-08-01T00:00:00.000Z',
        description:
          'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
        genre: 'Salsa',
        recordLabel: 'Elektra'
      },
      id: 1
    });
    expect(req.request.method).toBe('POST');
  });

  it('should provide addTrackToAlbum', () => {
    const albumId = '100';
    const track = {
      name: 'The most relevant track',
      duration: '123'
    };
    const url = urlBuilder.services(
      `${ENV.api.services.albums}/${albumId}/tracks`
    );
    // tslint:disable-next-line: deprecation
    service.addTrackToAlbum(albumId, track).subscribe((saved) => {
      expect(saved).not.toBe(null);
    });
    const req = httpMock.expectOne(url);

    req.flush({
      name: 'Angel',
      duration: '123',
      album: {
        id: 100,
        name: 'Buscando América',
        cover:
          'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
        releaseDate: '1984-08-01T00:00:00.000Z',
        description:
          'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
        genre: 'Salsa',
        recordLabel: 'Elektra'
      },
      id: 1
    });
    expect(req.request.method).toBe('POST');
  });
});
