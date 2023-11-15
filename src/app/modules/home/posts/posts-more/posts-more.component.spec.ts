import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsMoreComponent } from './posts-more.component';

describe('PostsMoreComponent', () => {
  let component: PostsMoreComponent;
  let fixture: ComponentFixture<PostsMoreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsMoreComponent]
    });
    fixture = TestBed.createComponent(PostsMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
