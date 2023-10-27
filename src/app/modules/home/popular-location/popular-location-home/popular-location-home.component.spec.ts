import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularLocationHomeComponent } from './popular-location-home.component';

describe('PopularLocationHomeComponent', () => {
  let component: PopularLocationHomeComponent;
  let fixture: ComponentFixture<PopularLocationHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopularLocationHomeComponent]
    });
    fixture = TestBed.createComponent(PopularLocationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
