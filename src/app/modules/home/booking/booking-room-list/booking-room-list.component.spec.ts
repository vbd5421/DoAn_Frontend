import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingRoomListComponent } from './booking-room-list.component';

describe('BookingRoomListComponent', () => {
  let component: BookingRoomListComponent;
  let fixture: ComponentFixture<BookingRoomListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookingRoomListComponent]
    });
    fixture = TestBed.createComponent(BookingRoomListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
