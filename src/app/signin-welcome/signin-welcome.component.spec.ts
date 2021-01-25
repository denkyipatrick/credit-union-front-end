import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SigninWelcomeComponent } from './signin-welcome.component';

describe('SigninWelcomeComponent', () => {
  let component: SigninWelcomeComponent;
  let fixture: ComponentFixture<SigninWelcomeComponent>;

  beforeEach(waitForAsync(() => {
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
