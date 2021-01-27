import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommercialRealEstateComponent } from './commercial-real-estate.component';

describe('CommercialRealEstateComponent', () => {
  let component: CommercialRealEstateComponent;
  let fixture: ComponentFixture<CommercialRealEstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommercialRealEstateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialRealEstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
