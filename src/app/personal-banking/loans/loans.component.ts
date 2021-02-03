import { UtilityService } from './../../services/utility.service';
import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {
  baseUrl: String;

  constructor(private title: Title, private utilityService: UtilityService) {
    this.baseUrl = "/personal/home-personal-loans"
  }

  ngOnInit(): void {
    this.title.setTitle(`Home and Personal Loans | Home Loans, ` + 
    `Home Equity Loans, Lines of Credit | ${this.utilityService.bankName}`);
  }

}
