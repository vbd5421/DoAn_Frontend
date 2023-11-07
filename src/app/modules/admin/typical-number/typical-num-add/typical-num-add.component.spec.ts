import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalNumAddComponent } from './typical-num-add.component';

describe('TypicalNumAddComponent', () => {
  let component: TypicalNumAddComponent;
  let fixture: ComponentFixture<TypicalNumAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalNumAddComponent]
    });
    fixture = TestBed.createComponent(TypicalNumAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
