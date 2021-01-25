import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RetirementPlanningComponent } from './retirement-planning.component';

describe('RetirementPlanningComponent', () => {
  let component: RetirementPlanningComponent;
  let fixture: ComponentFixture<RetirementPlanningComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RetirementPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
