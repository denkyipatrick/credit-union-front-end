import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-and-content-row',
  templateUrl: './image-and-content-row.component.html',
  styleUrls: ['./image-and-content-row.component.scss']
})
export class ImageAndContentRowComponent implements OnInit {
  @Input() title: String;
  @Input() imageUrl: String;
  @Input() items: String[];
  @Input() isFlipped: boolean;
  @Input() paragraphs: String; 
  @Input() subtitle: String;
  @Input() subListItems: String[];
  @Input() paragraphsText: String; // i will write multiple paragraphs into this variable

  constructor() {
  }

  ngOnInit(): void {
  }

}
