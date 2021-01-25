import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IconAndContentItemComponent } from './icon-and-content-item.component';

describe('IconAndContentItemComponent', () => {
  let component: IconAndContentItemComponent;
  let fixture: ComponentFixture<IconAndContentItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconAndContentItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconAndContentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
