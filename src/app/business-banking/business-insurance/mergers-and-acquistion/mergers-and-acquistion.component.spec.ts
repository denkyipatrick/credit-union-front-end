import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergersAndAcquistionComponent } from './mergers-and-acquistion.component';

describe('MergersAndAcquistionComponent', () => {
  let component: MergersAndAcquistionComponent;
  let fixture: ComponentFixture<MergersAndAcquistionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergersAndAcquistionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MergersAndAcquistionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
