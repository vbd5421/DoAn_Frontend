import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectMoreComponent } from './project-more.component';

describe('ProjectMoreComponent', () => {
  let component: ProjectMoreComponent;
  let fixture: ComponentFixture<ProjectMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectMoreComponent]
    });
    fixture = TestBed.createComponent(ProjectMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
