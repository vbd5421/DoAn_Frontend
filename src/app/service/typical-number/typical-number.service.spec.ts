import { TestBed } from '@angular/core/testing';

import { TypicalNumberService } from './typical-number.service';

describe('TypicalNumberService', () => {
  let service: TypicalNumberService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypicalNumberService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
