import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconAndContentShadowCardComponent } from './icon-and-content-shadow-card.component';

describe('IconAndContentShadowCardComponent', () => {
  let component: IconAndContentShadowCardComponent;
  let fixture: ComponentFixture<IconAndContentShadowCardComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAndContentShadowCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAndContentShadowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
