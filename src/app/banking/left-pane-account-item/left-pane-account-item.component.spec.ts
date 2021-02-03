import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftPaneAccountItemComponent } from './left-pane-account-item.component';

describe('LeftPaneAccountItemComponent', () => {
  let component: LeftPaneAccountItemComponent;
  let fixture: ComponentFixture<LeftPaneAccountItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftPaneAccountItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftPaneAccountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
