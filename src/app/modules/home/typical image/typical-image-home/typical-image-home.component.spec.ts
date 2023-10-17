import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalImageHomeComponent } from './typical-image-home.component';

describe('TypicalImageHomeComponent', () => {
  let component: TypicalImageHomeComponent;
  let fixture: ComponentFixture<TypicalImageHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalImageHomeComponent]
    });
    fixture = TestBed.createComponent(TypicalImageHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
