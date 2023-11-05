import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsUavComponent } from './about-us-uav.component';

describe('AboutUsUavComponent', () => {
  let component: AboutUsUavComponent;
  let fixture: ComponentFixture<AboutUsUavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsUavComponent]
    });
    fixture = TestBed.createComponent(AboutUsUavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
