import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWebAddComponent } from './link-web-add.component';

describe('LinkWebAddComponent', () => {
  let component: LinkWebAddComponent;
  let fixture: ComponentFixture<LinkWebAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkWebAddComponent]
    });
    fixture = TestBed.createComponent(LinkWebAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
