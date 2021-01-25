import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeAndEquityLoansComponent } from './home-and-equity-loans.component';

describe('HomeAndEquityLoansComponent', () => {
  let component: HomeAndEquityLoansComponent;
  let fixture: ComponentFixture<HomeAndEquityLoansComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAndEquityLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndEquityLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
