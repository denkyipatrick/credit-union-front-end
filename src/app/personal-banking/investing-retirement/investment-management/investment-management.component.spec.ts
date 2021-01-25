import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestmentManagementComponent } from './investment-management.component';

describe('InvestmentManagementComponent', () => {
  let component: InvestmentManagementComponent;
  let fixture: ComponentFixture<InvestmentManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
