import { Title } from '@angular/platform-browser';
import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-loans',
  templateUrl: './home-loans.component.html',
  styleUrls: ['./home-loans.component.scss']
})
export class HomeLoansComponent implements OnInit {
  shortBankName: String;

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.shortBankName = this.utilityService.shortBankName;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Home Loans | Fixed Rate, ARM, Jumbo, Construction, ` + 
    `Lot Loans | ${this.utilityService.bankName}`)
  }

}
