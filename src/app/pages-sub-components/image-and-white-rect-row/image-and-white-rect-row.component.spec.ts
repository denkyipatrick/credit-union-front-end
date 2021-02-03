import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndWhiteRectRowComponent } from './image-and-white-rect-row.component';

describe('ImageAndWhiteRectRowComponent', () => {
  let component: ImageAndWhiteRectRowComponent;
  let fixture: ComponentFixture<ImageAndWhiteRectRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAndWhiteRectRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAndWhiteRectRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
