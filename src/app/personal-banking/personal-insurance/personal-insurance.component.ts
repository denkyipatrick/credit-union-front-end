import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-insurance',
  templateUrl: './personal-insurance.component.html',
  styleUrls: ['./personal-insurance.component.scss']
})
export class PersonalInsuranceComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/personal/personal-insurance";
  }

  ngOnInit(): void {
  }

}
