import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateProjectAddComponent } from './cate-project-add.component';

describe('CateProjectAddComponent', () => {
  let component: CateProjectAddComponent;
  let fixture: ComponentFixture<CateProjectAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateProjectAddComponent]
    });
    fixture = TestBed.createComponent(CateProjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
