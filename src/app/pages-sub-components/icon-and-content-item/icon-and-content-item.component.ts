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

    this.title = "Some title here";
    this.description = `
      Lorem ipsum dolor sit amet, consectetur 
      adipisicing elit. Illum omnis culpa, 
      distinctio illo quos, quas eius non minus a 
      dolorum hic quam doloremque. Aliquam veritatis 
      eligendi maxime quam, officia a?`;
    
    // this.iconImageUrl = "../../../assets/images/personal/banking/icon-checking-accounts-50x50.webp";
  }

  ngOnInit(): void {
  }

}
