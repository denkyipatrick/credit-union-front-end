import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-advisor-row',
  templateUrl: './find-advisor-row.component.html',
  styleUrls: ['./find-advisor-row.component.scss']
})
export class FindAdvisorRowComponent implements OnInit {
  @Input() advisorName: String;
  @Input() advisorPhotoUrl: String;

  constructor() { }

  ngOnInit(): void {
  }

}
