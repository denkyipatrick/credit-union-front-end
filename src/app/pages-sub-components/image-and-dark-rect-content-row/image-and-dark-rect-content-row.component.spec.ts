import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndDarkRectContentRowComponent } from './image-and-dark-rect-content-row.component';

describe('ImageAndDarkRectContentRowComponent', () => {
  let component: ImageAndDarkRectContentRowComponent;
  let fixture: ComponentFixture<ImageAndDarkRectContentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAndDarkRectContentRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAndDarkRectContentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
