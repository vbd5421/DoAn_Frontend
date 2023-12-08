import { TestBed } from '@angular/core/testing';

import { LinkWebService } from './link-web.service';

describe('LinkWebService', () => {
  let service: LinkWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
