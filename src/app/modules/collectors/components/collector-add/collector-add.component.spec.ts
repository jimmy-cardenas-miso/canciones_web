import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectorAddComponent } from './collector-add.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { ActivatedRoute } from '@angular/router';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistService } from '@modules/artist/service/artist.service';
import { ToastrService } from 'ngx-toastr';
import { Artist } from '@modules/artist/entities/artist.interface';
import { ArtistFactory } from '@testing/factories/artist.factory';
import { TestComponent } from '@testing/component/test.component';
import { TestingModule } from '@testing/testing.module';

const artist: Artist = new ArtistFactory().create();

describe('CollectorAddComponent', () => {
  let component: CollectorAddComponent;
  let fixture: ComponentFixture<CollectorAddComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'addMusician'
  ]);

  const artistServiceSpy = jasmine.createSpyObj('ArtistService', [
    'fetchArtists'
  ]);

  const toastrServiceSpy = jasmine.createSpyObj('ToastrService', [
    'success',
    'error'
  ]);

  const addMusician = collectorServiceSpy.addMusician as jasmine.Spy;
  const fetchArtists = artistServiceSpy.fetchArtists as jasmine.Spy;
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
      declarations: [CollectorAddComponent],
      providers: [
        {
          provide: CollectorService,
          useValue: collectorServiceSpy
        },
        {
          provide: ArtistService,
          useValue: artistServiceSpy
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
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorAddComponent);
    component = fixture.componentInstance;

    addMusician.and.returnValue(of({}));
    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
    fetchArtists.and.returnValue(
      of([
        {
          id: 100,
          name: 'Rub??n Blades Bellido de Luna',
          image:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Ruben_Blades_by_Gage_Skidmore.jpg/800px-Ruben_Blades_by_Gage_Skidmore.jpg',
          description:
            'Es un cantante, compositor, m??sico, actor, abogado, pol??tico y activista paname??o. Ha desarrollado gran parte de su carrera art??stica en la ciudad de Nueva York.',
          birthDate: '1948-07-16T00:00:00.000Z',
          albums: [
            {
              id: 101,
              name: 'Poeta del pueblo',
              cover:
                'https://cdn.shopify.com/s/files/1/0275/3095/products/image_4931268b-7acf-4702-9c55-b2b3a03ed999_1024x1024.jpg',
              releaseDate: '1984-08-01T00:00:00.000Z',
              description:
                'Recopilaci??n de 27 composiciones del cosmos Blades que los bailadores y mel??manos han hecho suyas en estos 40 a??os de presencia de los ritmos y concordias afrocaribe??os en m??ltiples escenarios internacionales. Grabaciones de Blades para la Fania con las orquestas de Pete Rodr??guez, Ray Barreto, Fania All Stars y, sobre todo, los grandes ??xitos con la Banda de Willie Col??n',
              genre: 'Salsa',
              recordLabel: 'Elektra'
            },
            {
              id: 100,
              name: 'Buscando Am??rica',
              cover:
                'https://i.pinimg.com/564x/aa/5f/ed/aa5fed7fac61cc8f41d1e79db917a7cd.jpg',
              releaseDate: '1984-08-01T00:00:00.000Z',
              description:
                'Buscando Am??rica es el primer ??lbum de la banda de Rub??n Blades y Seis del Solar lanzado en 1984. La producci??n, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.',
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

  it('should add artist to favorites', () => {
    fixture.ngZone.run(() =>
      expect(component.addArtistToFavorites(artist)).toBeUndefined()
    );
  });

  it('should generate error on add artist to favorites', () => {
    addMusician.and.returnValue(throwError({ status: 400, message: 'Error' }));
    fixture.detectChanges();
    fixture.ngZone.run(() =>
      expect(component.addArtistToFavorites(artist)).toBeUndefined()
    );
  });
});
