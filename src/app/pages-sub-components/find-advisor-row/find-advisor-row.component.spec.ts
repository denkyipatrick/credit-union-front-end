import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindAdvisorRowComponent } from './find-advisor-row.component';

describe('FindAdvisorRowComponent', () => {
  let component: FindAdvisorRowComponent;
  let fixture: ComponentFixture<FindAdvisorRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindAdvisorRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindAdvisorRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
