import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() heroTitle: String;
  @Input() heroImageUrl: String;
  @Input() heroDescription: String;

  selectedPrimaryNav: String;
  backgroundImagePropertyValue: String

  constructor(private activatedRoute: ActivatedRoute) {
    this.heroTitle = "Title of this Page";
    this.heroDescription = `Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. 
    Laboriosam non sapiente itaque sint, 
    omnis impedit quod sed similique 
    dolor reiciendis magni suscipit 
    expedita voluptas illo, a debitis 
    cum? Aut, dolorum.`;
  }

  ngOnInit(): void {
    this.backgroundImagePropertyValue = `url(${this.heroImageUrl})`
    this.activatedRoute.url.subscribe(urlSegments => {
      this.selectedPrimaryNav = urlSegments[0].path;
    })
  }

}
