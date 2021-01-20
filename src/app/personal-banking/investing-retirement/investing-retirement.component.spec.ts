import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestingRetirementComponent } from './investing-retirement.component';

describe('InvestingRetirementComponent', () => {
  let component: InvestingRetirementComponent;
  let fixture: ComponentFixture<InvestingRetirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestingRetirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestingRetirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
