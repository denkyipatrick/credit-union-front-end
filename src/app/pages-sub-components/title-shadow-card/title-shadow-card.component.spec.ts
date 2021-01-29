import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleShadowCardComponent } from './title-shadow-card.component';

describe('TitleShadowCardComponent', () => {
  let component: TitleShadowCardComponent;
  let fixture: ComponentFixture<TitleShadowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleShadowCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleShadowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
