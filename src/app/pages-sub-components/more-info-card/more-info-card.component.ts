import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-more-info-card',
  templateUrl: './more-info-card.component.html',
  styleUrls: ['./more-info-card.component.scss']
})
export class MoreInfoCardComponent implements OnInit {
  @Input() title: String;
  @Input() linkUrl: String;
  @Input() imageUrl: String;
  @Input() description: String;

  constructor() {
    this.title = "Some Niche Title";
    this.linkUrl = "/personal/banking/checking"
    this.description = "Some nice lorem Ipsum description...";
  }

  ngOnInit(): void {
  }

}
