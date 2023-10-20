import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SericeOurListComponent } from './serice-our-list.component';

describe('SericeOurListComponent', () => {
  let component: SericeOurListComponent;
  let fixture: ComponentFixture<SericeOurListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SericeOurListComponent]
    });
    fixture = TestBed.createComponent(SericeOurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
