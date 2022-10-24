import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorDetailComponent } from './collector-detail.component';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumService } from '@modules/album/services/album.service';
import { ToastrService } from 'ngx-toastr';
import { Album } from '@modules/album/album.interface';
import { AlbumFactory } from '@testing/factories/album.factory';
import { Artist } from '@modules/artist/entities/artist.interface';
import { ArtistFactory } from '@testing/factories/artist.factory';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestComponent } from '@testing/component/test.component';

const album: Album = new AlbumFactory().create();
const albums: Album[] = new AlbumFactory().createBulk(4);
const artist: Artist = new ArtistFactory().create();

describe('CollectorDetailComponent', () => {
  let component: CollectorDetailComponent;
  let fixture: ComponentFixture<CollectorDetailComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'getCollector',
    'removeMusician',
    'removeAlbum'
  ]);
  const albumServiceSpy = jasmine.createSpyObj('CollectorService', [
    'getAlbums'
  ]);
  const toastrServiceSpy = jasmine.createSpyObj('ArtistService', [
    'success',
    'error'
  ]);
  const getCollector = collectorServiceSpy.getCollector as jasmine.Spy;
  const removeMusician = collectorServiceSpy.removeMusician as jasmine.Spy;
  const removeAlbum = collectorServiceSpy.removeAlbum as jasmine.Spy;
  const getAlbums = albumServiceSpy.getAlbums as jasmine.Spy;
  const toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'albums/add-album/:collectorid', component: TestComponent }
        ])
      ],
      declarations: [CollectorDetailComponent],
      providers: [
        {
          provide: CollectorService,
          useValue: collectorServiceSpy
        },
        {
          provide: AlbumService,
          useValue: albumServiceSpy
        },
        {
          provide: ToastrService,
          useValue: toastrServiceSpy
        },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: { id: 100 }
            }
          }
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorDetailComponent);
    component = fixture.componentInstance;

    getCollector.and.returnValue(
      of({
        id: 100,
        name: 'Manolo Bellon',
        telephone: '3502457896',
        email: 'manollo@caracol.com.co',
        comments: [
          {
            id: 100,
            description: 'The most relevant album of Ruben Blades',
            rating: 5
          }
        ],
        favoritePerformers: [
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
        collectorAlbums: [{ id: 100, price: 35, status: 'Active' }]
      })
    );

    getAlbums.and.returnValue(
      of([
        {
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
        },
        {
          id: 102,
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
              id: 102,
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
              id: 102,
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
              id: 102,
              description: 'The most relevant album of Ruben Blades',
              rating: 5
            }
          ]
        }
      ])
    );

    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
    removeMusician.and.returnValue(of({}));
    removeAlbum.and.returnValue(of({}));

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should remove artist to favorites', () => {
    fixture.ngZone.run(() =>
      expect(component.removeArtistToFavorites(artist.id)).toBeUndefined()
    );
  });

  it('should generate error on add artist to favorites', () => {
    removeMusician.and.returnValue(
      throwError({ status: 400, message: 'Error' })
    );
    fixture.detectChanges();
    fixture.ngZone.run(() =>
      expect(component.removeArtistToFavorites(artist.id)).toBeUndefined()
    );
  });

  it('should remove album to favorites', () => {
    fixture.ngZone.run(() =>
      expect(component.removeAlbumToFavorites(album.id)).toBeUndefined()
    );
  });

  it('should generate error on add album to favorites', () => {
    removeAlbum.and.returnValue(throwError({ status: 400, message: 'Error' }));
    fixture.detectChanges();
    fixture.ngZone.run(() =>
      expect(component.removeAlbumToFavorites(album.id)).toBeUndefined()
    );
  });

  it('should search album detail', () => {
    component.albums = albums;
    fixture.detectChanges();
    expect(component.searchAlbumDetail(albums[0].id)).toEqual(albums[0]);
  });

  it('should search album detail to be null', () => {
    component.albums = null;
    fixture.detectChanges();
    expect(component.searchAlbumDetail(album.id)).toBeNull();
  });

  it('should redirect to add album', () => {
    fixture.ngZone.run(() => expect(component.addAlbum()).toBeUndefined());
  });
});
