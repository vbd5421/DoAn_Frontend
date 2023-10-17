import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutusHomeComponent } from './aboutus-home.component';

describe('AboutusHomeComponent', () => {
  let component: AboutusHomeComponent;
  let fixture: ComponentFixture<AboutusHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutusHomeComponent]
    });
    fixture = TestBed.createComponent(AboutusHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
