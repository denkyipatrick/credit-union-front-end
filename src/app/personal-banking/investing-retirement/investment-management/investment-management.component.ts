import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-investment-management',
  templateUrl: './investment-management.component.html',
  styleUrls: ['./investment-management.component.scss']
})
export class InvestmentManagementComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Investment Management | Investment Strategies | ${this.utilityService.bankName}`);
  }

}
