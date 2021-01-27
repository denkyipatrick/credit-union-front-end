import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAndCondoComponent } from './home-and-condo.component';

describe('HomeAndCondoComponent', () => {
  let component: HomeAndCondoComponent;
  let fixture: ComponentFixture<HomeAndCondoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAndCondoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAndCondoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
