import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesOutHomeComponent } from './services-out-home.component';

describe('ServicesOutHomeComponent', () => {
  let component: ServicesOutHomeComponent;
  let fixture: ComponentFixture<ServicesOutHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServicesOutHomeComponent]
    });
    fixture = TestBed.createComponent(ServicesOutHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
