import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from '@testing/component/test.component';
import { ToastrService } from 'ngx-toastr';
import { AddAlbumComponent } from './add-album.component';
import { of, throwError } from 'rxjs';
import { AlbumService } from '@modules/album/services/album.service';

describe('AddAlbumComponent', () => {
  let component: AddAlbumComponent;
  let fixture: ComponentFixture<AddAlbumComponent>;

  const toastrServiceSpy = jasmine.createSpyObj('ArtistService', [
    'success',
    'error'
  ]);
  const albumServiceSpy = jasmine.createSpyObj('AlbumService', ['addNewAlbum']);

  const addNewAlbum = albumServiceSpy.addNewAlbum as jasmine.Spy;
  const toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddAlbumComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'collectors', component: TestComponent },
          { path: 'collectors/:id', component: TestComponent }
        ]),
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ToastrService,
          useValue: toastrServiceSpy
        },
        {
          provide: AlbumService,
          useValue: albumServiceSpy
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAlbumComponent);
    component = fixture.componentInstance;
    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
    addNewAlbum.and.returnValue(of({ name: 'name' }));
    component.albumForm = new FormGroup({
      name: new FormControl('name'),
      cover: new FormControl('cover'),
      releaseDate: new FormControl('12/12/2020'),
      description: new FormControl('description'),
      genre: new FormControl('M'),
      recordLabel: new FormControl('label')
    });

    (component as any).collectorId = '100';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel form', () => {
    fixture.ngZone.run(() => expect(component.cancelForm()).toBeUndefined());
  });

  it('should add new album', () => {
    fixture.ngZone.run(() => expect(component.createAlbum()).toBeUndefined());
  });

  it('should generate error on add new album', () => {
    addNewAlbum.and.returnValue(throwError({ status: 400, message: 'Error' }));
    fixture.detectChanges();
    fixture.ngZone.run(() => expect(component.createAlbum()).toBeUndefined());
  });
});
