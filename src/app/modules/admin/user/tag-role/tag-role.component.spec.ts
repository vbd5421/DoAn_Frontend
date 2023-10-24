import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagRoleComponent } from './tag-role.component';

describe('TagRoleComponent', () => {
  let component: TagRoleComponent;
  let fixture: ComponentFixture<TagRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TagRoleComponent]
    });
    fixture = TestBed.createComponent(TagRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
