import { UtilityService } from './../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.scss']
})
export class SavingsComponent implements OnInit {
  appName: String
  shortBankName: String;
  bankPhoneNumber: String

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.appName = this.utilityService.applicationName;
    this.shortBankName = this.utilityService.shortBankName;
    this.bankPhoneNumber = this.utilityService.bankPhoneNumber;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Savings and Money Market Accounts | ${this.utilityService.bankName}`);
  }

}
