import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-above-fold-picture',
  templateUrl: './above-fold-picture.component.html',
  styleUrls: ['./above-fold-picture.component.scss']
})
export class AboveFoldPictureComponent implements OnInit {
  @Input() imageSource: string;

  constructor() { }

  ngOnInit(): void {
  }

}
