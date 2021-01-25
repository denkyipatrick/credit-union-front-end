import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessInsuranceComponent } from './business-insurance.component';

describe('BusinessInsuranceComponent', () => {
  let component: BusinessInsuranceComponent;
  let fixture: ComponentFixture<BusinessInsuranceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInsuranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
