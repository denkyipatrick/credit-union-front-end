import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AutodealerDivisionComponent } from './autodealer-division.component';

describe('AutodealerDivisionComponent', () => {
  let component: AutodealerDivisionComponent;
  let fixture: ComponentFixture<AutodealerDivisionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutodealerDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutodealerDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
