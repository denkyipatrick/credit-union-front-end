import { UtilityService } from './../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-banking',
  templateUrl: './personal-banking.component.html',
  styleUrls: ['./personal-banking.component.scss']
})
export class PersonalBankingComponent implements OnInit {
  appName: String
  bankName: String
  baseUrl: String;

  constructor(private title: Title, public utilityService: UtilityService) {
    this.appName = utilityService.applicationName;
    this.bankName = utilityService.shortBankName;
    this.baseUrl = "/personal";
  }

  ngOnInit(): void {
    this.title.setTitle(`Personal, Banking | Home and Personal Loans ` + 
    `Investing Retirement Plans | Personal Insurance | ${this.utilityService.shortBankName}`);
  }

}
