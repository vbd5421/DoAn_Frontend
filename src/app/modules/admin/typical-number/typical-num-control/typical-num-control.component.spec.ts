import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalNumControlComponent } from './typical-num-control.component';

describe('TypicalNumControlComponent', () => {
  let component: TypicalNumControlComponent;
  let fixture: ComponentFixture<TypicalNumControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalNumControlComponent]
    });
    fixture = TestBed.createComponent(TypicalNumControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
