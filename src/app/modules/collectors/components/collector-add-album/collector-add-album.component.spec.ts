import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorAddAlbumComponent } from './collector-add-album.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { ArtistService } from '@modules/artist/service/artist.service';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { AlbumService } from '@modules/album/services/album.service';
import { ToastrService } from 'ngx-toastr';
import { AlbumFactory } from '@testing/factories/album.factory';
import { Album } from '@modules/album/album.interface';
import { TestComponent } from '@testing/component/test.component';
import { TestingModule } from '@testing/testing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const album: Album = new AlbumFactory().create();

describe('CollectorAddAlbumComponent', () => {
  let component: CollectorAddAlbumComponent;
  let fixture: ComponentFixture<CollectorAddAlbumComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'addAlbum'
  ]);

  const albumServiceSpy = jasmine.createSpyObj('ArtistService', ['getAlbums']);

  const toastrServiceSpy = jasmine.createSpyObj('ArtistService', [
    'success',
    'error'
  ]);

  const addAlbum = collectorServiceSpy.addAlbum as jasmine.Spy;
  const getAlbums = albumServiceSpy.getAlbums as jasmine.Spy;
  const toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule,
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: 'collectors/:id', component: TestComponent }
        ])
      ],
      declarations: [CollectorAddAlbumComponent],
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
    fixture = TestBed.createComponent(CollectorAddAlbumComponent);
    component = fixture.componentInstance;

    addAlbum.and.returnValue(of({}));
    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
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

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add album to favorites', () => {
    fixture.ngZone.run(() =>
      expect(component.addAlbumToFavorites(album)).toBeUndefined()
    );
  });

  it('should generate error on add album to favorites', () => {
    addAlbum.and.returnValue(throwError({ status: 400, message: 'Error' }));
    fixture.detectChanges();
    fixture.ngZone.run(() =>
      expect(component.addAlbumToFavorites(album)).toBeUndefined()
    );
  });
});
