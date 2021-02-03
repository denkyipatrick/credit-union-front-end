import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-and-white-rect-row',
  templateUrl: './image-and-white-rect-row.component.html',
  styleUrls: ['./image-and-white-rect-row.component.scss']
})
export class ImageAndWhiteRectRowComponent implements OnInit {
  @Input() title: String;
  @Input() linkUrl: String;
  @Input() imageUrl: String;
  @Input() description: String;
  @Input() isFlipped: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
