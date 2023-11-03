import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkWebHomeComponent } from './link-web-home.component';

describe('LinkWebHomeComponent', () => {
  let component: LinkWebHomeComponent;
  let fixture: ComponentFixture<LinkWebHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkWebHomeComponent]
    });
    fixture = TestBed.createComponent(LinkWebHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
