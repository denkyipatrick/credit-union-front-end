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

  constructor(private title: Title, public utilityService: UtilityService) {
    this.appName = utilityService.applicationName
    this.bankName = utilityService.shortBankName
  }

  ngOnInit(): void {
    // this.title.setTitle("Personal Banking, Checking, Loans & Credit Cards | BSV");
  }

}
