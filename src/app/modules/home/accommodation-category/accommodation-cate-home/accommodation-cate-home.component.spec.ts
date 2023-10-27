import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationCateHomeComponent } from './accommodation-cate-home.component';

describe('AccommodationCateHomeComponent', () => {
  let component: AccommodationCateHomeComponent;
  let fixture: ComponentFixture<AccommodationCateHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccommodationCateHomeComponent]
    });
    fixture = TestBed.createComponent(AccommodationCateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
