import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallUsRowComponent } from './call-us-row.component';

describe('CallUsRowComponent', () => {
  let component: CallUsRowComponent;
  let fixture: ComponentFixture<CallUsRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CallUsRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CallUsRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
