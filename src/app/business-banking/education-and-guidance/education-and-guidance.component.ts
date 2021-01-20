import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education-and-guidance',
  templateUrl: './education-and-guidance.component.html',
  styleUrls: ['./education-and-guidance.component.scss']
})
export class EducationAndGuidanceComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/business/education-guidance";
  }

  ngOnInit(): void {
  }

}
