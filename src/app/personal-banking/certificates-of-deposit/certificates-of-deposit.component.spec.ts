import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificatesOfDepositComponent } from './certificates-of-deposit.component';

describe('CertificatesOfDepositComponent', () => {
  let component: CertificatesOfDepositComponent;
  let fixture: ComponentFixture<CertificatesOfDepositComponent>;

  beforeEach(async(() => {
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
