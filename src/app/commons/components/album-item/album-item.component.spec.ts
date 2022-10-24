import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Album } from '@modules/album/album.interface';
import { AlbumFactory } from '@testing/factories/album.factory';
import { TestingModule } from '@testing/testing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { AlbumItemComponent } from './album-item.component';

const album: Album = new AlbumFactory().create();

describe('AlbumItemComponent', () => {
  let component: AlbumItemComponent;
  let fixture: ComponentFixture<AlbumItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [TestingModule, RouterTestingModule.withRoutes([])],
      declarations: [AlbumItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumItemComponent);
    component = fixture.componentInstance;
    component.album = album;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
