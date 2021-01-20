import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninWelcomeComponent } from './signin-welcome.component';

describe('SigninWelcomeComponent', () => {
  let component: SigninWelcomeComponent;
  let fixture: ComponentFixture<SigninWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigninWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
