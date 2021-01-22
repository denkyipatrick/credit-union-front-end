import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-and-equity-loans',
  templateUrl: './home-and-equity-loans.component.html',
  styleUrls: ['./home-and-equity-loans.component.scss']
})
export class HomeAndEquityLoansComponent implements OnInit {

  constructor(private titleService: Title, private utilityService: UtilityService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Home Equity Loans & Lines of Credit | ${this.utilityService.bankName}`)
  }
}
