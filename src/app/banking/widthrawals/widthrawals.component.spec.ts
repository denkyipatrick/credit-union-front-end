import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidthrawalsComponent } from './widthrawals.component';

describe('WidthrawalsComponent', () => {
  let component: WidthrawalsComponent;
  let fixture: ComponentFixture<WidthrawalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidthrawalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidthrawalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
