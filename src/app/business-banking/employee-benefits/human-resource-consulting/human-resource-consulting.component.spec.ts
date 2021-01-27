import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanResourceConsultingComponent } from './human-resource-consulting.component';

describe('HumanResourceConsultingComponent', () => {
  let component: HumanResourceConsultingComponent;
  let fixture: ComponentFixture<HumanResourceConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumanResourceConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanResourceConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
