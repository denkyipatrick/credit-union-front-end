import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EmployeeBenefitsComponent } from './employee-benefits.component';

describe('EmployeeBenefitsComponent', () => {
  let component: EmployeeBenefitsComponent;
  let fixture: ComponentFixture<EmployeeBenefitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
