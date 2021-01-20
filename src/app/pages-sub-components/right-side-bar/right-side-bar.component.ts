import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-side-bar',
  templateUrl: './right-side-bar.component.html',
  styleUrls: ['./right-side-bar.component.scss']
})
export class RightSideBarComponent implements OnInit {
  @Input() src: string;

  constructor() { }

  ngOnInit(): void {
  }

}
