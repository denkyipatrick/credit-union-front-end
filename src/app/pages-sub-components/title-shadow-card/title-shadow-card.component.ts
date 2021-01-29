import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-title-shadow-card',
  templateUrl: './title-shadow-card.component.html',
  styleUrls: ['./title-shadow-card.component.scss']
})
export class TitleShadowCardComponent implements OnInit {
  @Input() title: String;
  @Input() description: String;

  constructor() { }

  ngOnInit(): void {
  }

}
