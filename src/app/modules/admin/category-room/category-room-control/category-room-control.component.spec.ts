import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRoomControlComponent } from './category-room-control.component';

describe('CategoryRoomControlComponent', () => {
  let component: CategoryRoomControlComponent;
  let fixture: ComponentFixture<CategoryRoomControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryRoomControlComponent]
    });
    fixture = TestBed.createComponent(CategoryRoomControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
