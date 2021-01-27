import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongTermCaseComponent } from './long-term-case.component';

describe('LongTermCaseComponent', () => {
  let component: LongTermCaseComponent;
  let fixture: ComponentFixture<LongTermCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongTermCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongTermCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
