import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineMobileBankingComponent } from './online-mobile-banking.component';

describe('OnlineMobileBankingComponent', () => {
  let component: OnlineMobileBankingComponent;
  let fixture: ComponentFixture<OnlineMobileBankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineMobileBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineMobileBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
