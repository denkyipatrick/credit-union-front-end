import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconHeadingDescriptionColumnComponent } from './icon-heading-description-column.component';

describe('IconHeadingDescriptionColumnComponent', () => {
  let component: IconHeadingDescriptionColumnComponent;
  let fixture: ComponentFixture<IconHeadingDescriptionColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconHeadingDescriptionColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconHeadingDescriptionColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
