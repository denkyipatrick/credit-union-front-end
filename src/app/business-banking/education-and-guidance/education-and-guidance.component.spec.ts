import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationAndGuidanceComponent } from './education-and-guidance.component';

describe('EducationAndGuidanceComponent', () => {
  let component: EducationAndGuidanceComponent;
  let fixture: ComponentFixture<EducationAndGuidanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationAndGuidanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAndGuidanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
