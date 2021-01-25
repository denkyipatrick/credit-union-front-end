import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CertificatesOfDepositComponent } from './certificates-of-deposit.component';

describe('CertificatesOfDepositComponent', () => {
  let component: CertificatesOfDepositComponent;
  let fixture: ComponentFixture<CertificatesOfDepositComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificatesOfDepositComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificatesOfDepositComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
