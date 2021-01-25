import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HealthSavingsComponent } from './health-savings.component';

describe('HealthSavingsComponent', () => {
  let component: HealthSavingsComponent;
  let fixture: ComponentFixture<HealthSavingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthSavingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
