import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongDisabilityComponent } from './long-disability.component';

describe('LongDisabilityComponent', () => {
  let component: LongDisabilityComponent;
  let fixture: ComponentFixture<LongDisabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongDisabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongDisabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
