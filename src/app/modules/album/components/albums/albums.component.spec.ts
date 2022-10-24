import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumService } from '../../services/album.service';
import { AlbumsComponent } from './albums.component';
import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AlbumsComponent', () => {
  let component: AlbumsComponent;
  let fixture: ComponentFixture<AlbumsComponent>;

  const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['getAlbums']);
  const getAlbums = albumServiceSpy.getAlbums as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      declarations: [AlbumsComponent],
      providers: [
        {
          provide: AlbumService,
          useValue: albumServiceSpy
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsComponent);
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
