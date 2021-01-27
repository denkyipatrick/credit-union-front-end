import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementPlansComponent } from './retirement-plans.component';

describe('RetirementPlansComponent', () => {
  let component: RetirementPlansComponent;
  let fixture: ComponentFixture<RetirementPlansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementPlansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementPlansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
