import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AccountTypesComponent } from './account-types.component';

describe('AccountTypesComponent', () => {
  let component: AccountTypesComponent;
  let fixture: ComponentFixture<AccountTypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
