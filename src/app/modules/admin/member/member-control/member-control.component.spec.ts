import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberControlComponent } from './member-control.component';

describe('MemberControlComponent', () => {
  let component: MemberControlComponent;
  let fixture: ComponentFixture<MemberControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemberControlComponent]
    });
    fixture = TestBed.createComponent(MemberControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
