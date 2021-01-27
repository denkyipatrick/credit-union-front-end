import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAccountsComponent } from './business-accounts.component';

describe('BusinessAccountsComponent', () => {
  let component: BusinessAccountsComponent;
  let fixture: ComponentFixture<BusinessAccountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessAccountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
