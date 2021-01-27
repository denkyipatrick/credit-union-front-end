import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyCasualtyInsuranceComponent } from './property-casualty-insurance.component';

describe('PropertyCasualtyInsuranceComponent', () => {
  let component: PropertyCasualtyInsuranceComponent;
  let fixture: ComponentFixture<PropertyCasualtyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyCasualtyInsuranceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyCasualtyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
