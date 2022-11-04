import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { ArtistService } from '../service/artist.service';
import { ArtistMusicianBandComponent } from './artist-musician-band.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ArtistMusicianBandComponent', () => {
  let component: ArtistMusicianBandComponent;
  let fixture: ComponentFixture<ArtistMusicianBandComponent>;

  let artistServiceSpy = jasmine.createSpyObj('ArtistService', [
    'fetchArtists',
    'addMusicians'
  ]);

  let toastrServiceSpy = jasmine.createSpyObj('ToastrService', [
    'success',
    'error'
  ]);

  let fetchArtists = artistServiceSpy.fetchArtists as jasmine.Spy;
  const addMusicians = artistServiceSpy.addMusicians as jasmine.Spy;
  let toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [ArtistMusicianBandComponent],
      providers: [
        {
          provide: ArtistService,
          useValue: artistServiceSpy
        },
        {
          provide: ToastrService,
          useValue: toastrServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistMusicianBandComponent);
    component = fixture.componentInstance;

    addMusicians.and.returnValue(
      of([
        {
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
        }
      ])
    );
    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
    fetchArtists.and.returnValue(
      of([
        {
          albums: [
            {
              cover:
                'https://cdn.shopify.com/s/files/1/0275/3095/products/image_4931268b-7acf-4702-9c55-b2b3a03ed999_1024x1024.jpg',
              description:
                'Recopilación de 27 composiciones del cosmos Blades que los bailadores y melómanos han hecho suyas en estos 40 años de presencia de los ritmos y concordias afrocaribeños en múltiples escenarios internacionales. Grabaciones de Blades para la Fania con las orquestas de Pete Rodríguez, Ray Barreto, Fania All Stars y, sobre todo, los grandes éxitos con la Banda de Willie Colón',
              genre: 'Salsa',
              id: 101,
              name: 'Poeta del pueblo',
              recordLabel: 'Elektra',
              releaseDate: '1984-08-01T00:00:00.000Z'
            },
            {
              cover:
                'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
              description:
                'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
              genre: 'Salsa',
              id: 100,
              name: 'Buscando América',
              recordLabel: 'Elektra',
              releaseDate: '1984-08-01T00:00:00.000Z'
            }
          ],
          birthDate: '1948-07-16T00:00:00.000Z',
          description:
            'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
          id: 100,
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
          name: 'Rubén Blades Bellido de Luna',
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

  it('should add musician to band', () => {
    component.artistForm.get('artist').setValue(1);
    addMusicians.and.returnValue(
      of({
        albums: [
          {
            cover:
              'https://cdn.shopify.com/s/files/1/0275/3095/products/image_4931268b-7acf-4702-9c55-b2b3a03ed999_1024x1024.jpg',
            description:
              'Recopilación de 27 composiciones del cosmos Blades que los bailadores y melómanos han hecho suyas en estos 40 años de presencia de los ritmos y concordias afrocaribeños en múltiples escenarios internacionales. Grabaciones de Blades para la Fania con las orquestas de Pete Rodríguez, Ray Barreto, Fania All Stars y, sobre todo, los grandes éxitos con la Banda de Willie Colón',
            genre: 'Salsa',
            id: 101,
            name: 'Poeta del pueblo',
            recordLabel: 'Elektra',
            releaseDate: '1984-08-01T00:00:00.000Z'
          },
          {
            cover:
              'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
            description:
              'Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
            genre: 'Salsa',
            id: 100,
            name: 'Buscando América',
            recordLabel: 'Elektra',
            releaseDate: '1984-08-01T00:00:00.000Z'
          }
        ],
        birthDate: '1948-07-16T00:00:00.000Z',
        description:
          'Es un cantante, compositor, músico, actor, abogado, político y activista panameño. Ha desarrollado gran parte de su carrera artística en la ciudad de Nueva York.',
        id: 100,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
        name: 'Rubén Blades Bellido de Luna',
        performerPrizes: [
          {
            id: 100,
            premiationDate: '1978-12-10T00:00:00.000Z'
          }
        ]
      })
    );
    fixture.ngZone.run(() => expect(component.addMusician()).toBeUndefined());
  });

  it('should generate error on add musician to band', () => {
    addMusicians.and.returnValue(throwError({ status: 400, message: 'Error' }));
    fixture.detectChanges();
    fixture.ngZone.run(() => expect(component.addMusician()).toBeUndefined());
  });
});
