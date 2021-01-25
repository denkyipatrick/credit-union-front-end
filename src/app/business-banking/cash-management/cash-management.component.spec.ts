import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CashManagementComponent } from './cash-management.component';

describe('CashManagementComponent', () => {
  let component: CashManagementComponent;
  let fixture: ComponentFixture<CashManagementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CashManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
