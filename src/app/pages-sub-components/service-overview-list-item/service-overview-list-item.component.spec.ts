import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceOverviewListItemComponent } from './service-overview-list-item.component';

describe('ServiceOverviewListItemComponent', () => {
  let component: ServiceOverviewListItemComponent;
  let fixture: ComponentFixture<ServiceOverviewListItemComponent>;

  beforeEach(async(() => {
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
