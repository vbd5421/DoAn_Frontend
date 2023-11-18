import { TestBed } from '@angular/core/testing';

import { CateProjectService } from './cate-project.service';

describe('CateProjectService', () => {
  let service: CateProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CateProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
