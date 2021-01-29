import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-and-dark-rect-content-row',
  templateUrl: './image-and-dark-rect-content-row.component.html',
  styleUrls: ['./image-and-dark-rect-content-row.component.scss']
})
export class ImageAndDarkRectContentRowComponent implements OnInit {
  @Input() imageUrl: String;
  @Input() title: String;
  @Input() linkUrl: String;
  @Input() hasLink: boolean;
  @Input() isFlipped: boolean;
  @Input() description: String;
  @Input() singleListItems: String[];
  @Input() items: any[];
  @Input() paragraphs: String;

  constructor() { }

  ngOnInit(): void {
    // this.items = [
    //   {item: "Bring at least one", subItems: [
    //     'Driver',
    //     'liscence',
    //     'government',
    //     'stude'
    //   ]},
    //   {item: "Bring at least one", subItems: [
    //     'Driver',
    //     'liscence',
    //     'government',
    //     'stude'
    //   ]},
    //   {item: "Bring at least one", subItems: [
    //     'Driver',
    //     'liscence',
    //     'government',
    //     'stude'
    //   ]}
    // ]
  }

}
