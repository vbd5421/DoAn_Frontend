import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelListHomeComponent } from './hotel-list-home.component';

describe('HotelListHomeComponent', () => {
  let component: HotelListHomeComponent;
  let fixture: ComponentFixture<HotelListHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelListHomeComponent]
    });
    fixture = TestBed.createComponent(HotelListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
