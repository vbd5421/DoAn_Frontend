import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalImageControlComponent } from './typical-image-control.component';

describe('TypicalImageControlComponent', () => {
  let component: TypicalImageControlComponent;
  let fixture: ComponentFixture<TypicalImageControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalImageControlComponent]
    });
    fixture = TestBed.createComponent(TypicalImageControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
