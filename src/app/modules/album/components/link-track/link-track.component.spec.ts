import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TestComponent } from '@testing/component/test.component';
import { ToastrService } from 'ngx-toastr';

import { LinkTrackComponent } from './link-track.component';
import { of, throwError } from 'rxjs';
import { AlbumService } from '@modules/album/services/album.service';

describe('LinkTrackComponent', () => {
  let component: LinkTrackComponent;
  let fixture: ComponentFixture<LinkTrackComponent>;
  const toastrServiceSpy = jasmine.createSpyObj('ArtistService', [
    'success',
    'error'
  ]);
  const albumServiceSpy = jasmine.createSpyObj('AlbumService', [
    'addTrackToAlbum'
  ]);

  const addTrackToAlbum = albumServiceSpy.addTrackToAlbum as jasmine.Spy;
  const toastrSuccess = toastrServiceSpy.success as jasmine.Spy;
  const toastrError = toastrServiceSpy.error as jasmine.Spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LinkTrackComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: 'albums/detail/:id', component: TestComponent }
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
    fixture = TestBed.createComponent(LinkTrackComponent);
    component = fixture.componentInstance;

    toastrSuccess.and.returnValue(() => {});
    toastrError.and.returnValue(() => {});
    addTrackToAlbum.and.returnValue(of({ name: 'name' }));
    component.trackForm = new FormGroup({
      name: new FormControl('name'),
      duration: new FormControl('12')
    });
    component.idAlbum = '100';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel form', () => {
    fixture.ngZone.run(() => expect(component.cancelForm()).toBeUndefined());
  });

  it('should add new track', () => {
    fixture.ngZone.run(() => expect(component.addNewTrack()).toBeUndefined());
  });

  it('should generate error on add new track', () => {
    addTrackToAlbum.and.returnValue(
      throwError({ status: 400, message: 'Error' })
    );
    fixture.detectChanges();
    fixture.ngZone.run(() => expect(component.addNewTrack()).toBeUndefined());
  });
});
