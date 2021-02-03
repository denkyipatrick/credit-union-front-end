import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-strategic-employee-benefits',
  templateUrl: './strategic-employee-benefits.component.html',
  styleUrls: ['./strategic-employee-benefits.component.scss']
})
export class StrategicEmployeeBenefitsComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) { }

  ngOnInit(): void {
    this.titleService.setTitle(
      `Strategic Employee Benefits Consulting for Business | ${this.utilityService.bankName}`
    );
  }

}
