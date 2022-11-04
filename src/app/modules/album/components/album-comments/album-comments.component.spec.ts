import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of, throwError } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { AlbumService } from '../../services/album.service';
import { CollectorService } from '@modules/collectors/services/collector.service';
import { AlbumCommentsComponent } from './album-comments.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('AlbumCommentsComponent', () => {
  let component: AlbumCommentsComponent;
  let fixture: ComponentFixture<AlbumCommentsComponent>;

  const collectorServiceSpy = jasmine.createSpyObj('CollectorService', [
    'fetchCollectors'
  ]);

  const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['addComments']);

  const toastrServiceSpy = jasmine.createSpyObj('ToastrService', [
    'success',
    'error'
  ]);

  const fetchCollectors = collectorServiceSpy.fetchCollectors as jasmine.Spy;
  const addComments = albumServiceSpy.addComments as jasmine.Spy;
  const toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [AlbumCommentsComponent],
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
        }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumCommentsComponent);
    component = fixture.componentInstance;

    addComments.and.returnValue(
      of([
        {
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
        }
      ])
    );
    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
    fetchCollectors.and.returnValue(
      of([
        {
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
        },
        {
          id: 101,
          name: 'Jaime Monsalve',
          telephone: '3012357936',
          email: 'jmonsalve@rtvc.com.co',
          comments: [
            { id: 101, description: 'I love this album of Queen', rating: 5 }
          ],
          favoritePerformers: [
            {
              id: 101,
              name: 'Queen',
              image:
                'https://pm1.narvii.com/6724/a8b29909071e9d08517b40c748b6689649372852v2_hq.jpg',
              description:
                'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Mercury, fallecido en 1991, y Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún se considera activa.',
              creationDate: '1970-01-01T00:00:00.000Z'
            }
          ],
          collectorAlbums: [{ id: 101, price: 25, status: 'Active' }]
        }
      ])
    );

    component.comments = [
      { id: 101, description: 'I love this album of Queen', rating: 5 }
    ];

    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

});
