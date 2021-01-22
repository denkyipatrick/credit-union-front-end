import { UtilityService } from './../../../services/utility.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-invest-your-way',
  templateUrl: './invest-your-way.component.html',
  styleUrls: ['./invest-your-way.component.scss']
})
export class InvestYourWayComponent implements OnInit {
  shortBankName: String;

  constructor(private titleService: Title, private utilityService: UtilityService) {
    this.shortBankName = this.utilityService.shortBankName;
  }

  ngOnInit(): void {
    this.titleService.setTitle(`Invest Your Way | Annuities, Roth and ` + 
    `Traditional IRAs | ${this.utilityService.bankName}`);
  }
}
