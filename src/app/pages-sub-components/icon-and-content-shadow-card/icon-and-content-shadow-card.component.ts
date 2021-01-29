import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-and-content-shadow-card',
  templateUrl: './icon-and-content-shadow-card.component.html',
  styleUrls: ['./icon-and-content-shadow-card.component.scss']
})
export class IconAndContentShadowCardComponent implements OnInit {
  @Input() title: String;
  @Input() imageUrl: String;
  @Input() description: String;
  @Input() iconImageUrl: String;

  constructor() {
  }

  ngOnInit(): void {
  }

}
