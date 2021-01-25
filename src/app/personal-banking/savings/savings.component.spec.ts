import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SavingsComponent } from './savings.component';

describe('SavingsComponent', () => {
  let component: SavingsComponent;
  let fixture: ComponentFixture<SavingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
