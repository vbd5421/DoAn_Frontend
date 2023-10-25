import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOurAddComponent } from './service-our-add.component';

describe('ServiceOurAddComponent', () => {
  let component: ServiceOurAddComponent;
  let fixture: ComponentFixture<ServiceOurAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceOurAddComponent]
    });
    fixture = TestBed.createComponent(ServiceOurAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
