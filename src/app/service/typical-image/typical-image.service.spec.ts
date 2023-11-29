import { TestBed } from '@angular/core/testing';

import { TypicalImageService } from './typical-image.service';

describe('TypicalImageService', () => {
  let service: TypicalImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypicalImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
