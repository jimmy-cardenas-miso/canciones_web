import { ImageUrlPipe } from './image-url.pipe';
import { async, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { environment as ENV } from '@environment';

describe('ImageUrlPipe', () => {
  let pipe: ImageUrlPipe;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    pipe = new ImageUrlPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should be null', () => {
    expect(pipe.transform(null)).toBeNull();
  });

  it('should be correct', () => {
    const name = 'image';
    expect(pipe.transform(name)).toEqual(ENV.resources.base_img + name);
  });
});
