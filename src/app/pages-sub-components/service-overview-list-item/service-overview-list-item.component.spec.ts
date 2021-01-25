import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceOverviewListItemComponent } from './service-overview-list-item.component';

describe('ServiceOverviewListItemComponent', () => {
  let component: ServiceOverviewListItemComponent;
  let fixture: ComponentFixture<ServiceOverviewListItemComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceOverviewListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceOverviewListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
