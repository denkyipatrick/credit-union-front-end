import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayHeaderItemComponent } from './gray-header-item.component';

describe('GrayHeaderItemComponent', () => {
  let component: GrayHeaderItemComponent;
  let fixture: ComponentFixture<GrayHeaderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrayHeaderItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrayHeaderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
