import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutListComponent } from './about-list.component';

describe('AboutListComponent', () => {
  let component: AboutListComponent;
  let fixture: ComponentFixture<AboutListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutListComponent]
    });
    fixture = TestBed.createComponent(AboutListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
