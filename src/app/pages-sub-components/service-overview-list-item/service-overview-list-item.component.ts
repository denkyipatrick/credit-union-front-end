import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-overview-list-item',
  templateUrl: './service-overview-list-item.component.html',
  styleUrls: ['./service-overview-list-item.component.scss']
})
export class ServiceOverviewListItemComponent implements OnInit {
  @Input() targetUrl: String;
  @Input() title: String;
  @Input() isFlipped: boolean;
  @Input() description: string;
  @Input() featuredPhotoUrl: String;

  constructor() {
    this.isFlipped = false;
    this.title = "Item Title";
    this.targetUrl = "/";
    this.featuredPhotoUrl = "../../lslsllsls"
    this.description = "Item description";
  }

  ngOnInit(): void {
  }

}
