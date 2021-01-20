import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialLifeComponent } from './financial-life.component';

describe('FinancialLifeComponent', () => {
  let component: FinancialLifeComponent;
  let fixture: ComponentFixture<FinancialLifeComponent>;

  beforeEach(async(() => {
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
