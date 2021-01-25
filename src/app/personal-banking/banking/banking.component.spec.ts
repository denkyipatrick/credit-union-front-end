import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
