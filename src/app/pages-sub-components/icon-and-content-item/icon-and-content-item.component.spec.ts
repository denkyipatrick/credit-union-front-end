import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconAndContentItemComponent } from './icon-and-content-item.component';

describe('IconAndContentItemComponent', () => {
  let component: IconAndContentItemComponent;
  let fixture: ComponentFixture<IconAndContentItemComponent>;

  beforeEach(async(() => {
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
