import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAndContentRowComponent } from './image-and-content-row.component';

describe('ImageAndContentRowComponent', () => {
  let component: ImageAndContentRowComponent;
  let fixture: ComponentFixture<ImageAndContentRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageAndContentRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageAndContentRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
