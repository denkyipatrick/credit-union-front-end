import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-and-content-item',
  templateUrl: './icon-and-content-item.component.html',
  styleUrls: ['./icon-and-content-item.component.scss']
})
export class IconAndContentItemComponent implements OnInit {
  @Input() title: String;
  @Input() ctaUrl: String;
  @Input() ctaText: String;
  @Input() hasCTA: boolean;
  @Input() description: String;
  @Input() iconImageUrl: String;

  constructor() {
    this.hasCTA = false;
    this.ctaUrl = "/personal/banking";
    this.ctaText = "Open Account";
  }

  ngOnInit(): void {
  }

}
