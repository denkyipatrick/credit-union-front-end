import { UtilityService } from './../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checking',
  templateUrl: './checking.component.html',
  styleUrls: ['./checking.component.scss']
})
export class CheckingComponent implements OnInit {
  bankName: String

  constructor(private title: Title, private utilityService:UtilityService) {
    this.bankName = utilityService.shortBankName;
  }

  ngOnInit(): void {
    this.title.setTitle("Personal Checking Accounts, eChecking & Student Accounts");
  }

}
