import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-financing',
  templateUrl: './business-financing.component.html',
  styleUrls: ['./business-financing.component.scss']
})
export class BusinessFinancingComponent implements OnInit {
  baseUrl: String;
  constructor() {
    this.baseUrl = "/business/business-financing"
  }

  ngOnInit(): void {
  }

}
