import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-and-content-shadow-card',
  templateUrl: './icon-and-content-shadow-card.component.html',
  styleUrls: ['./icon-and-content-shadow-card.component.scss']
})
export class IconAndContentShadowCardComponent implements OnInit {
  @Input() title: String;
  @Input() description: String;
  @Input() iconImageUrl: String;

  constructor() {
    this.title = "Title of This Card Is a Little"
    this.description = `Lorem, ipsum dolor sit amet 
    consectetur adipisicing elit. 
    Mollitia porro architecto fugiat 
    dicta ex sapiente in iste 
    accusantium labore reiciendis 
    molestias error, ea blanditiis 
    eos nulla dolore enim, nihil id!`
  }

  ngOnInit(): void {
  }

}
