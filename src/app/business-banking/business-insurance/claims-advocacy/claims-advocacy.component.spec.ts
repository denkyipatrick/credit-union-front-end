import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimsAdvocacyComponent } from './claims-advocacy.component';

describe('ClaimsAdvocacyComponent', () => {
  let component: ClaimsAdvocacyComponent;
  let fixture: ComponentFixture<ClaimsAdvocacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClaimsAdvocacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimsAdvocacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
