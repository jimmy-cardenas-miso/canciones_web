import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';

import { AlbumService } from '../album/services/album.service';
import { ArtistService } from '../artist/service/artist.service';
import { HomeComponent } from './home.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['getAlbums']);
  const getAlbums = albumServiceSpy.getAlbums as jasmine.Spy;

  const artistServiceSpy = jasmine.createSpyObj('ArtistService', [
    'fetchArtists'
  ]);
  const fetchArtists = artistServiceSpy.fetchArtists as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [HomeComponent],
      providers: [
        {
          provide: AlbumService,
          useValue: albumServiceSpy
        },
        {
          provide: ArtistService,
          useValue: artistServiceSpy
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

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

    fetchArtists.and.returnValue(
      of([
        {
          id: 100,
          name: 'Rubén Blades Bellido de Luna',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
          description:
            'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
          birthDate: '1948-07-16T00:00:00.000Z',
          albums: [
            {
              id: 101,
              name: 'Poeta del pueblo',
              cover:
                'https://cdn.shopify.com/s/files/1/0275/3095/products/image_4931268b-7acf-4702-9c55-b2b3a03ed999_1024x1024.jpg',
              releaseDate: '1984-08-01T00:00:00.000Z',
              description:
                'Recopilación de 27 composiciones del cosmos Blades que los bailadores y melómanos han hecho suyas en estos 40 años de presencia de los ritmos y concordias afrocaribeños en múltiples escenarios internacionales. Grabaciones de Blades para la Fania con las orquestas de Pete Rodríguez, Ray Barreto, Fania All Stars y, sobre todo, los grandes éxitos con la Banda de Willie Colón',
              genre: 'Salsa',
              recordLabel: 'Elektra'
            },
            {
              id: 100,
              name: 'Buscando América',
              cover:
                'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
              releaseDate: '1984-08-01T00:00:00.000Z',
              description:
                'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
              genre: 'Salsa',
              recordLabel: 'Elektra'
            }
          ],
          performerPrizes: [
            {
              id: 100,
              premiationDate: '1978-12-10T00:00:00.000Z'
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
});
