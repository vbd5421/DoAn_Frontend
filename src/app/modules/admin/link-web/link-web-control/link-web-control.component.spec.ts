import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWebControlComponent } from './link-web-control.component';

describe('LinkWebControlComponent', () => {
  let component: LinkWebControlComponent;
  let fixture: ComponentFixture<LinkWebControlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkWebControlComponent]
    });
    fixture = TestBed.createComponent(LinkWebControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
