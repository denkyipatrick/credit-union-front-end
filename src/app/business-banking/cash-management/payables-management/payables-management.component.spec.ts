import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayablesManagementComponent } from './payables-management.component';

describe('PayablesManagementComponent', () => {
  let component: PayablesManagementComponent;
  let fixture: ComponentFixture<PayablesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayablesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayablesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
