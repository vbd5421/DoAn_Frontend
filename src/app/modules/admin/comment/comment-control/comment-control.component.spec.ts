import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentControlComponent } from './comment-control.component';

describe('CommentControlComponent', () => {
  let component: CommentControlComponent;
  let fixture: ComponentFixture<CommentControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommentControlComponent]
    });
    fixture = TestBed.createComponent(CommentControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
