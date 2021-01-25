import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DepositDialogComponent } from './deposit-dialog.component';

describe('DepositDialogComponent', () => {
  let component: DepositDialogComponent;
  let fixture: ComponentFixture<DepositDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
