import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOurControlComponent } from './service-our-control.component';

describe('ServiceOurControlComponent', () => {
  let component: ServiceOurControlComponent;
  let fixture: ComponentFixture<ServiceOurControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOurControlComponent]
    });
    fixture = TestBed.createComponent(ServiceOurControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
