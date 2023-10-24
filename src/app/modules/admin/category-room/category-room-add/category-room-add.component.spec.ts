import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRoomAddComponent } from './category-room-add.component';

describe('CategoryRoomAddComponent', () => {
  let component: CategoryRoomAddComponent;
  let fixture: ComponentFixture<CategoryRoomAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryRoomAddComponent]
    });
    fixture = TestBed.createComponent(CategoryRoomAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
