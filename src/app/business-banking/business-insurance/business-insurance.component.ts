import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-insurance',
  templateUrl: './business-insurance.component.html',
  styleUrls: ['./business-insurance.component.scss']
})
export class BusinessInsuranceComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/business/business-insurance"
  }

  ngOnInit(): void {
  }

}
