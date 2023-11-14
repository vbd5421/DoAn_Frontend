import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypicalImageAddComponent } from './typical-image-add.component';

describe('TypicalImageAddComponent', () => {
  let component: TypicalImageAddComponent;
  let fixture: ComponentFixture<TypicalImageAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypicalImageAddComponent]
    });
    fixture = TestBed.createComponent(TypicalImageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
