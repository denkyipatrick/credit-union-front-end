import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-employee-benefits',
  templateUrl: './employee-benefits.component.html',
  styleUrls: ['./employee-benefits.component.scss']
})
export class EmployeeBenefitsComponent implements OnInit {
  baseUrl: String;
  
  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.baseUrl = "/business/employee-benefits";
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Employee Benefits | Retirement Plans, ` + 
    `Consulting | ${this.utilityService.bankName}`)
  }

}
