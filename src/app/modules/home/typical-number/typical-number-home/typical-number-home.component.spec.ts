import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalNumberHomeComponent } from './typical-number-home.component';

describe('TypicalNumberHomeComponent', () => {
  let component: TypicalNumberHomeComponent;
  let fixture: ComponentFixture<TypicalNumberHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalNumberHomeComponent]
    });
    fixture = TestBed.createComponent(TypicalNumberHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
