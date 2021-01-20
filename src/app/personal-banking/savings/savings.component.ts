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
  bankPhoneNumber: String

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.appName = this.utilityService.applicationName;
    this.bankPhoneNumber = utilityService.bankPhoneNumber;
  }

  ngOnInit(): void {
    this.titleService.setTitle("Savings and Money Market");
  }

}
