import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AboveFoldPictureComponent } from './above-fold-picture.component';

describe('AboveFoldPictureComponent', () => {
  let component: AboveFoldPictureComponent;
  let fixture: ComponentFixture<AboveFoldPictureComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AboveFoldPictureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboveFoldPictureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
