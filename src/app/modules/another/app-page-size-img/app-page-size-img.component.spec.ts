import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageSizeImgComponent } from './app-page-size-img.component';

describe('AppPageSizeImgComponent', () => {
  let component: AppPageSizeImgComponent;
  let fixture: ComponentFixture<AppPageSizeImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppPageSizeImgComponent]
    });
    fixture = TestBed.createComponent(AppPageSizeImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
