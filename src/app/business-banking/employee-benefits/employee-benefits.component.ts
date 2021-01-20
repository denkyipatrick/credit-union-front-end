import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-benefits',
  templateUrl: './employee-benefits.component.html',
  styleUrls: ['./employee-benefits.component.scss']
})
export class EmployeeBenefitsComponent implements OnInit {
  baseUrl: String;

  constructor() {
    this.baseUrl = "/business/employee-benefits";
  }

  ngOnInit(): void {
  }

}
