import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-heading-description-column',
  templateUrl: './icon-heading-description-column.component.html',
  styleUrls: ['./icon-heading-description-column.component.scss']
})
export class IconHeadingDescriptionColumnComponent implements OnInit {
  @Input() iconUrl: String;
  @Input() hasCTAButton: boolean;

  @Input() heading: String;
  @Input() description: String;

  constructor() { }

  ngOnInit(): void {
  }

}
