import { TestBed } from '@angular/core/testing';

import { CategoryRoomService } from './category-room.service';

describe('CategoryRoomService', () => {
  let service: CategoryRoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryRoomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
