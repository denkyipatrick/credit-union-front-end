import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConstructionLoansComponent } from './construction-loans.component';

describe('ConstructionLoansComponent', () => {
  let component: ConstructionLoansComponent;
  let fixture: ComponentFixture<ConstructionLoansComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConstructionLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConstructionLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
