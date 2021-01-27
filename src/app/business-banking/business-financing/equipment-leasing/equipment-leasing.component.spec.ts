import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentLeasingComponent } from './equipment-leasing.component';

describe('EquipmentLeasingComponent', () => {
  let component: EquipmentLeasingComponent;
  let fixture: ComponentFixture<EquipmentLeasingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentLeasingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentLeasingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
