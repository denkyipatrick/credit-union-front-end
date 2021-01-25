import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FinancialLifeComponent } from './financial-life.component';

describe('FinancialLifeComponent', () => {
  let component: FinancialLifeComponent;
  let fixture: ComponentFixture<FinancialLifeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
