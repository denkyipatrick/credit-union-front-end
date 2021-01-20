import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessFinancingComponent } from './business-financing.component';

describe('BusinessFinancingComponent', () => {
  let component: BusinessFinancingComponent;
  let fixture: ComponentFixture<BusinessFinancingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessFinancingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessFinancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
