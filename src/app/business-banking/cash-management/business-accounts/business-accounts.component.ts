import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-business-accounts',
  templateUrl: './business-accounts.component.html',
  styleUrls: ['./business-accounts.component.scss']
})
export class BusinessAccountsComponent implements OnInit {
  shortBankName: String;

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.shortBankName = this.utilityService.shortBankName;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Business Accounts | Business Checking | ` + 
    `Savings, Money Markets, Cds, Sweeps | ${this.utilityService.bankName}`);
  }
}
