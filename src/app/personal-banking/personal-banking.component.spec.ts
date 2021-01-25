import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PersonalBankingComponent } from './personal-banking.component';

describe('PersonalBankingComponent', () => {
  let component: PersonalBankingComponent;
  let fixture: ComponentFixture<PersonalBankingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalBankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalBankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
