import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntaryWorksiteBenefitsComponent } from './voluntary-worksite-benefits.component';

describe('VoluntaryWorksiteBenefitsComponent', () => {
  let component: VoluntaryWorksiteBenefitsComponent;
  let fixture: ComponentFixture<VoluntaryWorksiteBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoluntaryWorksiteBenefitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntaryWorksiteBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
