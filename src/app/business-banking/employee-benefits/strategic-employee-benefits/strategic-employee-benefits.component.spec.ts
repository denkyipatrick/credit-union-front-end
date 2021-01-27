import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategicEmployeeBenefitsComponent } from './strategic-employee-benefits.component';

describe('StrategicEmployeeBenefitsComponent', () => {
  let component: StrategicEmployeeBenefitsComponent;
  let fixture: ComponentFixture<StrategicEmployeeBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategicEmployeeBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategicEmployeeBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
