import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageSizeComponent } from './app-page-size.component';

describe('AppPageSizeComponent', () => {
  let component: AppPageSizeComponent;
  let fixture: ComponentFixture<AppPageSizeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPageSizeComponent]
    });
    fixture = TestBed.createComponent(AppPageSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
