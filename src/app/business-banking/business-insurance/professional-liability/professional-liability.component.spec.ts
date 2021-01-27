import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalLiabilityComponent } from './professional-liability.component';

describe('ProfessionalLiabilityComponent', () => {
  let component: ProfessionalLiabilityComponent;
  let fixture: ComponentFixture<ProfessionalLiabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalLiabilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalLiabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
