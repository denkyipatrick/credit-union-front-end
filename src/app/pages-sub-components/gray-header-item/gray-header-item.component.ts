import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gray-header-item',
  templateUrl: './gray-header-item.component.html',
  styleUrls: ['./gray-header-item.component.scss']
})
export class GrayHeaderItemComponent implements OnInit {
  @Input() title: String;
  @Input() simpleParagraph: String;
  @Input() simpleListItems: String[];

  constructor() { }

  ngOnInit(): void {
  }

}
