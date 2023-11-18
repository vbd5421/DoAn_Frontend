import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateProjectControlComponent } from './cate-project-control.component';

describe('CateProjectControlComponent', () => {
  let component: CateProjectControlComponent;
  let fixture: ComponentFixture<CateProjectControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateProjectControlComponent]
    });
    fixture = TestBed.createComponent(CateProjectControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
