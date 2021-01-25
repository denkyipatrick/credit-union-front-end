import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InvestYourWayComponent } from './invest-your-way.component';

describe('InvestYourWayComponent', () => {
  let component: InvestYourWayComponent;
  let fixture: ComponentFixture<InvestYourWayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestYourWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestYourWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
