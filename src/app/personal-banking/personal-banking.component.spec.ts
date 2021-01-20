import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalBankingComponent } from './personal-banking.component';

describe('PersonalBankingComponent', () => {
  let component: PersonalBankingComponent;
  let fixture: ComponentFixture<PersonalBankingComponent>;

  beforeEach(async(() => {
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
