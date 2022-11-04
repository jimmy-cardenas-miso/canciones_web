import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArtistServiceMock } from '@testing/mocks/services/artist.service.mock';
import { TestingModule } from '@testing/testing.module';
import { ArtistService } from '../service/artist.service';

import { ArtistListComponent } from './artist-list.component';

describe('ArtistListComponent', () => {
  let component: ArtistListComponent;
  let fixture: ComponentFixture<ArtistListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistListComponent],
      imports: [TestingModule, RouterTestingModule.withRoutes([])],
      providers: [
        {
          provide: ArtistService,
          useClass: ArtistServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
