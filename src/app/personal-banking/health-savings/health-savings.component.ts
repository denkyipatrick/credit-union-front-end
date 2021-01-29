import { UtilityService } from './../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-health-savings',
  templateUrl: './health-savings.component.html',
  styleUrls: ['./health-savings.component.scss']
})
export class HealthSavingsComponent implements OnInit {
  appName: String
  shortBankName: String;
  bankPhoneNumber: String

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.appName = this.utilityService.applicationName;
    this.shortBankName = this.utilityService.shortBankName;
    this.bankPhoneNumber = this.utilityService.bankPhoneNumber;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Health Savings Accounts (HSA) | ${this.utilityService.bankName}`);
  }

}
