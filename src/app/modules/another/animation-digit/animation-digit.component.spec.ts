import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimationDigitComponent } from './animation-digit.component';

describe('AnimationDigitComponent', () => {
  let component: AnimationDigitComponent;
  let fixture: ComponentFixture<AnimationDigitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimationDigitComponent]
    });
    fixture = TestBed.createComponent(AnimationDigitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
